const ADD_POST = "ADD-COMMENTS";
const UPDATE_TEXT = "UPDATE-TEXT";
const SET_NEWS_ID = "SET_NEWS_ID";


let initialState = {
    news: [
        {
            id: 1,
            title:
                "Robert Lewandowski and Timo Werner lead race for 2019/20 European Golden Shoe",
            subtitle:
                "Robert Lewandowski and Timo Werner are separated by just one goal at the top of this season's Bundesliga scoring charts. They also lead the way in the race to usurp Lionel Messi and claim the 2019/20 European Golden Shoe.",
            img:
                "https://img.fcbayern.com/image/fetch/f_auto,h_880,q_auto:good,w_660/https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/saison-19-20/galerien/spiele/fcb-union-berlin/13_fcb-union_191026_get.jpg/13_fcb-union_191026_get.jpg/fcbhippo%3Alargeninetotwelve%3Fv%3D1572101462955",
            content:
                " Robert Lewandowski and Timo Werner are separated by just one goal at the top of this season's Bundesliga scoring charts. They also lead the way in the race to usurp Lionel Messi and claim the 2019/20 European Golden Shoe. Bayern Munich's Lewandowski is setting the Europe-wide pace with 19 Bundesliga goals so far this term. RB Leipzig counterpart Werner is next on the list with 18, one clear of ex-Borussia Dortmund forward Ciro Immobile (Lazio) and Jamie Vardy (Leceister City).\n" +
                "\n" +
                "Barcelona's Messi - who has claimed a record six European Golden Shoes, including the last three - is down in seventh on 13 goals. Former Dortmund striker Pierre-Emerick Aubameyang is also on 13, while new BVB frontman Erling Haaland is one of six players tied in 13th, on 12 for the season."
        },
        {
            id: 2,
            title:
                "Alphonso Davies: 10 things on the Bayern Munich and Canada national team sensation",
            subtitle:
                "A Bayern Munich regular and Canada's national sporting hero at\n" +
                "                                   the age of 19: these are happy days for Alphonso 'Phonzie'\n" +
                "                                   Davies.",
            img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Alphonso_Davies_2018.jpg/640px-Alphonso_Davies_2018.jpg",
            content:
                "A Bayern Munich regular and Canada's national sporting hero at the age of 19: these are happy days for Alphonso 'Phonzie' Davies. A backstory worthy of the big screen, bundesliga.com presents 10 standout factoids on the young man with the biggest smile in football...\n" +
                "\n" +
                "1) O Canada\n" +
                "\n" +
                'Davies was born in Buduburam, a refugee camp in the Gomoa East District of Ghana, where his parents had fled to during the Second Liberian Civil War. The family moved to Windsor, Ontario, when Davies was five, and later settled in Edmonton, Alberta - but it was a further 13 years before he would receive his Canadian citizenship. "It\'s a great honour to be able to call myself a Canadian citizen," Davies said in June 2017. "I\'m also extremely thankful to my parents for everything they\'ve done throughout the years, carrying the family to this safe environment. This is our home. This is where I grew up." '
        },
        {
            id: 3,
            title:
                "Eintracht Frankfurt No.1 Kevin Trapp returns to first-team training",
            subtitle:
                "Eintracht Frankfurt goalkeeper Kevin Trapp has resumed\n" +
                "                        first-team training following injury.",
            img:
                "https://media.gettyimages.com/photos/kevin-trapp-of-eintracht-frankfurt-looks-on-prior-to-eintracht-fc-picture-id1168449531",
            content:
                "Eintracht Frankfurt goalkeeper Kevin Trapp has resumed first-team training following injury.\n" +
                "\n" +
                "Trapp, 29, has not played since undergoing surgery to repair torn shoulder ligaments suffered in Frankfurt’s 2-1 win at Union Berlin on 27 September 2019, but has travelled with the squad for their warm-weather training camp in Florida, USA.\n" +
                "\n" +
                '"I’m feeling in top condition again," Trapp told Frankfurter Rundschau. "I wasn’t expecting to be back so soon. It’s record-breaking (laughs). It almost feels better than it did before [the injury]."'
        },
        {
            id: 4,
            title: "Julian Nagelsmann: What makes the RB Leipzig coach so different?",
            subtitle:
                "Arrogance, horseplay, no team talks and late line-ups? What\n" +
                "                          might appear to be the recipe for disaster at an amateur team\n" +
                "                          staring a fifth successive relegation in the face is in fact\n" +
                "                          Julian Nagelsmann’s table-topping formula at RB Leipzig.",
            img:
                "http://www2.pictures.zimbio.com/gi/Julian+Nagelsmann+FC+Shakhtar+Donetsk+v+TSG+KvEjYzm0_2Gl.jpg",
            content:
                "Arrogance, horseplay, no team talks and late line-ups? What might appear to be the recipe for disaster at an amateur team staring a fifth successive relegation in the face is in fact Julian Nagelsmann’s table-topping formula at RB Leipzig.\n" +
                "\n" +
                "bundesliga.com explains why the league's youngest ever coach is also, perhaps, its most unique...\n" +
                "\n" +
                "Nagelsmann isn't known for charming the pants off journalists, and you certainly won't see him taking a ball boy to Suplex City - but he does know how to bring his players on side and get results. The 32-year-old won the U19s Bundesliga with Hoffenheim, before dragging the seniors back from the brink of relegation to Germany's second tier and propelling them into the UEFA Champions League group stage in one critically acclaimed, three-or-so-year introduction to first-team coaching. His stock continues to soar, less than six months into the Leipzig job. "
        }
    ],
    comments: [
        {id: 1, name: "guest", message: "Отличная новость"},
        {id: 2, name: "guest", message: "Левандовский лучший"}
    ],
    newCommentText: "",
    newsId: "",
    currentNews: []
};

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT: {
            return {
                ...state,
                newCommentText: action.text
            };
        }
        case ADD_POST: {
            let newComment = {
                id: 3,
                name: "guest",
                message: state.newCommentText
            };

            return {
                ...state,
                comments: [...state.comments, newComment],
                newCommentText: ""
            };
        }

        case SET_NEWS_ID: {
            return {
                ...state,
                newsId: action.id
            };
        }
        default:
            return state;
    }
};

export const addComments = () => ({type: ADD_POST});

export const updateText = com => ({
    type: UPDATE_TEXT,
    text: com
});

export const setNewsId = id => ({
    type: SET_NEWS_ID,
    id: id
});


export default newsPageReducer;
