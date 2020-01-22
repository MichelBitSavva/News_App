const SET_TEAMS = "SET-TEAMS";

let initialState = {
    teams: []
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS: {
            return {
                ...state,
                teams: [...state.teams, ...action.teams]
            };
        }

        default:
            return state;
    }
};

export const addSetStateActionCreator = teams => ({type: SET_TEAMS, teams});

export default homePageReducer;
