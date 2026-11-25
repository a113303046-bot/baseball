function initializeAttendanceHistory() {
    const summary = document.getElementById('attendance-summary');
    const metric = document.getElementById('attendance-metric');
    const chart = document.getElementById('attendance-chart');
    const lineChart = document.getElementById('attendance-line-chart');
    const tableBody = document.getElementById('attendance-table-body');
    const notes = document.getElementById('attendance-notes');
    if (!summary || !metric || !chart || !lineChart || !tableBody || !notes || metric.dataset.initialized) return;

    const numberFormat = new Intl.NumberFormat('zh-TW');
    const formatNumber = value => numberFormat.format(value);
    const isMobileLayout = () => window.matchMedia('(max-width: 760px)').matches;
    const latest = cpblAttendanceHistory.at(-1);
    const highestAverage = cpblAttendanceHistory.reduce((best, record) => record.average > best.average ? record : best);
    const totalAttendance = cpblAttendanceHistory.reduce((total, record) => total + record.attendance, 0);
    const totalGames = cpblAttendanceHistory.reduce((total, record) => total + record.games, 0);
    const cumulativeAverage = Math.round(totalAttendance / totalGames);

    const renderSummary = () => {
        const cards = [
            { kicker: `${latest.year} SEASON`, value: formatNumber(latest.attendance), label: '總觀眾人次' },
            { kicker: 'SEASON RECORD', value: formatNumber(highestAverage.average), label: `最高平均單場｜${highestAverage.year} 年` },
            { kicker: `${cpblAttendanceHistory[0].year}–${latest.year}`, value: formatNumber(totalAttendance), label: `累計進場人次｜平均 ${formatNumber(cumulativeAverage)} 人/場` }
        ];
        summary.replaceChildren(...cards.map(cardData => {
            const card = document.createElement('article');
            card.className = 'attendance-stat-card';
            const kicker = document.createElement('p');
            kicker.className = 'section-kicker';
            kicker.textContent = cardData.kicker;
            const value = document.createElement('strong');
            value.textContent = cardData.value;
            const label = document.createElement('span');
            label.textContent = cardData.label;
            card.append(kicker, value, label);
            return card;
        }));
    };

    const renderMobileBarChart = (useAttendance, metricLabel, valueFor, axisMax, tickStep) => {
        const width = 420;
        const rowTop = 66;
        const rowHeight = 28;
        const height = rowTop + cpblAttendanceHistory.length * rowHeight + 18;
        const left = 64;
        const right = 14;
        const plotWidth = width - left - right;
        const makeSvgElement = (tag, attributes = {}, textContent = '') => {
            const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
            if (textContent) node.textContent = textContent;
            return node;
        };
        const compactNumber = value => {
            if (value >= 1000000) return `${Number((value / 1000000).toFixed(1))}M`;
            if (value >= 1000) return `${Number((value / 1000).toFixed(value % 1000 === 0 ? 0 : 1))}k`;
            return String(value);
        };
        chart.classList.add('is-mobile-oriented');
        chart.setAttribute('viewBox', `0 0 ${width} ${height}`);
        chart.replaceChildren(
            makeSvgElement('title', { id: 'attendance-chart-svg-title' }, `${metricLabel}年度趨勢｜手機直向圖表`),
            makeSvgElement('desc', { id: 'attendance-chart-svg-desc' }, `${cpblAttendanceHistory[0].year} 至 ${latest.year} 年中華職棒${metricLabel}橫條圖，年度由上至下排列。`)
        );

        const grid = makeSvgElement('g', { class: 'attendance-chart-grid', 'aria-hidden': 'true' });
        for (let tick = 0; tick <= 4; tick++) {
            const value = tick * tickStep;
            const x = left + (value / axisMax) * plotWidth;
            grid.append(
                makeSvgElement('line', { x1: x, y1: rowTop - 8, x2: x, y2: height - 12 }),
                makeSvgElement('text', { x, y: rowTop - 20, 'text-anchor': 'middle' }, compactNumber(value))
            );
        }
        chart.appendChild(grid);

        const bars = makeSvgElement('g', { class: `attendance-chart-bars is-mobile-bars${useAttendance ? ' is-total' : ''}` });
        const tooltipWidth = 176;
        const tooltipHeight = 26;
        const tooltipRect = makeSvgElement('rect', { rx: 4, width: tooltipWidth, height: tooltipHeight });
        const tooltipText = makeSvgElement('text', { 'text-anchor': 'middle' });
        const tooltipLayer = makeSvgElement('g', { class: 'attendance-chart-tooltip-layer', 'aria-hidden': 'true', visibility: 'hidden' });
        tooltipLayer.append(tooltipRect, tooltipText);
        cpblAttendanceHistory.forEach((record, index) => {
            const value = valueFor(record);
            const centerY = rowTop + index * rowHeight + rowHeight / 2;
            const barWidth = Math.max(2, (value / axisMax) * plotWidth);
            const row = makeSvgElement('g', { class: 'attendance-chart-bar-item' });
            row.appendChild(makeSvgElement('text', {
                x: left - 9, y: centerY + 3, 'text-anchor': 'end', class: 'attendance-chart-year'
            }, String(record.year)));
            const bar = makeSvgElement('rect', {
                x: left, y: centerY - 6, width: barWidth, height: 12, rx: 2,
                class: 'attendance-chart-bar', tabindex: 0,
                'aria-label': `${record.year} 年，${metricLabel} ${formatNumber(value)}`
            });
            const showTooltip = () => {
                const tooltipX = Math.max(4, Math.min(width - tooltipWidth - 4, left + barWidth - tooltipWidth / 2));
                const tooltipY = Math.max(rowTop - 4, centerY - tooltipHeight - 5);
                tooltipRect.setAttribute('x', String(tooltipX));
                tooltipRect.setAttribute('y', String(tooltipY));
                tooltipText.setAttribute('x', String(tooltipX + tooltipWidth / 2));
                tooltipText.setAttribute('y', String(tooltipY + 17));
                tooltipText.textContent = `${record.year} 年｜${formatNumber(value)} 人`;
                tooltipLayer.setAttribute('visibility', 'visible');
            };
            const hideTooltip = () => tooltipLayer.setAttribute('visibility', 'hidden');
            bar.addEventListener('mouseenter', showTooltip);
            bar.addEventListener('mouseleave', hideTooltip);
            bar.addEventListener('focus', showTooltip);
            bar.addEventListener('blur', hideTooltip);
            row.appendChild(bar);
            bars.appendChild(row);
        });
        chart.append(bars, tooltipLayer);
    };

    const renderChart = () => {
        const useAttendance = metric.value === 'attendance';
        const metricLabel = useAttendance ? '總觀眾人次' : '平均單場觀眾人數';
        const valueFor = record => record[useAttendance ? 'attendance' : 'average'];
        const maxValue = Math.max(...cpblAttendanceHistory.map(valueFor));
        const stepBase = 10 ** Math.floor(Math.log10(maxValue / 4));
        const tickStep = Math.ceil(maxValue / 4 / stepBase) * stepBase;
        const axisMax = tickStep * 4;
        if (isMobileLayout()) {
            renderMobileBarChart(useAttendance, metricLabel, valueFor, axisMax, tickStep);
            return;
        }
        chart.classList.remove('is-mobile-oriented');
        const width = 1160;
        const height = 344;
        const left = 76;
        const right = 18;
        const top = 18;
        const bottom = 52;
        const plotWidth = width - left - right;
        const plotHeight = height - top - bottom;
        const slotWidth = plotWidth / cpblAttendanceHistory.length;
        const barWidth = Math.min(18, slotWidth * .62);
        const compactNumber = value => {
            if (value >= 1000000) return `${Number((value / 1000000).toFixed(1))}M`;
            if (value >= 1000) return `${Number((value / 1000).toFixed(value % 1000 === 0 ? 0 : 1))}k`;
            return String(value);
        };
        const makeSvgElement = (tag, attributes = {}, textContent = '') => {
            const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
            if (textContent) node.textContent = textContent;
            return node;
        };
        const title = makeSvgElement('title', { id: 'attendance-chart-svg-title' }, `${metricLabel}年度趨勢`);
        const description = makeSvgElement('desc', { id: 'attendance-chart-svg-desc' }, `${cpblAttendanceHistory[0].year} 至 ${latest.year} 年中華職棒${metricLabel}長條圖，左側為較早年度，右側為較新年度。`);
        chart.setAttribute('viewBox', `0 0 ${width} ${height}`);
        chart.replaceChildren(title, description);

        const grid = makeSvgElement('g', { class: 'attendance-chart-grid', 'aria-hidden': 'true' });
        for (let tick = 0; tick <= 4; tick++) {
            const value = tick * tickStep;
            const y = top + plotHeight - (value / axisMax) * plotHeight;
            grid.append(
                makeSvgElement('line', { x1: left, y1: y, x2: width - right, y2: y }),
                makeSvgElement('text', { x: left - 10, y: y + 4, 'text-anchor': 'end' }, compactNumber(value))
            );
        }
        chart.appendChild(grid);

        const bars = makeSvgElement('g', { class: `attendance-chart-bars${useAttendance ? ' is-total' : ''}` });
        const tooltipWidth = 176;
        const tooltipHeight = 26;
        const tooltipRect = makeSvgElement('rect', { rx: 4, width: tooltipWidth, height: tooltipHeight });
        const tooltipText = makeSvgElement('text', { 'text-anchor': 'middle' });
        const tooltipLayer = makeSvgElement('g', { class: 'attendance-chart-tooltip-layer', 'aria-hidden': 'true', visibility: 'hidden' });
        tooltipLayer.append(tooltipRect, tooltipText);
        cpblAttendanceHistory.forEach((record, index) => {
            const value = valueFor(record);
            const barHeight = Math.max(2, (value / axisMax) * plotHeight);
            const x = left + index * slotWidth + (slotWidth - barWidth) / 2;
            const y = top + plotHeight - barHeight;
            const barItem = makeSvgElement('g', { class: 'attendance-chart-bar-item' });
            const bar = makeSvgElement('rect', {
                x, y, width: barWidth, height: barHeight, rx: 2,
                class: 'attendance-chart-bar',
                tabindex: 0,
                'aria-label': `${record.year} 年，${metricLabel} ${formatNumber(value)}`
            });
            const showTooltip = () => {
                const tooltipX = Math.max(4, Math.min(width - tooltipWidth - 4, x + barWidth / 2 - tooltipWidth / 2));
                const tooltipY = Math.max(top + 4, y - tooltipHeight - 7);
                tooltipRect.setAttribute('x', String(tooltipX));
                tooltipRect.setAttribute('y', String(tooltipY));
                tooltipText.setAttribute('x', String(tooltipX + tooltipWidth / 2));
                tooltipText.setAttribute('y', String(tooltipY + 17));
                tooltipText.textContent = `${record.year} 年｜${formatNumber(value)} 人`;
                tooltipLayer.setAttribute('visibility', 'visible');
            };
            const hideTooltip = () => tooltipLayer.setAttribute('visibility', 'hidden');
            bar.addEventListener('mouseenter', showTooltip);
            bar.addEventListener('mouseleave', hideTooltip);
            bar.addEventListener('focus', showTooltip);
            bar.addEventListener('blur', hideTooltip);
            barItem.appendChild(bar);
            bars.appendChild(barItem);

            if (index % 5 === 0 || record.year === latest.year) {
                bars.appendChild(makeSvgElement('text', {
                    x: left + index * slotWidth + slotWidth / 2,
                    y: height - 15,
                    'text-anchor': 'middle',
                    class: 'attendance-chart-year'
                }, String(record.year)));
            }
        });
        chart.appendChild(bars);
        chart.appendChild(tooltipLayer);
    };

    const renderMobileLineChart = () => {
        const width = 440;
        const height = 1190;
        const left = 56;
        const plotRight = 250;
        const plotTop = 110;
        const rowHeight = 29;
        const plotWidth = plotRight - left;
        const maxValue = 12000;
        const plotBottom = plotTop + (cpblAttendanceHistory.length - 1) * rowHeight;
        const yearIndex = new Map(cpblAttendanceHistory.map((record, index) => [record.year, index]));
        const events = cpblAttendanceHistoryEvents.map(event => ({
            ...event,
            index: yearIndex.get(event.year),
            direction: cpblAttendanceHistory[yearIndex.get(event.year)].growth >= 0 ? 'up' : 'down'
        }));
        const eventByYear = new Map(events.map(event => [event.year, event]));
        const makeSvgElement = (tag, attributes = {}, textContent = '') => {
            const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
            if (textContent) node.textContent = textContent;
            return node;
        };
        const xFor = value => left + (value / maxValue) * plotWidth;
        const yFor = index => plotTop + index * rowHeight;
        lineChart.classList.add('is-mobile-oriented');
        lineChart.setAttribute('viewBox', `0 0 ${width} ${height}`);
        lineChart.replaceChildren(
            makeSvgElement('title', { id: 'attendance-line-svg-title' }, '中職歷年平均單場觀眾人數折線圖｜手機直向圖表'),
            makeSvgElement('desc', { id: 'attendance-line-svg-desc' }, `${cpblAttendanceHistory[0].year} 至 ${latest.year} 年平均單場觀眾人數折線圖，手機版將年度軸轉為由上至下排列。紅色表示上升，綠色表示下降；右側事件標籤連到對應年度節點。`)
        );

        const grid = makeSvgElement('g', { class: 'attendance-chart-grid', 'aria-hidden': 'true' });
        for (let value = 0; value <= maxValue; value += 2000) {
            const x = xFor(value);
            grid.append(
                makeSvgElement('line', { x1: x, y1: plotTop - 8, x2: x, y2: plotBottom + 8 }),
                makeSvgElement('text', { x, y: plotTop - 22, 'text-anchor': 'middle' }, value === 0 ? '0' : `${value / 1000}k`)
            );
        }
        cpblAttendanceHistory.forEach((record, index) => {
            const y = yFor(index);
            grid.append(
                makeSvgElement('line', { x1: left, y1: y, x2: plotRight, y2: y, class: 'attendance-mobile-year-grid' }),
                makeSvgElement('text', { x: left - 9, y: y + 3, 'text-anchor': 'end', class: 'attendance-chart-year' }, String(record.year))
            );
        });
        lineChart.appendChild(grid);

        const leaders = makeSvgElement('g', { class: 'attendance-line-leaders', 'aria-hidden': 'true' });
        events.forEach(event => {
            const markerX = xFor(cpblAttendanceHistory[event.index].average);
            const markerY = yFor(event.index);
            leaders.appendChild(makeSvgElement('path', {
                d: `M ${markerX} ${markerY} L 269 ${markerY}`,
                class: `attendance-line-leader is-${event.direction}`
            }));
        });
        lineChart.appendChild(leaders);

        const series = makeSvgElement('g', { class: 'attendance-line-series' });
        cpblAttendanceHistory.slice(1).forEach((record, index) => {
            const previous = cpblAttendanceHistory[index];
            series.appendChild(makeSvgElement('path', {
                d: `M ${xFor(previous.average)} ${yFor(index)} L ${xFor(record.average)} ${yFor(index + 1)}`,
                class: `attendance-line-segment ${record.average >= previous.average ? 'is-up' : 'is-down'}`
            }));
        });
        cpblAttendanceHistory.forEach((record, index) => {
            const event = eventByYear.get(record.year);
            const point = makeSvgElement('circle', {
                cx: xFor(record.average), cy: yFor(index), r: event ? 4 : 2.5,
                class: `attendance-line-point${event ? ` is-event is-${event.direction}` : ''}`
            });
            point.appendChild(makeSvgElement('title', {}, `${record.year} 年｜平均單場 ${formatNumber(record.average)} 人`));
            series.appendChild(point);
        });
        lineChart.appendChild(series);

        const labels = makeSvgElement('g', { class: 'attendance-line-event-labels' });
        events.forEach(event => {
            const cardX = 270;
            const cardY = yFor(event.index) - 24;
            const cardWidth = 158;
            const cardHeight = 48;
            const link = makeSvgElement('a', {
                href: event.source, target: '_blank', rel: 'noopener noreferrer',
                'aria-label': `${event.year} 年人數${event.direction === 'up' ? '上漲' : '下跌'}事件：${event.title}，${event.detail}。開啟來源：${event.sourceLabel}`
            });
            const group = makeSvgElement('g', { class: `attendance-line-event is-${event.direction}` });
            group.appendChild(makeSvgElement('rect', {
                x: cardX, y: cardY, width: cardWidth, height: cardHeight, rx: 4,
                class: 'attendance-line-event-card'
            }));
            group.append(
                makeSvgElement('text', { x: cardX + 8, y: cardY + 13, class: 'attendance-line-event-year' }, `${event.year}｜${event.direction === 'up' ? '上漲' : '下跌'}`),
                makeSvgElement('text', { x: cardX + 8, y: cardY + 27, class: 'attendance-line-event-title' }, event.title),
                makeSvgElement('text', { x: cardX + 8, y: cardY + 41, class: 'attendance-line-event-detail' }, event.detail)
            );
            link.appendChild(group);
            labels.appendChild(link);
        });
        lineChart.appendChild(labels);
    };

    const renderLineChart = () => {
        if (isMobileLayout()) {
            renderMobileLineChart();
            return;
        }
        lineChart.classList.remove('is-mobile-oriented');
        const width = 1360;
        const height = 1290;
        const left = 76;
        const right = 24;
        const top = 292;
        const bottom = 1060;
        const maxValue = 12000;
        const plotWidth = width - left - right;
        const plotHeight = bottom - top;
        const yearIndex = new Map(cpblAttendanceHistory.map((record, index) => [record.year, index]));
        const ratioAnchorAverage = cpblAttendanceHistory[yearIndex.get(2013)].average;
        const annotationRatio = 8000 / ratioAnchorAverage;
        const eventCardHeight = 78;
        const eventCardHalfHeight = eventCardHeight / 2;
        const annotationXOffsets = { 1997: -70, 1999: 70,2008: -60,2010: 60, 2022: -50, 2024: -30 };
        const annotationYOffsets = { 1997: 20,1999: 150,2002: -30,2003: -100,2010: 60,2013: -10, 2020: 40, 2022: -90, 2024: -100 };
        const events = cpblAttendanceHistoryEvents.map(event => {
            const index = yearIndex.get(event.year);
            const direction = cpblAttendanceHistory[index].growth >= 0 ? 'up' : 'down';
            return {
                ...event,
                index,
                direction,
                cardWidth: 184
            };
        });
        events.forEach(event => {
            const pointX = left + event.index * (plotWidth / (cpblAttendanceHistory.length - 1));
            const record = cpblAttendanceHistory[event.index];
            const targetValue = event.direction === 'up'
                ? record.average * annotationRatio
                : record.average / annotationRatio;
            const markerY = bottom - (record.average / maxValue) * plotHeight;
            const proportionalCenterY = bottom - (targetValue / maxValue) * plotHeight;
            const minimumGap = eventCardHalfHeight + 8;
            const cardCenterY = event.direction === 'up'
                ? Math.min(proportionalCenterY, markerY - minimumGap)
                : Math.max(proportionalCenterY, markerY + minimumGap);
            const xOffset = annotationXOffsets[event.year] || 0;
            event.cardX = Math.max(0, Math.min(width - event.cardWidth, pointX - event.cardWidth / 2 + xOffset));
            event.cardY = cardCenterY - eventCardHalfHeight + (annotationYOffsets[event.year] || 0);
        });
        const makeSvgElement = (tag, attributes = {}, textContent = '') => {
            const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
            if (textContent) node.textContent = textContent;
            return node;
        };
        const xFor = index => left + index * (plotWidth / (cpblAttendanceHistory.length - 1));
        const yFor = value => bottom - (value / maxValue) * plotHeight;
        const eventByYear = new Map(events.map(event => [event.year, event]));
        const title = makeSvgElement('title', { id: 'attendance-line-svg-title' }, '中職歷年平均單場觀眾人數折線圖');
        const description = makeSvgElement('desc', { id: 'attendance-line-svg-desc' }, `${cpblAttendanceHistory[0].year} 至 ${latest.year} 年平均單場觀眾人數走勢。紅色線段和上方標籤表示較前一年增加，綠色線段和下方標籤表示減少；垂直引線連到黑鷹事件、921 地震、2013 年經典賽、疫情、恢復全面開放與臺北大巨蛋等同期事件的年度節點。`);
        lineChart.setAttribute('viewBox', `0 0 ${width} ${height}`);
        lineChart.replaceChildren(title, description);

        const grid = makeSvgElement('g', { class: 'attendance-chart-grid', 'aria-hidden': 'true' });
        Array.from({ length: 7 }, (_, index) => index * 2000).forEach(value => {
            const y = yFor(value);
            grid.append(
                makeSvgElement('line', { x1: left, y1: y, x2: width - right, y2: y }),
                makeSvgElement('text', { x: left - 10, y: y + 4, 'text-anchor': 'end' }, numberFormat.format(value))
            );
        });
        lineChart.appendChild(grid);

        const leaders = makeSvgElement('g', { class: 'attendance-line-leaders', 'aria-hidden': 'true' });
        events.forEach(event => {
            const markerX = xFor(event.index);
            const markerY = yFor(cpblAttendanceHistory[event.index].average);
            leaders.appendChild(makeSvgElement('path', {
                d: event.direction === 'up'
                    ? `M ${markerX} ${markerY} L ${markerX} ${event.cardY + eventCardHeight}`
                    : `M ${markerX} ${markerY} L ${markerX} ${event.cardY}`,
                class: `attendance-line-leader is-${event.direction}`
            }));
        });
        lineChart.appendChild(leaders);

        const series = makeSvgElement('g', { class: 'attendance-line-series' });
        cpblAttendanceHistory.slice(1).forEach((record, index) => {
            const previous = cpblAttendanceHistory[index];
            series.appendChild(makeSvgElement('path', {
                d: `M ${xFor(index)} ${yFor(previous.average)} L ${xFor(index + 1)} ${yFor(record.average)}`,
                class: `attendance-line-segment ${record.average >= previous.average ? 'is-up' : 'is-down'}`
            }));
        });
        cpblAttendanceHistory.forEach((record, index) => {
            const event = eventByYear.get(record.year);
            const point = makeSvgElement('circle', {
                cx: xFor(index), cy: yFor(record.average), r: event ? 5 : 2.8,
                class: `attendance-line-point${event ? ` is-event is-${event.direction}` : ''}`
            });
            point.appendChild(makeSvgElement('title', {}, `${record.year} 年｜平均單場 ${formatNumber(record.average)} 人${record.growth === null ? '' : `｜較前一年${record.growth >= 0 ? '增加' : '減少'} ${Math.abs(record.growth).toFixed(2)}%`}`));
            series.appendChild(point);
            if (index % 5 === 0 || record.year === latest.year) {
                series.appendChild(makeSvgElement('text', {
                    x: xFor(index), y: bottom + 20, 'text-anchor': 'middle', class: 'attendance-chart-year'
                }, String(record.year)));
            }
        });
        lineChart.appendChild(series);

        const labels = makeSvgElement('g', { class: 'attendance-line-event-labels' });
        events.forEach(event => {
            const groupLink = makeSvgElement('a', {
                href: event.source, target: '_blank', rel: 'noopener noreferrer',
                'aria-label': `${event.year} 年人數${event.direction === 'up' ? '上漲' : '下跌'}事件：${event.title}，${event.detail}。開啟來源：${event.sourceLabel}`
            });
            const group = makeSvgElement('g', { class: `attendance-line-event is-${event.direction}` });
            group.appendChild(makeSvgElement('rect', {
                x: event.cardX, y: event.cardY, width: event.cardWidth, height: eventCardHeight, rx: 4,
                class: 'attendance-line-event-card'
            }));
            group.append(
                makeSvgElement('text', { x: event.cardX + 11, y: event.cardY + 17, class: 'attendance-line-event-year' }, `${event.year}｜人數${event.direction === 'up' ? '上漲' : '下跌'}`),
                makeSvgElement('text', { x: event.cardX + 11, y: event.cardY + 39, class: 'attendance-line-event-title' }, event.title),
                makeSvgElement('text', { x: event.cardX + 11, y: event.cardY + 56, class: 'attendance-line-event-detail' }, event.detail),
                makeSvgElement('text', { x: event.cardX + event.cardWidth - 10, y: event.cardY + 72, 'text-anchor': 'end', class: 'attendance-line-event-source' }, '來源 ↗')
            );
            groupLink.appendChild(group);
            labels.appendChild(groupLink);
        });
        lineChart.appendChild(labels);
    };

    const renderTable = () => {
        tableBody.replaceChildren(...cpblAttendanceHistory.map(record => {
            const row = document.createElement('tr');
            if (record.year === latest.year) row.classList.add('is-latest-season');
            const season = document.createElement('th');
            season.scope = 'row';
            season.textContent = `職棒${record.year - 1989}年`;
            const values = [record.year, formatNumber(record.games), formatNumber(record.attendance), formatNumber(record.average)];
            row.appendChild(season);
            values.forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = String(value);
                row.appendChild(cell);
            });
            const growthCell = document.createElement('td');
            if (record.growth === null) {
                growthCell.textContent = '—';
                growthCell.className = 'attendance-growth-neutral';
            } else {
                growthCell.textContent = `${record.growth > 0 ? '+' : ''}${record.growth.toFixed(2)}%`;
                growthCell.className = record.growth >= 0 ? 'attendance-growth-up' : 'attendance-growth-down';
            }
            row.appendChild(growthCell);
            return row;
        }));
    };

    const renderNotes = () => {
        notes.replaceChildren(...cpblAttendanceHistoryNotes.map(text => {
            const item = document.createElement('li');
            item.textContent = text;
            return item;
        }));
    };

    renderSummary();
    renderTable();
    renderNotes();
    renderChart();
    renderLineChart();
    metric.addEventListener('change', renderChart);
    let previousMobileLayout = isMobileLayout();
    window.addEventListener('resize', () => {
        const mobileLayout = isMobileLayout();
        if (mobileLayout === previousMobileLayout) return;
        previousMobileLayout = mobileLayout;
        renderChart();
        renderLineChart();
    });
    metric.dataset.initialized = 'true';
}
