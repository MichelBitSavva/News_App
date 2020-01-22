let initialState = {
    name: "Bundesliga 2019/20",
    rounds: [
        {
            id: 1,
            name: "Spieltag 1",
            matches: [
                {
                    date: "2019-08-16",
                    team1: {
                        key: "bayern",
                        name: "Bayern München",
                        code: "FCB"
                    },
                    team2: {
                        key: "herthabsc",
                        name: "Hertha BSC",
                        code: "BSC"
                    },
                    score1: 2,
                    score2: 2
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "bremen",
                        name: "Werder Bremen",
                        code: "BRE"
                    },
                    team2: {
                        key: "duesseldorf",
                        name: "Fortuna Düsseldorf",
                        code: "F95"
                    },
                    score1: 1,
                    score2: 3
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "freiburg",
                        name: "SC Freiburg",
                        code: "SCF"
                    },
                    team2: {
                        key: "mainz",
                        name: "1. FSV Mainz 05",
                        code: "M05"
                    },
                    score1: 3,
                    score2: 0
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "freiburg",
                        name: "SC Freiburg",
                        code: "SCF"
                    },
                    team2: {
                        key: "mainz",
                        name: "1. FSV Mainz 05",
                        code: "M05"
                    },
                    score1: 3,
                    score2: 0
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "leverkusen",
                        name: "Bayer 04 Leverkusen",
                        code: "B04"
                    },
                    team2: {
                        key: "paderborn",
                        name: "SC Paderborn 07",
                        code: "SCP"
                    },
                    score1: 3,
                    score2: 2
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "dortmund",
                        name: "Borussia Dortmund",
                        code: "BVB"
                    },
                    team2: {
                        key: "augsburg",
                        name: "FC Augsburg",
                        code: "FCA"
                    },
                    score1: 5,
                    score2: 1
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "wolfsburg",
                        name: "VfL Wolfsburg",
                        code: "WOB"
                    },
                    team2: {
                        key: "koeln",
                        name: "1. FC Köln",
                        code: "KOE"
                    },
                    score1: 2,
                    score2: 1
                },
                {
                    date: "2019-08-17",
                    team1: {
                        key: "mgladbach",
                        name: "Bor. Mönchengladbach",
                        code: "BMG"
                    },
                    team2: {
                        key: "schalke",
                        name: "FC Schalke 04",
                        code: "S04"
                    },
                    score1: 0,
                    score2: 0
                },
                {
                    date: "2019-08-18",
                    team1: {
                        key: "frankfurt",
                        name: "Eintracht Frankfurt",
                        code: "FFM"
                    },
                    team2: {
                        key: "hoffenheim",
                        name: "TSG 1899 Hoffenheim",
                        code: "HOF"
                    },
                    score1: 1,
                    score2: 0
                },
                {
                    date: "2019-08-18",
                    team1: {
                        key: "unionberlin",
                        name: "1. FC Union Berlin",
                        code: "FCU"
                    },
                    team2: {
                        key: "leipzig",
                        name: "RB Leipzig",
                        code: "RBL"
                    },
                    score1: 0,
                    score2: 4
                }
            ]
        },
        {
            id: 2,
            name: "Spieltag 2",
            matches: [
                {
                    date: "2019-08-24",
                    team1: {
                        key: "schalke",
                        name: "FC Schalke 04",
                        code: "S04"
                    },
                    team2: {
                        key: "bayern",
                        name: "Bayern München",
                        code: "FCB"
                    },
                    score1: 0,
                    score2: 3
                },
                {
                    date: "2019-08-25",
                    team1: {
                        key: "leipzig",
                        name: "RB Leipzig",
                        code: "RBL"
                    },
                    team2: {
                        key: "frankfurt",
                        name: "Eintracht Frankfurt",
                        code: "FFM"
                    },
                    score1: 2,
                    score2: 1
                },
                {
                    date: "2019-08-25",
                    team1: {
                        key: "herthabsc",
                        name: "Hertha BSC",
                        code: "BSC"
                    },
                    team2: {
                        key: "wolfsburg",
                        name: "VfL Wolfsburg",
                        code: "WOB"
                    },
                    score1: 0,
                    score2: 3
                },
                {
                    date: "2019-08-24",
                    team1: {
                        key: "augsburg",
                        name: "FC Augsburg",
                        code: "FCA"
                    },
                    team2: {
                        key: "unionberlin",
                        name: "1. FC Union Berlin",
                        code: "FCU"
                    },
                    score1: 1,
                    score2: 1
                },
                {
                    date: "2019-08-24",
                    team1: {
                        key: "paderborn",
                        name: "SC Paderborn 07",
                        code: "SCP"
                    },
                    team2: {
                        key: "freiburg",
                        name: "SC Freiburg",
                        code: "SCF"
                    },
                    score1: 1,
                    score2: 3
                },
                {
                    date: "2019-08-24",
                    team1: {
                        key: "hoffenheim",
                        name: "TSG 1899 Hoffenheim",
                        code: "HOF"
                    },
                    team2: {
                        key: "bremen",
                        name: "Werder Bremen",
                        code: "BRE"
                    },
                    score1: 3,
                    score2: 2
                },
                {
                    date: "2019-08-24",
                    team1: {
                        key: "schalke",
                        name: "FC Schalke 04",
                        code: "S04"
                    },
                    team2: {
                        key: "bayern",
                        name: "Bayern München",
                        code: "FCB"
                    },
                    score1: 0,
                    score2: 3
                },
                {
                    date: "2019-08-25",
                    team1: {
                        key: "leipzig",
                        name: "RB Leipzig",
                        code: "RBL"
                    },
                    team2: {
                        key: "frankfurt",
                        name: "Eintracht Frankfurt",
                        code: "FFM"
                    },
                    score1: 2,
                    score2: 1
                },
                {
                    date: "2019-08-25",
                    team1: {
                        key: "herthabsc",
                        name: "Hertha BSC",
                        code: "BSC"
                    },
                    team2: {
                        key: "wolfsburg",
                        name: "VfL Wolfsburg",
                        code: "WOB"
                    },
                    score1: 0,
                    score2: 3
                }
            ]
        }
    ]
};

const resultsPageReducer = (state = initialState, action) => {
    return state;
};


export default resultsPageReducer;