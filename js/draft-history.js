function initializeDraftHistory() {
    const container = document.getElementById('draft-year-list');
    const status = document.getElementById('draft-history-status');
    const yearFilter = document.getElementById('draft-year-filter');
    const teamFilter = document.getElementById('draft-team-filter');
    const searchInput = document.getElementById('draft-search');
    const retryButton = document.getElementById('draft-retry');
    if (!container || !status || !yearFilter || !teamFilter || !searchInput || !retryButton) return;
    if (container.dataset.initialized === 'true') return;
    container.dataset.initialized = 'true';

    const articleUrl = 'https://zh.wikipedia.org/zh-tw/中華職棒選秀會';
    const noDraftYears = new Set([1997, 1998, 1999]);
    const apiUrl = new URL('https://zh.wikipedia.org/w/api.php');
    const query = new URLSearchParams({
        action: 'parse',
        page: '中華職棒選秀會',
        prop: 'text',
        format: 'json',
        origin: '*'
    });
    apiUrl.search = query.toString();
    let draftEvents = [];

    const normalizedText = element => (element?.textContent || '').replace(/\s+/g, ' ').trim();
    const headingText = element => normalizedText(element.querySelector('.mw-headline') || element);
    const parseDraftTables = html => {
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const content = parsed.querySelector('.mw-parser-output') || parsed.body;
        const blocks = [];
        const annualYears = new Set();
        let activeYear = null;
        let activeLabel = '選秀名單';
        const nodes = content.querySelectorAll('h2, h3, h4, table.wikitable');

        nodes.forEach(node => {
            if (/^H[234]$/.test(node.tagName)) {
                const label = headingText(node);
                const yearMatch = label.match(/(19|20)\d{2}/);
                if (node.tagName === 'H2') {
                    activeYear = yearMatch ? Number(yearMatch[0]) : null;
                    if (activeYear) annualYears.add(activeYear);
                } else if (yearMatch) {
                    activeYear = Number(yearMatch[0]);
                }
                if (node.tagName === 'H2') activeLabel = '選秀名單';
                else activeLabel = label
                    .replace(/（[^）]*\d{4}[^）]*）/g, '')
                    .replace(/\([^)]*\d{4}[^)]*\)/g, '')
                    .trim() || '選秀名單';
                return;
            }

            if (!activeYear) return;
            const rows = [...node.rows];
            const headerRowIndex = rows.findIndex(row => {
                const firstCell = normalizedText(row.cells[0]);
                return row.cells.length > 2 && /球隊|球队|隊伍|队伍/.test(firstCell);
            });
            if (headerRowIndex < 0) return;

            const headerCells = [...rows[headerRowIndex].cells];
            const teams = headerCells.slice(1).map(normalizedText);
            if (!teams.length || teams.some(name => !name)) return;
            const picksByTeam = teams.map(name => ({ name, picks: [] }));
            rows.slice(headerRowIndex + 1).forEach(row => {
                const cells = [...row.cells];
                if (cells.length < teams.length + 1) return;
                const round = normalizedText(cells[0]);
                if (!round || /^(備註|注|落選名單)/.test(round)) return;
                teams.forEach((team, index) => {
                    const player = normalizedText(cells[index + 1]);
                    if (player && !/^(放棄|無權|[ＸXx]|[－—-])$/.test(player)) {
                        picksByTeam[index].picks.push({ round, player });
                    }
                });
            });
            if (!picksByTeam.some(team => team.picks.length)) return;
            blocks.push({ year: activeYear, label: activeLabel, teams: picksByTeam, sourceUrl: articleUrl });
        });
        annualYears.forEach(year => {
            if (!blocks.some(block => block.year === year)) {
                if (noDraftYears.has(year)) {
                    blocks.push({
                        year,
                        label: '該年度未舉辦選秀會',
                        teams: [],
                        sourceUrl: articleUrl,
                        historicalSourceUrl: 'https://www.sportsv.net/articles/2551',
                        noDraft: true
                    });
                } else {
                    blocks.push({ year, label: '來源未提供年度名單', teams: [], sourceUrl: articleUrl, missing: true });
                }
            }
        });
        return blocks;
    };

    const makeOption = (value, label) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        return option;
    };
    const createTeamCard = (team, searchTerm) => {
        const card = document.createElement('article');
        card.className = 'draft-team-card';
        const heading = document.createElement('h5');
        heading.textContent = team.name;
        card.appendChild(heading);
        const list = document.createElement('ul');
        team.picks.filter(pick => !searchTerm || pick.player.toLocaleLowerCase().includes(searchTerm)).forEach(pick => {
            const item = document.createElement('li');
            const round = document.createElement('span');
            round.className = 'draft-pick-round';
            round.textContent = pick.round;
            const player = document.createElement('span');
            player.className = 'draft-pick-player';
            player.textContent = pick.player;
            item.append(round, player);
            list.appendChild(item);
        });
        card.appendChild(list);
        return card;
    };
    const render = () => {
        const selectedYear = yearFilter.value;
        const selectedTeam = teamFilter.value;
        const searchTerm = searchInput.value.trim().toLocaleLowerCase();
        const filteredEvents = draftEvents.map(event => ({
            ...event,
            teams: event.teams
                .filter(team => selectedTeam === 'all' || team.name === selectedTeam)
                .map(team => ({
                    ...team,
                    picks: team.picks.filter(pick => !searchTerm || pick.player.toLocaleLowerCase().includes(searchTerm))
                }))
                .filter(team => team.picks.length)
        })).filter(event => (selectedYear === 'all' || String(event.year) === selectedYear)
            && (event.missing || event.noDraft
                ? selectedTeam === 'all' && !searchTerm
                : event.teams.length));

        container.replaceChildren();
        if (!filteredEvents.length) {
            const empty = document.createElement('p');
            empty.className = 'draft-empty-state';
            empty.textContent = '找不到符合條件的選秀名單。';
            container.appendChild(empty);
            status.textContent = `來源整理出 ${draftEvents.filter(event => !event.missing && !event.noDraft).length} 場選秀；目前沒有符合的紀錄。`;
            return;
        }

        const byYear = new Map();
        filteredEvents.forEach(event => {
            if (!byYear.has(event.year)) byYear.set(event.year, []);
            byYear.get(event.year).push(event);
        });
        [...byYear.entries()].sort((a, b) => b[0] - a[0]).forEach(([year, events]) => {
            const yearDetails = document.createElement('details');
            yearDetails.className = 'draft-year-card';
            if (selectedYear !== 'all' || searchTerm || selectedTeam !== 'all') yearDetails.open = true;
            const summary = document.createElement('summary');
            const selectionCount = events.filter(event => !event.missing && !event.noDraft).length;
            const hasNoDraft = events.some(event => event.noDraft);
            const hasMissing = events.some(event => event.missing);
            summary.textContent = `${year} 年｜${selectionCount} 場選秀${hasNoDraft ? '・該年未舉辦選秀會' : ''}${hasMissing ? '・來源未提供年度名單' : ''}`;
            yearDetails.appendChild(summary);
            events.forEach(event => {
                const eventSection = document.createElement('section');
                eventSection.className = 'draft-event';
                const eventHeading = document.createElement('h4');
                eventHeading.textContent = event.label;
                let teamGrid;
                if (event.noDraft) {
                    teamGrid = document.createElement('p');
                    teamGrid.className = 'draft-no-list-state';
                    teamGrid.textContent = '該年度未舉辦選秀會；球隊透過測試或特考等方式補充球員。';
                } else if (event.missing) {
                    teamGrid = document.createElement('p');
                    teamGrid.className = 'draft-no-list-state';
                    teamGrid.textContent = '來源條目有此年度標題，但未提供選秀表。';
                } else {
                    teamGrid = document.createElement('div');
                    teamGrid.className = 'draft-team-grid';
                    event.teams.forEach(team => teamGrid.appendChild(createTeamCard(team, searchTerm)));
                }
                const source = document.createElement('a');
                source.className = 'draft-event-source';
                source.href = event.sourceUrl;
                source.target = '_blank';
                source.rel = 'noopener noreferrer';
                source.textContent = event.noDraft || event.missing ? '查看維基條目 ↗' : '查看原始選秀表 ↗';
                eventSection.append(eventHeading, teamGrid, source);
                if (event.noDraft) {
                    const historicalSource = document.createElement('a');
                    historicalSource.className = 'draft-event-source';
                    historicalSource.href = event.historicalSourceUrl;
                    historicalSource.target = '_blank';
                    historicalSource.rel = 'noopener noreferrer';
                    historicalSource.textContent = '參考：中職選秀史 ↗';
                    eventSection.appendChild(historicalSource);
                }
                yearDetails.appendChild(eventSection);
            });
            container.appendChild(yearDetails);
        });
        const listedEvents = draftEvents.filter(event => !event.missing && !event.noDraft);
        const pickCount = listedEvents.reduce((total, event) => total + event.teams.reduce((teamTotal, team) => teamTotal + team.picks.length, 0), 0);
        const missingYearCount = draftEvents.filter(event => event.missing).length;
        const noDraftYearCount = draftEvents.filter(event => event.noDraft).length;
        status.textContent = `已整理 ${[...new Set(draftEvents.map(event => event.year))].length} 個年度、${listedEvents.length} 場選秀與 ${pickCount} 筆各輪紀錄${noDraftYearCount ? `；${noDraftYearCount} 年未舉辦選秀會` : ''}${missingYearCount ? `；另有 ${missingYearCount} 個年度的來源條目未提供名單` : ''}。`;
    };
    const populateFilters = () => {
        const years = [...new Set(draftEvents.map(event => event.year))].sort((a, b) => b - a);
        const teams = [...new Set(draftEvents.flatMap(event => event.teams.map(team => team.name)))].sort((a, b) => a.localeCompare(b, 'zh-Hant'));
        yearFilter.replaceChildren(makeOption('all', '所有年度'), ...years.map(year => makeOption(String(year), `${year} 年`)));
        teamFilter.replaceChildren(makeOption('all', '所有球隊'), ...teams.map(team => makeOption(team, team)));
    };
    const load = async () => {
        status.textContent = '正在載入歷年選秀名單……';
        retryButton.hidden = true;
        try {
            const response = await fetch(apiUrl, { headers: { Accept: 'application/json' } });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const payload = await response.json();
            const html = payload?.parse?.text?.['*'];
            if (!html) throw new Error('選秀資料格式不完整');
            draftEvents = parseDraftTables(html);
            if (!draftEvents.length) throw new Error('找不到選秀表格');
            populateFilters();
            render();
        } catch (error) {
            console.error('載入歷年選秀資料失敗：', error);
            status.textContent = '目前無法連線載入選秀資料，請稍後重試，或直接查看資料來源。';
            retryButton.hidden = false;
        }
    };

    yearFilter.addEventListener('change', render);
    teamFilter.addEventListener('change', render);
    searchInput.addEventListener('input', render);
    retryButton.addEventListener('click', load);
    load();
}
