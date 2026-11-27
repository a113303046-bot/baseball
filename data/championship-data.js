// 歷年季冠軍與年度總冠軍，依使用者提供的資料表整理：
// https://zxc22.idv.tw/champ.asp?clickflag=999
// 隊名以 teamHistoryData 當年度沿革中的名稱記錄；1998、1999 為單一球季。
const seasonChampionData = {
    2026: { firstHalf: '味全龍', secondHalf: '中信兄弟', annual: '味全龍' },
    2025: { firstHalf: '統一7-ELEVEn獅', secondHalf: '中信兄弟', annual: 'Rakuten Monkeys' },
    2024: { firstHalf: '統一7-ELEVEn獅', secondHalf: '中信兄弟', annual: '中信兄弟' },
    2023: { firstHalf: '統一7-ELEVEn獅', secondHalf: '味全龍', annual: '味全龍' },
    2022: { firstHalf: 'Rakuten Monkeys', secondHalf: '中信兄弟', annual: '中信兄弟' },
    2021: { firstHalf: '中信兄弟', secondHalf: '統一7-ELEVEn獅', annual: '中信兄弟' },
    2020: { firstHalf: '中信兄弟', secondHalf: '統一7-ELEVEn獅', annual: '統一7-ELEVEn獅' },
    2019: { firstHalf: 'Lamigo桃猿1', secondHalf: '中信兄弟', annual: 'Lamigo桃猿1' },
    2018: { firstHalf: 'Lamigo桃猿1', secondHalf: 'Lamigo桃猿1', annual: 'Lamigo桃猿1' },
    2017: { firstHalf: 'Lamigo桃猿1', secondHalf: 'Lamigo桃猿1', annual: 'Lamigo桃猿1' },
    2016: { firstHalf: '中信兄弟', secondHalf: '義大犀牛', annual: '義大犀牛' },
    2015: { firstHalf: 'Lamigo桃猿', secondHalf: '中信兄弟', annual: 'Lamigo桃猿' },
    2014: { firstHalf: 'Lamigo桃猿', secondHalf: '中信兄弟', annual: 'Lamigo桃猿' },
    2013: { firstHalf: '義大犀牛', secondHalf: '統一獅6', annual: '統一獅6' },
    2012: { firstHalf: '統一獅6', secondHalf: 'Lamigo桃猿', annual: 'Lamigo桃猿' },
    2011: { firstHalf: '統一獅6', secondHalf: 'Lamigo桃猿', annual: '統一獅6' },
    2010: { firstHalf: '興農牛', secondHalf: '兄弟象', annual: '兄弟象' },
    2009: { firstHalf: '統一獅6', secondHalf: '兄弟象', annual: '統一獅6' },
    2008: { firstHalf: '統一獅5', secondHalf: 'LaNew 熊', annual: '統一獅5' },
    2007: { firstHalf: '誠泰Cobras', secondHalf: 'LaNew 熊', annual: '統一獅5' },
    2006: { firstHalf: 'LaNew 熊', secondHalf: 'LaNew 熊', annual: 'LaNew 熊' },
    2005: { firstHalf: '誠泰Cobras', secondHalf: '興農牛', annual: '興農牛' },
    2004: { firstHalf: '統一獅3', secondHalf: '興農牛', annual: '興農牛' },
    2003: { firstHalf: '興農牛', secondHalf: '兄弟象', annual: '兄弟象' },
    2002: { firstHalf: '兄弟象', secondHalf: '兄弟象', annual: '兄弟象' },
    2001: { firstHalf: '統一獅3', secondHalf: '兄弟象', annual: '兄弟象' },
    2000: { firstHalf: '興農牛', secondHalf: '統一獅3', annual: '統一獅3' },
    1999: { singleSeason: '和信鯨', annual: '味全龍1' },
    1998: { singleSeason: '興農牛', annual: '味全龍1' },
    1997: { firstHalf: '時報鷹', secondHalf: '味全龍1', annual: '味全龍1' },
    1996: { firstHalf: '統一獅3', secondHalf: '味全龍1', annual: '統一獅3' },
    1995: { firstHalf: '統一獅3', secondHalf: '統一獅3', annual: '統一獅3' },
    1994: { firstHalf: '兄弟象', secondHalf: '兄弟象', annual: '兄弟象' },
    1993: { firstHalf: '兄弟象', secondHalf: '統一獅3', annual: '兄弟象' },
    1992: { firstHalf: '兄弟象', secondHalf: '兄弟象', annual: '兄弟象' },
    1991: { firstHalf: '味全龍1', secondHalf: '統一獅2', annual: '統一獅2' },
    1990: { firstHalf: '三商虎', secondHalf: '味全龍1', annual: '味全龍1' }
};

const teamMergerRelations = [
    {
        year: 2003,
        predecessorNames: ['高屏雷公', '台北太陽'],
        successorName: '第一金剛'
    },
    {
        year: 2003,
        predecessorNames: ['台中金剛', '嘉南勇士'],
        successorName: '誠泰太陽'
    }
];

