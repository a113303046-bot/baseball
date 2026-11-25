// 年度進場觀眾人次與平均單場人數；資料依歷年觀眾統計整理。
const cpblAttendanceHistory = [
    { year: 1990, games: 180, attendance: 899995, average: 5000, growth: null },
    { year: 1991, games: 180, attendance: 1050405, average: 5836, growth: 16.72 },
    { year: 1992, games: 180, attendance: 1238063, average: 6878, growth: 17.85 },
    { year: 1993, games: 270, attendance: 1600549, average: 5928, growth: -13.81 },
    { year: 1994, games: 270, attendance: 1607677, average: 5954, growth: 0.44 },
    { year: 1995, games: 300, attendance: 1646361, average: 5488, growth: -7.83 },
    { year: 1996, games: 300, attendance: 1364424, average: 4548, growth: -17.13 },
    { year: 1997, games: 336, attendance: 685832, average: 2041, growth: -55.12 },
    { year: 1998, games: 315, attendance: 690089, average: 2191, growth: 7.35 },
    { year: 1999, games: 278, attendance: 496433, average: 1786, growth: -18.48 },
    { year: 2000, games: 180, attendance: 301671, average: 1676, growth: -6.16 },
    { year: 2001, games: 180, attendance: 337707, average: 1876, growth: 11.93 },
    { year: 2002, games: 180, attendance: 532304, average: 2957, growth: 57.62 },
    { year: 2003, games: 300, attendance: 958594, average: 3195, growth: 8.05 },
    { year: 2004, games: 300, attendance: 1051602, average: 3505, growth: 9.70 },
    { year: 2005, games: 301, attendance: 1019687, average: 3388, growth: -3.34 },
    { year: 2006, games: 300, attendance: 679205, average: 2264, growth: -33.18 },
    { year: 2007, games: 300, attendance: 612887, average: 2043, growth: -9.76 },
    { year: 2008, games: 298, attendance: 572692, average: 1922, growth: -5.92 },
    { year: 2009, games: 240, attendance: 898323, average: 3743, growth: 94.75 },
    { year: 2010, games: 240, attendance: 645648, average: 2690, growth: -28.13 },
    { year: 2011, games: 240, attendance: 719972, average: 3000, growth: 11.52 },
    { year: 2012, games: 240, attendance: 583805, average: 2433, growth: -18.90 },
    { year: 2013, games: 240, attendance: 1459072, average: 6079, growth: 149.86 },
    { year: 2014, games: 240, attendance: 1225142, average: 5105, growth: -16.02 },
    { year: 2015, games: 240, attendance: 1327639, average: 5532, growth: 8.36 },
    { year: 2016, games: 240, attendance: 1409312, average: 5872, growth: 6.15 },
    { year: 2017, games: 240, attendance: 1318275, average: 5493, growth: -6.45 },
    { year: 2018, games: 240, attendance: 1309879, average: 5458, growth: -0.64 },
    { year: 2019, games: 240, attendance: 1398243, average: 5826, growth: 6.74 },
    { year: 2020, games: 240, attendance: 857435, average: 3573, growth: -38.67 },
    { year: 2021, games: 300, attendance: 954087, average: 3180, growth: -11.00 },
    { year: 2022, games: 300, attendance: 1471197, average: 4903, growth: 54.18 },
    { year: 2023, games: 300, attendance: 1800130, average: 6000, growth: 22.37 },
    { year: 2024, games: 360, attendance: 2766386, average: 7684, growth: 28.07 },
    { year: 2025, games: 360, attendance: 3734429, average: 10373, growth: 34.99 },
    { year: 2026, games: 360, attendance: 3907736, average: 10854, growth: 4.64 }
];

const cpblAttendanceHistoryNotes = [
    '2020、2021 年因疫情限制觀眾入場；2020 年有 33 場、2021 年有 38 場閉門賽。',
    '2008 年米迪亞暴龍遭停權，取消 2 場比賽；1999 年因 921 地震取消 22 場。'
];

const cpblAttendanceHistoryEvents = [
    {
        year: 1992,
        title: '兄弟象開啟三連霸',
        detail: '職棒前30來年最高峰',
        source: 'https://www.cna.com.tw/news/aspt/201903110056.aspx',
        sourceLabel: '中央社：中職邁向30年'
    },
    {
        year: 1997,
        title: '黑鷹事件與台灣大聯盟成立',
        detail: '場均較前一年減 55%',
        source: 'https://www.cna.com.tw/news/aspt/201903110056.aspx',
        sourceLabel: '中央社：中職邁向30年'
    },
    {
        year: 1999,
        title: '921 地震',
        detail: '當季取消 22 場賽事',
        source: 'https://www.cna.com.tw/news/aspt/201903110056.aspx',
        sourceLabel: '中央社：中職邁向30年'
    },
    {
        year: 2002,
        title: '2001世界盃季軍',
        detail: '中華職棒"再出發"',
        source: 'https://www.sportsv.net/articles/108821?page=2',
        sourceLabel: '運動視界：'
    },
    {
        year: 2003,
        title: '兩聯盟合併',
        detail: '終結6年惡鬥',
        source: 'https://www.sportsv.net/articles/108821?page=2',
        sourceLabel: '運動視界：'
    },
    {
        year: 2008,
        title: '黑米事件',
        detail: '中職黑暗時期',
        source: 'https://www.sportsv.net/articles/108821?page=2',
        sourceLabel: '運動視界：'
    },
    {
        year: 2010,
        title: '黑象事件',
        detail: '人氣王牌成為假球案主角',
        source: 'https://www.sportsv.net/articles/108821?page=2',
        sourceLabel: '運動視界：'
    },
    {
        year: 2013,
        title: '世界棒球經典賽',
        detail: '曼尼旋風、賽後棒球關注回升',
        source: 'https://project.cna.com.tw/cards/20251008-cpblspectators/',
        sourceLabel: '中央社：中職場均觀眾破萬'
    },
    {
        year: 2020,
        title: '疫情閉門與限流',
        detail: '場均由 5,826 降至 3,573',
        source: 'https://cpbl.com.tw/xmdoc/cont?sid=0L132506761308361355',
        sourceLabel: 'CPBL：2020 球季回顧'
    },
    {
        year: 2022,
        title: '疫情後觀眾回流',
        detail: '前一年 11 月恢復全面開放',
        source: 'https://cpbl.com.tw/xmdoc/cont?sid=0L316756132490866681',
        sourceLabel: 'CPBL：恢復全面開放紀錄'
    },
    {
        year: 2024,
        title: '臺北大巨蛋啟用',
        detail: '全年觀眾人次創新高',
        source: 'https://cpbl.com.tw/xmdoc/cont?SId=0O309863132957699842',
        sourceLabel: 'CPBL：2024 球季回顧'
    },
    {
        year: 2025,
        title: '12強世界冠軍',
        detail: '史無前例冠軍加持',
        source: 'https://cpbl.com.tw/xmdoc/cont?SId=0O309863132957699842',
        sourceLabel: 'CPBL：2024 球季回顧'
    }
];