const brotherTeamHistorySource = {
    label: '台灣棒球維基館｜中信兄弟隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E4%B8%AD%E4%BF%A1%E5%85%84%E5%BC%9F%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const brotherElephantsHistorySource = {
    label: '台灣棒球維基館｜兄弟象隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%85%84%E5%BC%9F%E8%B1%A1%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const unitedLionsTeamHistorySource = {
    label: '台灣棒球維基館｜統一7-ELEVEn獅隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E7%B5%B1%E4%B8%807-ELEVEn%E7%8D%85%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const fubonGuardiansTeamHistorySource = {
    label: '台灣棒球維基館｜富邦悍將隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%AF%8C%E9%82%A6%E6%82%8D%E5%B0%87%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const edaRhinosTeamHistorySource = {
    label: '台灣棒球維基館｜義大犀牛隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E7%BE%A9%E5%A4%A7%E7%8A%80%E7%89%9B%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const sinonBullsTeamHistorySource = {
    label: '台灣棒球維基館｜興農牛隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E8%88%88%E8%BE%B2%E7%89%9B%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 2014–2016 與 2024–2026 球隊年度簡介；2017–2023 的個別球隊簡介另於下方補上。
const teamSeasonProfileData = {
    2014: {
        teams: {
            '中信兄弟': {
                heading: '從兄弟象到中信兄弟，黃衫軍展開新篇章', record: '50 勝・66 敗・4 和', rank: '全年第 4 名', distinction: '下半季冠軍・臺灣大賽亞軍',
                annualFocus: '最後一場例行賽以 3：0 擊敗統一，僅以 0.002 勝率差封王',
                summary: '中信集團接手兄弟象後，球隊首度以「中信兄弟」之名出賽。球隊上半季墊底，下半季在最後一場例行賽擊敗統一獅，以 0.002 勝率差拿下季冠軍，延續黃衫軍在新東家旗下的隊史。',
                highlights: ['球團完成經營權交接，兄弟象改以中信兄弟之名出賽。', '最後一場例行賽由寇迪投出完封勝，球隊以 3：0 擊敗統一獅。', '中信兄弟以下半季 0.544 勝率、僅 0.002 差距壓過義大犀牛封王，之後闖進臺灣大賽。'],
                sources: [brotherTeamHistorySource, { label: 'CPBL：最後一戰以 0.002 勝率差封王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507596136286412' }]
            }
        }
    },
    2015: {
        teams: {
            '中信兄弟': {
                heading: '吳復連季中接掌兵符，臺灣大賽再戰到第七場', record: '63 勝・56 敗・1 和', rank: '全年第 2 名', distinction: '下半季冠軍・臺灣大賽亞軍',
                annualFocus: '臺灣大賽曾以 3 勝 1 敗聽牌，最終仍與桃猿鏖戰至第七戰',
                summary: '中信兄弟在季中更換總教練，吳復連由二軍教頭升上一軍，帶隊拿下下半季冠軍。臺灣大賽面對 Lamigo 桃猿，兄弟一度取得 3 勝 1 敗聽牌，卻遭對手連追三場，連續第二年在第七戰後與冠軍擦身而過。',
                highlights: ['5 月謝長亨轉任二軍，吳復連接任一軍代理總教練，7 月真除。', '吳復連帶隊拿下下半季冠軍，並在臺灣大賽取得 3 勝 1 敗聽牌。', '王溢正於第五戰完投九局止敗，桃猿連勝三場逆轉封王。'],
                sources: [brotherTeamHistorySource,
                    { label: '中央社：吳復連接掌中信兄弟', url: 'https://www.cna.com.tw/news/firstnews/201505180377.aspx' },
                    { label: 'CPBL：2015 臺灣大賽第七戰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507468394385042' }
                ]
            }
        }
    },
    2016: {
        teams: {
            '中信兄弟': {
                heading: '九局下兩支全壘打，林智勝與蔣智賢聯手逆轉', record: '68 勝・50 敗・2 和', rank: '全年第 1 名', distinction: '上半季冠軍・臺灣大賽亞軍',
                annualFocus: '林智勝九局下滿貫砲追平，蔣智賢再見全壘打助隊九連勝',
                summary: '中信兄弟打線單季轟出 169 支全壘打，創下當時聯盟單隊紀錄；4 月 7 日對義大犀牛一戰，更在九局下從 5：9 落後追平，林智勝敲出滿貫砲後由蔣智賢擊出再見全壘打，成為球季最具代表性的逆轉場面。',
                highlights: ['4 月 7 日九局下，林智勝滿貫砲將比數追平，蔣智賢接著擊出再見全壘打，以 10：9 贏球。', '這場勝利是球隊九連勝的一部分，兄弟在九局下完成四分落後逆轉。', '全隊單季 169 支全壘打刷新聯盟單隊紀錄，臺灣大賽則以 2 勝 4 敗不敵義大犀牛。'],
                sources: [brotherTeamHistorySource, { label: '中央社：林智勝滿貫砲、蔣智賢再見轟', url: 'https://www.cna.com.tw/news/firstnews/201604070520.aspx' }]
            }
        }
    },
    2022: {
        teams: {
            '台鋼雄鷹': {
                seasonLabel: '球隊成軍沿革｜台鋼雄鷹',
                heading: '加盟案通過審查，台鋼雄鷹成為中職第六隊',
                distinction: '台鋼雄鷹成軍・職棒睽違 16 年回到六隊',
                annualFocus: '3 月簽署加盟意向書、4 月獲准加盟；7 月以狀元籤選入隊史第一位球員曾子祐',
                summary: '台灣鋼鐵集團在 2022 年啟動加盟中職計畫，3 月 2 日簽署加盟意向書，4 月 27 日經常務理事會審查通過，正式成為中職第六隊，球隊定名台鋼雄鷹並以高雄澄清湖為主場。7 月的首次新人選秀選入曾子祐，展開球員陣容組建。',
                highlights: ['3 月 2 日簽署加盟意向書，4 月 27 日正式通過加盟審查，成為中職自 2008 年後再度擴編的第六隊。', '球團公布「台鋼雄鷹」隊名並選定澄清湖棒球場為主場，為南台灣棒球帶來新職棒球隊。', '首度參加中職選秀，以狀元籤選入曾子祐；他成為隊史第一名球員。'],
                sources: [
                    { label: 'CPBL：台鋼簽署加盟意向書', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0M061616259692454258' },
                    { label: '中央社：台鋼通過審查並公布隊名', url: 'https://www.cna.com.tw/news/aspt/202206080183.aspx' },
                    { label: '台鋼雄鷹：曾子祐成為隊史第一名球員', url: 'https://www.tsghawks.com/%E5%8F%B0%E9%8B%BC%E9%9B%84%E9%B7%B9%E9%A6%96%E6%AC%A1%E5%8F%83%E8%88%87%E4%B8%AD%E8%81%B7%E9%81%B8%E7%A7%80-%E6%9B%BE%E5%AD%90%E7%A5%90%E6%88%90%E9%9A%8A%E5%8F%B2%E9%A6%96%E5%90%8D%E7%8B%80%E5%85%83/' }
                ]
            }
        }
    },
    2023: {
        teams: {
            '台鋼雄鷹': {
                seasonLabel: '中華職棒 34 年二軍｜台鋼雄鷹',
                slogan: '雄新壯志',
                heading: '二軍首季就奪隊史首冠，總冠軍賽三連勝封王',
                record: '40 勝・35 敗・4 和（二軍）',
                rank: '例行賽第 2 名（二軍）',
                distinction: '二軍總冠軍・成軍首冠',
                annualFocus: '首度打進二軍總冠軍賽便直落三擊敗富邦，賽後喊出「一軍我來了」',
                summary: '台鋼雄鷹在 2023 年展開中職二軍首季，以 40 勝 35 敗 4 和、例行賽第二名闖進二軍總冠軍賽。面對富邦悍將二軍，雄鷹先在首戰由紀慶然代打敲出逆轉安打，接著連拿三勝橫掃對手，成軍第一年就拿下隊史首座冠軍。',
                highlights: ['年度口號「雄新壯志」呼應球隊從零建隊、扎根高雄的新起點。', '例行賽以第二名晉級二軍總冠軍賽；陳柏清拿下防禦率王與三振王，曾子祐獲安打王。', '總冠軍賽首戰紀慶然代打敲出逆轉致勝安，雄鷹最後以三連勝橫掃富邦悍將二軍，拿下隊史首冠。'],
                sources: [
                    { label: '台鋼雄鷹：年度口號「雄新壯志」與二軍首季', url: 'https://www.tsghawks.com/%E5%8F%B0%E9%8B%BC%E5%A4%A7%E5%B1%95%E9%9B%84%E3%80%8C%E6%96%B0%E3%80%8D%E5%A3%AF%E5%BF%97-%E9%9B%84%E9%B7%B9%E9%AB%98%E9%A3%9B%E5%B1%95%E9%96%8B%E6%98%A5%E8%A8%93/' },
                    { label: 'CPBL：台鋼二軍例行賽排名與個人獎項', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0N288428848427874873' },
                    { label: '台鋼雄鷹：紀慶然逆轉安打、冠軍賽首戰取勝', url: 'https://www.tsghawks.com/%E7%B4%80%E6%85%B6%E7%84%B6%E9%97%9C%E9%8D%B5%E4%BB%A3%E6%89%93%E6%95%B2%E9%80%86%E8%BD%89%E8%87%B4%E5%8B%9D%E5%AE%89-%E4%BA%8C%E8%BB%8D%E5%86%A0%E8%BB%8D%E8%B3%BD%E9%A6%96%E6%88%B0%E5%8F%B0%E9%8B%BC/' },
                    { label: '中央社：雄鷹三連勝奪二軍總冠軍', url: 'https://www.cna.com.tw/news/aspt/202310200282.aspx' }
                ]
            }
        }
    },
    2024: {
        sources: [
            { label: '35 年全年戰績', url: 'https://www.zxc22.idv.tw/cpbl35/rank_all.asp' },
            { label: 'CPBL 年度頒獎與個人獎', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' }
        ],
        teams: {
            '中信兄弟': {
                heading: '德保拉七局好投助封王，黃潮在洲際迎來隊史第十冠', record: '70 勝・50 敗', rank: '全年第 1 名', distinction: '年度總冠軍',
                annualFocus: '德保拉第五戰七局失一分，兄弟在洲際主場拋下隊史第十冠彩帶',
                summary: '中信兄弟在台灣大賽第五戰回到洲際主場，德保拉先發七局只失一分，帶領球隊以 4：1 擊敗統一獅、拿下系列賽第四勝。這是含兄弟象時期在內的隊史第十冠，也是球隊睽違兩年再度封王。',
                highlights: ['德保拉以 92 球投完七局，只失一分，獲選第五戰單場 MVP。', '曾頌恩單場敲出三支安打、貢獻兩分打點，與王威晨在首局串連攻勢。', '隊史第十冠在滿場洲際主場到手，黃衫軍再次拋下封王彩帶。'],
                sources: [brotherTeamHistorySource,
                    { label: '中央社：德保拉好投助兄弟拿下隊史第十冠', url: 'https://www.cna.com.tw/news/aspt/202410250365.aspx' },
                    { label: 'CPBL 臺灣大賽第五戰', url: 'https://cpbl.com.tw/box/news?gameSno=5&kindCode=C&year=2024' }
                ]
            },
            '統一7-ELEVEn獅': {
                heading: '古林睿煬奪年度 MVP，獅隊王牌獲准旅外', record: '66 勝・53 敗・1 和', rank: '全年第 2 名', distinction: '上半季冠軍・臺灣大賽亞軍',
                annualFocus: '古林睿煬以本土王牌身分拿下年度 MVP，季後加盟日本火腿',
                summary: '統一獅拿下上半季冠軍並重返臺灣大賽；這季最具延續性的焦點是古林睿煬投出代表作，拿下防禦率王與年度 MVP，球季後透過入札制度加盟日本火腿，成為首位高中投入選秀後成功旅外的中職球員。',
                highlights: ['古林睿煬以 10 勝 2 敗、防禦率 1.66 拿下年度 MVP 與防禦率王。', '他成為首位高中投入選秀、再由中職成功旅外的球員。', '獅隊上半季封王後重返臺灣大賽，系列賽以 1 勝 4 敗不敵中信兄弟。'],
                sources: [
                    { label: 'CPBL：古林睿煬年度 MVP 與旅外專題', url: 'https://pb.cpbl.com.tw/XMDoc/Cont?sid=0P002393338277719165&xsmsid=0L113391521954478024' },
                    { label: '中央社：古林睿煬獲年度 MVP', url: 'https://www.cna.com.tw/news/aspt/202411040355.aspx' }
                ]
            },
            '富邦悍將': {
                heading: '張育成中職首支再見轟，返台首季點燃新莊', record: '53 勝・66 敗・1 和', rank: '全年第 5 名', distinction: '未取得季後賽資格',
                annualFocus: '張育成 8 月 21 日敲出中職生涯首支再見全壘打，助悍將逆轉勝出',
                summary: '張育成在 2024 年季中返台加盟富邦悍將，重新披上熟悉的 18 號球衣。從中職生涯首安、首轟到 8 月 21 日的生涯首支再見轟，他的回歸為球季帶來最受矚目的新莊主場時刻；張育成該季出賽 47 場，敲出 10 轟。',
                highlights: ['張育成季中返台加盟，首安與首轟都在富邦悍將球衣下留下紀錄。', '8 月 21 日對味全龍之戰，張育成擊出中職生涯首支再見全壘打，幫助球隊逆轉。', '張育成首季出賽 47 場，擊出 10 支全壘打、30 分打點。'],
                sources: [{ label: 'CPBL 張育成個人成績', url: 'https://cpbl.com.tw/team/person?acnt=0000006888' }]
            },
            'Rakuten Monkeys': {
                heading: '全年第三，未能延續前季冠軍', record: '62 勝・57 敗・1 和', rank: '全年第 3 名', distinction: '未取得季後賽資格',
                summary: '樂天桃猿以全年第三名結束例行賽，該季兩個半季冠軍由其他球隊取得，因此未能參加臺灣大賽。',
                highlights: ['全年勝率 .521，六隊中排名第三。', '林智平達成生涯千安，獲得東山再起獎。', '陳柏豪以 29 次救援成功拿下救援王與年度最佳進步獎。'],
                sources: [{ label: 'CPBL 年度頒獎報導', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' }]
            },
            '味全龍': {
                heading: '徐若熙投出台北大巨蛋中職例行賽首球，龍隊搶下首勝', record: '58 勝・62 敗', rank: '全年第 4 名', distinction: '未取得季後賽資格',
                summary: '味全龍在 3 月 30 日於台北大巨蛋迎戰樂天桃猿，徐若熙投出中職例行賽在大巨蛋的第一球與第一個三振，並以五局無失分帶隊拿下 3：2 勝利，寫下中職大巨蛋例行賽首勝。',
                highlights: ['大巨蛋首場中職例行賽吸引 28,618 名觀眾，徐若熙投出首球與首 K。', '徐若熙先發五局無失分，味全龍以 3：2 擊敗樂天桃猿，拿下大巨蛋例行賽首勝。', '蔣少宏敲回大巨蛋中職例行賽首分，龍隊成為這場歷史賽事的主角。'],
                sources: [
                    { label: '中央社：大巨蛋中職首球、首 K 與首勝', url: 'https://www.cna.com.tw/news/aspt/202403300230.aspx' },
                    { label: 'CPBL：徐若熙拿下大巨蛋例行賽首勝', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O090771127870517401' }
                ]
            },
            '台鋼雄鷹': {
                slogan: 'I’m IN（鷹）',
                heading: '大巨蛋隊史首戰就拿首勝，王柏融敲下致勝安', record: '49 勝・70 敗・1 和', rank: '全年第 6 名', distinction: '一軍首季・曾子祐獲新人王',
                annualFocus: '4 月 3 日一軍隊史首戰即首勝，江承諺投出隊史第一球、王柏融敲致勝安',
                summary: '台鋼雄鷹在 2023 年加入中職，先拿下二軍總冠軍；2024 年正式升上一軍，讓聯盟睽違 16 年回到六隊規模。4 月 3 日在臺北大巨蛋迎來隊史一軍首戰，江承諺投出隊史第一球、王柏融敲出勝利打點，雄鷹以 4：1 擊敗中信兄弟，完成首戰即首勝。',
                highlights: ['2023 年二軍總冠軍賽直落三擊敗富邦悍將，拿下隊史首座冠軍，為升上一軍暖身。', '一軍首戰由江承諺先發六局、王柏融敲致勝安，台鋼在大巨蛋以 4：1 拿下隊史首勝。', '隔日王柏融再敲出隊史首轟；曾子祐首季擊出 123 支安打，獲年度最佳新人。'],
                sources: [
                    { label: 'TSNA：雄鷹元年一軍口號「I’m IN」公布', url: 'https://tsna.com/article/82630' },
                    { label: '台鋼雄鷹：隊史首戰即首勝', url: 'https://www.tsghawks.com/%E5%8F%B0%E9%8B%BC%E9%9B%84%E9%B7%B9%E9%9A%8A%E5%8F%B2%E9%A6%96%E6%88%B0%E5%8D%B3%E9%A6%96%E5%8B%9D-%E8%B8%A2%E9%A4%A8%E5%A4%A7%E5%B7%A8%E8%9B%8B%E6%93%8A%E9%80%80%E4%B8%AD%E4%BF%A1%E5%85%84%E5%BC%9F/' },
                    { label: '台鋼雄鷹：王柏融敲出隊史首轟', url: 'https://www.tsghawks.com/%E7%8E%8B%E6%9F%8F%E8%9E%8D%E6%95%B2%E9%9A%8A%E5%8F%B2%E9%A6%96%E8%BD%9F-%E5%96%AE%E5%A0%B43%E5%AE%89%E7%8C%9B%E6%89%93%E8%B3%9E/' },
                    { label: 'CPBL：年度頒獎與曾子祐新人王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' },
                    { label: '台鋼雄鷹：隊史首座二軍總冠軍', url: 'https://www.tsghawks.com/3%E9%80%A3%E5%8B%9D%E6%A9%AB%E6%8E%83%E5%AF%8C%E9%82%A6%E6%82%8D%E5%B0%87-%E5%8F%B0%E9%8B%BC%E9%9B%84%E9%B7%B9%E5%A5%AA%E9%9A%8A%E5%8F%B2%E9%A6%96%E5%BA%A7%E4%BA%8C%E8%BB%8D%E7%B8%BD%E5%86%A0%E8%BB%8D/' }
                ]
            }
        }
    },
    2025: {
        sources: [
            { label: '36 年全年戰績', url: 'https://news.tvbs.com.tw/sports/2821305?from=sports_extend' },
            { label: 'CPBL 年度頒獎與個人獎', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P311368939485570134' }
        ],
        teams: {
            '中信兄弟': {
                heading: '洲際主場鏖戰至十一局，台灣大賽打到最後一刻', record: '70 勝・50 敗', rank: '全年第 1 名', distinction: '下半季冠軍・臺灣大賽亞軍',
                annualFocus: '台灣大賽第五戰七比七僵持至十一局，樂天靠林泓育超前兩分砲封王',
                summary: '中信兄弟連續第二年拿下全年第一與下半季冠軍，但台灣大賽第五戰成了球季終章。兄弟回到洲際主場後與樂天桃猿一路拉鋸，九局打完以 7：7 平手，延長至十一局才由林泓育的超前兩分砲分出勝負。',
                highlights: ['第五戰兄弟在主場一度取得 7：3 領先，樂天於第八局追成平手。', '雙方 7：7 打進延長賽，林泓育於十一局上擊出超前兩分全壘打。', '樂天以 9：7 贏下第五戰並取得總冠軍，兄弟連兩年例行賽七十勝的球季在主場落幕。'],
                sources: [brotherTeamHistorySource,
                    { label: '中央社：林泓育延長賽超前轟，樂天桃猿封王', url: 'https://www.cna.com.tw/news/aspt/202510275002.aspx' },
                    { label: '公視：台灣大賽第五戰延長十一局', url: 'https://news.pts.org.tw/article/778395' }
                ]
            },
            '統一7-ELEVEn獅': {
                slogan: '尚勇',
                heading: '連三年上半季封王後，季後挑戰賽遭樂天讓二追三', record: '66 勝・54 敗', rank: '全年第 2 名', distinction: '上半季冠軍・季後挑戰賽止步',
                annualFocus: '拿下隊史第 18 座季冠軍，連續第三年上半季封王',
                summary: '統一獅拿下隊史第 18 座季冠軍，連續第三年奪得上半季冠軍。季後挑戰賽面對樂天桃猿，獅隊先取得 2 勝 0 敗聽牌，卻遭對手連追三勝，成為中職季後挑戰賽首度出現的「讓二追三」。',
                highlights: ['統一獅 6 月 29 日擊敗樂天桃猿封王，連續第三年拿下上半季冠軍。', '季後挑戰賽獅隊先連勝兩場，距離晉級只差一勝。', '樂天桃猿連贏第三至第五戰，完成中職季後挑戰賽史上第一次「讓二追三」。'],
                sources: [
                    { label: '統一獅年度口號「尚勇」', url: 'https://video.udn.com/news/1300833' },
                    { label: '中央社：統一獅奪隊史第 18 座季冠軍', url: 'https://www.cna.com.tw/news/aspt/202506290185.aspx' },
                    { label: 'CPBL 季後挑戰賽第四戰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P287004028052498155' }
                ]
            },
            '富邦悍將': {
                heading: '王念好最終戰兩分砲，悍將六連勝追平隊史紀錄', record: '46 勝・74 敗', rank: '全年第 6 名', distinction: '未取得季後賽資格',
                annualFocus: '悍將以隊史紀錄六連勝收尾，王念好在最終戰敲出兩分全壘打',
                summary: '富邦悍將在球季最後一段打出六連勝，追平隊史最長連勝紀錄。10 月 4 日迎戰樂天桃猿的最終戰，王念好擊出兩分全壘打，悍將以 7：2 獲勝，讓這支年輕球隊以連勝與新秀的長打作結；全年戰績為 46 勝 74 敗。',
                highlights: ['悍將連續拿下最後六場比賽，追平隊史最長連勝紀錄。', '球季最終戰王念好敲出兩分砲，球隊以 7：2 擊敗樂天桃猿。', '王念好與其他年輕球員在球季末段獲得更多一軍出賽機會，為新球季累積經驗。'],
                sources: [{ label: '中央社：富邦悍將結束球季', url: 'https://www.cna.com.tw/news/aspt/202510040218.aspx' }]
            },
            'Rakuten Monkeys': {
                heading: '逆勢闖關，奪樂天接手後首冠', record: '62 勝・57 敗・1 和', rank: '全年第 3 名', distinction: '年度總冠軍',
                summary: '樂天桃猿以全年第三名進入季後挑戰賽，先逆轉淘汰統一獅，再於臺灣大賽以 4 勝 1 敗擊敗中信兄弟，拿下樂天接手後首冠。',
                highlights: ['季後挑戰賽完成「讓二追三」，成為史上首次達成此逆轉的球隊。', '臺灣大賽第五戰延長至第十一局，林泓育敲出致勝兩分砲。', '威能帝拿下年度 MVP、勝投王與三振王。'],
                sources: [
                    { label: 'CPBL 臺灣大賽首戰報導', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P291848787598264487' },
                    { label: 'CPBL 封王歷程專題', url: 'https://pb.cpbl.com.tw/xmdoc/cont?sid=0P308545220797370494&xsmsid=0l113391521954478024' }
                ]
            },
            '味全龍': {
                heading: '徐若熙披龍袍最後一季，球季後啟程福岡軟銀', record: '55 勝・64 敗・1 和', rank: '全年第 5 名', distinction: '未取得季後賽資格',
                summary: '2025 年是徐若熙效力味全龍的最後一季。他先發 19 場、投 114 局並送出 120 次三振，季後行使旅外權利，於 2026 年加盟日本職棒福岡軟銀鷹。',
                highlights: ['徐若熙在味全龍生涯最後一季先發 19 場，留下 114 局、120 次三振與 2.05 防禦率。', '9 月提前結束球季，徐若熙距離聯盟規定的 120 局投球局數只差 6 局。', '球季結束後正式宣布旅外，將在 2026 年轉戰福岡軟銀鷹。'],
                sources: [
                    { label: '味全龍官方：徐若熙旅外公告', url: 'https://www.wdragons.com/%E5%91%B3%E5%85%A8%E9%BE%8D%E7%90%83%E5%9C%98%E5%85%AC%E5%91%8A/' },
                    { label: '自由體育：徐若熙提前結束 2025 球季', url: 'https://sports.ltn.com.tw/news/breakingnews/5193845' }
                ]
            },
            '台鋼雄鷹': {
                slogan: '翅膀硬了！！（IM（鷹）PROVE）',
                heading: '後勁跨季 22 連勝改寫紀錄，江承諺投下隊史百勝', record: '59 勝・59 敗・2 和', rank: '全年第 4 名', distinction: '全年首度五成勝率・隊史百勝',
                annualFocus: '後勁超越潘威倫寫下跨季 22 連勝，江承諺再為台鋼拿下隊史第 100 勝',
                summary: '台鋼雄鷹二年級球季首度以五成勝率結束全年例行賽。後勁 8 月 16 日先發七局失兩分，拿下跨季第 22 連勝，超越潘威倫保持的中職紀錄；9 月 14 日，江承諺在澄清湖先發五局無安打、無失分，王柏融打回全場唯一得分，台鋼以 1：0 獲勝，達成隊史第 100 勝。',
                highlights: ['後勁跨季 22 連勝打破潘威倫的 21 連勝紀錄，並在台鋼隊內成為年輕投手的重要領袖。', '隊史第 100 勝由江承諺拿下，他也正是 2024 年隊史首勝的勝投投手；王柏融兩場都敲出致勝打點。', '全年戰績 59 勝 59 敗 2 和、排名第四，首次達成全年勝敗場數打平。'],
                sources: [
                    { label: 'CPBL：後勁跨季 22 連勝刷新聯盟紀錄', url: 'https://cpbl.com.tw/box/news?gameSno=265&kindCode=A&year=2025' },
                    { label: '台鋼雄鷹：江承諺包辦隊史首勝與百勝', url: 'https://www.tsghawks.com/%E5%8F%B0%E9%8B%BC%E9%9B%84%E9%B7%B9%E9%81%94%E6%88%90%E9%9A%8A%E5%8F%B2%E7%99%BE%E5%8B%9D-%E6%B1%9F%E6%89%BF%E8%AB%BA%E5%8C%85%E8%BE%A6%E9%9A%8A%E5%8F%B2%E9%A6%96%E5%8B%9D%E3%80%81%E7%99%BE%E5%8B%9D/' },
                    { label: 'CPBL：江承諺投出台鋼隊史百勝', url: 'https://cpbl.com.tw/box/news?gameSno=329&kindCode=A&year=2025' },
                    { label: '中央社：台鋼公布 2025 年度口號', url: 'https://www.cna.com.tw/news/aspt/202501020307.aspx' }
                ]
            }
        }
    },
    2026: {
        sources: [
            { label: '2026 全年戰績', url: 'https://tw.tips/zhongzhi' },
            { label: 'CPBL 職業棒球：2026 味全封王專題', url: 'https://pb.cpbl.com.tw/xmdoc/cont?sid=0Q307588526072178395&xsmsid=0L113391521954478024' }
        ],
        teams: {
            '中信兄弟': {
                heading: '台灣大賽首度全程大巨蛋，詹子賢十一局再見安延長戰線', record: '56 勝・62 敗・2 和', rank: '全年第 5 名', distinction: '下半季冠軍・臺灣大賽亞軍',
                annualFocus: '薔琵颱風讓台灣大賽順延，詹子賢第四戰十一局再見安打助兄弟續命',
                summary: '中信兄弟在台灣大賽與味全龍首度交手，系列賽七戰全安排在台北大巨蛋，也是中職史上第一次。薔琵颱風打亂原定賽程，系列賽賽程因而順延；兄弟在前三戰落敗後連續追回兩勝，詹子賢第四戰於十一局下敲出再見安打，將系列賽延長至第六戰，最終仍以 2 勝 4 敗落敗。',
                highlights: ['兄弟連三年打進台灣大賽，這次對手是同樣具「龍象」歷史淵源的味全龍。', '七戰四勝制總冠軍賽首度全數在台北大巨蛋舉行；薔琵颱風使系列賽賽程順延。', '詹子賢第四戰十一局下擊出再見安打，兄弟追回系列賽第三敗後的首勝，延長了爭冠戰線。'],
                sources: [brotherTeamHistorySource,
                    { label: '中央社：台灣大賽首度全系列安排在大巨蛋', url: 'https://www.cna.com.tw/news/aspt/202610130129.aspx' },
                    { label: '中央社：詹子賢十一局再見安助兄弟續命', url: 'https://www.cna.com.tw/news/aspt/202610210360.aspx' },
                    { label: '中央社：台灣大賽第五戰因颱風順延', url: 'https://www.cna.com.tw/news/aspt/202610220395.aspx' },
                    { label: '中央社：味全龍第六戰封王', url: 'https://www.cna.com.tw/news/aspt/202610260191.aspx' },
                    { label: 'CPBL 2026 下半季封王戰', url: 'https://www.cpbl.com.tw/box/index?gameSno=270&year=2026&kindCode=A' }
                ]
            },
            '統一7-ELEVEn獅': {
                heading: '林泓弦三壘安打串起致勝分，統一獅成中職首支兩千勝球隊', record: '64 勝・55 敗・1 和', rank: '全年第 2 名', distinction: '季後挑戰賽止步',
                annualFocus: '5 月 13 日達成隊史第 2,000 勝，成為中職第一隊',
                summary: '5 月 13 日統一獅以 2：1 擊敗味全龍，拿下隊史第 2,000 勝，成為中職首支達成此里程碑的球隊。林泓弦先以三壘安打追平比數，再跑回超前分並獲選單場 MVP；球季後段球隊仍挺進季後挑戰賽。',
                highlights: ['銳力獅先發七局失一分，穩住這場隊史里程碑之戰。', '林泓弦以追平三壘安打和跑回超前分成為致勝功臣，獲選單場 MVP。', '統一獅成為中職史上首支達成隊史 2,000 勝的球隊，季後挑戰賽則止步於中信兄弟。'],
                sources: [
                    { label: '中央社：統一獅隊史兩千勝成中職第一隊', url: 'https://www.cna.com.tw/news/aspt/202605130368.aspx' },
                    { label: '中央社：統一獅季後挑戰賽決勝戰', url: 'https://www.cna.com.tw/news/aspt/202610120306.aspx' }
                ]
            },
            '富邦悍將': {
                heading: '最快五十六戰拿下三十一勝，悍將十週年開季加速', record: '59 勝・61 敗', rank: '全年第 3 名', distinction: '2019 年後首度全年前三',
                annualFocus: '開季 56 場就拿下 31 勝，刷新隊史達成 30 勝最快場次紀錄',
                summary: '富邦悍將在成軍十週年球季展現不同以往的開季節奏，前 56 場就拿下 31 勝，刷新隊史最快達成 30 勝的紀錄。球隊全年以 59 勝 61 敗、勝率 .492 作收，回到 2019 年後最佳的全年排名；李東洺則拿下生涯首個單季十勝。',
                highlights: ['前 56 場取得 31 勝，創隊史最快達成 30 勝紀錄。', '李東洺拿下生涯新高的單季 10 勝，成為先發輪值的重要收穫。', '全年 59 勝 61 敗排名第三，是富邦悍將 2019 年後首度回到全年前三。'],
                sources: [{ label: '中央社：2026 年度獎項入圍', url: 'https://www.cna.com.tw/news/aspt/202610270253.aspx' }]
            },
            'Rakuten Monkeys': {
                heading: '全年第四，衛冕後未能進入季後賽', record: '57 勝・61 敗・2 和', rank: '全年第 4 名', distinction: '未取得季後賽資格',
                summary: '衛冕軍樂天桃猿以全年第四名結束球季，例行賽表現與前一季奪冠的高峰有所落差，未能延續季後賽之旅。',
                highlights: ['全年勝率 .483，與第三名富邦悍將相差 7.5 場。', '曾家輝以 120.2 局、防禦率 2.69 入圍最佳進步獎並獲獎。', '馬傑森單季首度突破百安，打擊表現創個人生涯新高。'],
                sources: [{ label: '中央社：2026 年度獎項入圍', url: 'https://www.cna.com.tw/news/aspt/202610270253.aspx' }]
            },
            '味全龍': {
                heading: '梅賽鍶第六戰八局無失分，味全龍首度在大巨蛋拋彩帶', record: '67 勝・53 敗', rank: '全年第 1 名', distinction: '上半季冠軍・年度總冠軍',
                summary: '味全龍拿下上半季冠軍與全年第一，臺灣大賽第六戰由梅賽鍶投出八局無失分，帶領球隊以 6：0 擊敗中信兄弟、以 4 勝 2 敗封王。龍隊也成為首支在臺北大巨蛋拋下總冠軍彩帶的球隊。',
                highlights: ['梅賽鍶在第六戰先發八局無失分，獲選台灣大賽 MVP。', '蔣少宏第八局轟出兩分全壘打，打破僵局；龍隊終場以 6：0 完封中信兄弟。', '這是味全龍隊史第六冠，也是首場在臺北大巨蛋舉行的封王慶祝。'],
                sources: [{ label: '中央社：味全龍拿下年度總冠軍', url: 'https://www.cna.com.tw/news/aspt/202610260198.aspx' }]
            },
            '台鋼雄鷹': {
                slogan: '做伙拚',
                heading: '十天九度登頂後未能續航，39 場達成半季 20 勝', record: '54 勝・65 敗・1 和', rank: '全年第 6 名', distinction: '隊史最快半季 20 勝・魔鷹打擊三冠',
                annualFocus: '開季曾十天九度居首，並在第 39 場達成隊史最快半季 20 勝',
                summary: '台鋼雄鷹開季打出隊史最強的一段，上半季第 39 場就拿下第 20 勝，刷新隊史最快紀錄；4 月 14 日至 23 日的十天中，有九天排名第一。球隊未能把開季氣勢延續到球季後段，全年以 54 勝 65 敗 1 和、排名第六作收；魔鷹則連續第三季達成單季 20 轟。',
                highlights: ['5 月 23 日坎南先發七局無失分、魔鷹轟出兩分砲，台鋼以 2：0 擊敗統一，在第 39 場完成半季 20 勝。', '4 月中旬雄鷹一度領跑戰績，十天中九天排名第一；球季後段起伏讓球隊未能首度闖進季後賽。', '年度口號「做伙拚」強調球隊與高雄城市連結；魔鷹連續第三年達成 20 轟，陳正毅則在主場最終戰拿下職棒生涯首勝與首度單場 MVP。'],
                sources: [
                    { label: '自由體育：雄鷹第 39 場拿下半季 20 勝、刷新隊史紀錄', url: 'https://sports.ltn.com.tw/news/breakingnews/5447200' },
                    { label: '自由體育：雄鷹開季十天九度居首', url: 'https://sports.ltn.com.tw/amp/news/breakingnews/5446702' },
                    { label: '台鋼雄鷹：2026 年度口號「做伙拚」', url: 'https://www.tsghawks.com/product/2026%E5%8F%B0%E9%8B%BC%E9%9B%84%E9%B7%B9%E4%B8%BB%E5%A0%B4%E7%90%83%E8%A1%A3/' },
                    { label: '台鋼雄鷹：陳正毅生涯首勝、首度單場 MVP', url: 'https://www.tsghawks.com/%E9%99%B3%E6%AD%A3%E6%AF%85%E5%85%88%E7%99%BC%E5%A5%BD%E6%8A%95%E5%A3%93%E5%88%B6%E6%A8%82%E5%A4%A9%E6%89%93%E7%B7%9A-%E7%94%9F%E6%B6%AF%E9%A6%96%E5%8B%9D%E3%80%81%E9%A6%96mvp%E5%85%A5%E8%A2%8B/' },
                    { label: 'CPBL：2026 年度獎項報導', url: 'https://news.tvbs.com.tw/sports/baseball/4045071' }
                ]
            }
        }
    }
};

// 1993–2012 興農牛隊史及其前身俊國熊、興農熊年度簡介。
const sinonBullsArchiveProfiles = {
    1993: {
        teamName: '俊國熊', heading: '龍獅虎象加鷹熊，俊國熊加入中職六隊時代',
        record: '40 勝・47 敗・3 和', rank: '全年第 4 名', distinction: '職棒擴編至六隊・新軍勝率最高',
        annualFocus: '俊國熊與時報鷹同年加入，成田幸洋為球隊拿下隊史首勝',
        slogan: '歡迎新朋友，龍獅虎象加鷹熊',
        summary: '中華職棒在 1993 年由四隊擴編為六隊，俊國熊與時報鷹成為新軍。俊國首個球季取得 40 勝 47 敗 3 和，勝率 .460，是當年兩支新軍中表現較佳的一隊；日籍投手成田幸洋也在首季為熊隊拿下隊史第一勝。',
        highlights: ['俊國熊與時報鷹加入，中職進入六隊時代，年度口號以「龍獅虎象加鷹熊」迎接兩支新球隊。', '成田幸洋在 3 月 13 日完投九局、僅失一分，為俊國熊奪下隊史首勝，也是中職首位日籍勝投。', '俊國熊全年勝率 .460，創下新軍首季最高勝率；黃忠義等奧運銀牌國手成為球隊招牌。'],
        sources: [
            { label: 'TVBS：俊國熊隊史首戰與六隊時代', url: 'https://news.tvbs.com.tw/sports/644036' },
            { label: '中華時報：成田幸洋為俊國熊拿下隊史首勝', url: 'https://chtime.ikh.tw/?id=q39oboxd8q5f&pn=vw' },
            { label: '自由體育：俊國熊 1993 年勝率與新軍紀錄', url: 'https://sports.ltn.com.tw/news/paper/1437401' }
        ]
    },
    1994: {
        teamName: '俊國熊', heading: '威爾單季狂飆兩百次三振，寫下中職首次紀錄',
        record: '29 勝・59 敗・2 和', rank: '全年第 6 名', distinction: '威爾成為中職首位單季 200 次三振投手',
        annualFocus: '威爾以 231.1 局送出 200 次三振，成為聯盟第一人',
        summary: '俊國熊戰績陷入低潮，但左投威爾扛起輪值，整季投 231.1 局、送出 200 次三振，成為中職史上首位單季三振突破兩百次的投手。黃忠義回憶球隊開季低迷時曾萌生轉隊念頭，熊隊的困境也逐漸浮上檯面。',
        highlights: ['威爾整季投出 200 次三振，為中職史上首位單季達成者；紀錄直到 2004 年才被林英傑超越。', '黃忠義曾回憶當年開季低迷、球隊氣氛各有想法，自己一度只想轉隊。', '俊國熊全年 29 勝 59 敗 2 和，上、下半季皆排名第六；球季後吳思賢與球團的爭議延續到隔年。'],
        sources: [
            { label: '運動視界：威爾 1994 年投出中職首個單季 200 次三振', url: 'https://www.sportsv.net/articles/70978' },
            { label: 'NOWnews：黃忠義回憶俊國熊 1994 年低潮', url: 'https://www.nownews.com/amp/news/5778981' }
        ]
    },
    1995: {
        teamName: '俊國熊', heading: '張耀騰終結盜壘王五連霸，球團年末易主興農',
        record: '40 勝・58 敗・2 和', rank: '全年第 6 名', distinction: '張耀騰獲盜壘王・俊國熊最後一季',
        annualFocus: '張耀騰拿下盜壘王、中斷林易增五連霸；球季後興農取得球團經營權',
        summary: '俊國熊最後一季仍在戰績後段，但張耀騰以速度與跑壘表現拿下盜壘王，終結兄弟象林易增的五連霸，並獲選最佳九人與金手套。球季後俊國建設轉讓球團股權給興農，俊國熊隊名走入歷史，球隊自下一季改以興農熊之名出賽。',
        highlights: ['張耀騰以 45 次盜壘成為中職第二位盜壘王，終結林易增連續五季稱王，並獲最佳九人與金手套。', '開季前，吳思賢因薪資及秋訓爭議向聯盟申請仲裁，成為首位提出仲裁的本土球員。', '11 月俊國建設轉讓球團股權，興農成為最大股東，俊國熊改名興農熊。'],
        sources: [
            { label: 'TVBS：俊國熊轉賣興農', url: 'https://news.tvbs.com.tw/sports/684427' },
            { label: 'TSNA：吳思賢成為首位申請仲裁的本土球員', url: 'https://tsna.com/article/61771' },
            { label: 'TVBS：張耀騰終結林易增盜壘王五連霸', url: 'https://news.tvbs.com.tw/sports/1842269' }
        ]
    },
    1996: {
        teamName: '興農熊', heading: '興農牛在球季中誕生，吉祥物與隊名一起換成「牛」',
        record: '28 勝・69 敗・3 和', rank: '全年第 6 名', distinction: '下半季改名興農牛',
        annualFocus: '球季中完成收購並改隊名，興農牛在下半季首次亮相',
        summary: '興農公司在 1995 年入主俊國熊後，球隊先以「興農熊」之名出賽。1996 年企業再取得剩餘股權，並在下半季改名「興農牛」，吉祥物也從熊換成牛，正式建立興農牛的球隊識別。',
        highlights: ['上半季仍以興農熊隊名出賽，下半季正式更名興農牛。', '球隊代表吉祥物改為牛，隊名與企業識別連結，沿用至 2012 年。', '全年 28 勝 69 敗 3 和，這是興農牛隊名初登場的球季成果。'],
        sources: [{ label: '自由體育：興農公司收購並更名興農牛', url: 'https://sports.ltn.com.tw/news/breakingnews/2841460' }]
    },
    1997: {
        teamName: '興農牛', heading: '與洛杉磯道奇展開合作，勇壯等洋將陸續來台',
        record: '45 勝・48 敗・3 和', rank: '全年第 5 名', distinction: '道奇合作計畫啟動',
        annualFocus: '展開道奇合作與多明尼加移地訓練，改造球隊養成方式',
        summary: '興農牛與美國職棒洛杉磯道奇隊建立合作，包含教練與訓練資源交流、赴多明尼加棒球學校春訓，以及協助引進洋將。這項合作成為球隊後續幾年的重要補強管道，勇壯也自本季起披上牛隊球衣。',
        highlights: ['興農牛與道奇隊建立長期合作關係，球員赴多明尼加接受移地訓練。', '道奇協助提供教練及洋將資源，勇壯從 1997 年起效力興農牛九年。', '全年 45 勝 48 敗 3 和，合作計畫成為球隊重整的重要起點。'],
        sources: [
            { label: '數位典藏：興農牛與道奇合作及多明尼加訓練', url: 'https://catalog.digitalarchives.tw/item/00/32/0b/e2.html' },
            { label: '運動視界：勇壯經道奇合作計畫來台、效力興農九年', url: 'https://www.sportsv.net/articles/125868' }
        ]
    },
    1998: {
        teamName: '興農牛', heading: '怪力男單季四冠王，31 轟火力牽引興農首度稱霸',
        record: '58 勝・45 敗・2 和', rank: '全年第 1 名', distinction: '例行賽冠軍・臺灣大賽亞軍',
        annualFocus: '怪力男以安打、打擊率、全壘打與打點包辦四項打擊獎，興農首度例行賽封王',
        summary: '職棒九年採單一球季賽制，興農牛以例行賽第一名進入總冠軍賽。洋將「怪力男」火力驚人，單季 31 轟並囊括多項打擊獎項，帶動球隊攻勢；總冠軍賽與味全龍鏖戰七場，最後一戰遭逆轉，與年度總冠軍擦身而過。',
        highlights: ['怪力男單季敲出 31 支全壘打，成為中職首位打擊四冠王。', '興農牛在單一球季制以 58 勝排名第一，首次以例行賽冠軍身分打總冠軍賽。', '總冠軍賽與味全龍戰至第七戰，最終以 3 勝 4 敗落敗。'],
        sources: [
            { label: 'CPBL：怪力男以四項打擊成績拿下四冠王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508351885306915' },
            { label: '華視：1998 年總冠軍賽第七戰', url: 'https://news.cts.com.tw/cts/general/199811/199811110021476.html' }
        ]
    },
    1999: {
        teamName: '興農牛', heading: '九二一地震讓例行賽停擺，牛隊球季少打二十二場',
        record: '30 勝・61 敗・2 和', rank: '全年第 6 名', distinction: '九二一地震停賽球季',
        annualFocus: '九二一大地震後中職停賽兩週，聯盟取消二十二場例行賽',
        summary: '九二一大地震重創中部後，中華職棒暫停賽事兩週，聯盟取消 22 場比賽，並於 10 月 4 日復賽。受到賽程異動影響，各隊例行賽場次不一；興農牛全年出賽 93 場，當季也從單一球季制回到上下半季賽制。',
        highlights: ['9 月 21 日原訂味全龍對興農牛的比賽因地震停賽。', '聯盟停賽兩週、取消 22 場比賽，10 月 4 日恢復例行賽。', '興農牛全年出賽 93 場，戰績 30 勝 61 敗 2 和；翌年恢復上下半季賽制。'],
        sources: [{ label: '運動視界：九二一地震與中職停賽、取消賽事', url: 'https://www.sportsv.net/articles/25803' }]
    },
    2000: {
        teamName: '興農牛', heading: '網羅味全龍舊將重組陣容，牛隊再闖臺灣大賽',
        record: '51 勝・38 敗・1 和', rank: '全年第 1 名', distinction: '上半季冠軍・臺灣大賽亞軍',
        annualFocus: '張泰山、葉君璋等龍隊球員加盟，興農奪得首座上半季冠軍',
        summary: '味全龍解散後，張泰山、葉君璋等球員轉披興農牛戰袍，球隊戰力與人氣回升。興農拿下隊史首座上半季冠軍，再度與統一獅於臺灣大賽交手，雙方鏖戰七場，牛隊以 3 勝 4 敗惜敗。',
        highlights: ['味全龍解散後，張泰山、葉君璋等球員加入興農，成為新陣容核心。', '興農牛拿下隊史首座半季冠軍，並以全年第一名晉級臺灣大賽。', '與統一獅打滿七場，第二度在總冠軍系列賽以 3 勝 4 敗飲恨。'],
        sources: [{ label: '打狗高雄：味全龍球員加入與興農牛 2000 年奪冠歷程', url: 'https://takao.tw/taiwan-professional-baseball-team-2/' }]
    },
    2001: {
        teamName: '興農牛', heading: '張泰山擊出生涯第五百安，成為牛隊中心打者',
        record: '34 勝・51 敗・5 和', rank: '全年第 4 名', distinction: '張泰山達成生涯 500 安',
        annualFocus: '張泰山於 3 月 11 日敲出職棒生涯第 500 支安打',
        summary: '興農牛兩個半季都在後段名次，球季焦點落在張泰山的生涯里程碑。3 月 11 日他達成職棒生涯 500 安，成為球隊中心棒次的重要代表；其後持續累積長打與安打，成為興農牛時期最具代表性的打者之一。',
        highlights: ['張泰山在 3 月 11 日達成生涯 500 安，為職業生涯長期累積揭開新階段。', '張泰山自 2000 年加盟興農後，逐漸成為球隊中心打線與球迷熟悉的招牌球星。', '興農牛全年 34 勝 51 敗 5 和，未能取得季冠軍。'],
        sources: [{ label: 'CPBL：張泰山生涯里程碑回顧', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508285397251184' }]
    },
    2002: {
        teamName: '興農牛', heading: '蔡仲南初登板連勝六場，成為中職新人王與票房焦點',
        record: '44 勝・45 敗・1 和', rank: '全年第 3 名', distinction: '蔡仲南獲年度新人王',
        annualFocus: '蔡仲南以新人身分拿下 14 勝，初登板起連續六場先發獲勝',
        summary: '興農以當時創紀錄的 600 萬元簽約金簽下蔡仲南，這位國際賽成名的投手很快成為球季焦點。他從職棒初登板起先發六連勝，單季拿下 14 勝並獲新人王，帶動球隊人氣與進場人數明顯成長。',
        highlights: ['蔡仲南以 600 萬元簽約金加盟，當時創下中職新人簽約金紀錄。', '職棒初登板起先發六連勝，單季 14 勝獲年度新人王。', '蔡仲南帶起球迷關注，興農主場平均觀眾人數較前一年大幅成長。'],
        sources: [
            { label: 'CPBL：蔡仲南加盟後連勝與票房效應', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509308545223935' },
            { label: '自由體育：蔡仲南新人年與簽約金紀錄', url: 'https://sports.ltn.com.tw/news/breakingnews/4290751' }
        ]
    },
    2003: {
        teamName: '興農牛', heading: '蔡仲南再拿十一勝，興農重返上半季冠軍行列',
        record: '62 勝・32 敗・6 和', rank: '全年第 2 名', distinction: '上半季冠軍・臺灣大賽亞軍',
        annualFocus: '興農以 0.660 勝率拿下上半季冠軍，蔡仲南連續兩年成為先發主力',
        summary: '興農牛在陳威成帶領下拿下上半季冠軍，回到總冠軍賽舞台。蔡仲南延續新人年氣勢，再投出 11 勝；張泰山則成為隊史早期兼具長打與跑壘的代表人物。臺灣大賽中牛隊以 2 勝 4 敗不敵兄弟象。',
        highlights: ['興農以上半季 34 勝 15 敗 1 和封王，全年 62 勝創隊史單季勝場新高。', '蔡仲南連續第二年拿下雙位數勝投，成為球隊輪值核心。', '臺灣大賽以 2 勝 4 敗不敵兄弟象，年度總冠軍戰未能再進一步。'],
        sources: [{ label: 'CPBL：興農牛上半季封王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509590463027000' }]
    },
    2004: {
        teamName: '興農牛', heading: '陽建福扛下封王戰，興農七戰逆轉奪隊史首冠',
        record: '54 勝・43 敗・3 和', rank: '全年第 2 名', distinction: '下半季冠軍・年度總冠軍',
        annualFocus: '臺灣大賽先 2 勝 3 敗落後，興農連贏第六、七戰逆轉統一獅',
        summary: '興農牛在 2004 年下半季封王，臺灣大賽迎戰統一獅。系列賽先以 2 勝 3 敗陷入淘汰邊緣，接著連贏兩場完成逆轉；陽建福以穩定投球獲選總冠軍賽 MVP，球隊拿下隊史首座年度總冠軍。',
        highlights: ['臺灣大賽先落後統一獅 2 勝 3 敗，興農連贏最後兩戰封王。', '陽建福獲選總冠軍賽 MVP，成為系列賽封王的重要投手。', '這是興農牛隊史首座總冠軍，也讓連年經營壓力中的球團迎來重大轉折。'],
        sources: [{ label: 'CPBL：興農在例行賽最後一天封王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508792412886157' }]
    },
    2005: {
        teamName: '興農牛', heading: '四戰橫掃誠泰完成連霸，葉君璋成臺灣大賽 MVP',
        record: '53 勝・41 敗・6 和', rank: '全年第 1 名', distinction: '下半季冠軍・年度總冠軍・二連霸',
        annualFocus: '興農以臺灣大賽四連勝完成連霸，取得中職首屆亞洲職棒大賽代表權',
        summary: '興農牛衛冕之路從下半季封王開始，在臺灣大賽以 4 勝 0 敗橫掃誠泰 Cobras，成為中職首支二連霸球隊。捕手葉君璋獲系列賽 MVP；球隊隨後代表中職參加首屆亞洲職棒大賽，拿下季軍。',
        highlights: ['臺灣大賽四戰全勝擊敗誠泰 Cobras，完成隊史首度二連霸。', '葉君璋以攻守表現獲選總冠軍賽 MVP。', '興農代表中職參加首屆亞洲職棒大賽，最終在四隊中排名第三。'],
        sources: [{ label: 'CPBL：興農牛臺灣大賽四連勝完成二連霸', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508911105417827' }]
    },
    2006: {
        teamName: '興農牛', heading: '季後挑戰賽連續二十一局遭封鎖，衛冕路止於首輪',
        record: '48 勝・49 敗・3 和', rank: '全年第 3 名', distinction: '季後挑戰賽止步',
        annualFocus: '統一獅直落三淘汰興農，最後兩戰連續完封、牛隊 21 局未得分',
        summary: '興農牛在連霸後仍取得季後挑戰賽資格，卻遇上投打俱佳的統一獅。獅隊連贏三場晉級，最後兩戰連續完封牛隊，興農連續 21 局沒有得分，三連霸希望就此中止。',
        highlights: ['季後挑戰賽遭統一獅直落三淘汰，無緣連續第三年打進臺灣大賽。', '系列賽最後兩戰連續遭完封，連續 21 局未能得分，創下當時季後賽紀錄。', '全年 48 勝 49 敗 3 和，以第三名進入挑戰賽。'],
        sources: [{ label: 'CPBL：統一獅直落三淘汰興農牛', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509368404473907' }]
    },
    2007: {
        teamName: '興農牛', heading: '戰績低迷仍握有選秀狀元籤，林益全成為重建目標',
        record: '42 勝・57 敗・1 和', rank: '全年第 6 名', distinction: '選進林益全作為未來中心打者',
        annualFocus: '球季後以選秀狀元選進林益全，為打線尋找下一位核心',
        summary: '興農牛連續兩季未能打進季後賽，球團將重整希望放在選秀補強。2007 年季後選秀以第一指名選進南英商工強打林益全，期待他接續張泰山等核心打者，成為下一代中心棒次。',
        highlights: ['全年 42 勝 57 敗 1 和，連續第二年無緣季後賽。', '球團在季後選秀以第一指名選進林益全，鎖定打線長期核心。', '林益全後來於 2009 年新人球季奪下年度 MVP 與新人王，成為這次選秀的代表成果。'],
        sources: [{ label: '自由體育：興農牛以第一指名選進林益全', url: 'https://sports.ltn.com.tw/amp/news/paper/178515' }]
    },
    2008: {
        teamName: '興農牛', heading: '牛隊長打火力陷入低潮，單季全壘打不到三十支',
        record: '37 勝・62 敗・1 和', rank: '全年第 6 名', distinction: '團隊長打陷入低潮',
        annualFocus: '上半季全隊只轟八支全壘打，長打數甚至不及布雷個人',
        summary: '興農牛的長打火力在 2008 年明顯熄火，上半季全隊僅擊出 8 支全壘打，連統一獅洋砲布雷個人都比牛隊全隊多。牛隊全年排名墊底，球季後取得選秀狀元林益全的加盟，並在陣容重整中迎接新一季。',
        highlights: ['上半季全隊只有 8 支全壘打，低於統一獅布雷個人的 10 轟。', '全年 37 勝 62 敗 1 和，連續第三季未取得季後賽資格。', '2007 年選進的林益全於球季後正式加盟，為低迷打線帶來重建期待。'],
        sources: [
            { label: 'CPBL：興農牛上半季全隊僅八轟', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509067792069036' },
            { label: '運動視界：林益全加盟與新人年回顧', url: 'https://www.sportsv.net/articles/100688' }
        ]
    },
    2009: {
        teamName: '興農牛', heading: '林益全新人年五度抱獎，從新人王一路拿到年度 MVP',
        record: '57 勝・60 敗・3 和', rank: '全年第 3 名', distinction: '林益全獲新人王・打點王・年度 MVP',
        annualFocus: '林益全以新人身分包辦新人王、打點王與年度 MVP 等五項大獎',
        slogan: '敢拼敢鬥興農軍、奪冠贏回球迷心',
        summary: '林益全在新人球季出賽全勤，擊出 169 支安打、18 支全壘打並貢獻 113 分打點，拿下新人王、打點王、金手套、最佳十人與年度 MVP 五項大獎。這位被稱為「神拳」的新秀成為興農打線新核心，也讓低潮中的球隊重新有了焦點。',
        highlights: ['林益全新人年擊出 169 安、113 打點，多項成績刷新新人紀錄。', '他一舉拿下新人王、打點王、年度 MVP、金手套與最佳一壘手等五項獎。', '興農全年 57 勝 60 敗 3 和，口號「敢拼敢鬥興農軍、奪冠贏回球迷心」也呼應球隊重振企圖。'],
        sources: [
            { label: 'CPBL：2009 年興農牛口號與球員加盟', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509839299033115' },
            { label: '人間福報：林益全新人年抱五大獎', url: 'https://www.merit-times.com.tw/NewsPage.aspx?unid=158060' }
        ]
    },
    2010: {
        teamName: '興農牛', heading: '高津臣吾加入助牛封王，臺灣大賽四戰僅得四分',
        record: '65 勝・53 敗・2 和', rank: '全年第 1 名', distinction: '上半季冠軍・臺灣大賽亞軍',
        annualFocus: '興農睽違四年再奪半季冠軍，臺灣大賽遭兄弟象直落四',
        summary: '興農牛引進日職名將高津臣吾，搭配林英傑、陽建福等投手，奪下睽違四年的上半季冠軍。球隊全年勝率第一並取得臺灣大賽主場優勢，卻被兄弟象投手群壓制，四戰合計只得 4 分，無緣隊史第三冠。',
        highlights: ['高津臣吾來台助陣，與林英傑、陽建福等投手組成牛隊投手戰力。', '興農以上半季冠軍身分重返臺灣大賽，是 2006 年後首度封王。', '兄弟象在臺灣大賽直落四勝出，興農四場只攻下 4 分。'],
        sources: [{ label: 'CPBL：高津臣吾加盟、興農封王與臺灣大賽回顧', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508072652390761' }]
    },
    2011: {
        teamName: '興農牛', heading: '「興農八壯士」全本土應戰，投手輪值一度只剩八人',
        record: '45 勝・72 敗・3 和', rank: '全年第 4 名', distinction: '中職首支全本土打完整季',
        annualFocus: '不聘洋將的全本土政策引發討論，牛隊投手群被稱為「八壯士」',
        summary: '興農牛實施全本土政策，不聘洋將打完整季，成為中職首支以全本土陣容完成球季的球隊。開季可用投手一度只有八人，球迷以「興農八壯士」稱呼承擔大量局數的本土投手群；這項政策讓球隊特色鮮明，也暴露輪值深度不足的問題。',
        highlights: ['全季不聘洋將，成為中職首支以全本土陣容完成球季的隊伍。', '開季投手可用人數一度僅八人，「興農八壯士」成為當年球迷熟悉的稱呼。', '投手負擔沉重，球季以 45 勝 72 敗 3 和收尾，球團年底與陽建福、鄭兆行簽下複數年約。'],
        sources: [
            { label: '自由體育：「興農八壯士」全本土政策回顧', url: 'https://sports.ltn.com.tw/news/paper/1017059' },
            { label: '興農牛隊史大事紀：全本土政策與複數年合約', url: 'https://n.yam.com/Article/20121023910416' }
        ]
    },
    2012: {
        teamName: '興農牛', heading: '新球衣與吉祥物「布爾」亮相，母企業年末宣布轉手',
        record: '38 勝・77 敗・5 和', rank: '全年第 4 名', distinction: '興農牛最後一季・球團尋求接手企業',
        annualFocus: '10 月 22 日興農公司宣布停止經營並尋找買主，興農牛隊名走入歷史',
        summary: '興農牛以新球衣與吉祥物「布爾」迎接球季，試圖重塑球隊形象；但球季結束前，母企業興農公司宣布停止經營並尋找接手企業。球隊全年以 38 勝 77 敗 5 和作收，興農牛隊名告一段落，後由義聯集團接手並改名義大犀牛。',
        highlights: ['球團委託橙果設計新球衣與吉祥物「布爾」，作為新興農牛元年的識別更新。', '10 月 22 日母企業召開董事會，宣布停止經營球隊並尋求新企業接手。', '興農牛最後一季以 38 勝 77 敗 5 和作收；義聯集團年底接手，球隊改名義大犀牛。'],
        sources: [
            { label: '自由體育：興農牛新球衣與吉祥物「布爾」亮相', url: 'https://sports.ltn.com.tw/news/breakingnews/608857' },
            { label: '公視：興農公司宣布停止經營並尋找接手企業', url: 'https://news.pts.org.tw/article/224187' }
        ]
    }
};

Object.entries(sinonBullsArchiveProfiles).forEach(([yearText, entry]) => {
    const year = Number(yearText);
    const { teamName, ...profile } = entry;
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...profile,
                sources: [sinonBullsTeamHistorySource, {
                    label: 'NOWnews：興農牛隊史大事紀',
                    url: 'https://n.yam.com/Article/20121023910416'
                }, ...(profile.sources || [])]
            }
        }
    };
});

// 中信兄弟可用的年度焦點，補充例行賽成績與冠軍資訊以外的隊史紀事。
const brotherTeamAnnualFocusData = {
    2017: '林智勝等五名主力未列季後賽名單，季後球團宣布釋出七名球員',
    2018: '艾迪頓、紐維拉同季投出無安打比賽，寫下中職首見紀錄',
    2019: '0：11 落後逆轉勝桃猿，創聯盟最大分差逆轉紀錄',
    2020: '臺灣大賽 3 勝 1 敗聽牌後遭統一獅逆轉，延續「七年六亞」',
    2021: '睽違十一年再奪冠，寫下「七年六亞」後的封王一刻',
    2022: '林威助帶兵台灣大賽八連勝，兄弟在洲際完成連霸',
    2023: '林威助季中轉任海外顧問，彭政閔接掌一軍兵符執教 94 場',
};

// 統一獅年度焦點以隊史紀錄或個人里程碑呈現，避免重述球季名次與冠軍結果。
const unitedLionsAnnualFocusData = {
    1990: '3 月 17 日隊史首戰以 4：3 擊敗兄弟象，拿下隊史首勝',
    1991: '與味全龍臺灣大賽鏖戰七場，抱回隊史首座總冠軍',
    1992: '6 月 12 日拿下隊史第 100 勝，由謝長亨完投勝投',
    1993: '王漢單季 22 勝追平聯盟紀錄；獅隊下半季第 38 場就封王',
    1994: '擊敗包辦上下半季的兄弟象，拿下挑戰盃冠軍',
    1995: '包辦上下半季冠軍，赴日奪下亞太超級棒球賽冠軍',
    1996: '擊敗味全龍衛冕，拿下隊史首次二連霸',
    1997: '全年勝率第一，卻因兩個半季都屈居第二而無緣臺灣大賽',
    1998: '單一球季制元年止步季後挑戰賽，未能闖進臺灣大賽',
    1999: '取得臺南市立棒球場經營權，成為中職首支認養主場的球隊',
    2000: '七戰擊敗興農牛，睽違五年再奪年度總冠軍',
    2001: '臺灣大賽 3 勝 1 敗聽牌後遭兄弟象連追三勝逆轉',
    2002: '全年僅拿下 32 勝，寫下當時隊史最低勝場數',
    2003: '6 月 24 日由柯建鋒敲出隊史第 700 支全壘打',
    2004: '高國慶、陽森等新秀助獅隊奪下上半季冠軍',
    2005: '潘威倫單季投 171 局、拿下 12 勝，扛起本土先發輪值',
    2006: '5 月至 6 月拉出 17 連勝，刷新中職單隊連勝紀錄',
    2007: '費古洛總冠軍賽三次先發全勝，獲選系列賽 MVP',
    2008: '隊名更為「統一7-ELEVEn獅」，並闖進亞洲職棒大賽決賽',
    2009: '臺灣大賽第六戰延長 17 局、打了 6 小時 14 分，獅隊仍完成三連霸',
    2010: '潘威倫球季最終戰奪生涯百勝，成為中職第三位百勝投手',
    2011: '臺灣大賽擊敗 Lamigo 桃猿，奪回年度總冠軍',
    2012: '上半季封王後再闖臺灣大賽，最終不敵 Lamigo 桃猿',
    2013: '直落四擊敗義大犀牛，拿下隊史第九冠',
    2014: '郭泓志重返中職披上獅袍，成為球季焦點',
    2015: '球團將背號 1 保留給球迷，推出「HERO」一號隊友球衣',
    2016: '鄭鎧文新人年轟出 24 支全壘打，刷新中職新人紀錄',
    2017: '跨季連續 131 場得分紀錄告終，仍闖進季後挑戰賽',
    2018: '瑞安投出中職首場完全比賽，郭阜林以再見全壘打收尾',
    2019: '單季 70 敗刷新隊史紀錄，林岳平季後接掌一軍',
    2020: '臺灣大賽從 1 勝 3 敗落後連追三勝，拿下隊史第十冠',
    2021: '投手群接力守成，統一獅非自力封王後再闖臺灣大賽',
    2022: '潘武雄在台南主場舉行「最後一武」引退賽',
    2023: '上半季封王，林岳平帶隊第三度拿下季冠軍',
    2024: '古林睿煬拿下年度 MVP，季後申請旅外並加盟日本火腿',
    2025: '季後挑戰賽 2 勝 0 敗聽牌後遭樂天「讓二追三」逆轉',
    2026: '5 月 13 日達成隊史第 2,000 勝'
};

const lionsChineseNumber = number => {
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    if (number < 10) return digits[number];
    if (number < 20) return `十${number % 10 ? digits[number % 10] : ''}`;
    return `${digits[Math.floor(number / 10)]}十${number % 10 ? digits[number % 10] : ''}`;
};

const unitedLionsLegacyArchiveProfiles = {
    1990: {
        heading: '職棒元年首戰擊敗兄弟，獅隊拿下隊史第一勝',
        summary: '統一獅以中職創始球隊之一的身分迎接職棒元年。3 月 17 日隊史首戰，獅隊以 4：3 擊敗兄弟象，從聯盟第一個賽事週末就留下隊史首勝。',
        highlights: ['統一獅是中華職棒元年四支創始球隊之一。', '3 月 17 日首戰以 4：3 擊敗兄弟象，拿下隊史第一勝。', '曾智偵、謝長亨等球員成為創隊初期的核心班底。']
    },
    1991: {
        heading: '七戰擊退味全龍，職棒第二年就抱回隊史首冠',
        summary: '統一獅在職棒第二年打進臺灣大賽，與味全龍鏖戰七場後以 4 勝 3 敗奪冠。這座冠軍成為早期獅迷共同記憶，也讓球隊迅速站穩中職競爭行列。',
        highlights: ['臺灣大賽打滿七場，統一獅以 4 勝 3 敗擊敗味全龍。', '鄭昆吉帶隊拿下統一獅隊史首座年度總冠軍。', '曾智偵、謝長亨等創隊班底成為首冠骨幹。']
    },
    1992: {
        heading: '謝長亨完投拿下隊史百勝，獅隊走過創隊初期',
        summary: '統一獅在職棒第三年逐步累積隊史紀錄。6 月 12 日，謝長亨完投獲勝，替球隊拿下隊史第 100 勝；投手群以本土先發搭配洋將，延續初代獅隊的競爭力。',
        highlights: ['6 月 12 日謝長亨完投勝，統一獅達成隊史第 100 勝。', '林克與卡羅入選年度最佳十人。', '謝長亨持續擔任本土投手群的代表人物。']
    },
    1993: {
        heading: '王漢單季 22 勝寫紀錄，獅隊下半季快速封王',
        summary: '洋投王漢投出統一獅隊史代表性球季，單季 22 勝至今仍是中職單季最多勝紀錄。獅隊下半季只打 38 場便先登上第一，之後與兄弟象爭奪年度冠軍，系列賽以 2 勝 4 敗落敗。',
        highlights: ['王漢單季 22 勝 5 敗、勝率 .815，刷新當時單季勝投紀錄。', '獅隊下半季僅打 38 場就封王，成為當時最快封王紀錄。', '總冠軍賽以 2 勝 4 敗不敵兄弟象。'],
        sources: [{ label: '中央社：王漢單季 22 勝紀錄', url: 'https://www.cna.com.tw/news/aspt/201905090130.aspx' }]
    },
    1994: {
        heading: '兄弟象包辦季冠軍，統一獅以挑戰盃留下勝利',
        summary: '兄弟象包辦上下半季冠軍，依當年賽制直接成為年度總冠軍。統一獅則在挑戰盃賽事擊敗兄弟象，替球隊留下不同於臺灣大賽的年度對決記憶。',
        highlights: ['兄弟象包辦上下半季冠軍，該年未舉行臺灣大賽。', '統一獅擊敗兄弟象，奪得挑戰盃冠軍。', '謝長亨、王漢與郭進興持續支撐獅隊投手陣容。']
    },
    1995: {
        heading: '橫掃上下半季，再赴日本奪下亞太超級棒球賽冠軍',
        summary: '統一獅包辦上下半季冠軍，直接成為年度總冠軍，並代表中職出戰亞太超級棒球賽。球隊先以 1：0 擊敗日本大榮鷹，再於決賽以 3：1 擊敗韓國韓火鷹，拿下台灣職棒史上首座由單一球團贏得的正式國際賽冠軍。',
        highlights: ['包辦上下半季冠軍，依賽制直接封王，無須另打臺灣大賽。', '亞太超級棒球賽先勝日本大榮鷹，再於決賽擊敗韓國韓火鷹。', '郭進興、王漢、謝長亨與阿波里那各自拿下至少 10 勝。'],
        sources: [{ label: 'CPBL：統一獅 1995 年亞太超級棒球賽', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509713020586356' }]
    },
    1996: {
        heading: '臺灣大賽擊退味全龍，獅隊完成隊史首次二連霸',
        summary: '統一獅再次於臺灣大賽與味全龍交手，最終以 4 勝 2 敗衛冕，完成隊史首次二連霸。郭進興連續第二季拿下單季 20 勝，與曾智偵等本土主力共同撐起獅隊陣容。',
        highlights: ['臺灣大賽以 4 勝 2 敗擊敗味全龍，連續第二年奪冠。', '統一獅完成隊史首度二連霸。', '郭進興連續第二年投出單季 20 勝。']
    },
    1997: {
        heading: '全年勝率高居第一，卻因兩個半季都第二而無緣爭冠',
        summary: '統一獅全年勝率 .652 高居聯盟第一，卻在上下半季都以第二名作收，依當年賽制無法取得臺灣大賽門票。例行賽的強勢與季後賽缺席形成鮮明落差，成為這季最令人惋惜的故事。',
        highlights: ['全年勝率 .652、全年戰績第一，領先多支競爭球隊。', '上下半季都排名第二，未能取得臺灣大賽資格。', '吳俊良、曾智偵、羅偉與羅得入選年度最佳十人。']
    },
    1998: {
        heading: '單一球季制上路，季後挑戰賽再遇味全龍',
        summary: '中職改採單一球季制，統一獅打滿 98 場例行賽後以第二名進入季後挑戰賽，仍未能擊敗味全龍、無緣臺灣大賽。聯盟賽制改變，讓球隊整季排名首次成為直接的季後賽門票依據。',
        highlights: ['中職自本季起改採單一球季制，統一獅完成 98 場例行賽。', '統一獅以全年第二名進入季後挑戰賽。', '季後挑戰賽遭味全龍淘汰，未能晉級臺灣大賽。']
    },
    1999: {
        heading: '接手臺南球場經營，獅隊開啟職棒主場經營新路',
        summary: '統一獅取得臺南市立棒球場經營權，成為中職首支認養主場的球隊。球團投入人力與經費整修球場、改善觀賽環境，將臺南逐步經營成獅迷熟悉的主場，也為中職屬地主場模式留下重要範例。',
        highlights: ['統一企業取得臺南市立棒球場經營權，開始長期認養主場。', '球團整修球場並改善設施，內野種植草皮成為當年新景象。', '獅隊持續以黃甘霖、羅敏卿等球員串連投打陣容。'],
        sources: [{ label: '統一獅官方：隊史與臺南主場經營', url: 'https://www.uni-lions.com.tw/about/field' }]
    },
    2000: {
        heading: '七戰擊敗興農牛，獅隊睽違五年重返冠軍',
        summary: '統一獅在例行賽後段反彈，重返臺灣大賽與興農牛鏖戰七場，最後以 4 勝 3 敗封王。這是球隊睽違五年的年度總冠軍，也替新世代獅隊重新打開爭冠篇章。',
        highlights: ['臺灣大賽打滿七場，統一獅以 4 勝 3 敗擊敗興農牛。', '黃甘霖與羅敏卿入選年度最佳十人。', '統一獅睽違五年再奪年度總冠軍。']
    },
    2001: {
        heading: '3 勝 1 敗聽牌仍遭逆轉，兄弟象連追三勝奪冠',
        summary: '統一獅先在季後挑戰賽擊敗和信鯨，再於臺灣大賽對兄弟象取得 3 勝 1 敗聽牌。球隊只差一勝就能衛冕，卻連吞三敗痛失冠軍；獲選敗隊優秀球員的王傳家落淚領獎，成為系列賽令人難忘的一幕。',
        highlights: ['季後挑戰賽擊敗和信鯨，獅隊取得臺灣大賽門票。', '臺灣大賽曾以 3 勝 1 敗聽牌，兄弟象其後連追三勝逆轉。', '王傳家獲選敗隊優秀球員，頒獎時落淚的畫面留在獅迷記憶中。'],
        sources: [{ label: '自由體育：回顧 2001 年 3 勝 1 敗遭逆轉', url: 'https://sports.ltn.com.tw/news/paper/1411336' }]
    },
    2002: {
        heading: '全年僅 32 勝寫下隊史低點，獅隊進入重整期',
        summary: '2001 年痛失冠軍後，統一獅在新球季陷入低潮，全年僅拿下 32 勝，創下當時隊史最低勝場數。球隊未能取得季後賽資格，陣容與戰力也開始面臨重新整理。',
        highlights: ['全年僅 32 勝，寫下當時隊史最低勝場數。', '上下半季皆未能進入爭冠行列。', '黃甘霖入選年度最佳十人，成為低潮球季的個人亮點。']
    },
    2003: {
        heading: '柯建鋒敲出隊史第七百轟，獅隊累積新里程碑',
        summary: '統一獅持續調整陣容，年輕球員逐步取得出賽機會。6 月 24 日，柯建鋒敲出隊史第 700 支全壘打，替球隊留下攻擊火力的重要里程碑；潘威倫則在第二個完整球季站穩先發輪值。',
        highlights: ['6 月 24 日柯建鋒敲出統一獅隊史第 700 支全壘打。', '吉見宏明與陳連宏入選年度最佳十人。', '潘威倫進入第二個完整球季，逐步成為本土先發主力。']
    },
    2004: {
        heading: '高國慶、陽森等新秀領軍，獅隊從低評價中搶下上半季冠軍',
        summary: '統一獅補進高國慶、陽東益，並透過交易取得陽森，讓年輕內野成為新主力。這支季前不被看好的隊伍在 2004 年奪下上半季冠軍，之後與興農牛打到臺灣大賽第七戰才落敗。',
        highlights: ['高國慶、陽東益與陽森加入後，年輕內野逐漸成形。', '獅隊拿下上半季冠軍，重返臺灣大賽。', '臺灣大賽與興農牛戰至第七場，以 3 勝 4 敗落敗。'],
        sources: [{ label: 'CPBL：統一獅 2004 年上半季封王班底', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509715578779761' }]
    },
    2005: {
        heading: '潘威倫投滿 171 局扛起輪值，獅隊季後挑戰賽止步',
        summary: '統一獅全年未能取得季冠軍，季後挑戰賽遭誠泰 Cobras 淘汰。潘威倫單季拿下 12 勝、投出 171 局，成為球隊本土先發輪值的穩定支柱；球隊也持續讓年輕球員接棒。',
        highlights: ['潘威倫單季 12 勝、投 171 局，持續擔任本土先發主力。', '陽森入選年度最佳十人。', '季後挑戰賽以 1 勝 3 敗遭誠泰 Cobras 淘汰。']
    },
    2006: {
        heading: '五月到六月豪取十七連勝，寫下中職最長連勝紀錄',
        summary: '統一獅在 5 月 19 日至 6 月 23 日間一口氣拿下 17 連勝，刷新中職單隊連勝紀錄。這波連勝將球隊送進爭冠行列，獅隊一路挺進臺灣大賽，最終以 2 勝 4 敗不敵 La New 熊。',
        highlights: ['5 月 19 日至 6 月 23 日連贏 17 場，刷新中職單隊連勝紀錄。', '潘威倫與洋投比爾等先發投手帶動連勝浪潮。', '統一獅闖進臺灣大賽，最終以 2 勝 4 敗不敵 La New 熊。'],
        sources: [{ label: 'CPBL：統一獅 2006 年 17 連勝', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509328911734199' }]
    },
    2007: {
        heading: '費古洛連三場先發奪勝，獅隊在第七戰封王',
        summary: '統一獅與 La New 熊在臺灣大賽打滿七場，費古洛連續三場先發都拿下勝投、三度獲選單場 MVP，並抱走系列賽 MVP。第七戰由他完投九局，獅隊以 4：2 封王，之後展開隊史首次三連霸。',
        highlights: ['費古洛在臺灣大賽連續三場先發獲勝，成為系列賽最關鍵的投手。', '第七戰費古洛完投九局，獅隊以 4：2 擊敗 La New 熊。', '布雷單季 33 轟拿下全壘打王，成為當年獅隊長打火力的代表。']
    },
    2008: {
        heading: '改以統一7-ELEVEn獅出賽，連霸後再登亞洲決賽',
        summary: '球隊本季正式以「統一7-ELEVEn獅」之名出賽，並在臺灣大賽擊敗 La New 熊，完成二連霸。獅隊接著代表中職參加亞洲職棒大賽，擊敗韓國 SK 飛龍闖進決賽，最終以一分差惜敗埼玉西武獅。',
        highlights: ['球團冠名正式納入隊名，開啟「統一7-ELEVEn獅」時期。', '臺灣大賽擊敗 La New 熊，連續第二年奪冠。', '亞洲職棒大賽以 10：4 擊敗 SK 飛龍晉級，決賽以 0：1 不敵埼玉西武獅。']
    },
    2009: {
        heading: '高志綱蹲捕十七局，獅象鏖戰後完成三連霸',
        summary: '統一獅與兄弟象的臺灣大賽第六戰打到延長 17 局、歷時 6 小時 14 分鐘；捕手高志綱全場蹲捕，接下 251 球。獅隊雖輸掉這場馬拉松之戰，仍在第七戰以 4：3 奪冠，完成隊史首次三連霸。',
        highlights: ['第六戰延長 17 局、耗時 6 小時 14 分，是中職總冠軍賽代表性的馬拉松戰役。', '高志綱連蹲 17 局、接捕 251 球，留下「鐵捕」經典畫面。', '第七戰獅隊以 4：3 擊敗兄弟象，完成三連霸。']
    },
    2010: {
        heading: '潘威倫球季最終戰拿下生涯百勝',
        summary: '潘威倫在例行賽最後一戰對兄弟象先發七局失一分，替統一獅守住 2：1 勝利，也達成中職生涯第 100 勝，成為聯盟第三位百勝投手。這場勝利替球隊的球季留下清楚的個人里程碑。',
        highlights: ['10 月 3 日潘威倫先發七局失一分，獅隊以 2：1 擊敗兄弟象。', '潘威倫在球季最終戰達成生涯百勝，當時是中職第三位百勝投手。', '劉芙豪入選年度最佳十人，成為球隊打線代表。']
    },
    2011: {
        heading: '奪回年度總冠軍，投手群成為關鍵',
        summary: '統一獅拿下上半季冠軍並挺進臺灣大賽，系列賽以 4 勝 1 敗擊敗 Lamigo 桃猿，重返年度總冠軍。',
        highlights: ['王鏡銘在臺灣大賽多次登板，獲選系列賽最有價值球員。', '高國慶、張泰山與劉芙豪入選年度最佳十人。', '臺灣大賽以 4 勝 1 敗擊敗 Lamigo 桃猿。']
    },
    2012: {
        heading: '上半季封王，臺灣大賽未能奪冠',
        summary: '統一獅拿下上半季冠軍，以全年第一名進入臺灣大賽，最終以 2 勝 4 敗不敵 Lamigo 桃猿。',
        highlights: ['鎌田祐哉獲年度勝投王，高志綱獲捕手最佳十人。', '臺灣大賽第三戰潘威倫復出先發，替系列賽追回一勝。', '上半季封王後連續第二年打進臺灣大賽。']
    },
    2013: {
        heading: '下半季逆勢封王，奪得隊史第九冠',
        summary: '統一獅下半季後段追上領先球隊，奪下季冠軍後進入臺灣大賽，並以 4 勝 0 敗橫掃義大犀牛。',
        highlights: ['下半季後段從戰績末段反彈，最後一戰擊敗兄弟象封王。', '臺灣大賽直落四獲勝，拿下隊史第九座年度總冠軍。', '總教練陳連宏執教首季即帶隊奪下季冠軍與年度總冠軍。']
    },
    2014: {
        heading: '郭泓志重返中職，首季就扛起獅隊終結者',
        summary: '郭泓志返台加盟統一獅，2014 年首次完整效力中職，出賽 50 場並拿下 27 次救援成功，讓這位曾在大聯盟登板的左投成為獅隊牛棚焦點。球隊也在開幕戰讓他登板關門，迎接他回到中職的第一個賽季。',
        highlights: ['郭泓志在開幕戰登板救援，替統一獅守住勝利。', '整季出賽 50 場、拿下 27 次救援成功，成為獅隊牛棚的關門投手。', '郭泓志以防禦率 2.57 寫下回歸中職的代表球季。']
    },
    2015: {
        heading: '背號一號留給球迷，獅隊把看台也寫進球衣',
        summary: '統一獅將背號「1」保留給球迷，原穿 1 號的黃恩賜讓出背號；球團並推出「HERO，英雄」主題球衣與球迷英雄日，讓球迷穿上同款一號戰袍、成為球隊的「一號隊友」。這項安排後來成為獅隊長期延續的球迷傳統。',
        highlights: ['球團自本季起保留 1 號給球迷，黃恩賜將背號讓給獅迷。', '「球迷英雄日」邀請球迷穿上 1 號球衣，和球員以同一身分為球隊加油。', '年度主題「HERO，英雄」把球迷定位成場上球隊的一號隊友。']
    },
    2016: {
        heading: '鄭鎧文菜鳥球季轟出二十四發，改寫新人紀錄',
        summary: '統一獅新秀鄭鎧文在職棒第一年展現長打火力，8 月先打破新人單季全壘打紀錄，球季最後一戰再敲雙響砲，把紀錄推高到 24 轟。這個新人球季成為他和獅隊打線最鮮明的年度故事。',
        highlights: ['鄭鎧文 8 月擊出第 19 轟，超越中職新人單季全壘打舊紀錄。', '球季最終戰鄭鎧文單場雙響砲，將新人紀錄推進到 24 轟。', '統一獅在例行賽最後一戰攻下 22 分，改寫聯盟單場最終戰得分紀錄。']
    }
};

const unitedLionsArchiveProfiles = {
    2017: {
        heading: '跨季一百三十一場連續得分紀錄，在桃園畫下句點',
        summary: '統一獅自 2015 年起連續 131 場比賽都有得分，創下中職跨季紀錄，直到 2017 年 3 月 28 日以 0：4 遭 Lamigo 桃猿完封才中止。這項紀錄跨越一整季以上，成為獅隊長期穩定進攻的特殊註腳；球隊之後仍晉級季後挑戰賽。',
        highlights: ['跨季連續 131 場得分，是當時中職最高紀錄。', '3 月 28 日統一獅遭 Lamigo 桃猿完封，連續得分紀錄正式中止。', '獅隊仍以全年第二名進入季後挑戰賽，系列賽以 1 勝 3 敗敗給中信兄弟。']
    },
    2018: {
        heading: '瑞安完全壓制二十七人，郭阜林再見轟寫下中職首例',
        summary: '10 月 7 日，統一獅洋投瑞安面對中信兄弟讓 27 名打者依序出局，投出中職史上第一場完全比賽。兩隊九局打完仍是 0：0，郭阜林在九局下敲出生涯首支再見全壘打，讓這場紀錄之夜以 1：0 收尾。',
        highlights: ['瑞安連續解決 27 名打者，成為中職首位完全比賽投手。', '雙方九局打完仍未得分，郭阜林以再見全壘打為比賽畫下句點。', '獅隊季後先淘汰富邦悍將，再於臺灣大賽與 Lamigo 桃猿交手六場。']
    },
    2019: {
        heading: '隊史首度單季七十敗，林岳平季後接下重整任務',
        summary: '統一獅在中職三十年繳出隊史首次單季 70 敗，球季中總教練更迭，季後球團交由林岳平接掌一軍兵符。這個低潮球季成為獅隊重整教練團與投手戰力、迎接新階段的轉折點。',
        highlights: ['全年 48 勝、70 敗、2 和，單季敗場數刷新隊史紀錄。', '球季中劉育辰接任代理總教練，季後由林岳平接手一軍。', '林岳平在球員退役後由二軍投手教練轉任一軍總教練，開啟新的獅隊篇章。']
    },
    2020: {
        heading: '獅隊從一比三落後奪第十冠',
        summary: '統一獅在臺灣大賽先以 1 勝 3 敗落後中信兄弟，之後連贏三場逆轉封王。第七戰獅隊以 7：4 獲勝，拿下隊史第十座總冠軍；老將潘武雄獲選系列賽 MVP，賞給兄弟「七年六亞」魔咒。',
        highlights: ['臺灣大賽先落後 1 勝 3 敗，獅隊連續贏下最後三戰完成逆轉。', '第七戰陳傑憲敲出關鍵全壘打，統一獅以 7：4 封王。', '潘武雄以系列賽打擊表現獲選臺灣大賽 MVP，統一獅拿下隊史第十冠。']
    },
    2021: {
        heading: '靠投手群守下下半季冠軍，衛冕之路遭兄弟直落四',
        summary: '統一獅靠布雷克、古林睿煬、胡智為等先發與牛棚接力拿下下半季冠軍，連續兩年進入臺灣大賽。系列賽對上中信兄弟，獅隊未能延續前一年的逆轉氣勢，最後遭直落四淘汰。',
        highlights: ['下半季封王戰雖敗給富邦，仍因中信兄弟同日落敗而確定奪冠。', '布雷克下半季拿下 8 勝、防禦率 1.70，是投手群的重要支柱。', '臺灣大賽遭中信兄弟 4 連勝橫掃，無緣衛冕。']
    },
    2022: {
        heading: '「最後一武」告別台南，潘武雄結束十七年獅袍生涯',
        summary: '潘武雄在 10 月 1 日於台南主場舉行引退賽，統一獅以「最後一武」向這位效力 17 年的代表球星致意。球團邀來他的同期戰友與親友到場，滿場球迷陪伴他完成最後一次球員身分的進場與告別儀式。',
        highlights: ['潘武雄在台南主場完成生涯最後一場出賽，賽後正式引退。', '球團安排同期隊友、親友與球迷共同參與儀式，重現不同世代的獅隊記憶。', '潘武雄效力統一獅 17 年，長年是中心打線與球迷文化的代表人物。']
    },
    2023: {
        heading: '林岳平執教第三度奪季冠軍，獅隊再度從上半季出線',
        summary: '統一獅以 34 勝 24 敗 2 和拿下上半季冠軍，這是林岳平執教生涯第三座季冠軍。球隊在季後挑戰賽與樂天桃猿交手，未能晉級臺灣大賽；陳傑憲等核心球員則延續近年獅隊的主力陣容。',
        highlights: ['上半季封王是統一獅隊史第 16 座季冠軍，也是林岳平帶隊第三度奪季冠軍。', '季後挑戰賽以 1 勝 3 敗遭樂天桃猿淘汰。', '陳傑憲等核心球員延續主力陣容，球隊以季冠軍身分取得季後賽資格。']
    }
};

const unitedLionsEventSources = {
    2007: [{ label: 'CPBL：統一獅第七戰擊敗 La New 熊封王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509165622633615' }],
    2008: [{ label: '自由體育：統一獅更改隊名為統一7-ELEVEn獅', url: 'https://sports.ltn.com.tw/news/paper/190809' }],
    2009: [{ label: 'CPBL：總冠軍賽第六戰鏖戰 17 局', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509702159588675' }],
    2010: [{ label: '公視：潘威倫在球季最終戰達成百勝', url: 'https://news.pts.org.tw/article/160589' }],
    2014: [
        { label: 'CPBL：郭泓志中職回歸首戰登板救援', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507711470660469' },
        { label: '自由體育：郭泓志 2014 年救援表現回顧', url: 'https://sports.ltn.com.tw/news/breakingnews/2589596' }
    ],
    2015: [
        { label: '自由體育：統一獅推出球迷專屬一號球衣', url: 'https://sports.ltn.com.tw/news/paper/853873' },
        { label: '球迷英雄日與「HERO」一號隊友主題', url: 'https://www.sportsv.net/articles/12676' }
    ],
    2016: [
        { label: '中央社：鄭鎧文以 24 轟刷新新人紀錄', url: 'https://www.cna.com.tw/news/aspt/201610130475.aspx' },
        { label: 'CPBL：鄭鎧文刷新新人單季全壘打紀錄', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507399753449469' }
    ],
    2017: [{ label: '中職紀錄整理：統一獅跨季連續 131 場得分', url: 'https://zxc22.idv.tw/cpbl28/lists.asp?kind1=0&kind2=1&team=2' }],
    2018: [
        { label: 'CPBL：瑞安投出中職首場完全比賽', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507029593835470' },
        { label: '公視：瑞安完全比賽與郭阜林再見全壘打', url: 'https://news.pts.org.tw/article/408886' }
    ],
    2019: [{ label: '中央社：林岳平接任統一獅總教練', url: 'https://www.cna.com.tw/news/aspt/201910140112.aspx' }],
    2020: [
        { label: '公視：統一獅逆轉封王、拿下隊史第十冠', url: 'https://news.pts.org.tw/article/499490' },
        { label: '自由體育：獅隊在臺灣大賽完成 1 比 3 逆轉', url: 'https://sports.ltn.com.tw/news/breakingnews/3346044' }
    ],
    2021: [
        { label: '中央社：統一獅非自力封王拿下下半季冠軍', url: 'https://www.cna.com.tw/news/firstnews/202111185015.aspx' },
        { label: '自由體育：中信兄弟直落四橫掃統一獅', url: 'https://sports.ltn.com.tw/news/paper/1487687' }
    ],
    2022: [{ label: 'CPBL：潘武雄台南主場引退賽', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0M274828120667888716' }],
    2023: [{ label: '中央社：林岳平執教拿下隊史最多季冠軍', url: 'https://www.cna.com.tw/news/aspt/202406250427.aspx' }]
};

Object.entries({ ...unitedLionsLegacyArchiveProfiles, ...unitedLionsArchiveProfiles }).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const seasonNumber = year - 1989;
    const teamName = year <= 2016
        ? year === 1990 ? '統一獅1'
            : year === 1991 ? '統一獅2'
                : year <= 2003 ? '統一獅3'
                    : year <= 2006 ? '統一獅4'
                        : year <= 2008 ? '統一獅5' : '統一獅6'
        : '統一7-ELEVEn獅';
    const articleTeamName = year < 2008 ? '統一獅隊' : '統一7-ELEVEn獅隊';
    const pageTitle = `${articleTeamName}/${articleTeamName}的職棒${lionsChineseNumber(seasonNumber)}年`;
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...profile,
                annualFocus: unitedLionsAnnualFocusData[year],
                sources: [unitedLionsTeamHistorySource, {
                    label: `台灣棒球維基館｜統一獅職棒${lionsChineseNumber(seasonNumber)}年`,
                    url: `https://twbsball.dils.tku.edu.tw/index.php?title=${encodeURIComponent(pageTitle)}`
                }, ...(profile.sources || []), ...(unitedLionsEventSources[year] || [])]
            }
        }
    };
});

// 2017–2023 的隊史焦點與球季重點分開編寫，避免同一事蹟出現兩次。
const brotherTeamArchiveProfiles = {
    2017: {
        heading: '五名主力缺席季後賽，球團季後釋出七名球員',
        summary: '2017 年球季後段，林智勝、蔣智賢、張正偉、王勝偉、鄭達鴻等主力先後未列入一軍與季後賽名單，外界稱為「五虎將事件」。球團以紀律為由說明名單調整，季後另宣布釋出七名球員並表示將重整戰力；事件引發球迷對球隊決策與溝通方式的關注。',
        highlights: ['五名主力未列入季後挑戰賽名單，兄弟仍以 3 勝 1 敗淘汰統一獅。', '臺灣大賽面對 Lamigo 桃猿以 1 勝 4 敗落敗。', '球季後球團宣布釋出七名球員，表示考量長期發展與戰力重整；球團決策與溝通方式引發球迷廣泛討論。'],
        sources: [
            { label: '公視：五虎將未列季後賽名單', url: 'https://news.pts.org.tw/article/374210' },
            { label: '中央社：中信兄弟宣布釋出七名球員', url: 'https://www.cna.com.tw/news/firstnews/201711060415.aspx' }
        ]
    },
    2018: {
        heading: '艾迪頓、紐維拉接力投出無安打，創中職單季首見',
        summary: '中信兄弟洋投艾迪頓與紐維拉分別於 6 月、9 月投出無安打比賽，成為中職史上第一支單季有兩名投手達成此紀錄的球隊。兩場比賽讓投手與守備成為球季焦點，紐維拉九局送出十次三振、只靠保送與觸身球讓打者上壘。',
        highlights: ['6 月 9 日艾迪頓對統一獅投出無安打比賽。', '9 月 28 日紐維拉對 Lamigo 桃猿再投出無安打，送出十次三振。', '中職首度出現同一球隊在單季投出兩場無安打比賽；兄弟該季未取得季後賽資格。'],
        sources: [{ label: '中央社：紐維拉無安打，成為中職單季第二場', url: 'https://www.cna.com.tw/news/firstnews/201809285004.aspx' }]
    },
    2019: {
        heading: '從零比十一追到十五比十四，寫下史上最大分差逆轉',
        summary: '9 月 4 日對 Lamigo 桃猿，兄弟在前三局打完以 0：11 落後，打線其後追回分數，八局上由張志豪敲出超前安打，終場以 15：14 逆轉。這場克服十一分差的比賽刷新中職單場最大分差逆轉紀錄，成為球迷反覆回味的代表戰役。',
        highlights: ['兄弟在前三局未得分、落後十一分，第四局單局攻下八分追近差距。', '八局上陳子豪敲出追平安打，張志豪再以安打送回超前分。', '終場 15：14 逆轉桃猿，刷新中職單場最大分差逆轉紀錄；兄弟也拿下下半季冠軍。'],
        sources: [{ label: '中央社：兄弟 15：14 逆轉桃猿，締造紀錄', url: 'https://www.cna.com.tw/news/aspt/201909040375.aspx' }]
    },
    2020: {
        heading: '「七年六亞」魔咒延續，兄弟聽牌後遭統一逆轉',
        summary: '中信兄弟在臺灣大賽一度以 3 勝 1 敗聽牌，卻連吞三敗遭統一獅逆轉，七年間第六度在總冠軍賽屈居亞軍，延續球迷所稱的「七年六亞」魔咒。例行賽的代表一戰則是 7 月 1 日單場六轟、五支三分砲，以 20：0 擊敗樂天桃猿。',
        highlights: ['臺灣大賽兄弟先取得 3 勝 1 敗聽牌，隨後遭統一獅連追三勝逆轉。', '兄弟最終以 3 勝 4 敗落敗，這是球隊七年間第六度打進總冠軍賽、也第六度屈居亞軍。', '7 月 1 日兄弟單場六轟、五支三分砲，以 20：0 大勝樂天；單局四轟平紀錄，江國謙單局被敲四轟創紀錄。'],
        sources: [{ label: '中央社：兄弟六轟、五支三分砲以 20：0 勝桃猿', url: 'https://www.cna.com.tw/news/aspt/202007010430.aspx' }]
    },
    2021: {
        heading: '七年六度屈居亞軍後，兄弟睽違十一年再度封王',
        summary: '自 2014 年中信接手後，兄弟在八年間七度闖進台灣大賽，前六次都未能奪冠。2021 年球隊直落四擊敗統一獅，睽違十一年拿下總冠軍，也終結球迷熟悉的「七年六亞」等待；王威晨作為隊長帶隊完成這趟封王之路。',
        highlights: ['台灣大賽第四戰以 5：0 擊敗統一獅，系列賽直落四封王。', '這是兄弟象時期之後隊史第八冠，也是中信集團接手後首冠。', '詹子賢獲選台灣大賽 MVP，德保拉為勝隊優秀球員；德保拉同季蟬聯年度 MVP。'],
        sources: [
            { label: '中央社：中信兄弟破「七年六亞」魔咒奪冠', url: 'https://www.cna.com.tw/news/firstnews/202112015015.aspx' },
            { label: '中央社：王光輝逝世', url: 'https://www.cna.com.tw/news/firstnews/202108300084.aspx' },
            { label: 'CPBL：德保拉年度 MVP 二連霸', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L354829299607110984' }
        ]
    },
    2022: {
        heading: '疫情中靠板凳與年輕球員接力，洲際主場完成連霸',
        summary: '兄弟在球季中兩度面臨疫情考驗，下半季關鍵階段還有多名主力確診，板凳球員與年輕球員因此獲得更多機會。球隊闖過季後挑戰賽後，在台灣大賽直落四擊敗樂天桃猿，並創下總冠軍賽跨季八連勝，完成二連霸。',
        highlights: ['林威助帶隊連兩年奪冠，成為中職史上首位台灣大賽八連勝的總教練。', '台灣大賽第四戰以 3：2 擊敗樂天桃猿，洲際球場滿場球迷見證二連霸。', '兄弟在台灣大賽跨季八連勝，系列賽連續兩年都以直落四封王。'],
        sources: [
            { label: '中央社：疫情考驗下靠板凳、年輕球員完成連霸', url: 'https://www.cna.com.tw/news/aspt/202211090398.aspx' },
            { label: '中央社：兄弟二連霸，洲際滿場拋彩帶', url: 'https://www.cna.com.tw/news/aspt/202211095003.aspx' }
        ]
    },
    2023: {
        heading: '彭政閔季中接掌兵符，「恰總」迎來一軍新角色',
        summary: '開季僅 26 場後，兩連霸總教練林威助轉任海外發展顧問，原副領隊彭政閔接任一軍總教練。曾以球員身分陪伴兄弟多年的「恰恰」首次執掌一軍兵符，執教 94 場後因健康因素轉任二軍總教練兼農場主管，平野惠一則接任下一季一軍總教練。',
        highlights: ['彭政閔 5 月 10 日接任總教練，季中肩負衛冕軍調整任務。', '彭政閔執教 94 場，留下 47 勝 43 敗 4 和；球團季後公告他先轉任二軍職務並考量健康。', '兄弟全年 57 勝 58 敗 5 和，未取得季後賽資格；林威助同年末離開球團。'],
        sources: [
            { label: '中央社：林威助轉任顧問、彭政閔接任總教練', url: 'https://www.cna.com.tw/news/aspt/202305105008.aspx' },
            { label: '中央社：彭政閔執教 94 場後轉任二軍', url: 'https://www.cna.com.tw/news/aspt/202312290054.aspx' }
        ]
    }
};

Object.entries(brotherTeamArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '中信兄弟': {
                ...profile,
                annualFocus: brotherTeamAnnualFocusData[year],
                sources: [brotherTeamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

// 兄弟象年度焦點以該季代表事件、人物與球迷記憶為主。
const brotherElephantsAnnualFocusData = {
    1990: '4 月 29 日龍象戰吸引 16,000 名觀眾，台北球場首度滿場',
    1991: '首度寫下十連勝，至今仍是隊史代表性的連勝紀錄之一',
    1992: '林易增與陳彥成轉入兄弟，「呂明賜事件」落幕，象隊首度登上年度冠軍',
    1993: '高雄象熊戰兩度因雨暫停，打成歷時 5 小時 39 分鐘的跨日大戰',
    1994: '完成中職史上首次三連霸，球迷熱潮也伴隨「蛋洗球場」事件',
    1995: '陳義信以 78 球完封時報鷹，創下最少用球數完封紀錄',
    1996: '五名球員遭挾持；季後陳義信、洪一中、吳復連等主力轉往那魯灣',
    1997: '象隊單場攻下 23 分、奧力偉單場 11 打點，雙雙改寫聯盟紀錄',
    1998: '球隊陷入低潮，球團公開表示若球員涉賭將解散球隊',
    1999: '李居明轉往那魯灣；一場龍象戰因雨打到隔日凌晨才結束',
    2000: '10 月 1 日舊台北球場舉行最後一場例行賽，王光輝挖取紅土留念',
    2001: '林易增季中接任總教練，陳致遠、彭政閔與蔡豐安組成「黃金三劍客」',
    2002: '上下半季封王，臺灣大賽直落四擊敗中信鯨，三劍客連霸成形',
    2003: '總冠軍賽搶票風波一度讓球迷包圍球隊巴士，象隊仍完成二度三連霸',
    2004: '王光輝在家鄉花蓮舉行引退賽；兄弟下半季僅以 0.003 勝率差錯失封王',
    2005: '林易增卸下總教練職務，象隊進入陣容重整期',
    2006: '蔡豐安離隊、「黃金三劍客」解體；球隊在 13 連敗後上演九分逆轉止敗',
    2007: '王光輝接任總教練，彭政閔成為隊史首位生涯百轟球員',
    2008: '經營危機引發「明年不玩了」的發言，象迷連三場進場聲援',
    2009: '球團成立 25 週年之際遭逢「黑象事件」，多名球員遭檢調約談',
    2010: '陳瑞振休息室揮拳事件引發爭議，兄弟仍於年末重返總冠軍',
    2011: '彭政閔行使自由球員權利後，以五年球員約加五年教練約續留',
    2012: '張正偉連續 58 場上壘刷新聯盟紀錄，象隊也追平隊史十連勝',
    2013: '洪瑞河宣布出售球隊，年底華翼育樂接手，兄弟象名稱走入歷史',
};

// 兄弟象 1990–2013 年度簡介：標題與重點聚焦當年事件、人物與球迷記憶。
const brotherElephantsSeasonNarratives = {
    1990: {
        heading: '龍象戰首度塞滿台北球場，職棒熱潮升溫',
        summary: '兄弟象以創始球隊身分迎接中華職棒元年。4 月 29 日對味全龍的龍象戰湧入 16,000 名觀眾，台北球場第一次滿場，黃衫軍與龍隊的對決很快成為職棒初期的票房招牌。',
        highlights: ['3 月 17 日兄弟象參加中華職棒史上第一場比賽，張永昌成為聯盟首位敗投。', '3 月 22 日李文傳完封統一獅，拿下兄弟象隊史職棒首勝。', '4 月 29 日龍象戰吸引 16,000 人進場，台北球場首度滿場。']
    },
    1991: {
        heading: '旅日球員回歸，首度拉出十連勝',
        summary: '陳義信、吳復連與林文城等旅日球員陸續回到兄弟，為球隊注入熟悉的主力陣容。6 月球隊首度締造十連勝，成為這季最鮮明的場上記憶。',
        highlights: ['陳義信經由洋將選秀加盟，吳復連與林文城也在季前回到球隊。', '6 月 29 日兄弟象首度完成十連勝。', '球季末曾紀恩宣布引退，象隊首任總教練卸下兵符。']
    },
    1992: {
        heading: '林易增披上黃衫，「呂明賜事件」落幕',
        summary: '季前味全龍與兄弟象完成球員交易，林易增、陳彥成轉入兄弟，交換選秀中被兄弟選中的呂明賜，這場爭議交易因此告一段落。林易增此後成為象隊重要的跑壘代表，兄弟也在同年拿下隊史首座年度總冠軍。',
        highlights: ['1 月林易增、陳彥成轉入兄弟，呂明賜則依交易轉往味全龍。', '兄弟包辦上下半季冠軍，成為聯盟首支達成此事的球隊並直接取得年度總冠軍。', '林易增與陳義信分別拿下盜壘王、勝投王。']
    },
    1993: {
        heading: '雨戰延長成跨日大戰，獅象爭冠再添經典',
        summary: '兄弟與統一獅的競爭延續到季後，象隊最終完成衛冕。例行賽 8 月一場高雄象熊戰因雨兩度暫停，從傍晚一路打到隔日凌晨，成為歷時 5 小時 39 分鐘的「跨日大戰」。',
        highlights: ['8 月 14 日高雄象熊戰兩度因雨暫停，直到隔日凌晨 0 時 6 分才結束。', '這場比賽歷時 5 小時 39 分鐘，是中職早期令人難忘的馬拉松賽事。', '兄弟在臺灣大賽以 4 勝 2 敗擊敗統一獅，連續第二年封王。']
    },
    1994: {
        heading: '三連霸寫下王朝，龍象戰也留下蛋洗球場',
        summary: '兄弟連續第三年奪得年度總冠軍，完成中職史上首次三連霸，「兄弟王朝」成形。人氣與場內情緒同樣高漲，8 月一場台北龍象戰後，象迷因不滿判決向球場投擲雞蛋，成為早期職棒球迷文化中具爭議的一幕。',
        highlights: ['兄弟包辦上下半季冠軍，完成中職史上首次三連霸。', '8 月 28 日台北龍象戰後發生象迷投擲雞蛋的「蛋洗球場」事件。', '陳義信蟬聯年度 MVP，林易增則連續第五年拿下盜壘王。']
    },
    1995: {
        heading: '陳義信 78 球完封，林易增再添里程碑',
        summary: '三連霸後的兄弟進入陣容交替期，但老將仍留下標誌性紀錄。陳義信以 78 球完封時報鷹，創下聯盟最少用球數完封紀錄；林易增則在同季完成生涯 200 次盜壘。',
        highlights: ['4 月 7 日陳義信以 78 球完封時報鷹，寫下聯盟最少用球數完封紀錄。', '林易增達成生涯 200 次盜壘與 600 支安打。', '路易士以安打、打點雙冠王成為打線焦點。']
    },
    1996: {
        heading: '「八二事件」震撼球壇，季後主力出走',
        summary: '8 月 3 日，陳義信、洪一中、李文傳、陳逸松與吳復連五人在台中遭黑道人士持槍挾持，球員安全與職棒簽賭疑雲引發社會關注。季後那魯灣籌組新聯盟，陳義信、洪一中、吳復連等主力轉隊，象隊面臨重大人事變動。',
        highlights: ['8 月 3 日五名兄弟球員在台中遭挾持，事件成為職棒簽賭風暴擴大的重要節點。', '季後陳義信、洪一中、吳復連等人轉往那魯灣，球隊主力陣容出現變化。', '路易士連續 21 場安打，打破鄭幸生保持的聯盟紀錄。']
    },
    1997: {
        heading: '單場灌進 23 分，奧力偉一戰打下 11 打點',
        summary: '兩聯盟並立、中職擴編的動盪時期，兄弟象在 9 月 1 日打出一場破紀錄的高火力比賽，單場攻下 23 分，奧力偉一人貢獻 11 打點。林易增也在當季創下連續 31 場安打紀錄。',
            highlights: ['9 月 1 日象隊單場攻下 23 分，當時刷新聯盟紀錄。', '奧力偉單場貢獻 11 打點，同樣改寫聯盟紀錄。', '林易增連續 31 場敲安，德伍則包辦打擊、安打與打點王。']
    },
    1998: {
        heading: '球團表態嚴防簽賭，球隊陷入隊史低潮',
        summary: '職棒簽賭風暴後，領隊洪瑞河在季前表示，若兄弟球員涉賭就解散球隊，呈現當時球團面對外部勢力的強硬態度。球隊仍在低迷環境中苦撐，季末以 33 勝作收並追平聯盟單季最多敗紀錄。',
        highlights: ['2 月洪瑞河公開表示，若球員涉賭將解散球隊。', '兄弟全年 33 勝，追平當時聯盟單季最多敗紀錄。', '德伍入選外野手最佳九人，成為低潮球季中少數個人亮點。']
    },
    1999: {
        heading: '李居明轉往那魯灣，龍象戰一路打到隔日',
        summary: '李居明轉往台灣大聯盟的消息在季初曝光，這位兄弟代表球星結束近 15 年的球員生涯。當年另有一場台北龍象戰因雨延後到晚間 8 時 14 分開打，最終於隔日凌晨 0 時 5 分才結束。',
        highlights: ['3 月李居明轉往那魯灣的消息曝光，兄弟宣布放棄與他的合約。', '7 月 3 日龍象戰因雨延後至晚間 8 時 14 分開打，成為聯盟最晚開打紀錄，並跨日完賽。', '921 地震造成聯盟停賽，部分賽程取消。']
    },
    2000: {
        heading: '舊台北球場最後一戰，王光輝帶走一把紅土',
        summary: '10 月 1 日，兄弟象與統一獅在舊台北球場進行最後一場例行賽。這座見證職棒開幕戰與早期棒球熱潮的球場即將拆除，王光輝從一壘守備區挖取紅土留念，成為球迷記憶中的告別畫面。',
        highlights: ['10 月 1 日兄弟象對統一獅之戰，是舊台北球場最後一場例行賽。', '王光輝挖取一把一壘紅土留念，球員與球迷也在球場告別前留下紀念。', '馮勝賢獲年度最佳新人，為球隊新世代增添亮點。']
    },
    2001: {
        heading: '林易增臨危接掌兵符，「黃金三劍客」初成形',
        summary: '兄弟開季不順，林易增季中接任總教練；彭政閔、陳致遠加入陣容，與蔡豐安組成後來聞名的「黃金三劍客」。兄弟在臺灣大賽一度以 1 勝 3 敗落後，最後連追三勝逆轉統一獅，拿下睽違七年的總冠軍。',
        highlights: ['林易增接替林百亨出任總教練，帶隊由開季低潮轉入競爭行列。', '彭政閔、陳致遠與蔡豐安組成「黃金三劍客」中心打線。', '臺灣大賽先落後統一獅 1 勝 3 敗，兄弟連追三勝完成逆轉。']
    },
    2002: {
        heading: '黃金三劍客延續火力，臺灣大賽直落四封王',
        summary: '兄弟延續前一年建立的三劍客打線，包辦上下半季冠軍，並在臺灣大賽以四連勝擊敗中信鯨，完成年度連霸。蔡豐安在這季迎來生涯第一個百安球季，三名中心打者也持續成為象隊招牌。',
        highlights: ['兄弟包辦上下半季冠軍，臺灣大賽以 4 勝 0 敗擊敗中信鯨。', '「黃金三劍客」成為兄弟攻擊核心，蔡豐安首度單季敲出超過百安。', '林易增獲年度最佳總教練，蔡豐安拿下打點王。']
    },
    2003: {
        heading: '總冠軍賽搶票風波，象迷圍住球隊巴士',
        summary: '兄弟與興農牛爭奪三連霸期間，總冠軍賽門票銷售引發球迷不滿，天母球場外一度有象迷包圍球隊巴士，球團後來在場外架設大螢幕。場內兄弟以 4 勝 2 敗擊敗興農牛，完成隊史第二次三連霸。',
        highlights: ['總冠軍賽門票銷售疏失引發爭議，球迷包圍球隊巴士，球團設置場外大螢幕。', '兄弟以 4 勝 2 敗擊敗興農牛，完成第二次三連霸。', '陳致遠連續第二年獲臺灣大賽 MVP，彭政閔、陳致遠分別拿下重要打擊獎項。']
    },
    2004: {
        heading: '王光輝在花蓮引退，四連霸夢差在千分之三',
        summary: '兄弟名將王光輝在家鄉花蓮舉行引退賽，結束球員生涯。球隊則與興農牛一路競逐下半季冠軍，最後兄弟雖多拿勝場，仍以勝率千分之三之差屈居第二，無緣挑戰四連霸。',
        highlights: ['6 月 26 日王光輝在花蓮舉行職棒引退賽，於家鄉球迷面前完成最後一場出賽。', '下半季兄弟以 28 勝 22 敗收尾，勝場數雖居球隊之首，仍以 .560 對 .563 的勝率些微差距落後興農牛。', '彭政閔獲打擊王、安打王，延續中心打線的代表性。']
    },
    2005: {
        heading: '林易增卸任，象隊進入陣容重整期',
        summary: '完成第二次三連霸後，兄弟連續兩年未能重返季後舞台。林易增卸下執教五年的總教練職務，球團讓吳思賢接掌兵符，象隊開始調整教練團與陣容。',
        highlights: ['林易增卸下總教練職務，結束自 2001 年起帶領球隊的五年執教期。', '吳思賢升任總教練，馮勝賢轉任二軍教練，教練團進行改組。', '彭政閔以 .339 打擊率獲打擊王，成為重整期的穩定核心。']
    },
    2006: {
        heading: '三劍客解體，13 連敗後九分大逆轉止敗',
        summary: '蔡豐安在季中遭球團釋出，象迷熟悉的「黃金三劍客」正式拆散。球隊隨後吞下聯盟紀錄 13 連敗，9 月 1 日對統一獅一度以 1：9 落後，最後三個半局連追九分，以再見安打逆轉止敗。',
        highlights: ['8 月蔡豐安遭釋出，陳致遠、彭政閔、蔡豐安組成的三劍客不再完整。', '兄弟從 8 月 8 日起連敗 13 場，刷新聯盟紀錄。', '9 月 1 日從 1：9 落後追平並以再見安打逆轉統一獅，終止連敗。']
    },
    2007: {
        heading: '「光輝再現」，王光輝接任總教練',
        summary: '王光輝接下總教練，重返熟悉的黃衫球隊執教；彭政閔也在本季敲出兄弟隊史第一百支全壘打。球團同時建立與醫院、診所合作的球員醫療支援安排。',
        highlights: ['王光輝接替吳思賢，成為兄弟象隊史第九任總教練。', '彭政閔成為兄弟象首位達成生涯百轟的球員。', '兄弟與醫院及診所簽約合作，開始建置球員醫療支援網絡。']
    },
    2008: {
        heading: '「明年不玩了」引發球迷連三場進場聲援',
        summary: '球團談及長年經營虧損時表示，若明年虧損超過四千萬元就不再經營，讓兄弟象存續問題浮上檯面。大批象迷連續三場進場力挺；場上球隊則從季後挑戰賽連勝晉級，臺灣大賽一路打到第七戰。',
        highlights: ['2008 年 7 月球團公開談及可能停止經營，象迷以連續三場進場表達支持。', '王光輝率隊闖過季後挑戰賽，重返臺灣大賽。', '臺灣大賽與統一獅打滿七場，最後以一勝之差落敗。']
    },
    2009: {
        heading: '25 週年遇黑象風暴，多名球員遭檢調約談',
        summary: '兄弟象成立 25 週年之際，職棒簽賭案再度爆發，象隊多名球員與教練遭檢調約談，球團形象和球迷信任受到重創。案件調查、約談與後續處分各有不同，不能將遭約談直接視為定罪；球隊該季仍拿下下半季冠軍並打進臺灣大賽。',
        highlights: ['職棒簽賭案於 10 月擴大偵辦，兄弟象多名球員遭約談，風暴被稱為「黑象事件」。', '中込伸季中接任總教練，率隊取得下半季冠軍。', '臺灣大賽第六戰打到延長 17 局、歷時 6 小時 14 分鐘，兄弟逼出第七戰後仍未能封王。']
    },
    2010: {
        heading: '休息室揮拳爭議後，象隊再度捧起總冠軍',
        summary: '8 月總教練陳瑞振在休息室揮拳打黃仕豪，遭聯盟禁賽、罰款，事件引發外界對球隊管理方式的批評。象隊在爭議中仍於 9 月拿下隊史第一千勝，之後橫掃興農牛，奪得睽違七年的總冠軍。',
        highlights: ['8 月 21 日陳瑞振在休息室揮拳打黃仕豪，聯盟事後作出禁賽與罰款處分。', '9 月 10 日兄弟拿下隊史第 1,000 勝。', '臺灣大賽以 4 勝 0 敗擊敗興農牛，拿下隊史第七座總冠軍。']
    },
    2011: {
        heading: '彭政閔選擇留象，簽下「五年球員、五年教練」長約',
        summary: '彭政閔季後取得自由球員資格，受到其他球隊爭取，最後與兄弟簽下五年球員合約加五年教練合約的安排，成為兄弟隊史首位複數年合約球員。這紙合約也成為象迷與球隊之間的重要承諾。',
        highlights: ['彭政閔行使自由球員權利後，於 11 月宣布續留兄弟象。', '合約包含五年球員約及五年教練約，成為隊史首位取得複數年合約的球員。', '增菘瑋成為中職首位擔任開幕戰先發投手的新人。']
    },
    2012: {
        heading: '張正偉連續 58 場上壘，寫下聯盟新紀錄',
        summary: '外野手張正偉在球季中連續 58 場上壘，刷新中職紀錄，並以單季 172 支安打改寫本國籍球員紀錄。兄弟也在 7 月締造隊史平紀錄的十連勝，球隊攻勢與張正偉的穩定上壘成為全年焦點。',
        highlights: ['張正偉連續 58 場上壘，刷新中職紀錄。', '張正偉單季敲出 172 支安打，刷新本國籍球員單季紀錄。', '7 月兄弟象取得平隊史紀錄的十連勝，同場也見證中職累計進場人次突破兩千萬。']
    },
    2013: {
        heading: '黃衫象隊告別，華翼育樂接手球團',
        summary: '兄弟飯店於 10 月 19 日宣布出售球隊，兄弟象 24 年職棒時期進入尾聲。12 月華翼育樂宣布接手，球團由中國信託支持，原有職棒隊伍延續為中信兄弟；原本的兄弟象名稱與黃衫時代則成為歷史。',
        highlights: ['謝長亨接任總教練，帶領兄弟象完成最後一個完整球季。', '10 月 19 日洪瑞河宣布出售球團，消息震撼職棒界與長年支持的象迷。', '12 月 3 日華翼育樂宣布接手，兄弟飯店退出職棒經營，球隊轉入中信兄弟時期。']
    }
};

const brotherElephantsEventSources = {
    1990: [{ label: '自由體育｜1994 單季 40 場滿場紀錄回顧', url: 'https://sports.ltn.com.tw/amp/news/paper/1278603' }],
    1992: [{ label: '自由體育｜兄弟象隊大事紀', url: 'https://sports.ltn.com.tw/amp/news/paper/723309' }],
    1994: [{ label: '中信兄弟官方｜球隊大事紀', url: 'https://www.brothers.tw/POR0115_' }],
    1996: [{ label: '中央社｜風光中的黑歷史：職棒假球風暴回顧', url: 'https://www.cna.com.tw/news/aspt/201903110057.aspx' }],
    1997: [{ label: '中信兄弟官方｜球隊大事紀', url: 'https://www.brothers.tw/POR0115_' }],
    1998: [{ label: '中信兄弟官方｜球隊大事紀', url: 'https://www.brothers.tw/POR0115_' }],
    1999: [{ label: '自由體育｜兄弟象隊大事紀', url: 'https://sports.ltn.com.tw/amp/news/paper/723309' }],
    2000: [{ label: 'TVBS｜舊台北球場走入歷史', url: 'https://news.tvbs.com.tw/sports/619556' }],
    2001: [{ label: 'TVBS｜兄弟象完成第二度三連霸回顧', url: 'https://news.tvbs.com.tw/sports/680121' }],
    2003: [{ label: 'TVBS｜兄弟象完成第二度三連霸回顧', url: 'https://news.tvbs.com.tw/sports/680121' }],
    2004: [{ label: '中央社｜兄弟象名將王光輝回顧', url: 'https://www.cna.com.tw/news/firstnews/202108300084.aspx' }],
    2005: [{ label: '聯合新聞網數位典藏｜林易增卸下總教練', url: 'https://catalog.digitalarchives.tw/item/00/32/59/f5.html' }],
    2006: [{ label: '自由體育｜兄弟象 13 連敗後戲劇性逆轉止敗', url: 'https://sports.ltn.com.tw/news/paper/1529177' }],
    2008: [{ label: '自由體育｜2008 年經營危機與球迷聲援', url: 'https://sports.ltn.com.tw/news/paper/723033' }],
    2009: [{ label: '公視新聞網｜兄弟象 29 年歷史與經營回顧', url: 'https://news.pts.org.tw/article/252946' }],
    2010: [{ label: '自由體育｜兄弟象隊大事紀', url: 'https://sports.ltn.com.tw/amp/news/paper/723309' }],
    2011: [{ label: '公視新聞網｜彭政閔五年球員約加五年教練約', url: 'https://news.pts.org.tw/article/196419' }],
    2012: [{ label: 'CPBL｜兄弟十連勝與聯盟兩千萬進場人次', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507861173087889' }],
    2013: [{ label: '公視新聞網｜兄弟象宣布出售與轉手', url: 'https://news.pts.org.tw/article/252945' }]
};

const brotherElephantsChineseNumber = number => {
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    if (number < 10) return digits[number];
    if (number < 20) return `十${number % 10 ? digits[number % 10] : ''}`;
    return `${digits[Math.floor(number / 10)]}十${number % 10 ? digits[number % 10] : ''}`;
};

Object.entries(brotherElephantsSeasonNarratives).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const seasonNumber = year - 1989;
    const pageTitle = `兄弟象隊/兄弟象隊的職棒${brotherElephantsChineseNumber(seasonNumber)}年`;
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '兄弟象': {
                ...profile,
                annualFocus: brotherElephantsAnnualFocusData[year],
                sources: [brotherElephantsHistorySource, {
                    label: `台灣棒球維基館｜兄弟象職棒${brotherElephantsChineseNumber(seasonNumber)}年`,
                    url: `https://twbsball.dils.tku.edu.tw/index.php?title=${encodeURIComponent(pageTitle)}`
                }, ...(brotherElephantsEventSources[year] || [])]
            }
        }
    };
});

// 兄弟象與中信兄弟提供的年度口號，沿用年度簡介的 slogan 欄位呈現。
const brotherTeamAnnualSloganData = {
    1996: '把失去的找回來',
    1997: '萬象更新，萬眾歸心',
    2000: '公元兩千，兄弟領先',
    2001: '世紀新兄弟',
    2002: '兄弟同心，連霸冠軍',
    2003: '邁象三連霸',
    2004: '兄有成竹，弟造四連霸',
    2005: '所象無敵，三造黃朝',
    2006: '戰鼓驚天動地，稱霸天下唯我兄弟',
    2007: '重現光輝，再造王朝/Think Yellow/黃潮澎湃',
    2008: 'YELLOW POWER/YELLOW WINNER',
    2009: '堅持',
    2010: '從心開始/極‧戰力',
    2011: '從心開始/極‧戰力',
    2012: '從心開始',
    2015: 'BROTHERS, ALWAYS TOGETHER',
    2016: 'CHARGE 更強',
    2017: 'Brothers we trust！',
    2018: 'HONOR',
    2019: 'CHIAllenge/BROTHERS GOT BALLS',
    2020: 'CHASE',
    2021: 'BRACE',
    2022: 'RUN IT BACK',
    2023: '黃潮',
    2024: '進取',
    2025: '進化',
    2026: '奪還'
};

Object.entries(brotherTeamAnnualSloganData).forEach(([yearText, slogan]) => {
    const year = Number(yearText);
    const teamName = year <= 2013 ? '兄弟象' : '中信兄弟';
    const profile = teamSeasonProfileData[year]?.teams[teamName];
    if (profile) profile.slogan = slogan;
});

const unitedLionsAnnualSloganData = {
    2015: 'HERO，英雄',
    2017: 'NO FEAR',
    2018: 'NO.1',
    2019: 'PROUD',
    2020: 'Team Lions',
    2021: 'FLYING',
    2022: '大勝獅吼Roar with Lions',
    2023: 'LIONS UP，強勢來襲',
    2024: 'ALWAYS LIONS',
    2025: '尚勇',
    2026: '鬥陣起行'
};

Object.entries(unitedLionsAnnualSloganData).forEach(([yearText, slogan]) => {
    const year = Number(yearText);
    const teamName = year <= 2016 ? '統一獅6' : '統一7-ELEVEn獅';
    const profile = teamSeasonProfileData[year]?.teams[teamName];
    if (profile) profile.slogan = slogan;
});

const fubonGuardiansArchiveProfiles = {
    2017: {
        heading: '新隊名、新戰袍與 Fubon Angels 登場，悍將開啟一軍新篇章',
        summary: '富邦集團接手義大犀牛後，球隊以「富邦悍將」之名展開首個完整球季，主場落腳新莊。球團同步推出新隊徽、吉祥物、主客場球衣與 Fubon Angels，首季口號「Fire Up」也為悍將建立新的球迷識別。',
        highlights: ['球隊自本季起以富邦悍將之名出賽，並在新莊棒球場展開主場篇章。', '新隊徽、吉祥物、主客場戰袍與 Fubon Angels 同步亮相。', '首季口號「Fire Up」號召球迷與新球隊一起展開新隊史。']
    },
    2018: {
        heading: '林益全兩分砲帶起七分大局，悍將首度闖進季後挑戰賽',
        summary: '富邦悍將在成立第二年首度取得季後挑戰賽資格，與統一獅爭奪臺灣大賽門票。系列賽一度先吞敗，第二戰由林益全轟出兩分全壘打、帶動單局七分攻勢，悍將以 11：2 扳平戰局，最後以 1 勝 3 敗止步。',
        highlights: ['隊史首次打進季後挑戰賽，對手是統一獅。', '第二戰林益全轟出兩分砲，悍將單局攻下七分，以 11：2 扳平系列賽。', '悍將拿下季後挑戰賽首勝，最終以 1 勝 3 敗無緣臺灣大賽。']
    },
    2019: {
        heading: '全年勝率並列第一，兩個半季都差一步、無緣季後賽',
        summary: '富邦悍將打出接手後最佳例行賽球季，全年勝率與 Lamigo 桃猿並列最高，卻在上下半季都以第二名作收。依當年賽制，悍將沒有拿到季冠軍，全年表現最好的球隊之一仍無緣季後賽，成為這季最令人扼腕的落差。',
        highlights: ['富邦以 63 勝 55 敗 2 和完成球季，全年勝率與 Lamigo 桃猿並列第一。', '上下半季都以第二名作收，兩次都未能跨過季冠軍門檻。', '當年沒有季後挑戰賽，悍將因此無緣臺灣大賽，留下「全年第一卻無季後賽」的特殊球季。']
    },
    2020: {
        heading: '下半季一路追到最後一戰，悍將距離季冠軍只差一勝',
        summary: '富邦悍將上半季低迷後，在洪一中接掌的首年於下半季反彈，與統一獅一路爭奪季冠軍。兩隊在補賽週直接交手，悍將只要贏球就能封王，最後以 0：2 落敗，直到最後一戰才確定無緣季後賽。',
        highlights: ['悍將下半季以 31 勝 28 敗 1 和收尾，戰局一路延續到補賽週。', '10 月 23 日與統一獅的關鍵戰，猛威爾完封悍將，統一以 2：0 獲勝。', '這是富邦接手後最接近拿下季冠軍的一季，最終只差一場勝利。']
    },
    2021: {
        heading: '林華韋接任領隊，陳金鋒回到悍將教練團',
        summary: '味全龍重返一軍，中職恢復五隊規模；悍將球團也在球季結束後展開組織交接。林華韋接任隊史第二任領隊，陳金鋒則回到球團擔任二軍總教練兼副領隊，為接下來的球隊重整帶進新的管理與培訓方向。',
        highlights: ['林華韋自 2022 年起接任領隊，成為悍將隊史第二任領隊。', '陳金鋒回到悍將教練團，接任二軍總教練並兼任副領隊。', '味全龍重返一軍後，中職恢復五隊規模；悍將全年仍未能打進季後賽。']
    },
    2022: {
        heading: '開季二十五場只拿四勝，王勝偉領軍中止十三場不勝',
        summary: '富邦悍將開季 25 場僅拿 4 勝，創下中職當時最差開季紀錄。球隊在上半季一度陷入 11 連敗、13 場不勝，7 月 19 日王勝偉單場敲出 3 支安打、跑回 3 分，搭配陳仕朋中繼五局，悍將以 4：3 擊敗統一獅止住低潮。',
        highlights: ['開季 25 場 4 勝 21 敗，刷新中職最差開季紀錄。', '悍將一度連續 13 場未能取勝，期間吞下 11 連敗。', '王勝偉在中止不勝的比賽中貢獻 3 安、3 得分，獲選單場 MVP。']
    },
    2023: {
        heading: '高國輝在新莊舉行引退賽，「完美輝擊」告別球員生涯',
        summary: '高國輝在球季結束後引退，富邦悍將於 9 月 30 日在新莊主場舉辦「完美輝擊」引退賽，向這位三度全壘打王與球隊招牌球星致意。引退儀式後他仍留在一軍完成球季，之後轉任教練，將長打經驗交給下一代悍將。',
        highlights: ['高國輝於 9 月 30 日在新莊主場舉行引退儀式。', '高國輝曾連續三年拿下中職全壘打王，是富邦悍將成立後的重要看板球星。', '球季結束後高國輝轉任教練，繼續留在球團協助年輕球員。']
    }
};

const fubonGuardiansEventSources = {
    2017: [{ label: '富邦金控：富邦悍將新戰袍、Fubon Angels 與首季口號', url: 'https://www.fubon.com/financialholdings/news/news_1170321_076594.htm' }],
    2018: [
        { label: '中央社：富邦悍將首度參加季後挑戰賽', url: 'https://www.cna.com.tw/news/aspt/201810190089.aspx' },
        { label: '中央社：林益全兩分砲助悍將扳平系列賽', url: 'https://www.cna.com.tw/news/aspt/201810200223.aspx' }
    ],
    2019: [{ label: '聯合新聞網：富邦全年勝率並列第一仍未晉級', url: 'https://udn.com/news/story/7001/9749036' }],
    2020: [{ label: '公視：統一獅擊敗富邦，季冠軍爭奪延續至最後', url: 'https://news.pts.org.tw/article/498098' }],
    2021: [
        { label: '中央社：林華韋接任富邦悍將領隊', url: 'https://www.cna.com.tw/news/aspt/202112070103.aspx' },
        { label: '中央社：陳金鋒接任二軍總教練', url: 'https://www.cna.com.tw/news/firstnews/202112240137.aspx' }
    ],
    2022: [
        { label: '中央社：開季 25 場 4 勝 21 敗刷新紀錄', url: 'https://www.cna.com.tw/news/aspt/202205120423.aspx' },
        { label: '中央社：王勝偉助悍將中止 13 場不勝', url: 'https://www.cna.com.tw/news/aspt/202207190407.aspx' }
    ],
    2023: [
        { label: '中央社：高國輝舉行引退賽', url: 'https://www.cna.com.tw/news/aspt/202309050206.aspx' },
        { label: '中央社：高國輝球員生涯告一段落', url: 'https://www.cna.com.tw/news/aspt/202310150141.aspx' }
    ],
    2024: [
        { label: '中央社：張育成在新莊敲出中職生涯首轟', url: 'https://www.cna.com.tw/news/aspt/202407160465.aspx' },
        { label: '中央社：張育成擊出中職生涯首支再見轟', url: 'https://www.cna.com.tw/news/aspt/202408210417.aspx' }
    ],
    2025: [
        { label: '中央社：富邦悍將以隊史紀錄六連勝收尾', url: 'https://www.cna.com.tw/news/aspt/202510040217.aspx' },
        { label: '中央社：富邦悍將完成球季、年輕球員累積經驗', url: 'https://www.cna.com.tw/news/aspt/202510040218.aspx' }
    ],
    2026: [
        { label: '中央社：悍將以隊史最快速度拿下 31 勝', url: 'https://www.cna.com.tw/news/aspt/202606240366.aspx' },
        { label: '富邦悍將官方：2026 年例行賽戰績', url: 'https://www.fubonguardians.com/content/fixtures/Records' }
    ]
};

const fubonGuardiansAnnualSloganData = {
    2017: 'Fire Up',
    2018: 'Rising North',
    2019: 'All Grit',
    2020: "It's time",
    2021: 'Fight On',
    2022: 'We Will',
    2023: 'All Blue',
    2024: 'Go Stronger 夠悍',
    2025: 'FIGHT FOR ALL 我要全部',
    2026: 'BLUE POWER #不一樣了'
};

Object.entries(fubonGuardiansAnnualSloganData).forEach(([yearText, slogan]) => {
    const year = Number(yearText);
    const existingProfile = teamSeasonProfileData[year]?.teams['富邦悍將'] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '富邦悍將': {
                ...existingProfile,
                ...(fubonGuardiansArchiveProfiles[year] || {}),
                slogan,
                sources: [...(existingProfile.sources || []), fubonGuardiansTeamHistorySource, ...(fubonGuardiansEventSources[year] || [])]
            }
        }
    };
});

const edaRhinosArchiveProfiles = {
    2013: {
        heading: '曼尼旋風席捲中職，義大成軍首年就闖進總冠軍賽',
        record: '62 勝・57 敗・1 和', rank: '全年第 2 名', distinction: '上半季冠軍・臺灣大賽亞軍',
        annualFocus: '成軍首季即拿下上半季冠軍，曼尼首轟也是中職第七千轟',
        summary: '義聯集團接手興農牛後，球隊以「義大犀牛」之名出賽，胡金龍、高國輝與前大聯盟球星曼尼加入，掀起一整季的話題。曼尼在 4 月敲出中職生涯首轟，恰好是聯盟第七千支全壘打；犀牛成軍首年即拿下上半季冠軍。球季後段曼尼離隊，總教練徐生明也於 8 月逝世，球隊仍挺進臺灣大賽，最終不敵統一獅。',
        slogan: '紫耀你來',
        highlights: ['曼尼首轟成為中職第七千支全壘打，初登場系列賽吸引大量球迷進場。', '義大犀牛成軍第一年就奪下上半季冠軍，寫下新球隊首年封王的紀錄。', '曼尼季中離隊後，徐生明總教練於 8 月逝世；犀牛帶著這段沉痛的球季記憶打進臺灣大賽。'],
        sources: [
            { label: '公視：曼尼初登場與非假日票房紀錄', url: 'https://news.pts.org.tw/article/236409' },
            { label: '公視：曼尼敲出中職第七千轟並離台', url: 'https://news.pts.org.tw/article/243182' },
            { label: '公視：義大成軍首年拿下上半季冠軍', url: 'https://news.pts.org.tw/article/243708' },
            { label: '中央社：徐生明逝世', url: 'https://www.cna.com.tw/news/firstnews/201308250051.aspx' },
            { label: '蕃新聞：義大犀牛 2013 年口號「紫耀你來」', url: 'https://n.yam.com/Article/20130308278106' }
        ]
    },
    2014: {
        heading: '「全犀主場」回應全猿應援，客隊啦啦隊移至外野',
        record: '58 勝・60 敗・2 和', rank: '全年第 3 名', distinction: '未取得季後賽資格',
        annualFocus: '對 Lamigo 主場賽事採「全犀主場」，調整兩隊球迷與應援團配置',
        summary: 'Lamigo 桃猿推出「全猿主場」後，義大犀牛在 4 月對戰時跟進採行「全犀主場」，將客隊啦啦隊與應援移往左外野，引發球場主客應援方式的討論。犀牛該季另有胡金龍、林益全與高國輝等人包辦多項打擊獎項，但未取得季後賽資格。',
        highlights: ['義大在對 Lamigo 的三場主場賽事採用「全犀主場」，把客隊應援團安排到左外野。', '胡金龍拿下打擊率王與安打王，林益全獲打點王、高國輝獲全壘打王。', '張建銘 4 月 24 日以短打內野安打完成生涯千安，成為中職史上首位以短打達成千安的球員。'],
        sources: [
            { label: '自由體育：義大犀牛採行「全犀主場」', url: 'https://sports.ltn.com.tw/news/paper/771891' },
            { label: 'CPBL：2014 年個人獎項由義大球員大幅收穫', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507597771165439' },
            { label: '運動視界：全犀主場與張建銘短打千安', url: 'https://www.sportsv.net/articles/6433' }
        ]
    },
    2015: {
        heading: '澄清湖迎來完整主場球季，高國輝轟出單季三十九轟',
        record: '58 勝・61 敗・1 和', rank: '全年第 3 名', distinction: '未取得季後賽資格',
        annualFocus: '六十場主場全數安排在高雄，高國輝改寫中職單季全壘打紀錄',
        summary: '義大犀牛首度將 60 場主場全數安排在高雄澄清湖，球團以「Rhinow, Fight Together」號召城市與球隊同行，並重新打造 Rhino Angels 應援團。高國輝則以單季 39 支全壘打刷新中職紀錄，成為這個高雄主場球季最醒目的場上表現。',
        slogan: 'Rhinow, Fight Together',
        highlights: ['義大把 60 場主場全數排在澄清湖，客場球衣也繡上「Kaohsiung」，強調高雄主場識別。', '球團重新徵選並推出 Rhino Angels，更新球場應援團隊。', '高國輝敲出單季 39 支全壘打，刷新中職單季全壘打紀錄。'],
        sources: [
            { label: 'Yahoo 新聞：義大公布「Rhinow, Fight Together」與高雄主場規劃', url: 'https://tw.stock.yahoo.com/news/%E4%B8%AD%E8%8F%AF%E8%81%B7%E6%A3%92-%E7%BE%A9%E5%A4%A7%E7%8A%80%E7%89%9B-rhinow%E9%AB%98%E9%9B%84-%E5%B0%B1%E6%98%AF%E7%8F%BE%E5%9C%A8-085410148--mlb.html' },
            { label: 'Yahoo 新聞：義大重新徵選 Rhino Angels', url: 'https://tw.sports.yahoo.com/news/cpbl-%E7%BE%A9%E5%A4%A7%E5%95%A6%E5%95%A6%E9%9A%8Arhino-angels%E6%B5%B7%E9%81%B8-%E6%9C%80%E4%BD%B3%E4%BA%BA%E6%B0%A3%E7%8D%8E%E5%87%BA%E7%88%90-085722628.html' },
            { label: '中央社：高國輝以 39 轟刷新中職單季紀錄', url: 'https://www.cna.com.tw/news/aspt/201510070461.aspx' }
        ]
    },
    2016: {
        heading: '轉手風波後九局逆轉封王，為義大隊名留下最後一冠',
        record: '61 勝・58 敗・1 和', rank: '全年第 2 名', distinction: '下半季冠軍・年度總冠軍',
        annualFocus: '台灣大賽第六戰九局逆轉中信兄弟，奪下義大隊名下唯一總冠軍',
        summary: '義大集團於 6 月宣布尋找球隊接手企業，富邦金控隨後簽署合作備忘錄。球員在轉手消息後仍打完球季，並拿下下半季冠軍；臺灣大賽一度以 0 勝 2 敗落後中信兄弟，連追四場。第六戰九局上高孝儀敲出追平安打，義大把握守備失誤以 4：3 逆轉封王，11 月球團正式由富邦接手。',
        slogan: 'One Heart, Go Rhinos',
        highlights: ['義大於 6 月宣布尋求轉手，富邦金控在 9 月表態接手，這成為球隊最後一季的背景。', '犀牛拿下下半季冠軍，臺灣大賽在先吞兩敗後連贏四場完成逆轉。', '第六戰九局上高孝儀追平安打串起反攻，義大以 4：3 奪冠，為義大隊名留下首座也是最後一座總冠軍。'],
        sources: [
            { label: '公視：義大犀牛宣布尋找接手企業', url: 'https://news.pts.org.tw/article/326060' },
            { label: '中央社：義大犀牛奪下下半季冠軍', url: 'https://www.cna.com.tw/news/firstnews/201610085012.aspx' },
            { label: 'CPBL：義大犀牛第六戰九局逆轉封王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507350983437533' },
            { label: 'NOWnews：義大犀牛 2016 年度口號「One Heart, Go Rhinos」', url: 'https://www.nownews.com/news/1965045' }
        ]
    }
};

Object.entries(edaRhinosArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const existingProfile = teamSeasonProfileData[year]?.teams['義大犀牛'] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '義大犀牛': {
                ...existingProfile,
                ...profile,
                sources: [edaRhinosTeamHistorySource, ...profile.sources]
            }
        }
    };
});

const weiChuanDragonsTeamHistorySource = {
    label: '台灣棒球維基館｜味全龍隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%91%B3%E5%85%A8%E9%BE%8D%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const dragonChineseNumber = number => {
    const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    if (number < 10) return digits[number];
    if (number < 20) return `十${number % 10 ? digits[number % 10] : ''}`;
    return `${digits[Math.floor(number / 10)]}十${number % 10 ? digits[number % 10] : ''}`;
};

// 味全龍 1990–1999 隊史年度簡介。
const weiChuanDragonsLegacyArchiveProfiles = {
    1990: {
        heading: '龍象戰首度滿場，味全龍捧起職棒元年首冠',
        summary: '職棒元年，味全龍與兄弟象的對戰成為票房焦點，4 月 29 日龍象戰讓台北球場首度滿場；球季尾聲，龍隊再以 4 勝 2 敗擊敗三商虎，拿下中職首座年度總冠軍。',
        distinction: '下半季冠軍・年度總冠軍',
        highlights: ['4 月 29 日味全龍對兄弟象的龍象戰，寫下台北球場首次滿場紀錄。', '龍象對戰成為職棒初期的票房焦點，也奠定兩隊人氣對決的代表性。', '台灣大賽以 4 勝 2 敗擊敗三商虎，拿下中職史上第一座年度總冠軍。'],
        sources: [{ label: '自由體育：中職首場滿場紀錄', url: 'https://sports.ltn.com.tw/amp/news/paper/1278603' }]
    },
    1991: {
        heading: '「六一事件」震動球界，徐生明與龍象戰成焦點',
        summary: '32 歲的徐生明接掌味全龍後，帶隊拿下上半季冠軍。6 月 1 日龍象戰因雨中斷，徐生明率隊離場引發球迷鬧場，成為中職早期最具代表性的場外事件；同年黃平洋也投出單季 20 勝。',
        distinction: '上半季冠軍・台灣大賽亞軍',
        highlights: ['徐生明以 32 歲之齡接掌龍隊，成為當時中職最年輕總教練。', '「六一事件」後，龍象對決不只在場上競爭，也成為球迷文化的標誌。', '黃平洋單季拿下 20 勝，並在台灣大賽投出 14 局完投，留下經典紀錄。'],
        sources: [
            { label: '中職：徐生明與「六一事件」回顧', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508291065622297' },
            { label: '自由體育：味全龍與 1991 年龍象對決回顧', url: 'https://sports.ltn.com.tw/amp/news/paper/1436961' }
        ]
    },
    1992: {
        heading: '季末八連敗，龍象大戰總冠軍夢破局',
        summary: '味全龍一度與兄弟象同列爭冠熱門，球迷期待兩隊首度在台灣大賽交手；但龍隊在下半季末段吞下八連敗，退出爭冠行列，這場未能成真的龍象總冠軍戰也成為球迷記憶中的遺憾。',
        distinction: '全年第 2 名・未取得季冠軍',
        highlights: ['下半季最後階段的八連敗，讓味全龍退出季冠軍競逐。', '味全龍與兄弟象原有機會首度在台灣大賽交手，最終未能成局。', '球季呈現由爭冠熱門到錯失季後舞台的急轉直下。'],
        sources: [{ label: '自由體育：1992 年龍象大戰總冠軍夢回顧', url: 'https://sports.ltn.com.tw/news/paper/1774505' }]
    },
    1993: {
        heading: '《龍族月刊》創刊，徐生明首度卸下兵符',
        summary: '味全龍在場內延續競爭力，也在場外建立自己的球迷文化：《龍族月刊》於 1993 年推出試刊號。球季結束後，帶隊三年的徐生明首度卸下總教練職務。',
        distinction: '全年第 3 名・未取得季冠軍',
        highlights: ['味全龍推出《龍族月刊》試刊號，留下球團與球迷文化的隊史印記。', '徐生明在 1991 至 1993 年帶隊後，球季結束首度卸下總教練職務。', '中職擴編為六隊，味全龍在新規模聯盟中仍維持前段競爭力。']
    },
    1994: {
        heading: '田宮謙次郎接掌龍隊，進入隊史低潮期',
        summary: '徐生明離任後，味全龍由日本名將田宮謙次郎接任總教練。球隊在新教練帶領下進入低潮，單季只拿下 36 勝，與前幾年的爭冠形象形成鮮明落差。',
        distinction: '全年第 5 名・未取得季冠軍',
        highlights: ['田宮謙次郎接替徐生明，開啟龍隊教練團的新階段。', '球隊全年 36 勝，未能在兩個半季爭得冠軍。', '1994、1995 年連續處於低潮，直到 1996 年下半季才重返季冠軍賽。']
    },
    1995: {
        heading: '黃文博同額角逐新人王，獎項史上首度從缺',
        summary: '味全龍借將投手黃文博是當年年度新人王唯一入圍者，菜鳥球季投出 5 勝 9 敗、防禦率 5.14，仍未達得獎門檻，讓中職新人王獎項首度從缺；這也是該獎項至今唯一一次從缺。',
        distinction: '全年第 5 名・未取得季冠軍',
        highlights: ['黃文博以唯一入圍者身分角逐新人王，最後未獲足夠票數。', '年度新人王獎項在 1995 年首度從缺，至今仍是唯一一次。', '黃文博之後成為龍隊重要本土投手，並在 1997 年台灣大賽獲選 MVP。'],
        sources: [{ label: 'TSNA：黃文博與新人王從缺', url: 'https://tsna.com/article/78590' }]
    },
    1996: {
        heading: '19 歲張泰山延長賽敲首轟，展開傳奇生涯',
        summary: '年僅 19 歲的張泰山以特考方式加盟味全龍，4 月 11 日在對統一獅之戰打到延長賽第 11 局，敲出職棒生涯首轟，幫助龍隊以 6：4 獲勝；球季結束後他獲選年度新人王。',
        distinction: '下半季冠軍・台灣大賽亞軍',
        highlights: ['張泰山加盟時年僅 19 歲，刷新當時中職最年輕球員紀錄。', '延長賽第 11 局的兩分全壘打是張泰山職棒生涯首轟，幫助味全 6：4 獲勝。', '張泰山菜鳥球季獲選年度新人王，成為龍隊代表性球星之一。'],
        sources: [{ label: 'TVBS：張泰山職棒生涯首轟', url: 'https://news.tvbs.com.tw/sports/648670' }]
    },
    1997: {
        heading: '先落後兩場再連勝四場，黃文博完封封王戰',
        summary: '味全龍下半季以 31 勝 15 敗 2 和封王，儘管全年排名第四，仍在台灣大賽以 4 勝 2 敗擊敗時報鷹，睽違七年再度奪冠。',
        distinction: '下半季冠軍・年度總冠軍',
        highlights: ['時報鷹先拿下系列賽前兩勝，味全龍隨後連贏四場，完成台灣大賽史上首次「讓二追四」。', '黃文博在第六戰投出九局完封勝，獲選台灣大賽 MVP。', '徐生明回鍋執教後，龍隊由此開啟三連霸。'],
        sources: [{ label: 'TSNA：1997 年味全龍讓二追四與黃文博完封', url: 'https://tsna.com/article/78590' }]
    },
    1998: {
        heading: '例行賽第三名闖關，季後連勝兩輪完成衛冕',
        summary: '中職改採單一球季制，味全龍例行賽以 56 勝 48 敗 1 和排名第三，取得季後賽資格後連續擊敗統一獅與興農牛，完成年度總冠軍衛冕。',
        distinction: '季後賽晉級・年度總冠軍',
        highlights: ['中職改採單一球季制，味全龍以第三名進入季後賽。', '龍隊先以 2 勝 1 敗淘汰統一獅，再在台灣大賽以 4 勝 3 敗擊敗興農牛。', '兩輪系列賽都經過苦戰，味全龍仍成功衛冕，拿下隊史第三冠。']
    },
    1999: {
        heading: '三連霸後宣布解散，龍迷走上街頭搶救球隊',
        summary: '味全龍例行賽以 49 勝 39 敗 4 和排名第三，季後賽先淘汰統一獅，再以 4 勝 1 敗擊敗和信鯨，完成隊史三連霸；球團於球季結束後宣布解散。',
        distinction: '季後賽晉級・年度總冠軍・三連霸',
        highlights: ['味全龍在台灣大賽以 4 勝 1 敗擊敗和信鯨，完成三連霸與隊史第四冠。', '球團宣布停權後，龍迷於 12 月 12 日發起棒球迷大遊行，呼籲挽救球隊。', '味全龍於 12 月 13 日正式宣布解散，球迷的街頭行動成為台灣職棒史上的重要一幕。'],
        sources: [{ label: '自由體育：味全龍解散與球迷大遊行', url: 'https://sports.ltn.com.tw/amp/news/paper/1265575' }]
    }
};

// 重返中職後的味全龍年度簡介與球團年度口號。
const weiChuanDragonsArchiveProfiles = {
    2019: {
        record: '未出賽', rank: '球團籌備年度', distinction: '正式加盟中職・重返職棒',
        heading: '味全龍重返中職，葉君璋帶隊從二軍重新出發',
        summary: '味全龍在 2019 年通過中職加盟案，睽違 20 年重返聯盟。球團以葉君璋為總教練重新組隊，先從二軍磨合新陣容，為重返一軍做準備。',
        highlights: ['6 月 24 日中職會員大會通過味全龍加盟，聯盟恢復五隊規模。', '球團公布教練團，由葉君璋出任總教練，張泰山等人加入教練團。', '重返後先參加二軍賽事，再按原規劃於 2021 年重返一軍。'],
        sources: [{ label: 'CPBL：味全龍正式重返中職', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132506947326460907' }]
    },
    2020: {
        record: '53 勝・31 敗・2 和', rank: '二軍例行賽第 1 名', distinction: '二軍例行賽冠軍・二軍總冠軍',
        heading: '重返首季二軍連奪交流盃與總冠軍',
        summary: '重返中職後的第一年，味全龍以二軍賽事展開新隊伍磨合。球隊先在二軍交流盃全勝奪冠，再於二軍總冠軍賽以 3 勝 1 敗擊敗中信兄弟二軍，首季就收下兩項冠軍。',
        highlights: ['味全龍重返後首度參加正式賽季，球員在二軍完成新陣容的第一輪磨合。', '二軍交流盃一路全勝奪冠。', '二軍總冠軍賽以 3 勝 1 敗擊敗中信兄弟二軍，替重返之路開出好彩頭。'],
        slogan: 'Origin',
        sources: [
            { label: 'CPBL：味全龍二軍例行賽第一', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132506786718137468' },
            { label: '中央社：味全龍年度口號 Origin', url: 'https://www.cna.com.tw/news/aspt/202002050136.aspx' }
        ]
    },
    2021: {
        heading: '徐若熙初登板 11 次三振，龍隊拿下回歸首勝',
        record: '50 勝・67 敗・3 和', rank: '全年第 5 名', distinction: '重返一軍首個球季',
        summary: '味全龍睽違 21 年重返一軍，投手徐若熙在 3 月 17 日一軍初登板先發 3.2 局送出 11 次三振，11 個出局數全由三振取得，帶領球隊以 4：0 擊敗中信兄弟，拿下回歸一軍首勝。',
        highlights: ['徐若熙初登板前九個出局數全是三振，最終 3.2 局投出 11 次三振且沒有失分。', '味全龍以 4：0 擊敗中信兄弟，取得重返一軍後的首場勝利。', '這場比賽讓 20 歲的徐若熙一戰成名，成為重返一軍球季最鮮明的個人故事。'],
        slogan: '龍躍再現',
        sources: [
            { label: '味全龍官方：重返一軍與年度主視覺', url: 'https://www.wdragons.com/%E5%91%B3%E5%85%A8%E9%BE%8D%E5%85%A8%E6%96%B0%E8%AD%98%E5%88%A5%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8/' },
            { label: '中央社：徐若熙初登板 11K、味全龍拿下回歸首勝', url: 'https://www.cna.com.tw/news/firstnews/202103170384.aspx' }
        ]
    },
    2022: {
        heading: '林智勝第 290 轟超越張泰山，龍隊首闖季後賽',
        record: '57 勝・58 敗・5 和', rank: '全年第 3 名', distinction: '季後挑戰賽止步',
        summary: '味全龍開幕戰作客台南，林智勝在轉隊後首場出賽就轟出生涯第 290 支全壘打，超越張泰山成為中職全壘打紀錄保持人。球隊同年首次打進季後賽，迎來重返一軍後的新里程碑。',
        highlights: ['林智勝在 4 月 3 日開幕戰敲出第 290 轟，超越張泰山，賽後與張泰山相擁。', '味全龍首度取得重返一軍後的季後賽資格。', '季後挑戰賽第二戰擊敗中信兄弟，拿下回歸一軍後首場季後賽勝利。'],
        slogan: '龍往直前',
        sources: [
            { label: '味全龍官方：2022 年度口號「龍往直前」', url: 'https://www.wdragons.com/2022%E5%91%B3%E5%85%A8%E9%BE%8D%E5%B9%B4%E5%BA%A6%E4%B8%BB%E8%A6%96%E8%A6%BA%E8%88%87%E5%B9%B4%E5%BA%A6%E5%8F%A3%E8%99%9F%E3%80%8C%E9%BE%8D%E5%BE%80%E7%9B%B4%E5%89%8D%E3%80%8D/' },
            { label: '中央社：林智勝第 290 轟成中職全壘打王', url: 'https://www.cna.com.tw/news/aspt/202204030213.aspx' }
        ]
    },
    2023: {
        heading: '台灣大賽第七戰首局灌五分，徐若熙率龍隊封王',
        record: '62 勝・53 敗・5 和', rank: '全年第 1 名', distinction: '下半季冠軍・年度總冠軍',
        summary: '味全龍與樂天桃猿在台灣大賽鏖戰七場，決勝第七戰首局攻下五分，終場以 6：3 確定勝利，睽違 24 年再奪年度總冠軍。系列賽中，徐若熙在第六戰先發七局無失分，獲選台灣大賽 MVP。',
        highlights: ['第七戰首局味全龍攻下五分，先發打線迅速掌握比賽，最終以 6：3 奪冠。', '徐若熙在背水一戰的第六戰先發七局無失分，幫助球隊把系列賽帶進搶七，並獲選系列賽 MVP。', '這是味全龍隊史第五冠，也是重返一軍後的首座總冠軍。'],
        slogan: '龍眾一心',
        sources: [
            { label: '味全龍官方：2023 臺灣大賽', url: 'https://www.wdragons.com/2023taiwanseries/' },
            { label: '味全龍官方：年度主題曲與「龍眾一心」', url: 'https://www.wdragons.com/theme_song/' },
            { label: '青年日報：臺灣大賽第七戰與徐若熙 MVP', url: 'https://www.ydn.com.tw/tw/News/ugC_News_Detail.aspx?ID=473156' }
        ]
    }
};

const weiChuanDragonsAnnualSloganData = {
    2024: {
        slogan: '龍眾一心 Keep Fighting',
        source: { label: '味全龍官方：2024 年度口號', url: 'https://www.wdragons.com/%E5%91%B3%E5%85%A8%E9%BE%8D%E6%8F%AD%E5%B9%B4%E5%BA%A6%E5%8F%A3%E8%99%9F%E9%BE%8D%E7%9C%BE%E4%B8%80%E5%BF%83-keep-fighting%E3%80%80%E9%BD%8A%E5%BF%83%E9%82%81%E5%90%91%E4%BA%8C%E9%80%A3%E9%9C%B8/' }
    },
    2025: {
        slogan: 'Goal For One',
        source: { label: '味全龍官方：2025 年度主視覺 Goal For One', url: 'https://www.wdragons.com/%E5%91%B3%E5%85%A8%E9%BE%8D2025%E5%B9%B4%E5%BA%A6%E4%B8%BB%E8%A6%96%E8%A6%BA%EF%BC%9Agoal-for-one%EF%BC%81/' }
    },
    2026: {
        slogan: 'Run & Roar 奔龍而上',
        source: { label: '味全龍官方：2026 年度口號 Run & Roar', url: 'https://www.wdragons.com/%E5%91%B3%E5%85%A8%E9%BE%8D%E5%B9%B4%E5%BA%A6%E5%8F%A3%E8%99%9F%E3%80%8CRun-Roar-%E5%A5%94%E9%BE%8D%E8%80%8C%E4%B8%8A%E3%80%8D%E5%85%A8%E5%8B%A4%E9%BE%8D%E8%BF%B7%E5%85%B1%E5%90%8C%E6%8F%AD/' }
    }
};

Object.entries(weiChuanDragonsLegacyArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const articleNumber = dragonChineseNumber(year - 1989);
    const pageTitle = `味全龍隊/味全龍隊的職棒${articleNumber}年`;
    const teamProfileName = '味全龍1';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamProfileName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), weiChuanDragonsTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamProfileName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), ...(profile.sources || []), {
                    label: `台灣棒球維基館｜味全龍職棒${articleNumber}年`,
                    url: `https://twbsball.dils.tku.edu.tw/index.php?title=${encodeURIComponent(pageTitle)}`
                }]
            }
        }
    };
});

Object.entries(weiChuanDragonsArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '味全龍';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), weiChuanDragonsTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), ...(profile.sources || [])]
            }
        }
    };
});

Object.entries(weiChuanDragonsAnnualSloganData).forEach(([yearText, entry]) => {
    const year = Number(yearText);
    const existingProfile = teamSeasonProfileData[year]?.teams['味全龍'] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '味全龍': {
                ...existingProfile,
                slogan: entry.slogan,
                sources: [...(existingProfile.sources || []), entry.source]
            }
        }
    };
});

const rakutenMonkeysTeamHistorySource = {
    label: '台灣棒球維基館｜樂天桃猿隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E6%A8%82%E5%A4%A9%E6%A1%83%E7%8C%BF%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// La New 熊、Lamigo 桃猿與樂天桃猿年度隊史，以球團轉折、人物事蹟及球迷文化為主。
const rakutenMonkeysArchiveProfiles = {
    2004: {
        heading: '接續第一金剛在澄清湖出發，La New 熊展開新隊史',
        summary: 'La New 集團接手第一金剛後，球隊以 La New 熊之名展開第一個完整球季，並以高雄澄清湖棒球場為固定主場。球團由既有陣容重新整隊，開啟後來延續至桃猿時期的隊史。',
        distinction: '成軍首季・全年第 6 名',
        highlights: ['球隊由第一金剛轉手後改組，以 La New 熊之名參加中職。', '固定以澄清湖棒球場作為主場，建立高雄在地球迷基礎。', '林智勝、石志偉等年輕球員開始成為熊隊重建班底。'],
        sources: [{ label: '公視：La New 熊更名 Lamigo、主場北遷回顧', url: 'https://news.pts.org.tw/article/168090' }]
    },
    2005: {
        heading: '球團季後網羅陳金鋒，熊隊重建迎來關鍵轉折',
        summary: 'La New 熊持續整建球隊，球季後以選秀第一順位指名旅美球星陳金鋒，並與他簽下中職首份複數年合約。這項簽約讓「台灣巨砲」返台成為熊隊下一季最受矚目的故事，也為球團帶來新的象徵人物。',
        distinction: '未取得季冠軍',
        highlights: ['球團在選秀會以第一順位指名陳金鋒。', '陳金鋒返台與 La New 簽下六年合約，前三年保障年薪創當時中職紀錄。', '複數年合約成為球團長期留才與經營球星的新嘗試。'],
        sources: [{ label: 'CPBL：陳金鋒正式加盟 La New 熊', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508873222655510' }]
    },
    2006: {
        heading: '陳金鋒返台首季助熊隊封王，亞洲職棒大賽闖進冠軍戰',
        summary: '陳金鋒加盟首季就與林智勝等隊友帶領 La New 熊奪下隊史首冠；球隊接著代表中職參加亞洲職棒大賽，擊敗韓國三星獅，首度打進冠軍戰。熊隊從重建隊伍躍上國內外舞台，成為當年最受矚目的棒球故事。',
        distinction: '上下半季冠軍・年度總冠軍',
        highlights: ['La New 熊在台灣大賽以 4 勝 0 敗擊敗統一獅，拿下成軍首冠。', '陳金鋒在台灣大賽敲出關鍵全壘打，返台第一年就參與封王。', '亞洲職棒大賽擊敗韓國三星獅，隊史首度挺進冠軍戰。'],
        sources: [
            { label: 'CPBL：La New 熊奪下隊史首冠', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509355969029963' },
            { label: 'CPBL：La New 熊首度闖進亞洲職棒大賽冠軍戰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509355806334866' }
        ]
    },
    2007: {
        heading: '連兩年以下半季冠軍出線，熊隊連續登上台灣大賽',
        summary: 'La New 熊延續前一年的競爭力，連續第二季拿下下半季冠軍並打進台灣大賽。這批以林智勝、陳金鋒等人為核心的陣容，逐漸讓熊隊從新軍轉型為穩定的爭冠球隊。',
        distinction: '下半季冠軍・台灣大賽亞軍',
        highlights: ['La New 熊自 2006 年起連續兩年拿下下半季冠軍。', '球隊連續第二年打進台灣大賽，再度與統一獅交手。', '林智勝、陳金鋒等主力逐漸建立熊隊的核心陣容。'],
        sources: [{ label: '自由體育：La New 熊至 Lamigo 桃猿隊史回顧', url: 'https://sports.ltn.com.tw/news/paper/824643' }]
    },
    2008: {
        heading: '熊隊再取下半季冠軍，季後賽成為固定班底',
        summary: 'La New 熊再次拿下下半季冠軍，連續第二年站上季後舞台。雖在季後挑戰賽遭兄弟象淘汰，連續晉級仍顯示球隊已走出早期重建，成為聯盟中的常態競爭者。',
        distinction: '下半季冠軍・季後挑戰賽止步',
        highlights: ['熊隊連續第二年拿下下半季冠軍。', '季後挑戰賽與兄弟象交手，未能晉級台灣大賽。', '球團持續補進新血，維持以本土主力為骨幹的競爭陣容。'],
        sources: [{ label: '自由體育：La New 熊至 Lamigo 桃猿隊史回顧', url: 'https://sports.ltn.com.tw/news/paper/824643' }]
    },
    2009: {
        heading: '黑象事件重創球隊，多年培養的主力班底被迫重整',
        summary: '黑象事件爆發，多名 La New 熊球員涉入職棒簽賭案而遭開除，球團多年建立的核心陣容因此受到重大衝擊。這場風暴不只影響熊隊，也再次撼動台灣職棒與球迷之間的信任。',
        distinction: '未取得季冠軍',
        highlights: ['多名 La New 熊球員因黑象事件遭開除，主力陣容出現大幅變動。', '球團必須重新補強與培養球員，面對隊史重要的重建階段。', '事件引發聯盟與球界對簽賭防制及職棒形象的反省。'],
        sources: [{ label: '自由體育：La New 熊至 Lamigo 桃猿隊史回顧', url: 'https://sports.ltn.com.tw/news/paper/824643' }]
    },
    2010: {
        heading: '高雄熊隊最後一季，北遷桃園的轉型已在眼前',
        summary: 'La New 熊在黑象事件後以調整陣容的方式走完球季，這也是球隊留在高雄、以熊隊名義出賽的最後一年。球團隨後決定把主場移往桃園，球隊即將從高雄熊隊轉入新的城市與品牌階段。',
        distinction: '未取得季冠軍・高雄主場最後一季',
        highlights: ['La New 熊在高雄澄清湖完成最後一個主場球季。', '球團著手將主場遷往桃園，為隊名與球隊識別全面改版。', '林智勝等球員延續熊隊班底，成為轉型後猿隊的重要連結。'],
        sources: [{ label: '公視：La New 熊更名 Lamigo、主場北遷', url: 'https://news.pts.org.tw/article/168090' }]
    },
    2011: {
        heading: '從高雄搬到桃園，Lamigo 桃猿開啟屬地主場時代',
        summary: '球團將主場由高雄遷至桃園，La New 熊也正式更名 Lamigo 桃猿。吉祥物、球衣與球隊識別同步更新，桃園成為新的大本營，球隊開始以在地經營和球迷互動打造長期主場文化。',
        distinction: '台灣大賽亞軍・主場遷往桃園',
        highlights: ['球隊由高雄遷至桃園，並以 Lamigo 桃猿的新隊名出賽。', '新吉祥物與全新球隊識別亮相，標誌熊隊時期告一段落。', '首個桃園球季即打進台灣大賽，建立桃園屬地主場的起點。'],
        sources: [{ label: '公視：Lamigo 桃猿改名與主場遷移', url: 'https://news.pts.org.tw/article/168090' }]
    },
    2012: {
        heading: '搬到桃園後首度封王，「超級霸」為球隊帶回冠軍',
        summary: 'Lamigo 桃猿下半季一度落後領先隊伍，球季後段靠團隊打線與本土投手逐步追上，拿下季冠軍並在台灣大賽以 4 勝 1 敗擊敗統一獅。這是球隊北遷後首冠，桃園主場也迎來第一場封王慶祝。',
        distinction: '下半季冠軍・年度總冠軍',
        highlights: ['球隊在下半季後段追上領先者，取得台灣大賽門票。', '台灣大賽以 4 勝 1 敗擊敗統一獅，拿下隊史第二冠。', '北遷桃園後首度奪冠，球團以「超級霸」作為當年的奪勝口號。'],
        sources: [{ label: 'CPBL：Lamigo 桃猿拿下隊史第二冠', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507825456955885' }]
    },
    2013: {
        heading: '曼尼短暫披上猿袍，「猿風應援」帶動主場新氣象',
        summary: '前大聯盟球星曼尼拉米瑞茲來台加盟，短暫效力期間吸引大量關注；球團同年導入電子編曲、舞蹈與現場 DJ，形成後來被稱為「猿風應援」的主場風格。即使曼尼季中離隊，球場娛樂與球迷參與的做法仍延續下來。',
        distinction: '未取得季冠軍',
        highlights: ['曼尼拉米瑞茲來台加入桃猿，成為球季最受矚目的國際球星。', '球團以電子音樂、舞蹈與現場 DJ 改造傳統應援形式。', '猿風應援為隔年擴大成「全猿主場」鋪路，桃園主場文化開始成形。'],
        sources: [{ label: '自由體育：Lamigo 應援團與全猿主場回顧', url: 'https://sports.ltn.com.tw/news/paper/811071' }]
    },
    2014: {
        heading: '全猿主場擴大應援，桃園球場變成整座球迷派對',
        summary: 'Lamigo 將前一年的猿風應援擴大為「全猿主場」，讓內野一、三壘兩側都由主隊應援帶動，並加入主題活動與賽後演出。這項球場經營方式迅速成為桃猿鮮明特色；球隊也在季末奪冠，讓場內外的全猿主場文化更加完整。',
        distinction: '上半季冠軍・年度總冠軍',
        highlights: ['全猿主場讓內野兩側都加入主隊應援，突破以往一、三壘分別支持不同球隊的安排。', '主題趴、舞台表演與球場餐飲共同構成桃園主場體驗。', '台灣大賽以 4 勝 1 敗擊敗中信兄弟，拿下隊史第三冠。'],
        sources: [
            { label: 'CPBL：Lamigo 全猿主場球季開打', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507574552451868' },
            { label: 'CPBL：Lamigo 奪下職棒 25 年總冠軍', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507582234147468' }
        ]
    },
    2015: {
        heading: '從 0：3 絕境連勝四場，Lamigo 完成台灣大賽逆轉',
        summary: 'Lamigo 桃猿在台灣大賽先連輸三場，之後連贏四場，以 4 勝 3 敗完成中職台灣大賽史上首次「讓三追四」。第七戰由明星投出無安打完封勝，林智勝等打線則在後段拉開比分，這次逆轉也讓桃猿完成二連霸。',
        distinction: '上半季冠軍・年度總冠軍・二連霸',
        highlights: ['台灣大賽一度以 0 勝 3 敗落後，Lamigo 隨後連贏四場逆轉封王。', '第七戰先發投手明星投出無安打完封勝。', '球隊完成隊史首次二連霸，系列賽逆轉成為中職台灣大賽代表戰役。'],
        sources: [{ label: 'CPBL：Lamigo 以 4 勝 3 敗完成二連霸', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507468394385042' }]
    },
    2016: {
        heading: '王柏融首破單季 200 安，陳金鋒迎來球員生涯最後一季',
        summary: '王柏融成為中職史上第一位單季擊出 200 支安打的球員，改寫單季安打紀錄；同一季也是陳金鋒的球員生涯最後一年。桃猿從「台灣巨砲」告別球場，迎接「大王」接棒的世代交替，成為球迷記憶鮮明的一年。',
        distinction: '上半季冠軍・台灣大賽亞軍',
        slogan: '桃猿大勝',
        highlights: ['王柏融單季擊出 200 支安打，成為中職史上第一人。', '陳金鋒宣布球季結束後退休，桃園主場舉辦告別賽與引退儀式。', '林智勝離隊後，王柏融與年輕野手承接打線重任。'],
        sources: [
            { label: 'CPBL：王柏融完成單季 200 安', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132507369788526621' },
            { label: '桃園市政府：Lamigo 2016 年度口號「桃猿大勝」', url: 'https://www.tycg.gov.tw/NewsPage_Content.aspx?n=10&s=633882' },
            { label: '中央社：陳金鋒引退賽與 52 號球衣致敬', url: 'https://www.cna.com.tw/news/aspt/201609180188.aspx' }
        ]
    },
    2017: {
        heading: '機場捷運直達全猿主場，桃園看球交通迎來新路線',
        summary: '桃園機場捷運通車後，A19 桃園體育園區站成為捷運直達球場的入口。Lamigo 以「捷 Speed」為年度口號，與桃園捷運合作推出主題活動，讓球迷搭機捷進場，桃園球場也成為台灣第一座捷運直達的職棒球場。',
        distinction: '上下半季冠軍・年度總冠軍',
        slogan: '捷 Speed',
        highlights: ['桃園機場捷運開通，A19 站步行可達桃園國際棒球場。', '球團與桃園捷運合作舉辦桃捷主題週，年度口號為「捷 Speed」。', 'Lamigo 在季後賽擊敗中信兄弟，重新奪回年度總冠軍。'],
        sources: [
            { label: '桃園捷運：Lamigo 2017 年度口號「捷 Speed」', url: 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/news/show-327-35.html' },
            { label: '中央社：桃猿封王與桃園主場球迷', url: 'https://www.cna.com.tw/news/firstnews/201811040092.aspx' }
        ]
    },
    2018: {
        heading: '王柏融連三年奪打擊王，Lamigo 再度完成衛冕',
        summary: '王柏融連續第三年獲得打擊王，季後球團也安排他旅外挑戰日本職棒；同年 Lamigo 在總冠軍賽擊敗統一獅，完成二連霸。球季交棒的焦點落在明星球員旅外與球隊持續維持競爭力兩條故事線上。',
        distinction: '上下半季冠軍・年度總冠軍・二連霸',
        slogan: 'WE ARE',
        highlights: ['王柏融連續第三年拿下中職打擊王，季後透過入札制度加盟日本火腿。', 'Lamigo 台灣大賽以 4 勝 2 敗擊敗統一獅，完成連續第二年奪冠。', '年度歌曲與口號「WE ARE」延續全猿主場的球迷參與感。'],
        sources: [
            { label: '中央社：王柏融加盟日本火腿', url: 'https://www.cna.com.tw/news/firstnews/201812190217.aspx' },
            { label: '中央社：Lamigo 2018 年封王', url: 'https://www.cna.com.tw/news/firstnews/201811040092.aspx' },
            { label: 'NOWnews：Lamigo 公布年度口號「WE ARE」', url: 'https://www.nownews.com/news/2710084' }
        ]
    },
    2019: {
        heading: 'Lamigo 名號最後一季完成三連霸，球團轉由樂天接手',
        summary: 'Lamigo 桃猿在隊名最後一季完成三連霸，並於球季後由日本樂天集團接手經營。封王遊行成為 Lamigo 品牌告別中職前的重要一幕，桃猿則保留原有城市與吉祥物，準備以新東家和新識別延續隊史。',
        distinction: '上半季冠軍・年度總冠軍・三連霸',
        highlights: ['Lamigo 以 4 勝 1 敗擊敗中信兄弟，拿下隊史第七冠並完成三連霸。', '球團完成轉讓協議，日本樂天集團將接手球隊。', '三連霸封王遊行是 Lamigo 名下最後一次公開慶祝活動。'],
        sources: [
            { label: '樂天：Lamigo 球隊股權轉讓公告', url: 'https://www.rakuten.com.tw/info/release/2019/0919/' },
            { label: '中央社：Lamigo 三連霸封王遊行', url: 'https://www.cna.com.tw/news/aspt/201910200110.aspx' }
        ]
    },
    2020: {
        heading: 'Rakuten Monkeys 隊名與識別首度亮相，開啟新經營時代',
        summary: '樂天集團接手後，球隊首度以 Rakuten Monkeys 樂天桃猿之名出賽，延續桃猿稱呼與桃園主場，也導入樂天品牌識別。年度主題「Rock You Ten」將球迷稱作 10 號隊友，成為新隊名首季的球團溝通主軸。',
        distinction: '未取得季冠軍・樂天接手首季',
        slogan: 'Rock You Ten',
        highlights: ['球隊公布新隊名 Rakuten Monkeys 樂天桃猿，Lamigo 時代正式結束。', '球團以「Rock You Ten」及「Rock You Everyday!」向 10 號隊友傳達新識別。', '球隊延續桃園主場與猿隊文化，開始在樂天集團體系下經營。'],
        sources: [
            { label: '樂天：Rakuten Monkeys 新隊名公布', url: 'https://www.rakuten.com.tw/info/release/2019/1218/' },
            { label: '樂天桃猿官方：2020 年度口號「Rock You Ten」', url: 'https://monkeys.rakuten.com.tw/news_detail/111' }
        ]
    },
    2021: {
        heading: '例行賽最後一戰見證林智勝追平 289 轟紀錄',
        summary: '球季最後一戰，樂天桃猿迎戰中信兄弟；林智勝在七局上擊出逆轉滿貫砲，追平張泰山保持的中職生涯最多 289 轟紀錄。這場比賽讓桃猿的年度賽程以一個聯盟歷史時刻收尾，林智勝也向一路支持他的球迷致意。',
        distinction: '未取得季冠軍',
        slogan: 'Stronger Together',
        highlights: ['林智勝在對桃猿之戰敲出逆轉滿貫砲，追平中職生涯 289 轟紀錄。', '這是中信兄弟例行賽最後一戰，也是該季聯盟全壘打紀錄的關鍵時刻。', '球團以「Stronger Together」作為年度口號，訴求球員與 10 號隊友並肩作戰。'],
        sources: [
            { label: '中央社：林智勝 289 轟追平紀錄', url: 'https://www.cna.com.tw/news/firstnews/202111215003.aspx' },
            { label: '樂天桃猿官方：2021 年度主視覺「Stronger Together」', url: 'https://monkeys.rakuten.com.tw/news_detail/252' }
        ]
    },
    2022: {
        heading: '林立包辦個人獎並拿下 MVP，成為桃猿新世代招牌',
        summary: '林立以穩定而全面的打擊表現，包辦打擊王、安打王、打點王與最佳九人二壘手，再獲選年度 MVP，成為樂天桃猿新世代的招牌球星。球隊也拿下樂天接手後首座季冠軍，年度口號「RISE UP 再戰起來」呼應重返榮耀的目標。',
        distinction: '上半季冠軍・季後挑戰賽止步',
        slogan: 'RISE UP 再戰起來',
        highlights: ['林立以打擊、安打、打點三冠王身分拿下年度 MVP 與最佳九人二壘手。', '總教練曾豪駒帶隊拿下樂天接手後首座季冠軍，受訪時一度哽咽。', '年度主視覺與口號「RISE UP 再戰起來」由設計師 APUJAN 打造。'],
        sources: [
            { label: '中央社：林立獲年度 MVP 與五項獎項', url: 'https://www.cna.com.tw/news/aspt/202211300383.aspx' },
            { label: '中央社：樂天接手後首座季冠軍', url: 'https://www.cna.com.tw/news/aspt/202207100226.aspx' },
            { label: '樂天桃猿官方：年度主視覺「RISE UP 再戰起來」', url: 'https://monkeys.rakuten.com.tw/news_detail/429' }
        ]
    },
    2023: {
        heading: '林智勝在桃園敲出生涯 300 轟，寫下中職史上第一人',
        summary: '4 月 16 日，味全龍林智勝在桃園球場代打轟出中職史上第一支生涯 300 轟，從樂天桃猿投手豪勁手中完成里程碑。這個紀錄發生在桃猿主場，也連結了林智勝從 La New 熊時期展開、跨越不同隊名的長年職棒生涯。',
        distinction: '下半季冠軍・年度總冠軍',
        slogan: 'READY #全猿準備',
        highlights: ['林智勝從豪勁手中轟出生涯第 300 支全壘打，成為中職史上第一人。', '里程碑出現在桃園，林智勝早年曾效力 La New 熊與 Lamigo 桃猿。', '桃猿與味全龍在台灣大賽交手七場，系列賽成為桃園主場年度重要賽事。'],
        sources: [
            { label: 'CPBL：林智勝在桃園完成生涯 300 轟', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0N106848635248154958' },
            { label: '中央社：中職首位生涯 300 轟', url: 'https://www.cna.com.tw/news/aspt/202304165002.aspx' },
            { label: '樂天桃猿官方：2023 年度口號「READY #全猿準備」', url: 'https://monkeys.rakuten.com.tw/news_detail/573' }
        ]
    },
    2024: {
        heading: '古久保接任總教練、林立首任隊長，球隊以「突破」迎新季',
        summary: '古久保健二首次接任樂天桃猿總教練，林立則首度擔任隊長，球團以「突破」作為年度口號。球季開幕時桃猿也成為台北大巨蛋首場中職例行賽的對手，參與中職在新球場展開例行賽的新篇章。',
        distinction: '未取得季冠軍',
        slogan: '突破',
        highlights: ['古久保健二首度掌兵符，林立首次擔任隊長，梁家榮與黃子鵬擔任副隊長。', '年度主題「突破」聚焦球員超越自己、朝樂天接手後首冠前進。', '3 月 30 日對味全龍之戰是中職首場大巨蛋例行賽，徐若熙投出首球並帶隊取得首勝。'],
        sources: [
            { label: '樂天桃猿官方：2024 口號、總教練與隊長公布', url: 'https://monkeys.rakuten.com.tw/news_detail/727' },
            { label: '中央社：大巨蛋中職首球、首 K 與首勝', url: 'https://www.cna.com.tw/news/aspt/202403300230.aspx' }
        ]
    },
    2025: {
        heading: '季後挑戰賽從 0：2 連勝逆轉，奪下樂天接手後首冠',
        summary: '樂天桃猿先在季後挑戰賽落後統一獅 0 勝 2 敗，隨後連贏三場完成中職季後挑戰賽首見的「讓二追三」。桃猿再於台灣大賽以 4 勝 1 敗擊敗中信兄弟，第五戰延長至第十一局由林泓育敲出致勝兩分砲，拿下樂天接手後首座年度總冠軍。',
        distinction: '年度總冠軍',
        slogan: 'NONSTOP 全猿猛進',
        highlights: ['季後挑戰賽在 0 勝 2 敗劣勢下連贏三場，完成史上首見的「讓二追三」。', '台灣大賽第五戰延長至第十一局，林泓育敲出致勝兩分全壘打。', '古久保健二帶隊奪冠，這是樂天集團接手後桃猿的首座年度總冠軍。'],
        sources: [
            { label: '中央社：桃猿季後挑戰賽「讓二追三」', url: 'https://www.cna.com.tw/news/aspt/202510110195.aspx' },
            { label: 'CPBL：樂天桃猿 2025 台灣大賽封王歷程', url: 'https://pb.cpbl.com.tw/xmdoc/cont?sid=0P308545220797370494&xsmsid=0l113391521954478024' },
            { label: '樂天桃猿官方：2025 年度口號「NONSTOP 全猿猛進」', url: 'https://monkeys.rakuten.com.tw/news_detail/831' }
        ]
    },
    2026: {
        heading: '曾豪駒回任總教練、梁家榮接任隊長，球隊以「做伙」再出發',
        summary: '曾豪駒在率領中華隊奪下世界 12 強賽冠軍後回任桃猿總教練，梁家榮接下隊長，年度口號「做伙 #UNITE」強調凝聚球隊與球迷。衛冕球季未能延續前一年的季後賽之旅，球隊在例行賽最終戰向一路支持的 10 號隊友致謝。',
        distinction: '未取得季後賽資格・衛冕球季',
        slogan: '做伙 #UNITE',
        highlights: ['曾豪駒回任總教練，梁家榮接任隊長，陳冠宇與陳晨威擔任副隊長。', '球團以「做伙 #UNITE」作為年度口號，呼應並肩作戰與團隊凝聚。', '例行賽最終戰後，曾豪駒與梁家榮向球迷致謝，為未能衛冕季後賽資格的球季收尾。'],
        sources: [
            { label: '樂天桃猿官方：曾豪駒回任、隊長與口號公布', url: 'https://monkeys.rakuten.com.tw/news_detail/894' },
            { label: '中央社：樂天桃猿例行賽最終戰', url: 'https://www.cna.com.tw/news/aspt/202610060345.aspx' }
        ]
    }
};

Object.entries(rakutenMonkeysArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = year <= 2010 ? 'LaNew 熊' : year <= 2016 ? 'Lamigo桃猿' : year <= 2019 ? 'Lamigo桃猿1' : 'Rakuten Monkeys';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), rakutenMonkeysTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), rakutenMonkeysTeamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

const mediaDragonsTeamHistorySource = {
    label: '台灣棒球維基館｜米迪亞暴龍隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E7%B1%B3%E8%BF%AA%E4%BA%9E%E6%9A%B4%E9%BE%8D%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 米迪亞暴龍在 2008 年以新隊名出賽，球季中因涉賭事件遭停權並由聯盟除名。
const mediaDragonsArchiveProfiles = {
    2008: {
        heading: '誠泰改名米迪亞暴龍，球季中因涉賭案遭聯盟除名',
        summary: '誠泰 COBRAS 經營權轉由賽亞科技接手後，球隊於 2008 年 2 月改名為「米迪亞暴龍」（dmedia T-REX），從眼鏡蛇識別換成暴龍隊名與吉祥物。球季原以「非我莫屬」為年度主題，卻在 10 月因球團管理階層與球員涉賭案遭聯盟停權；剩餘兩場例行賽取消，聯盟並於 10 月 23 日決議除名。',
        distinction: '球季中遭停權・聯盟除名',
        slogan: '非我莫屬',
        highlights: ['賽亞科技接手誠泰球團後，球隊公布新隊名「米迪亞暴龍」與英文名 dmedia T-REX。', '10 月 9 日，聯盟因涉賭案宣布停權，暴龍對兄弟象的最後兩場例行賽取消。', '10 月 23 日，聯盟常務理事會決議除名；這是中職史上首次有球隊遭除名。'],
        sources: [
            { label: '自由體育：米迪亞暴龍隊名與識別公布', url: 'https://sports.ltn.com.tw/news/paper/188972' },
            { label: 'CPBL：聯盟決議將米迪亞暴龍除名', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508935449401682' },
            { label: '自由體育：中職史上首次球團遭除名', url: 'https://sports.ltn.com.tw/amp/news/paper/252897' },
            { label: 'TVBS：米迪亞暴龍遭停權與取消剩餘賽事', url: 'https://news.tvbs.com.tw/sports/678359' },
            { label: '新聞存檔：2008 年度主題「非我莫屬」', url: 'https://www.ptt.cc/bbs/Cobras/M.1202161395.A.C67.html' }
        ]
    }
};

Object.entries(mediaDragonsArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '米迪亞暴龍';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), mediaDragonsTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), mediaDragonsTeamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

const macotoCobrasTeamHistorySource = {
    label: '台灣棒球維基館｜誠泰 Cobras 隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E8%AA%A0%E6%B3%B0Cobras%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 誠泰 Cobras 2004–2007 年隊史，著重品牌轉型、球員事蹟與球團變動。
const macotoCobrasArchiveProfiles = {
    2004: {
        heading: '橘黑識別亮相，誠泰 Cobras 揭開隊史新頁',
        summary: '兩聯盟合併後，誠泰太陽於 2004 年改以「誠泰 Cobras」之名參賽，從太陽隊識別轉為橘黑配色的眼鏡蛇形象。全新球衣、隊徽與郭泰源領軍的教練團一同亮相，球團也透過廣告與商品經營，為這支新品牌建立鮮明個性。',
        distinction: '誠泰 Cobras 名義首季・全年第 5 名',
        highlights: ['誠泰太陽改名誠泰 Cobras，成為兩聯盟合併後以新隊名出賽的球隊之一。', '2 月公布橘黑主色的全新識別與球衣，眼鏡蛇隊徽和日式設計成為球隊標誌。', '郭泰源出任總教練，球團以新教練團和品牌宣傳展開 Cobras 的第一個中職球季。'],
        sources: [
            { label: 'CPBL：誠泰 Cobras 全新識別亮相', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509528033456770' },
            { label: '遠見：誠泰 Cobras 擊出業績全壘打', url: 'https://www.gvm.com.tw/article/9512' }
        ]
    },
    2005: {
        heading: '史上首次加賽決定季冠軍，誠泰首度闖進台灣大賽',
        summary: '誠泰與興農牛上半季戰績相同，中職首度在例行賽後加賽決定季冠軍。林英傑先發八局無失分、林恩宇守住第九局，誠泰以 4：0 獲勝，拿下隊史首座季冠軍並首度打進台灣大賽；林恩宇也在球季結束後包辦年度 MVP、新人王等五項個人獎。',
        distinction: '上半季冠軍・隊史首次台灣大賽',
        highlights: ['7 月 21 日在嘉義進行中職史上首場季冠軍加賽，誠泰以 4：0 擊敗興農牛封王。', '林英傑先發八局只被敲兩支安打，與林恩宇聯手完封；謝佳賢在第七局擊出兩分全壘打。', '誠泰首度打進台灣大賽，最終遭興農牛直落四；林恩宇季後獲年度 MVP、新人王等五項獎項。'],
        sources: [
            { label: 'CPBL：誠泰加賽奪下隊史首座季冠軍', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509444219657302' },
            { label: 'CPBL：興農牛橫掃誠泰奪得年度總冠軍', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508911105417827' },
            { label: 'CPBL：林恩宇獲年度五項大獎', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508918035194845' }
        ]
    },
    2006: {
        heading: '林恩宇單季 209 三振創紀錄，季後轉赴日本',
        summary: '林恩宇在誠泰第二個球季拿下勝投、防禦率與三振三項投手大獎，並以單季 209 次三振刷新中職紀錄，再度獲選年度 MVP。球季結束後，他加盟日本職棒東北樂天金鷲，接續林英傑之後，成為第二位從誠泰轉赴樂天的投手。',
        distinction: '林恩宇連兩年獲年度 MVP・投手三冠王・單季 209 三振紀錄',
        highlights: ['林恩宇單季送出 209 次三振，刷新中職單季紀錄，並成為聯盟史上第二位投手三冠王。', '林恩宇連續第二年獲年度 MVP；2005 年他還同時拿下新人王。', '季後林恩宇加盟東北樂天金鷲，與先一年赴日的林英傑在同一支球隊會合。'],
        sources: [
            { label: 'CPBL：林恩宇獲 2006 年度 MVP 與五項大獎', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509356263930866' },
            { label: 'CPBL：林恩宇投手三冠王、209 三振與季後加盟樂天', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509359165405982' }
        ]
    },
    2007: {
        heading: '易主案破局後守住 Cobras 招牌，迎來隊名最後一季',
        summary: '季前誠泰宣布將由九禾國際接手，球團一度公布以「龍」為吉祥物，卻在新隊名尚未確定時就展開春訓；接手案未能完成，誠泰於 3 月宣布繼續經營。球隊以 Cobras 之名拿下上半季冠軍，並打進季後挑戰賽，這也是改名米迪亞暴龍前的最後一個誠泰球季。',
        distinction: '上半季冠軍・季後挑戰賽止步・誠泰名稱最後一季',
        highlights: ['九禾國際宣布接手誠泰並提出「龍」吉祥物，球隊一度在新隊名未定的情況下進行春訓。', '3 月接手案破局，誠泰恢復原隊名與球衣出賽；轉手風波成為球季前的焦點。', '球隊拿下上半季冠軍，季後挑戰賽遭統一獅直落三淘汰；球季後改名米迪亞暴龍。'],
        sources: [
            { label: 'TVBS：九禾接手案破局，誠泰繼續經營', url: 'https://news.tvbs.com.tw/health/332527' },
            { label: '自由體育：九禾接手與「龍」吉祥物計畫', url: 'https://sports.ltn.com.tw/news/paper/112684' },
            { label: '自由體育：誠泰更名米迪亞暴龍', url: 'https://sports.ltn.com.tw/news/paper/188972' },
            { label: 'CPBL：2007 季後挑戰賽由誠泰對統一', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509179233096144' },
            { label: 'CPBL：統一獅直落三淘汰誠泰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509162426158686' }
        ]
    }
};

Object.entries(macotoCobrasArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '誠泰Cobras';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), macotoCobrasTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), macotoCobrasTeamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

const heshinWhalesTeamHistorySource = {
    label: '台灣棒球維基館｜和信鯨隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%92%8C%E4%BF%A1%E9%AF%A8%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const chinatrustWhalesTeamHistorySource = {
    label: '台灣棒球維基館｜中信鯨隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E4%B8%AD%E4%BF%A1%E9%AF%A8%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 和信鯨與中信鯨 1997–2008 年隊史，著重球團轉折、人物與具代表性的球季事件。
const heshinWhalesArchiveProfiles = {
    1997: {
        heading: '七隊擴編之年加盟，中職新軍和信鯨出航',
        summary: '和信鯨在 1997 年加入中華職棒，成為聯盟第七支球隊；同年台灣大聯盟開打，台灣職棒一度同時有兩個聯盟、十一支球隊。鯨隊首戰於 2 月 25 日在台南作客統一獅，開啟往後十二年的職棒隊史。',
        distinction: '中職第七隊・隊史首季',
        highlights: ['和信鯨於 2 月 25 日完成中職首戰，客場對上統一獅。', '和信加盟與台灣大聯盟成立同年發生，台灣職棒進入雙聯盟、十一隊並存的時期。', '球隊由業餘時期的中國信託棒球隊延續而來，成為和信企業投入職棒的起點。'],
        sources: [
            { label: 'TVBS：和信鯨成為中職第七隊', url: 'https://news.tvbs.com.tw/cars/641381' },
            { label: '國立臺灣歷史博物館：和信鯨隊史沿革', url: 'https://collections.nmth.gov.tw/CollectionContent.aspx?RNO=2004.028.0078&a=132' }
        ]
    },
    1998: {
        heading: '郭源治加盟首季拿下 14 勝，寫下個人職棒新高',
        summary: '旅日名將郭源治加盟和信鯨，首季就拿下 14 勝，刷新自己在職棒生涯的單季勝投紀錄，也成為鯨隊輪值的重要支柱。鯨隊在中職改採單一球季制的第一年累積競爭力，為隔年挺進總冠軍賽打下基礎。',
        distinction: '郭源治單季 14 勝・個人生涯新高',
        highlights: ['郭源治在鯨隊首季拿下單季第 14 勝，超越他先前在日本職棒的個人單季勝投紀錄。', '郭源治與郝有力等投手組成先發核心，鯨隊開始建立具競爭力的投手陣容。', '中職本季改採單一球季制，和信鯨打滿 105 場例行賽。'],
        sources: [
            { label: '台灣棒球運動珍貴新聞檔案：郭源治單季最多勝', url: 'https://catalog.digitalarchives.tw/item/00/32/19/73.html' },
            { label: 'CPBL：中信鯨歷年球隊戰績', url: 'https://cpbl.com.tw/team/teamrecord?teamNo=AHH011' }
        ]
    },
    1999: {
        heading: '總冠軍賽首戰爆發群架，和信錯失隊史首冠',
        summary: '和信鯨以單一球季例行賽第一名直接晉級總冠軍賽，首次站上年度冠軍戰舞台。系列賽第一戰就因本壘攻防爆發大規模衝突，成為中職總冠軍賽第一次場上群架；和信最終以 1 勝 4 敗敗給味全龍，與隊史首冠擦身而過。',
        distinction: '例行賽第一・總冠軍賽亞軍',
        highlights: ['和信鯨以 60 勝拿下例行賽第一，首度取得總冠軍賽資格。', '11 月 3 日總冠軍賽第一戰在本壘攻防後爆發衝突，雙方多名球員遭驅逐出場。', '和信最終以 1 勝 4 敗不敵味全龍；這也是味全完成三連霸的最後一冠。'],
        sources: [
            { label: 'TVBS：1999 年和信、味全總冠軍賽首戰衝突', url: 'https://news.tvbs.com.tw/warm/624192' },
            { label: '台灣棒球運動珍貴新聞檔案：龍鯨總冠軍賽群架', url: 'https://catalog.digitalarchives.tw/item/00/32/1e/de.html' },
            { label: 'CPBL：中信鯨歷年球隊戰績', url: 'https://cpbl.com.tw/team/teamrecord?teamNo=AHH011' }
        ]
    },
    2000: {
        heading: '嘉義球場突起大霧，和信成為中職首支因霧裁定落敗的球隊',
        summary: '3 月 13 日和信鯨在嘉義對上統一獅，賽事進行中突遇濃霧，視線受阻後提前裁定由統一獅以 11：0 獲勝。這場比賽成為中職首度因霧害裁定結束的賽事，也留下職棒賽程中少見的場外插曲。',
        distinction: '中職首度因霧害裁定比賽',
        highlights: ['3 月 13 日嘉義球場因濃霧中斷比賽，統一獅以 11：0 獲判勝利。', '這是中職史上首場因霧害而裁定結束的比賽。', '和信全年未取得季冠軍，球季仍以李來發執掌教練團。'],
        sources: [
            { label: '聯合報報時光：因大霧被裁定輸球的和信鯨', url: 'https://time.udn.com/udntime/story/122833/6343557' },
            { label: '自由體育：嘉義球場大霧、比賽裁定保留', url: 'https://sports.ltn.com.tw/news/breakingnews/3480430' }
        ]
    },
    2001: {
        heading: '謝承勳單季 15 勝創本土左投新高，李來發鯨隊時代告一段落',
        summary: '謝承勳單季拿下 15 勝，創下當時中職本土左投單季最多勝紀錄，並獲年度最佳進步獎。這也是李來發執掌和信鯨的最後一季；季後由林仲秋接任總教練，球團隨後因企業改組準備以中信鯨之名展開新階段。',
        distinction: '謝承勳本土左投單季 15 勝紀錄・李來發最後一季',
        highlights: ['謝承勳以 15 勝成為本土左投單季勝投新高，並獲年度最佳進步獎。', '李來發自 1997 年起帶隊五季，球季後卸下總教練職務。', '12 月林仲秋正式接任總教練，鯨隊迎來教練團與企業識別交接。'],
        sources: [
            { label: 'CPBL：謝承勳單季 15 勝與中信鯨隊史回顧', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509142011366822' },
            { label: 'CPBL：林仲秋接任和信鯨總教練', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509864875319582' }
        ]
    }
};

const chinatrustWhalesArchiveProfiles = {
    2002: {
        heading: '更名中信鯨首季打進台灣大賽，遭兄弟象提前封王',
        summary: '和信鯨因企業改組更名為中信鯨，球隊在新識別亮相的第一年就以全年第二名再度打進總冠軍賽。由於兄弟象包辦上下半季冠軍，系列賽先取得一場保送勝，中信鯨最終以 0 勝 4 敗屈居亞軍。',
        distinction: '全年第二・總冠軍賽亞軍',
        highlights: ['球團配合中國信託成立金控而更名，球衣正面改繡「中國信託」，新隊徽以躍起的鯨魚為主角。', '宋肇基例行賽一度同時領先勝投、防禦率與三振榜，成為投手三冠王。', '中信鯨再闖總冠軍賽，包含兄弟象的保送勝在內以 0 勝 4 敗落敗。'],
        sources: [
            { label: 'CPBL：中信鯨更名與新球季安排', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509864345754952' },
            { label: 'CPBL：宋肇基成為投手三冠王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508666317405428' },
            { label: 'CPBL：宋肇基獲年度 MVP 與投手三冠王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508642530518332' },
            { label: 'CPBL：兄弟象直落四擊敗中信鯨', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508676280252571' }
        ]
    },
    2003: {
        heading: '徐生明季末接掌總教練，鯨隊進入新一輪重整',
        summary: '兩聯盟合併後，中信鯨以原有陣容在新聯盟架構出賽，全年排名第四。季末林仲秋為球隊戰績與管理請辭，徐生明由投手教練升任總教練，鯨隊開始新一輪教練團與球員整合。',
        distinction: '全年第四・徐生明接任總教練',
        highlights: ['中華職棒與台灣大聯盟合併，鯨隊在六隊新架構中迎接新球季。', '林仲秋 10 月請辭，球團於季末宣布由徐生明接掌總教練。', '徐生明此前已於季中加入教練團，接任後將「球技與球品」一併列為整隊方向。'],
        sources: [
            { label: 'CPBL：中信鯨更換總教練，由徐生明接掌', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509510717702143' },
            { label: '自由體育：兩聯盟合併與中職球隊沿革', url: 'https://sports.ltn.com.tw/news/paper/1300579' }
        ]
    },
    2004: {
        heading: '龍迷發起「515 挺徐總」，跨隊情誼在鯨隊看台重現',
        summary: '5 月 15 日中信鯨對興農牛之戰，一群昔日味全龍球迷發起「515 龍迷挺徐總」活動，進場為曾帶領味全龍的徐生明加油。龍隊解散後，球迷仍追隨徐總、黃煚隆等人到鯨隊主場，這場應援成為中職跨隊球迷文化的代表一幕。',
        distinction: '未取得季冠軍・球迷發起「515 龍迷挺徐總」',
        highlights: ['昔日味全龍球迷在新莊主場舉辦「515 龍迷挺徐總」活動，向徐生明與舊日龍將致意。', '球迷跨隊支持徐生明、黃煚隆等人，延續味全龍解散後的球迷社群。', '徐生明帶領鯨隊重整陣容，球隊持續以嘉義為主場經營基地。'],
        sources: [
            { label: '國立陽明交通大學論文：龍迷與「515 挺徐總」活動', url: 'https://ir.lib.nycu.edu.tw/bitstream/11536/60535/9/151809.pdf' },
            { label: 'CPBL：中信鯨歷年球隊戰績', url: 'https://cpbl.com.tw/team/teamrecord?teamNo=AHH011' }
        ]
    },
    2005: {
        heading: '倪福德獲替代役選秀首指名，徐生明季後卸下兵符',
        summary: '中信鯨以全年第四名作收，球團在替代役選秀會以第一指名選進嘉義大學左投倪福德，為投手陣容補進新血。季末教練團改組，徐生明轉任球團副總，由二軍總教練李來發接掌一軍，鯨隊開始新的管理階段。',
        distinction: '全年第四・倪福德獲替代役選秀首指名',
        highlights: ['倪福德在替代役選秀會獲中信鯨第一指名，後成為球隊重要左投。', '徐生明於季後卸任總教練並轉任副總，李來發回鍋接掌一軍。', '中信鯨以 47 勝與兄弟象並列全年第四，未取得季後賽資格。'],
        sources: [
            { label: 'CPBL：倪福德獲中信鯨替代役選秀第一指名', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509317985291950' },
            { label: '中央社數位典藏：李來發接任、徐生明轉任副總', url: 'https://catalog.digitalarchives.tw/item/00/32/5a/57.html' }
        ]
    },
    2006: {
        heading: '九連勝追平隊史紀錄，李來發季後卸任',
        summary: '李來發帶領中信鯨在球季後段拉出九連勝，追平隊史最長連勝紀錄，為低潮中的球隊帶來一段反彈。球季結束後，李來發為戰績請辭，投手教練謝長亨升任總教練，鯨隊也由此進入新的教練團階段。',
        distinction: '九連勝平隊史紀錄・全年第五',
        highlights: ['10 月對 La New 熊之戰，中信鯨以 6：3 獲勝，完成九連勝並追平隊史紀錄。', '這波連勝由李來發帶隊完成，是球隊在球季末段的重要反彈。', '季後李來發請辭，謝長亨接任總教練。'],
        sources: [
            { label: 'CPBL：九連勝平隊史紀錄、謝長亨接任總教練', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509317568552587' },
            { label: 'CPBL：中信鯨歷年球隊戰績', url: 'https://cpbl.com.tw/team/teamrecord?teamNo=AHH011' }
        ]
    },
    2007: {
        heading: '五名球員捲入簽賭偵辦，球隊在「黑鯨事件」中重組',
        summary: '8 月中信鯨多名球員遭檢調約談，球團隨即解除曾漢州、紀俊麟合約，另有三名遭指涉的球員遭無限期停賽。當時的停賽與解約是球團處置，相關五名球員其後在司法判決中均獲判無罪；事件仍使球隊主力陣容大幅變動，成為中信鯨隊史的重要轉折。',
        distinction: '全年第四・「黑鯨事件」造成主力陣容變動',
        highlights: ['曾漢州與紀俊麟遭約談後坦承收受組頭款項，球團解除兩人合約。', '另三名遭指涉的球員在當時被無限期停賽；五名球員後來均獲判無罪。', '球隊短時間失去多名主力，接下來一季在陣容與經營上承受更大壓力。'],
        sources: [
            { label: 'TVBS：中信鯨解除曾漢州、紀俊麟合約並停賽三人', url: 'https://news.tvbs.com.tw/sports/313533' },
            { label: '新頭殼：中信鯨案相關球員無罪定讞', url: 'https://newtalk.tw/news/view/2011-12-13/20298' },
            { label: '自由體育：中信鯨 2007 年球員事件回顧', url: 'https://sports.ltn.com.tw/news/paper/150195' }
        ]
    },
    2008: {
        heading: '中信鯨宣布解散，十二年隊史畫下句點',
        summary: '中信鯨於 11 月 11 日宣布解散，並無條件釋出所有教練與球員。球團表示決定與球隊戰績及職棒環境有關；鯨隊自 1997 年以和信鯨之名加入中職，歷經和信、中信兩個隊名後，結束十二年職棒隊史，中職也由六隊縮減為四隊。',
        distinction: '全年第四・球季後解散',
        highlights: ['中信鯨於 11 月 11 日宣布解散，全體教練與球員無條件釋出。', '球團將決定歸因於戰績與職棒環境考量，並提出以釋出球員方式協助聯盟調整戰力。', '鯨隊自 1997 年加入至解散共歷經十二年，中職由六隊回到四隊規模。'],
        sources: [
            { label: 'CPBL：中信鯨宣布解散並釋出全體教練、球員', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508989012852754' },
            { label: '自由體育：中信鯨走過職棒十二年後解散', url: 'https://sports.ltn.com.tw/news/paper/257554' }
        ]
    }
};

Object.entries({ ...heshinWhalesArchiveProfiles, ...chinatrustWhalesArchiveProfiles }).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = year <= 2001 ? '和信鯨' : '中信鯨';
    const teamHistorySource = year <= 2001 ? heshinWhalesTeamHistorySource : chinatrustWhalesTeamHistorySource;
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), teamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), teamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

const sinoEaglesTeamHistorySource = {
    label: '台灣棒球維基館｜時報鷹隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E6%99%82%E5%A0%B1%E9%B7%B9%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 時報鷹 1993–1997 年隊史，以球隊身分、代表球員與「黑鷹事件」的影響為主軸。
const sinoEaglesArchiveProfiles = {
    1993: {
        heading: '職棒新軍登場，「暴力鷹」打開六隊時代',
        summary: '時報鷹在中職擴編為六隊的 1993 年加入聯盟，3 月 12 日於台南完成隊史首戰。球隊承接業餘時期黑鷹隊的班底，靠著鮮明的強打風格逐漸以「暴力鷹」之名留在球迷記憶中。',
        distinction: '隊史首季・中職六隊時代展開',
        highlights: ['時報鷹與俊國熊同年加盟，讓中職進入六隊規模。', '3 月 12 日首戰作客統一獅，由郭建成先發；曾貴章、王光熙、廖敏雄等人組成打線。', '球隊以強打風格打出「暴力鷹」稱號，成為九〇年代中職最鮮明的球隊形象之一。'],
        sources: [
            { label: 'TVBS：時報鷹隊史首戰與六隊時代', url: 'https://news.tvbs.com.tw/sports/644036' },
            { label: '國家文化記憶庫：時報鷹隊成軍沿革', url: 'https://catalog.digitalarchives.tw/item/00/31/eb/c1.html' }
        ]
    },
    1994: {
        heading: '徐生明加入教練團，郭建成轉任後援打開新定位',
        summary: '徐生明在 1994 年加入時報鷹擔任投手教練，調整郭建成的角色，讓他從先發轉為專任後援。郭建成當季拿下 23 次救援成功並獲救援王，為時報鷹建立可靠的終結者，也開啟他連兩年稱霸救援榜的階段。',
        distinction: '郭建成年度救援王・後援角色確立',
        highlights: ['徐生明加入投手教練團，協助調整鷹隊投手配置。', '郭建成轉任專任後援，單季 23 次救援成功登上救援王。', '這項角色轉換成為郭建成職棒生涯的重要轉捩點，並延續到下一季。'],
        sources: [
            { label: '國家文化記憶庫：徐生明加入時報鷹教練團', url: 'https://catalog.digitalarchives.tw/item/00/31/f9/c9.html' },
            { label: '中華時報電子報：郭建成轉任後援與救援王', url: 'https://chtime.ikh.tw/?id=36s695748hkr&pn=vw' }
        ]
    },
    1995: {
        heading: '廖敏雄敲出 22 轟奪全壘打王，強打招牌延續',
        summary: '時報鷹的打擊招牌在 1995 年持續發光，廖敏雄單季擊出 22 支全壘打，首度拿下中職全壘打王。郭建成則以 17 次救援成功蟬聯救援王，投打兩端都有球員成為年度獎項焦點。',
        distinction: '廖敏雄全壘打王・郭建成連兩年救援王',
        highlights: ['廖敏雄以單季 22 支全壘打首度獲得年度全壘打王。', '郭建成以 17 次救援成功連續第二年拿下救援王。', '兩名代表球星分別站上長打與終結角色的高峰，延續時報鷹的鮮明球隊風格。'],
        sources: [
            { label: 'CPBL：廖敏雄生涯全壘打紀錄', url: 'https://cpbl.com.tw/team/hr?Acnt=0000000468' },
            { label: '運動視界：廖敏雄 1995 年全壘打王回顧', url: 'https://www.sportsv.net/articles/6871' },
            { label: '中華時報電子報：郭建成連兩年救援王', url: 'https://chtime.ikh.tw/?id=36s695748hkr&pn=vw' }
        ]
    },
    1996: {
        heading: '「黑鷹事件」爆發，假球調查撼動球隊與職棒',
        summary: '1996 年職棒簽賭風暴擴大，兄弟象球員遭挾持事件後，檢調開始追查組頭介入球賽的情形，時報鷹成為後續案件中受衝擊最深的球隊之一。調查與起訴在接下來一年持續發展，球員安全、聯盟治理與球迷信任都受到嚴重考驗。',
        distinction: '「黑鷹事件」震撼職棒・球隊面臨重大衝擊',
        highlights: ['1996 年夏季職棒簽賭案曝光，兄弟象球員遭挾持事件成為檢調擴大偵辦的導火線。', '時報鷹多名球員後續遭調查、起訴，案件延伸至 1997 年，不能把遭調查或起訴直接等同定罪。', '「黑鷹事件」使職棒整體信任受創，也為時報鷹隔年的陣容瓦解與停權埋下背景。'],
        sources: [
            { label: '中央社：黑鷹事件與職棒簽賭案回顧', url: 'https://www.cna.com.tw/news/aspt/201903110057.aspx' },
            { label: '自由體育：黑鷹事件與時報鷹停權、解散', url: 'https://sports.ltn.com.tw/news/paper/1278869' },
            { label: '台灣棒球維基館：黑鷹事件', url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E9%BB%91%E9%B7%B9%E4%BA%8B%E4%BB%B6' }
        ]
    },
    1997: {
        heading: '首度封王後陷入風暴，「二代鷹」仍闖進台灣大賽',
        summary: '時報鷹上半季拿下隊史首座季冠軍，卻在季中受到黑鷹事件偵辦衝擊，多名主力無法繼續出賽。聯盟由其他球隊出借球員組成「二代鷹」打完下半季，並再度闖進台灣大賽；球隊於年底申請停權一年，最終在 1998 年宣布解散。',
        distinction: '上半季冠軍・台灣大賽亞軍・隊史最後一季',
        highlights: ['上半季以 30 勝 16 敗 2 和封王，拿下隊史唯一一座季冠軍。', '多名球員遭調查後無法出賽，聯盟安排各隊借將支援，組成「二代鷹」完成下半季。', '二代鷹打進台灣大賽，先取得兩勝，之後以 2 勝 4 敗不敵味全龍；時報鷹年底申請停權，隔年宣布解散。'],
        sources: [
            { label: '自由體育：二代鷹、停權與時報鷹解散', url: 'https://sports.ltn.com.tw/news/paper/249323' },
            { label: '自由體育：時報鷹停權與解散沿革', url: 'https://sports.ltn.com.tw/news/paper/1300579' },
            { label: '國家文化記憶庫：時報鷹宣布解散', url: 'https://catalog.digitalarchives.tw/item/00/32/18/f3.html' }
        ]
    }
};

Object.entries(sinoEaglesArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const existingProfile = teamSeasonProfileData[year]?.teams['時報鷹'] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), sinoEaglesTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '時報鷹': {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), sinoEaglesTeamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

const mercuriesTigersTeamHistorySource = {
    label: '台灣棒球維基館｜三商虎隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/wiki/index.php?title=%E4%B8%89%E5%95%86%E8%99%8E%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 三商虎 1990–1999 年隊史，著重球星、球迷記憶與球隊退場脈絡。
const mercuriesTigersArchiveProfiles = {
    1990: {
        heading: '元年摘下首座季冠軍，涂鴻欽第 5 戰投滿 12 局',
        summary: '三商虎在中職元年拿下上半季冠軍，首度進入台灣大賽。面對味全龍的系列賽一度落後 1 勝 3 敗，涂鴻欽在第五戰以 173 球投滿 12 局、送出 13 次三振，幫虎隊以 2：1 續命；系列賽最後仍以 2 勝 4 敗落敗。',
        distinction: '上半季冠軍・年度總冠軍賽亞軍',
        highlights: ['三商虎成為中職元年首座半季冠軍的球隊之一，並打進聯盟第一屆台灣大賽。', '總冠軍賽第五戰，涂鴻欽投滿 12 局、用 173 球送出 13 次三振，三商以 2：1 獲勝。', '這場硬投留下元年台灣大賽最受球迷記憶的戰役之一；三商最終以 2 勝 4 敗不敵味全龍。'],
        sources: [
            { label: 'TSNA：涂鴻欽總冠軍賽第 5 戰 12 局、173 球', url: 'https://tsna.com/article/91178' },
            { label: '報時光：三商虎首季封王與台灣大賽', url: 'https://time.udn.com/udntime/story/122833/8396956' }
        ]
    },
    1991: {
        heading: '首宗職棒轉隊案落在三商，林仲秋拿下全壘打王',
        summary: '三商虎在 1991 年簽下遭兄弟象解約的洋投強生，成為中職史上第一起球員轉隊案例。同年林仲秋以 16 支全壘打成為首位本土全壘打王，為虎隊攻擊線留下另一項隊史亮點。',
        distinction: '林仲秋全壘打王・中職首宗球員轉隊案例',
        highlights: ['5 月三商虎簽下遭兄弟象解約的 Dane Johnson（強生），開啟中職早期球員轉隊案例。', '林仲秋以 16 支全壘打拿下全壘打王，是中職首位本土球員獲得此獎。', '虎隊延續鷹俠等長打球星的話題，也開始由本土強打接續扛起中心打線。'],
        sources: [
            { label: 'TVBS：三商虎簽下強生，首宗職棒轉隊案例', url: 'https://news.tvbs.com.tw/sports/581183' },
            { label: '中央社：林仲秋回憶返台與三商虎時期', url: 'https://www.cna.com.tw/news/aspt/201901260173.aspx' }
        ]
    },
    1992: {
        heading: '林仲秋例行賽末戰雙響砲，反超鷹俠奪全壘打王',
        summary: '1992 年全壘打王競爭直到例行賽最後一場才分出高下。林仲秋在末戰單場敲出兩支全壘打，反超隊友鷹俠，拿下個人生涯第二座全壘打王；隊友相爭與最後一日逆轉成為虎迷津津樂道的球季故事。',
        distinction: '林仲秋全壘打王・例行賽末戰逆轉鷹俠',
        highlights: ['林仲秋在球季最後一場例行賽單場擊出兩支全壘打，超越鷹俠奪冠。', '這場競逐讓兩位隊友為年度獎項交手，成為中職早期最有戲劇性的全壘打王爭奪之一。', '林仲秋當季累積 24 轟，連兩年為三商虎留下本土長打招牌。'],
        sources: [
            { label: '中央社：林仲秋談 1992 年末戰逆轉奪冠', url: 'https://www.cna.com.tw/news/aspt/201901260173.aspx' },
            { label: '國家文化記憶庫：林仲秋末戰三響砲', url: 'https://catalog.digitalarchives.tw/item/00/31/f1/3f.html' }
        ]
    },
    1993: {
        heading: '哥雅接下長打火力，「外籍三劍客」逐漸成形',
        summary: '鷹俠受傷期間，哥雅以單季 20 支全壘打接下三商虎的中心打線火力，成為年度全壘打王。哥雅、鷹俠與康雷等外籍球星並肩出賽，逐漸形成球迷熟悉的「外籍三劍客」形象。',
        distinction: '哥雅全壘打王・「外籍三劍客」成形',
        highlights: ['哥雅單季敲出 20 支全壘打，延續三商虎連年有球員拿下全壘打王的傳統。', '鷹俠受傷時，哥雅補上長打火力，與康雷、林仲秋等人組成虎隊中軸。', '三名外籍強打後來成為球迷記憶中的「外籍三劍客」，代表九〇年代虎隊打線特色。'],
        sources: [
            { label: '自由體育：哥雅效力三商虎與 1993 年 20 轟', url: 'https://sports.ltn.com.tw/news/paper/871301' },
            { label: '運動視界：三商虎外籍三劍客', url: 'https://www.sportsv.net/articles/13103?page=2' }
        ]
    },
    1994: {
        heading: '康雷完成完全打擊，連兩年搶下年度打擊王',
        summary: '康雷在 3 月 17 日三商虎對統一獅之戰，依序擊出二壘安打、一壘安打、全壘打與三壘安打，完成完全打擊。同季他又在最後一場比賽逆轉超越兄弟象路易士，首度獲得年度打擊王，讓「外籍三劍客」成為當年虎隊最鮮明的看點。',
        distinction: '康雷完全打擊・年度打擊王',
        highlights: ['康雷單場完成完全打擊，是中職少見的個人紀錄。', '他以 .360 打擊率拿下年度打擊王，球季末逆轉超越路易士。', '鷹俠、哥雅、康雷三名外籍球星合體，連同林仲秋等本土強打形成完整打線。'],
        sources: [
            { label: '中華時報電子報：康雷完成完全打擊並逆轉奪打擊王', url: 'https://chtime.ikh.tw/?id=466eg5tk8c76&pn=vw' }
        ]
    },
    1995: {
        heading: '哥雅單局三盜跑回本壘，留下中職獨有紀錄',
        summary: '6 月 23 日三商虎與兄弟象之戰，哥雅單局三度成功盜壘，從一壘一路跑回本壘，成為中職史上唯一單局三盜紀錄。快速跑壘也補上了他在虎隊以長打聞名之外的另一面。',
        distinction: '哥雅單局三次盜壘・中職唯一紀錄',
        highlights: ['哥雅在同一局完成三次盜壘，包含從一壘一路跑回本壘。', '這項紀錄至今仍是中職唯一的單局三盜。', '虎隊外籍強打不只靠全壘打製造攻勢，也展現速度與跑壘判斷。'],
        sources: [
            { label: 'TVBS：哥雅單局三盜、跑回本壘', url: 'https://news.tvbs.com.tw/sports/660343' }
        ]
    },
    1996: {
        heading: '「黑虎疑雲」延燒，虎迷在球場舉牌要求回應',
        summary: '前一季浮出的三商虎假球疑雲延燒到 1996 年，5 月 31 日虎迷在對味全龍之戰舉牌抗議，要求球團正視有關比賽公平性的質疑。這些早期指控與後續檢調偵辦、法院判決並非同一件事，當年的球迷行動則留下職棒信任危機的具體畫面。',
        distinction: '「黑虎疑雲」與球迷抗議事件',
        highlights: ['5 月 31 日對味全龍比賽中，球迷舉牌抗議，要求三商虎球團回應疑雲。', '「黑虎」是早期對假球疑雲的回顧稱呼，當時的傳聞或抗議不能直接等同已證實的犯罪事實。', '這場球迷行動反映支持者對比賽公正的擔憂，也成為往後職棒簽賭事件的重要歷史背景。'],
        sources: [
            { label: '南華大學論文：黑虎疑雲與球迷舉牌抗議', url: 'https://nhuir.nhu.edu.tw/bitstream/987654321/28477/1/108NHU00304012.pdf' },
            { label: '中央社：職棒簽賭疑雲與黑鷹事件回顧', url: 'https://www.cna.com.tw/news/aspt/201903110057.aspx' }
        ]
    },
    1997: {
        heading: '陳該發完成本土首見完全打擊，三商借將支援時報鷹',
        summary: '陳該發在 3 月 9 日擊出中職史上首次由本土打者完成的完全打擊。球季中時報鷹因多名球員無法出賽需要各隊支援，三商虎一口氣借出五名選手，成為協助對手完成下半季的重要球團。',
        distinction: '陳該發本土首見完全打擊・支援二代鷹',
        highlights: ['陳該發從兄弟象投手手中完成完全打擊，成為中職史上首位達成此紀錄的本土打者。', '黑鷹事件後時報鷹由各隊借將支援下半季，三商虎借出五名球員，是提供人數最多的球團。', '年度轉入兩聯盟並立時期，三商虎既面對球員流動，也以借將方式參與職棒球隊間的支援。'],
        sources: [
            { label: '國家文化記憶庫：陳該發重演完全打擊', url: 'https://catalog.digitalarchives.tw/item/00/32/25/0f.html' },
            { label: '國家文化記憶庫：三商虎借出五名球員支援時報鷹', url: 'https://catalog.digitalarchives.tw/item/00/32/10/a5.html' }
        ]
    },
    1998: {
        heading: '單一球季制首年，摩拉季中赴美追逐大聯盟機會',
        summary: '中職在 1998 年首度採單一球季制，台灣大聯盟競爭也讓球隊更加倚賴外籍戰力。三商虎洋將摩拉出賽 44 場就跑出 37 次盜壘，季中獲紐約大都會小聯盟合約邀約，離台追逐登上大聯盟的機會。',
        distinction: '摩拉季中加盟大都會小聯盟・首年單一球季制',
        highlights: ['中職為因應前一年全年排名與季冠軍制度的爭議，1998 年改採單一球季制。', '摩拉前 44 場成功盜壘 37 次，展現快速跑壘能力。', '季中收到紐約大都會小聯盟合約邀請後，摩拉選擇返美發展，成為三商虎洋將赴美的代表故事。'],
        sources: [
            { label: '棒球筆記：中職 1998 年改採單一球季制', url: 'https://baseball.biji.co/index.php?act=info&id=645&label=&q=news&subtitle=%E3%80%90%E4%B8%AD%E8%81%B7%E3%80%91%E5%8F%B2%E4%B8%8A%E5%85%A9%E6%AC%A1%E5%96%AE%E4%B8%80%E7%90%83%E5%AD%A3+%E5%9B%A0%E8%99%8E%E3%80%81%E9%BE%8D%E9%9A%8A%E8%A7%A3%E6%95%A3%E6%81%A2%E5%BE%A9%E5%8D%8A%E5%AD%A3%E5%88%B6' },
            { label: '運動視界：摩拉 44 場 37 盜後獲大都會邀約', url: 'https://www.sportsv.net/articles/75016?page=2' },
            { label: '自由體育：1998–1999 年洋將使用增加', url: 'https://sports.ltn.com.tw/news/paper/777040' }
        ]
    },
    1999: {
        heading: '「十年河東、虎虎生風」成末季口號，三商虎宣布解散',
        summary: '三商虎在隊史第十年以「十年河東、虎虎生風」迎接球季，卻於 11 月 8 日宣布解散，結束十年職棒歷程。球團當時將退場與市場飽和、職棒環境及長期虧損等因素連結，末代球員也因此開始尋找新東家。',
        distinction: '單一球季・隊史最後一季・球季後解散',
        highlights: ['球隊以「十年河東、虎虎生風」作為十週年球季口號。', '11 月 8 日三商虎宣布解散，結束自 1990 年起的職棒隊史。', '三商虎退場後，味全龍也於同年 12 月解散，中職自 2000 年起回到四隊規模。'],
        slogan: '十年河東、虎虎生風',
        sources: [
            { label: '報時光：三商虎隊史、口號與解散', url: 'https://time.udn.com/udntime/story/122833/8396956' },
            { label: '國家文化記憶庫：三商虎宣布解散', url: 'https://catalog.digitalarchives.tw/item/00/32/1e/f3.html' },
            { label: '自由體育：中職球團異動大事紀', url: 'https://sports.ltn.com.tw/news/paper/1300579' }
        ]
    }
};

Object.entries(mercuriesTigersArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const existingProfile = teamSeasonProfileData[year]?.teams['三商虎'] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), mercuriesTigersTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            '三商虎': {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), mercuriesTigersTeamHistorySource, ...(profile.sources || [])]
            }
        }
    };
});

const firstKingKongTeamHistorySource = {
    label: '台灣棒球維基館｜第一金剛隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E7%AC%AC%E4%B8%80%E9%87%91%E5%89%9B%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

// 第一金剛僅於 2003 年以此隊名參賽；年度焦點為史上最低勝率。
const firstKingKongArchiveProfiles = {
    2003: {
        heading: '全年勝率 .220，寫下中職史上最低勝率紀錄',
        annualFocus: '陳致遠怒喊「要K就K我，不要丟恰恰」，金剛與象隊板凳清空',
        summary: '中職與台灣大聯盟合併後，由第一金控冠名的「第一金剛」在 2003 年參加中職，主場設在澄清湖。球隊對兄弟象的一場比賽中，陳致遠在兄弟象領先 10 分時盜壘，引發兩隊板凳清空；金剛投手葉賢文隨後朝彭政閔投出觸身球未遂，陳致遠喊出「要K就K我，不要丟恰恰」。徐生明季中離任，第一金剛全年以 20 勝 71 敗 9 和作收，球季後轉手 La New，隔年改名 La New 熊。',
        distinction: '全年第 6 名・隊史唯一一季・球季後轉手',
        highlights: [
            '第一金剛在兩聯盟合併後加入中職，2003 年是隊名使用的唯一球季。',
            '澄清湖主場開幕戰以 8：4 擊敗興農牛；歐斯納的擦棒球擊碎記者室強化玻璃，場邊洋將藍迪臉部掛彩。',
            '陳致遠在兄弟象領先 10 分時盜壘，引發板凳清空；金剛投手葉賢文朝彭政閔投出觸身球未遂，陳致遠喊出「要K就K我，不要丟恰恰」。第一金剛整季對兄弟象 0 勝 18 敗 2 和。',
            '徐生明季中辭去總教練，由蔡榮宗接掌；球隊季後轉由 La New 接手，2004 年以 La New 熊之名參賽。'
        ],
        sources: [
            firstKingKongTeamHistorySource,
            { label: 'CPBL：第一金剛澄清湖主場首戰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508564127191595' },
            { label: '運動視界：第一金剛與兄弟象的球場軼事', url: 'https://www.sportsv.net/articles/73893' },
            { label: '關鍵評論網：第一金剛隊史與「不要丟恰恰」事件', url: 'https://www.thenewslens.com/article/202557' },
            { label: '自由體育：La New 接手第一金剛並改名 La New 熊', url: 'https://sports.ltn.com.tw/news/breakingnews/2841300' }
        ]
    }
};

Object.entries(firstKingKongArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '第一金剛';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        sources: [...(teamSeasonProfileData[year]?.sources || []), firstKingKongTeamHistorySource],
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), ...(profile.sources || [])]
            }
        }
    };
});

const taipeiSunsTeamHistorySource = {
    label: '台灣棒球維基館｜台北太陽隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%8F%B0%E5%8C%97%E5%A4%AA%E9%99%BD%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const taipeiSunsRecordsSource = {
    label: '台北太陽年度戰績',
    url: 'https://zh.wikipedia.org/wiki/%E8%87%BA%E5%8C%97%E5%A4%AA%E9%99%BD'
};

// 台北太陽 1997–2002 年隊史，聚焦 TML 開幕、兩度封王、球團更名與聯盟合併。
const taipeiSunsArchiveProfiles = {
    1997: {
        seasonLabel: '台灣職棒大聯盟元年｜台北聲寶太陽',
        heading: '總統李登輝為 TML 開幕戰開球，聲寶太陽奪下首勝',
        record: '53 勝・43 敗・0 和',
        rank: '全年第 2 名',
        distinction: 'TML 元年・總冠軍賽亞軍',
        annualFocus: '2 月 28 日 TML 開幕戰以 6：2 擊敗年代勇士，揭開兩聯盟並存時代',
        summary: '台灣職棒大聯盟在 1997 年展開首季，聲寶太陽與年代勇士於嘉義舉行歷史性的開幕戰，總統李登輝到場開球。太陽以 6：2 拿下 TML 首戰勝利，並一路打進首屆年度總冠軍賽，最終以 3 勝 4 敗不敵年代勇士。',
        highlights: [
            '2 月 28 日嘉義開幕戰由總統李登輝開球，聲寶太陽以 6：2 擊敗年代勇士，成為 TML 首場比賽的勝隊。',
            '太陽在聯盟元年就打進年度總冠軍賽，與年代勇士鏖戰七場後以 3 勝 4 敗屈居亞軍。',
            '黃平洋與陳義信等熟悉球星披上太陽戰袍，成為新聯盟開幕時最受矚目的陣容之一。'
        ],
        sources: [
            taipeiSunsTeamHistorySource,
            taipeiSunsRecordsSource,
            { label: '國家文化記憶庫：TML 開幕戰太陽 6：2 勝勇士', url: 'https://catalog.digitalarchives.tw/item/00/32/0e/1f.html' },
            { label: '台灣大聯盟：1997 年度總冠軍賽紀錄', url: 'https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E8%81%B7%E6%A3%92%E5%A4%A7%E8%81%AF%E7%9B%9F' }
        ]
    },
    1998: {
        seasonLabel: '台灣職棒大聯盟 2 年｜台北聲寶太陽',
        heading: '例行賽第 3 名一路逆襲，聲寶太陽首度封王',
        record: '53 勝・53 敗・2 和',
        rank: '全年第 3 名',
        distinction: '年度總冠軍・隊史首冠',
        annualFocus: '季後賽先淘汰年度第 2 的勇士，再從總冠軍賽 2 勝 3 敗落後連追兩勝',
        summary: '聲寶太陽在例行賽只排第三，先於三戰兩勝制季後賽以 2 勝 1 敗淘汰年度第二的年代勇士，再於總冠軍賽面對生活雷公。太陽一度以 2 勝 3 敗落後，最後連贏第六、七戰，以 4 勝 3 敗逆轉奪下隊史首冠，留下「老三傳奇」。',
        highlights: [
            '台灣大聯盟當年採例行賽、季後賽與總冠軍賽三級賽制，例行賽第三名的太陽從季後賽首輪出發。',
            '太陽以 2 勝 1 敗淘汰年度第二的年代勇士，取得挑戰年度第一雷公的資格。',
            '總冠軍賽先以 2 勝 3 敗落後，太陽連贏最後兩戰，以 4 勝 3 敗逆轉封王。'
        ],
        sources: [
            taipeiSunsTeamHistorySource,
            taipeiSunsRecordsSource,
            { label: '運動視界：「老三傳奇」與 1998 年 TML 冠軍賽', url: 'https://www.sportsv.net/articles/61262' },
            { label: '華視：太陽以 6：1 擊敗雷公、首度奪冠', url: 'https://news.cts.com.tw/cts/general/199811/199811110021476.html' }
        ]
    },
    1999: {
        seasonLabel: '台灣職棒大聯盟 3 年｜台北聲寶太陽',
        heading: '趙士強回鍋帶隊，太陽連兩年闖進總冠軍賽',
        record: '48 勝・33 敗・3 和',
        rank: '全年第 1 名',
        distinction: '例行賽第一・總冠軍賽亞軍',
        annualFocus: '趙士強重掌兵符、例行賽排名第一，太陽連續第二年打進總冠軍賽',
        summary: '趙士強在 1999 年重掌聲寶太陽兵符，球隊以 48 勝、全年第一的成績再度打進總冠軍賽，完成連兩年爭冠的旅程。太陽在冠軍賽與台中金剛交手，最終以 2 勝 4 敗落敗，未能延續前一年的封王。',
        highlights: [
            '趙士強重返太陽擔任總教練，球隊以 .593 勝率居全年例行賽第一。',
            '太陽連續第二年挺進總冠軍賽，對手是台中金剛。',
            '金剛在第六戰以 4：3 獲勝，系列賽以 4 勝 2 敗奪冠；太陽再次屈居亞軍。'
        ],
        sources: [
            taipeiSunsTeamHistorySource,
            taipeiSunsRecordsSource,
            { label: '自由體育：趙士強連兩年帶太陽進冠軍賽', url: 'https://sports.ltn.com.tw/news/breakingnews/5241281' },
            { label: '國家文化記憶庫：1999 年金剛以 4：2 奪冠', url: 'https://catalog.digitalarchives.tw/item/00/32/1f/13.html' }
        ]
    },
    2000: {
        seasonLabel: '台灣職棒大聯盟 4 年｜台北聲寶太陽',
        heading: '四連勝客場封王，聲寶太陽拿下隊史第二冠',
        record: '52 勝・30 敗・2 和',
        rank: '全年第 1 名',
        distinction: '年度總冠軍・隊史第二冠',
        annualFocus: '以 4 勝 0 敗橫掃年代雷公，成為當時 TML 唯一兩度奪冠的球隊',
        summary: '聲寶太陽例行賽排名第一，總冠軍賽再遇年代雷公。太陽在對手主場以 4 連勝完封系列賽，奪下隊史第二座總冠軍；總教練趙士強完成奪冠任務後卸任，隨後轉任那魯灣公司總經理。',
        highlights: [
            '太陽以全年第一名進入總冠軍賽，對手是年代雷公。',
            '系列賽在雷公主場進行，太陽連拿四勝，以 4：0 橫掃封王。',
            '這是太陽第二座 TML 總冠軍；趙士強奪冠後卸下總教練職務，轉任那魯灣公司總經理。'
        ],
        sources: [
            taipeiSunsTeamHistorySource,
            taipeiSunsRecordsSource,
            { label: '國家文化記憶庫：太陽四連勝客場封王', url: 'https://catalog.digitalarchives.tw/item/00/32/22/f3.html' },
            { label: '自由體育：趙士強率隊奪冠後卸任', url: 'https://sports.ltn.com.tw/news/breakingnews/5241281' }
        ]
    },
    2001: {
        seasonLabel: '台灣職棒大聯盟 5 年｜台北誠泰太陽',
        heading: '改掛誠泰招牌，太陽吞十連敗後再闖總冠軍賽',
        record: '31 勝・27 敗・2 和',
        rank: '全年第 2 名',
        distinction: '總冠軍賽亞軍・更名誠泰太陽',
        annualFocus: '新冠名球隊開季不久吞下 TML 紀錄級十連敗，仍一路打進總冠軍賽',
        summary: '誠泰銀行接替聲寶認養太陽，球隊在 2001 年改以「誠泰太陽」出賽，由李居明接任總教練。太陽開季先拿兩勝，接著陷入十連敗，追平當時 TML 最長連敗紀錄；球隊後來打進總冠軍賽，仍以 2 勝 4 敗不敵媚登峰金剛。',
        highlights: [
            '聲寶結束四年認養，誠泰銀行接手並以「誠泰太陽」新隊名出賽。',
            '太陽開季兩連勝後從 4 月 6 日起一路連敗，4 月 30 日吞下第十敗，追平 TML 最長連敗紀錄。',
            '李居明帶隊打進總冠軍賽，先取得 2 勝 1 敗領先，之後連輸三場，以 2 勝 4 敗屈居亞軍。'
        ],
        sources: [
            taipeiSunsTeamHistorySource,
            taipeiSunsRecordsSource,
            { label: '國家文化記憶庫：誠泰銀行接手認養太陽', url: 'https://catalog.digitalarchives.tw/item/00/32/23/f5.html' },
            { label: '國家文化記憶庫：誠泰太陽苦吞十連敗', url: 'https://catalog.digitalarchives.tw/item/00/32/24/85.html' },
            { label: '運動視界：誠泰太陽在 2001 年冠軍賽遭金剛逆轉', url: 'https://www.sportsv.net/articles/61262?page=2' }
        ]
    },
    2002: {
        seasonLabel: '台灣職棒大聯盟 6 年｜台北誠泰太陽',
        heading: 'TML 最後一季走完，台北太陽名號隨合併改組告別',
        record: '31 勝・39 敗・2 和',
        rank: '全年第 3 名',
        distinction: '台北太陽最後一季・TML 最後一季',
        annualFocus: '兩聯盟合併案在年底定案，台北太陽與高屏雷公的沿革轉入第一金剛',
        summary: '台北誠泰太陽以全年第三名打完台灣大聯盟最後一季。年底兩聯盟合併安排定案，TML 四隊將整併為兩支新球隊；台北太陽與高屏雷公的沿革在 2003 年整合進第一金剛，太陽隊名自此退出 TML 舞台。',
        highlights: [
            '誠泰太陽在 TML 最後一季以 31 勝 39 敗 2 和、全年第三名作收。',
            '11 月兩聯盟確立合併安排，原 TML 四隊縮編為兩隊，之後加入中華職棒。',
            '台北太陽與高屏雷公沿革在合併後轉入第一金剛，1997 年啟用的太陽隊名告一段落。'
        ],
        sources: [
            taipeiSunsTeamHistorySource,
            taipeiSunsRecordsSource,
            { label: '聯合新聞網：台灣大聯盟於 2002 年底確定合併', url: 'https://udn.com/news/story/120910/8185008' },
            { label: '自由體育：兩聯盟合併與 2003 年球隊改組', url: 'https://sports.ltn.com.tw/news/paper/1300579' }
        ]
    }
};

Object.entries(taipeiSunsArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '台北太陽';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), ...(profile.sources || [])]
            }
        }
    };
});

const kaopingThunderTeamHistorySource = {
    label: '台灣棒球維基館｜高屏雷公隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E9%AB%98%E5%B1%8F%E9%9B%B7%E5%85%AC%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const kaopingThunderRecordsSource = {
    label: '高屏雷公年度紀錄',
    url: 'https://zh.wikipedia.org/wiki/%E9%AB%98%E5%B1%8F%E9%9B%B7%E5%85%AC'
};

// 高屏雷公 1997–2002 年隊史，聚焦南台灣屬地、球場與人物故事，以及 TML 的落幕。
const kaopingThunderArchiveProfiles = {
    1997: {
        seasonLabel: '台灣職棒大聯盟元年｜高屏生活雷公',
        heading: '高屏生活雷公亮相，台灣大聯盟把職棒據點帶進南台灣',
        record: '42 勝・51 敗・3 和',
        rank: '全年第 3 名',
        distinction: 'TML 元年・高屏地區代表球隊',
        annualFocus: '生活雷公作為 TML 四支創始球隊之一亮相，代表高雄、屏東地區出賽',
        summary: '台灣大聯盟 1997 年開打，高屏生活雷公成為四支創始球隊之一，以高雄、屏東為屬地，讓南台灣有了自己的職棒球隊。雷公隊由山根俊英領軍，首季在高屏各地球場出賽，逐步建立南部球迷的主場認同。',
        highlights: [
            '高屏生活雷公在 1997 年 3 月初正式亮相，是 TML 四支創始球隊之一。',
            '球隊以高雄、屏東為屬地，並使用立德、屏東等南部球場，成為當地職棒的新代表。',
            '球隊首季由山根俊英擔任總教練，全年以 42 勝 51 敗 3 和、第三名作收。'
        ],
        sources: [
            kaopingThunderTeamHistorySource,
            kaopingThunderRecordsSource,
            { label: '國家文化記憶庫：雷公隊亮相', url: 'https://catalog.digitalarchives.tw/item/00/32/0e/24.html' },
            { label: '自由體育：高屏雷公是首支以高雄、屏東為屬地的職棒球隊', url: 'https://sports.ltn.com.tw/news/breakingnews/4795115' }
        ]
    },
    1998: {
        seasonLabel: '台灣職棒大聯盟 2 年｜高屏生活雷公',
        heading: '「雷公阿媽」回到球場為新球季打氣，雷公帶著思念再出發',
        record: '62 勝・45 敗・1 和',
        rank: '全年第 1 名',
        distinction: '例行賽第一・總冠軍賽亞軍',
        annualFocus: '王鎮熊在華航空難中罹難後，母親於雷公新球季首戰到場為球隊加油',
        summary: '雷公隊代表王鎮熊於 1998 年華航空難中罹難。新球季首戰，母親與益華生活董事長王鎮魁到場為雷公打氣，球迷稱她為「雷公阿媽」；球隊也以賽事延續對王鎮熊的思念。雷公例行賽以全年第一名晉級總冠軍賽，最後在七戰系列賽中不敵台北太陽。',
        highlights: [
            '王鎮熊在 2 月的華航空難中罹難，雷公隊員與球迷都深受打擊。',
            '3 月新球季首戰，王鎮熊的母親與兄長到場支持雷公，球迷以「雷公阿媽」稱呼她。',
            '雷公以 62 勝 45 敗 1 和拿下例行賽第一，總冠軍賽與台北太陽鏖戰七場後屈居亞軍。'
        ],
        sources: [
            kaopingThunderTeamHistorySource,
            kaopingThunderRecordsSource,
            { label: '國家文化記憶庫：雷公首戰「雷公阿媽」打氣', url: 'https://catalog.digitalarchives.tw/item/00/32/15/b6.html' },
            { label: '華視：太陽第七戰擊敗雷公奪冠', url: 'https://news.cts.com.tw/cts/general/199811/199811110021476.html' }
        ]
    },
    1999: {
        seasonLabel: '台灣職棒大聯盟 3 年｜高屏生活雷公',
        heading: '澄清湖棒球場啟用，將軍連續出賽紀錄意外中斷',
        record: '36 勝・47 敗・1 和',
        rank: '全年第 4 名',
        distinction: '澄清湖棒球場啟用年',
        annualFocus: '雷公在澄清湖球場啟用戰出賽，將軍連續 254 場出賽紀錄因病中斷',
        summary: '高雄縣澄清湖棒球場於 1999 年啟用，生活雷公與台中金剛在這座新球場進行首戰，吸引超過一萬六千名球迷進場。雷公洋砲將軍因感冒發高燒缺席，從 TML 元年起累積的連續出賽紀錄停在 254 場；澄清湖則成為球隊重要的主場之一。',
        highlights: [
            '7 月 30 日澄清湖棒球場舉行啟用戰，由地主生活雷公迎戰台中金剛。',
            '將軍因感冒發高燒缺席，連續出賽紀錄停在 254 場，成為球場啟用日的意外插曲。',
            '雷公全年以 36 勝 47 敗 1 和、第四名作收。'
        ],
        sources: [
            kaopingThunderTeamHistorySource,
            kaopingThunderRecordsSource,
            { label: '國家文化記憶庫：澄清湖球場啟用、地主雷公迎戰金剛', url: 'https://catalog.digitalarchives.tw/item/00/32/1d/84.html' }
        ]
    },
    2000: {
        seasonLabel: '台灣職棒大聯盟 4 年｜高屏年代雷公',
        heading: '「南徐北趙」對決登上總冠軍賽舞台，年代雷公再戰太陽',
        record: '40 勝・43 敗・1 和',
        rank: '全年第 2 名',
        distinction: '總冠軍賽亞軍・改由年代認養',
        annualFocus: '年代接手認養雷公，徐生明與趙士強的「南徐北趙」對決成為總冠軍賽焦點',
        summary: '年代公司自 2000 年起認養雷公，球隊改稱高屏年代雷公，由徐生明帶隊。徐生明與台北太陽總教練趙士強的「南徐北趙」對決成為當季話題，雷公先在例行賽取得全年第二，再與太陽於總冠軍賽交手；系列賽最終遭太陽四連勝封王。',
        highlights: [
            '年代公司接手認養雷公，球隊由「高屏生活雷公」改稱「高屏年代雷公」。',
            '徐生明與趙士強的南北教頭對決被媒體稱為「南徐北趙」，延續到年度總冠軍賽。',
            '雷公以全年第二名再次挑戰總冠軍，最後在太陽主場以 0 勝 4 敗落敗。'
        ],
        sources: [
            kaopingThunderTeamHistorySource,
            kaopingThunderRecordsSource,
            { label: '國家文化記憶庫：2000 年總冠軍賽「南徐北趙」對決', url: 'https://catalog.digitalarchives.tw/item/00/32/22/e7.html' },
            { label: '國家文化記憶庫：太陽四連勝客場封王', url: 'https://catalog.digitalarchives.tw/item/00/32/22/f3.html' }
        ]
    },
    2001: {
        seasonLabel: '台灣職棒大聯盟 5 年｜高屏年代雷公',
        heading: '從開季六連敗到八連勝，徐生明帶年輕雷公急起直追',
        record: '31 勝・28 敗・1 和',
        rank: '全年第 3 名',
        distinction: '徐生明執掌兵符・單季八連勝',
        annualFocus: '年輕陣容開季六連敗後拉出八連勝，讓徐生明一度接近生涯第 400 勝',
        summary: '高屏年代雷公在 2001 年以年輕球員為班底，開季先吞下六連敗。徐生明把低潮視為球員成長的過程，球隊在夏季打出八連勝，一度讓他距離生涯第 400 勝只差幾場；這段反彈成為雷公該季最鮮明的故事。',
        highlights: [
            '雷公開季遭遇六連敗，徐生明公開表示年輕球員需要經歷挫折，從中累積職業賽經驗。',
            '球隊在 8 月打出八連勝，連勝中止時徐生明已累積 397 勝，生涯第 400 勝成為當時焦點。',
            '雷公全年以 31 勝 28 敗 1 和、第三名作收。'
        ],
        sources: [
            kaopingThunderTeamHistorySource,
            kaopingThunderRecordsSource,
            { label: '國家文化記憶庫：雷公開季六連敗，徐生明談年輕球員成長', url: 'https://catalog.digitalarchives.tw/item/00/32/24/5d.html' },
            { label: '國家文化記憶庫：雷公八連勝與徐生明生涯 400 勝紀錄', url: 'https://catalog.digitalarchives.tw/item/00/32/25/91.html' }
        ]
    },
    2002: {
        seasonLabel: '台灣職棒大聯盟 6 年｜高屏年代雷公',
        heading: '最後一屆 TML 總冠軍賽，年代雷公與金剛激戰五場',
        record: '34 勝・37 敗・1 和',
        rank: '全年第 2 名',
        distinction: '總冠軍賽亞軍・TML 最後一季',
        annualFocus: '雷公打進台灣大聯盟最後一屆總冠軍賽，與宏碁金剛戰至第五場',
        summary: '台灣大聯盟在 2002 年迎來最後一個球季，年代雷公以全年第二名晉級總冠軍賽，對上衛冕軍宏碁金剛。許文雄與武藤幸司分別擔任系列賽首戰先發，雷公以 1 勝 4 敗落敗；球季結束後兩聯盟合併案定案，雷公隊名隨隔年球隊改組告別職棒舞台。',
        highlights: [
            '年代雷公以 34 勝 37 敗 1 和、全年第二名作收，並打進 TML 最後一屆總冠軍賽。',
            '冠軍賽首戰由本土小將許文雄對上宏碁金剛日籍投手武藤幸司，系列賽最終以 1 勝 4 敗落敗。',
            '兩聯盟合併案在球季結束後定案，雷公的隊史沿革於 2003 年整合進第一金剛。'
        ],
        sources: [
            kaopingThunderTeamHistorySource,
            kaopingThunderRecordsSource,
            { label: '國家文化記憶庫：2002 年總冠軍賽首戰', url: 'https://catalog.digitalarchives.tw/item/00/32/2b/1a.html' },
            { label: '聯合新聞網：台灣大聯盟與中華職棒的合併沿革', url: 'https://udn.com/news/story/120910/8185008' }
        ]
    }
};

Object.entries(kaopingThunderArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '高屏雷公';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), ...(profile.sources || [])]
            }
        }
    };
});

const taichungKingKongTeamHistorySource = {
    label: '台灣棒球維基館｜台中金剛隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%8F%B0%E4%B8%AD%E9%87%91%E5%89%9B%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const taichungKingKongRecordsSource = {
    label: '台中金剛年度紀錄',
    url: 'https://zh.wikipedia.org/wiki/%E8%87%BA%E4%B8%AD%E9%87%91%E5%89%9B'
};

const taiwanMajorLeagueHistorySource = {
    label: '台灣大聯盟歷屆總冠軍紀錄',
    url: 'https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E8%81%B7%E6%A3%92%E5%A4%A7%E8%81%AF%E7%9B%9F'
};

// 台中金剛 1997–2002 年隊史，聚焦企業冠名、冠軍戰故事與 TML 最後一冠。
const taichungKingKongArchiveProfiles = {
    1997: {
        seasonLabel: '台灣職棒大聯盟元年｜台中金剛',
        heading: '沒有企業冠名的在地球隊亮相，台中金剛展開 TML 首季',
        record: '41 勝・53 敗・2 和',
        rank: '全年第 4 名',
        distinction: 'TML 元年・台中屬地球隊',
        annualFocus: 'TML 創始四隊之一，金剛以台中為屬地名稱出賽，成為唯一尚未獲企業認養的球隊',
        summary: '台灣大聯盟在 1997 年開打，台中金剛與台北太陽、嘉南勇士、高屏雷公組成創始四隊。當時企業認養已替其他球隊帶來冠名，金剛因尚未找到企業夥伴而直接以台中為名，讓屬地成為球隊最鮮明的識別。球隊元年以 41 勝 53 敗 2 和作收。',
        highlights: [
            '台中金剛是台灣大聯盟創始四隊之一，代表台中地區出賽。',
            '首季沒有企業冠名，與獲企業認養的其他球隊不同，直接以屬地「台中」作為隊名。',
            '金剛在 TML 元年以 41 勝 53 敗 2 和排名第四。'
        ],
        sources: [
            taichungKingKongTeamHistorySource,
            taichungKingKongRecordsSource,
            { label: '國家文化記憶庫：中纖認養前，金剛以台中屬地命名', url: 'https://catalog.digitalarchives.tw/item/00/32/15/21.html' },
            { label: '國家文化記憶庫：台中金剛與嘉南勇士首度交手', url: 'https://catalog.digitalarchives.tw/item/00/32/0e/25.html' }
        ]
    },
    1998: {
        seasonLabel: '台灣職棒大聯盟 2 年｜中纖金剛',
        heading: '李安熙兩個月內轟出第三支滿貫砲，球迷封他「李滿貫」',
        record: '40 勝・66 敗・2 和',
        rank: '全年第 4 名',
        distinction: '中纖冠名首季・李安熙兩月三滿貫',
        annualFocus: '李安熙在兩個多月內敲出個人第三支滿壘全壘打，「李滿貫」綽號傳開',
        summary: '中國人造纖維公司於 1998 年認養金剛，球隊更名為中纖金剛，成為那魯灣旗下第四支獲企業認養的球隊。夏季打線焦點則落在李安熙身上：他在兩個多月內敲出第三支滿貫全壘打，幫助金剛以 10：3 擊敗生活雷公，也因接連滿貫的表現被叫作「李滿貫」。',
        highlights: [
            '中國人造纖維公司認養金剛，球隊自季前改稱中纖金剛。',
            '李安熙在對生活雷公之戰轟出兩個多月來個人第三支滿貫砲，金剛以 10：3 獲勝。',
            '李安熙因一再敲出滿貫全壘打，被媒體以「李滿貫」稱呼。',
            '中纖金剛全年以 40 勝 66 敗 2 和排名第四。'
        ],
        sources: [
            taichungKingKongTeamHistorySource,
            taichungKingKongRecordsSource,
            { label: '國家文化記憶庫：中纖認養金剛', url: 'https://catalog.digitalarchives.tw/item/00/32/15/21.html' },
            { label: '國家文化記憶庫：李安熙「李滿貫」再擊滿貫砲', url: 'https://catalog.digitalarchives.tw/item/00/32/17/7a.html' }
        ]
    },
    1999: {
        seasonLabel: '台灣職棒大聯盟 3 年｜台中金剛',
        heading: '第六戰先遇三殺守備，金剛仍搶下隊史首座總冠軍',
        record: '40 勝・42 敗・2 和',
        rank: '全年第 2 名',
        distinction: '年度總冠軍・隊史首冠',
        annualFocus: '總冠軍賽第六戰丘昌榮擊出罕見三殺，金剛仍以 4：3 奪勝並以 4 勝 2 敗封王',
        summary: '台中金剛在 1999 年首度打進總冠軍賽，與聲寶太陽打到第六戰。金剛在六局攻勢中遭遇罕見三殺，一度錯失超前機會；九局上教練團改以強迫觸擊取分，攻下關鍵第四分，終場以 4：3 獲勝，拿下隊史首座總冠軍，也是台中職棒隊首度封王。',
        highlights: [
            '金剛與聲寶太陽的總冠軍賽戰至第六戰，系列賽前五場由兩隊交替取勝。',
            '六局上丘昌榮擊出平飛球遭接殺，太陽隨後完成罕見三殺，金剛錯失大好攻勢。',
            '九局上金剛以強迫觸擊推進攻勢、拿下關鍵分，終場 4：3 勝出，以 4 勝 2 敗奪下隊史首冠。'
        ],
        sources: [
            taichungKingKongTeamHistorySource,
            taichungKingKongRecordsSource,
            { label: '國家文化記憶庫：第六戰三殺插曲與金剛首冠', url: 'https://catalog.digitalarchives.tw/item/00/32/1f/13.html' },
            { label: '台中市政府：金剛首度為台中拿下職棒總冠軍', url: 'https://www.taichung.gov.tw/924665/post' }
        ]
    },
    2000: {
        seasonLabel: '台灣職棒大聯盟 4 年｜媚登峰金剛',
        heading: '媚登峰簽下三年認養，金剛終於迎來長期企業後援',
        record: '35 勝・46 敗・3 和',
        rank: '全年第 4 名',
        distinction: '媚登峰三年認養首季',
        annualFocus: '媚登峰以三年 1 億 500 萬元認養金剛，並承諾球隊戰績好就發獎金',
        summary: '金剛在 1999 年奪冠後，球隊仍缺乏穩定企業後援；2000 年 5 月，媚登峰與那魯灣簽下三年認養合約，認養金達 1 億 500 萬元。金剛因此改稱媚登峰金剛，總教練蔡榮宗也談到球隊多年來難得獲得長期支持。',
        highlights: [
            '媚登峰與那魯灣簽下三年認養合約，金額為 1 億 500 萬元。',
            '球隊自 5 月起改以媚登峰金剛之名出賽，冠名與新企業後援同步到位。',
            '媚登峰董事長表示球隊戰績好就會發獎金，為金剛帶來過去少有的長期資源承諾。',
            '媚登峰金剛全年以 35 勝 46 敗 3 和排名第四。'
        ],
        sources: [
            taichungKingKongTeamHistorySource,
            taichungKingKongRecordsSource,
            { label: '國家文化記憶庫：媚登峰三年認養金剛', url: 'https://catalog.digitalarchives.tw/item/00/32/21/8a.html' }
        ]
    },
    2001: {
        seasonLabel: '台灣職棒大聯盟 5 年｜媚登峰金剛',
        heading: '黃欽智奪冠軍賽 MVP 與四項個人獎，金剛再度封王',
        record: '43 勝・16 敗・1 和',
        rank: '全年第 1 名',
        distinction: '年度總冠軍・黃欽智冠軍賽 MVP',
        annualFocus: '金剛再度封王，黃欽智同季拿下防禦率王、新人王、金手套與冠軍賽 MVP',
        summary: '吳復連領軍的媚登峰金剛在 2001 年贏得例行賽與總冠軍，總冠軍賽以 4 勝 2 敗擊敗誠泰太陽。投手黃欽智成為球季代表人物，除了拿下總冠軍賽 MVP，也同時獲得防禦率王、新人王及投手金手套，單季收下四項個人獎。',
        highlights: [
            '媚登峰金剛例行賽拿下全年第一，總冠軍賽以 4 勝 2 敗擊敗誠泰太陽。',
            '黃欽智同季獲防禦率王、新人王、投手金手套及總冠軍賽 MVP。',
            '金剛在年度頒獎典禮拿下 33 個團體與個人獎項中的 15 項，成為當年頒獎焦點。'
        ],
        sources: [
            taichungKingKongTeamHistorySource,
            taichungKingKongRecordsSource,
            { label: '國家文化記憶庫：金剛奪冠、黃欽智獲四項大獎', url: 'https://catalog.digitalarchives.tw/item/00/32/26/43.html' },
            { label: '運動視界：2001 年 TML 總冠軍賽回顧', url: 'https://www.sportsv.net/articles/61262?page=2' }
        ]
    },
    2002: {
        seasonLabel: '台灣職棒大聯盟 6 年｜宏碁金剛',
        heading: '宏碁金剛成為 TML 末代冠軍，黃高俊單場五盜刷新聯盟紀錄',
        record: '47 勝・24 敗・1 和',
        rank: '全年第 1 名',
        distinction: '年度總冠軍・TML 末代冠軍',
        annualFocus: '黃高俊單場五盜創 TML 紀錄，金剛隨後封王，抱走聯盟最後一座總冠軍',
        summary: '宏碁金剛在 2002 年贏得全年第一，並於台灣大聯盟最後一季完成衛冕。球季中黃高俊單場成功盜壘五次，刷新 TML 單場紀錄；謝佳賢則以 19 支全壘打、64 分打點拿下年度獎項。金剛在總冠軍賽以 4 勝 1 敗擊敗年代雷公，成為 TML 的末代冠軍，吳復連領軍完成連續兩季封王。',
        highlights: [
            '黃高俊單場成功盜壘五次，刷新 TML 單場紀錄，金剛該戰以 5：2 擊敗誠泰太陽。',
            '謝佳賢以 19 支全壘打、64 分打點拿下年度兩項打擊獎，成為宏碁金剛中心打線代表。',
            '宏碁金剛以全年第一晉級總冠軍賽，最後以 4 勝 1 敗擊敗年代雷公，拿下 TML 末代總冠軍。'
        ],
        sources: [
            taichungKingKongTeamHistorySource,
            taichungKingKongRecordsSource,
            taiwanMajorLeagueHistorySource,
            { label: '國家文化記憶庫：黃高俊單場五盜刷新 TML 紀錄', url: 'https://catalog.digitalarchives.tw/item/00/32/2a/94.html' },
            { label: '國家文化記憶庫：謝佳賢等三人開轟，金剛提前取得第 30 勝', url: 'https://catalog.digitalarchives.tw/item/00/32/2a/04.html' },
            { label: '國家文化記憶庫：宏碁金剛與年代雷公總冠軍賽', url: 'https://catalog.digitalarchives.tw/item/00/32/2b/1a.html' }
        ]
    }
};

Object.entries(taichungKingKongArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '台中金剛';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), ...(profile.sources || [])]
            }
        }
    };
});

const chiananBravesTeamHistorySource = {
    label: '台灣棒球維基館｜嘉南勇士隊隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%98%89%E5%8D%97%E5%8B%87%E5%A3%AB%E9%9A%8A%E9%9A%8A%E5%8F%B2'
};

const chiananBravesRecordsSource = {
    label: '嘉南勇士年度紀錄',
    url: 'https://zh.wikipedia.org/wiki/%E5%98%89%E5%8D%97%E5%8B%87%E5%A3%AB'
};

// 嘉南勇士 1997–2002 年隊史，記錄地方球迷動員、代表球員事蹟與 TML 結束前的球隊轉折。
const chiananBravesArchiveProfiles = {
    1997: {
        seasonLabel: '台灣職棒大聯盟元年｜嘉南年代勇士',
        heading: '兩萬一千名後援會員相挺，年代勇士奪下 TML 首屆總冠軍',
        record: '53 勝・42 敗・1 和',
        rank: '全年第 1 名',
        distinction: 'TML 元年總冠軍・首屆總冠軍賽七戰封王',
        annualFocus: '開季前已有 21,000 名後援會員登記，年代勇士代表嘉南迎接 TML 元年',
        summary: '嘉南年代勇士開季前已募集 21,000 名後援會員，展現聯盟落腳嘉南的地方動員力。2 月 28 日 TML 開幕戰在嘉義縣棒球場舉行，由總統李登輝開球，勇士以 2：6 不敵聲寶太陽；球隊之後拿下全年第一，並在首屆總冠軍賽與太陽鏖戰七場，最後以 4 勝 3 敗封王。',
        highlights: [
            '開季前已有 21,000 名球迷登記為勇士後援會員，嘉義與嘉南地區成為球隊的重要支持基礎。',
            '2 月 28 日 TML 開幕戰於嘉義縣棒球場舉行，總統李登輝開球；勇士以 2：6 輸給聲寶太陽，太陽成為聯盟首戰勝隊。',
            '年代勇士取得全年第一，並與聲寶太陽打滿七場總冠軍賽，以 4 勝 3 敗拿下 TML 首屆總冠軍。'
        ],
        sources: [
            { label: '國家文化記憶庫：勇士積極布樁，兩萬一千人登記後援會員', url: 'https://catalog.digitalarchives.tw/item/00/32/0c/dc.html' },
            { label: '國家文化記憶庫：TML 開幕戰由太陽擊敗年代勇士', url: 'https://catalog.digitalarchives.tw/item/00/32/0e/1f.html' },
            taiwanMajorLeagueHistorySource
        ]
    },
    1998: {
        seasonLabel: '台灣職棒大聯盟 2 年｜嘉南年代勇士',
        heading: '陳義信臨場串聯守備，演出罕見三殺化解滿壘危機',
        record: '57 勝・48 敗・3 和',
        rank: '全年第 2 名',
        distinction: '陳義信策動罕見三殺・勇士再闖總冠軍資格賽',
        annualFocus: '陳義信在無人出局滿壘時引導隊友完成三殺，讓一場例行賽成為球場名場面',
        summary: '4 月 24 日對中纖金剛之戰，金剛在三局上無人出局攻佔滿壘，陳義信先將球傳給捕手，再示意內野隊友完成後續觸殺。由於跑者與守備員一度都不確定判決，裁判討論約十分鐘後認定三殺成立；勇士終場以 5：2 獲勝。這次少見的臨場守備也成為年代勇士球季代表事件之一。',
        highlights: [
            '金剛三局上無人出局滿壘，陳義信策動捕手與內野手連續傳球，完成罕見三殺。',
            '比賽因出局判決爭議中斷約十分鐘，裁判討論後判定三殺有效，勇士以 5：2 獲勝。',
            '年代勇士全年以 57 勝 48 敗 3 和排名第二，取得總冠軍資格賽席次。'
        ],
        sources: [
            { label: '國家文化記憶庫：陳義信演出罕見三殺', url: 'https://catalog.digitalarchives.tw/item/00/32/16/a6.html' },
            taiwanMajorLeagueHistorySource
        ]
    },
    1999: {
        seasonLabel: '台灣職棒大聯盟 3 年｜嘉南年代勇士',
        heading: '陳義信達成職棒生涯千次三振，成為台灣職棒第一人',
        record: '40 勝・42 敗・2 和',
        rank: '全年第 3 名',
        distinction: '陳義信職棒生涯千次三振・年代冠名末年',
        annualFocus: '陳義信在嘉義完投取勝，於九局投出職棒生涯第 1,000 次三振',
        summary: '4 月 23 日在嘉義對高屏雷公，陳義信完投九局，只被擊出六支安打、失一分，並在九局下三振柏克，達成職棒生涯千次三振，成為台灣職棒史上首位達成者。勇士該年也曾在對台中金剛之戰九局下攻下五分，以 14：13 完成大逆轉；兩隊合計 37 支安打、100 個打席，寫下 TML 單場紀錄。',
        highlights: [
            '陳義信於 4 月 23 日完投九局，在九局下投出職棒生涯第 1,000 次三振，成為台灣職棒第一人。',
            '勇士在 5 月 16 日對金剛之戰，九局下追回五分，以 14：13 逆轉；兩隊合計 37 支安打、100 個打席，刷新 TML 紀錄。',
            '嘉南年代勇士全年以 40 勝 42 敗 2 和排名第三，這也是年代企業冠名的最後一季。'
        ],
        sources: [
            { label: '國家文化記憶庫：陳義信達成職棒生涯千次三振', url: 'https://catalog.digitalarchives.tw/item/00/32/1c/57.html' },
            { label: '聯合報報導存檔：勇士九局下五分逆轉金剛，兩隊合計 37 安', url: 'https://www.ptt.cc/man/Cobras/D909/D997/D4AD/DC7E/DC89/M.1145000746.A.FBA.html' },
            taiwanMajorLeagueHistorySource
        ]
    },
    2000: {
        seasonLabel: '台灣職棒大聯盟 4 年｜嘉南遠傳勇士',
        heading: '陳該發開季連續 19 場敲安，刷新 TML 紀錄',
        record: '37 勝・45 敗・2 和',
        rank: '全年第 3 名',
        distinction: '陳該發開幕連續安打紀錄・遠傳冠名首季',
        annualFocus: '陳該發從開幕戰起連續 19 場擊出安打，寫下台灣大聯盟新紀錄',
        summary: '2000 年遠傳電信認養勇士隊，球隊由年代冠名改為嘉南遠傳勇士。球季中，陳該發從開幕戰起連續 19 場擊出安打，刷新台灣大聯盟紀錄；他在第 20 場挑戰時未能延續，但這段開季安打紀錄已成為勇士該季最鮮明的個人事蹟。',
        highlights: [
            '遠傳電信認養勇士隊，年代轉而冠名雷公，勇士以嘉南遠傳勇士之名參賽。',
            '陳該發開幕戰起連續 19 場敲安，打破原有的 TML 開幕連續安打紀錄。',
            '嘉南遠傳勇士全年以 37 勝 45 敗 2 和排名第三。'
        ],
        sources: [
            { label: '國家文化記憶庫：陳該發連續 19 場安打刷新聯盟紀錄', url: 'https://catalog.digitalarchives.tw/item/00/32/21/a7.html' },
            { label: 'TML 四隊歷年冠名與企業認養整理', url: 'https://www.ptt.cc/man/Cobras/D909/D997/M.1129130081.A.143.html' },
            taiwanMajorLeagueHistorySource
        ]
    },
    2001: {
        seasonLabel: '台灣職棒大聯盟 5 年｜嘉南網客勇士',
        heading: '開季六連勝後陷入 16 連敗，網客勇士走過劇烈起伏的一季',
        record: '13 勝・47 敗・0 和',
        rank: '全年第 4 名',
        distinction: '開季六連勝・球季中 16 連敗',
        annualFocus: '勇士從開季六連勝起步，盛夏卻連吞 16 敗，形成反差極大的球季記憶',
        summary: '耐斯集團旗下網客飲料於 2001 年冠名勇士，球隊季初氣勢一度很強，開季拿下六連勝。進入夏季後，網客勇士自 7 月 10 日至 8 月 24 日連續吞下 16 敗，成為 TML 隊史最長連敗紀錄；球季最終以 13 勝 47 敗作收。這段從全勝開局到漫長連敗的反差，成為球隊最後幾年最受注目的記憶。',
        highlights: [
            '耐斯集團旗下網客飲料冠名勇士，球隊改稱嘉南網客勇士。',
            '勇士開季一度取得六連勝，4 月底仍保持不敗。',
            '7 月 10 日至 8 月 24 日連續 16 場落敗，為 TML 隊史最長連敗；整季以 13 勝 47 敗排名第四。',
            '網客冠名只維持一季，球隊隔年以嘉南勇士之名參賽。'
        ],
        sources: [
            { label: '國家文化記憶庫：網客勇士開季六連勝', url: 'https://catalog.digitalarchives.tw/item/00/32/24/79.html' },
            { label: '批踢踢：嘉南網客勇士 2001 年 16 連敗逐場紀錄', url: 'https://www.ptt.cc/bbs/Baseball/M.1658242861.A.742.html' },
            { label: 'TML 四隊歷年冠名與企業認養整理', url: 'https://www.ptt.cc/man/Cobras/D909/D997/M.1129130081.A.143.html' },
            taiwanMajorLeagueHistorySource
        ]
    },
    2002: {
        seasonLabel: '台灣職棒大聯盟 6 年｜嘉南勇士',
        heading: '許國輝完成完全打擊，勇士迎來 TML 最後一季',
        record: '29 勝・41 敗・2 和',
        rank: '全年第 4 名',
        distinction: '許國輝完全打擊・嘉南勇士隊名最後一季',
        annualFocus: '許國輝在對太陽雙重賽中完成完全打擊，為勇士最後一季留下代表事蹟',
        summary: '2002 年是台灣大聯盟最後一季，嘉南勇士也以不帶企業冠名的隊名完成賽季。6 月 1 日，許國輝在對誠泰太陽的雙重賽中擊出完全打擊，成為 TML 史上第二位達成者；他的三分打點幫助勇士以 7：4 獲勝。球季結束後兩聯盟合併，嘉南勇士隊名隨 TML 一起走入歷史。',
        highlights: [
            '許國輝在 6 月 1 日對誠泰太陽之戰完成完全打擊，成為台灣大聯盟史上第二位達成者。',
            '許國輝以完全打擊貢獻三分打點，勇士以 7：4 獲勝；當時勇士仍使用無企業冠名的原隊名。',
            '這是 TML 最後一季，也是嘉南勇士隊名最後一次出賽；兩聯盟於球季後合併。'
        ],
        sources: [
            { label: '國家文化記憶庫：許國輝締造 TML 史上第二次完全打擊', url: 'https://catalog.digitalarchives.tw/item/00/32/29/ab.html' },
            { label: 'TML 四隊歷年冠名與企業認養整理', url: 'https://www.ptt.cc/man/Cobras/D909/D997/M.1129130081.A.143.html' },
            taiwanMajorLeagueHistorySource
        ]
    }
};

Object.entries(chiananBravesArchiveProfiles).forEach(([yearText, profile]) => {
    const year = Number(yearText);
    const teamName = '嘉南勇士';
    const existingProfile = teamSeasonProfileData[year]?.teams[teamName] || {};
    teamSeasonProfileData[year] = {
        ...(teamSeasonProfileData[year] || {}),
        teams: {
            ...(teamSeasonProfileData[year]?.teams || {}),
            [teamName]: {
                ...existingProfile,
                ...profile,
                sources: [...(existingProfile.sources || []), chiananBravesTeamHistorySource, chiananBravesRecordsSource, ...(profile.sources || [])]
            }
        }
    };
});

const macotoSunsMergedTeamHistorySource = {
    label: '台灣棒球維基館｜誠泰太陽隊（合併後）隊史',
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E8%AA%A0%E6%B3%B0%E5%A4%AA%E9%99%BD%E9%9A%8A_(%E5%90%88%E4%BD%B5%E5%BE%8C)%E9%9A%8A%E5%8F%B2'
};

const macotoSuns2003RecordsSource = {
    label: '中職 14 年全年戰績',
    url: 'https://www.zxc22.idv.tw/cpbl14/rank_all.htm'
};

// 誠泰太陽合併後首季：紀錄一分差五連勝，以及年末球團轉移的隊史轉折。
const macotoSuns2003Profile = {
    seasonLabel: '中華職棒 14 年｜誠泰太陽',
    heading: '五連勝五場都是一分差，誠泰太陽在合併元年驚險起步',
    record: '30 勝・64 敗・6 和',
    rank: '全年第 5 名',
    distinction: '兩聯盟合併後首季・全年第 5 名',
    annualFocus: '3 月打出五連勝，五場全以一分差取勝，3 月 21 日再以 3：2 擊敗第一金剛',
    summary: '兩聯盟合併後，原台中金剛、嘉南勇士的隊史與球員匯入太陽隊；球隊開季後獲誠泰銀行冠名，改以「誠泰太陽」出賽。3 月間太陽拉出五連勝，五場比賽每場都只贏一分，3 月 21 日再以 3：2 擊敗第一金剛，當時寫下聯盟最長連勝。12 月誠宇公司買下太陽隊，郭泰源接任總教練，球隊由贊助冠名走向新一輪經營與品牌改造。',
    highlights: [
        '兩聯盟合併後，原台中金剛與嘉南勇士的隊史接續至太陽隊；球隊在開季後獲誠泰銀行冠名，改稱誠泰太陽。',
        '3 月打出五連勝，五場全部以一分差勝出；3 月 21 日以 3：2 擊敗第一金剛，這段連勝當時是聯盟最長。',
        '球隊上半季排名第五、下半季排名第六，全年以 30 勝 64 敗 6 和排第五。',
        '年末誠宇公司買下太陽隊，郭泰源接任總教練；太陽隊在隔年改以誠泰 Cobras 名義出賽。'
    ],
    sources: [
        macotoSunsMergedTeamHistorySource,
        macotoSuns2003RecordsSource,
        { label: '自由體育：兩聯盟合併與誠泰銀行冠名太陽', url: 'https://sports.ltn.com.tw/news/paper/1300579' },
        { label: 'CPBL：太陽五連勝場場一分差', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132508556775484010' },
        { label: 'CPBL：誠宇公司買下太陽隊、郭泰源接任總教練', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132509539541272840' }
    ]
};

const macotoSuns2003ExistingProfile = teamSeasonProfileData[2003]?.teams['誠泰太陽'] || {};
teamSeasonProfileData[2003] = {
    ...(teamSeasonProfileData[2003] || {}),
    teams: {
        ...(teamSeasonProfileData[2003]?.teams || {}),
        '誠泰太陽': {
            ...macotoSuns2003ExistingProfile,
            ...macotoSuns2003Profile,
            sources: [...(macotoSuns2003ExistingProfile.sources || []), ...macotoSuns2003Profile.sources]
        }
    }
};

// 歷年球季的半季、單一球季與全年戰績，依各年度戰績表整理。
