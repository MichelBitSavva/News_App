const SET_TEAMS = "SET-TEAMS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    teams: [],
    isFetching: false
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS: {
            return {
                ...state,
                teams: [...state.teams, ...action.teams]
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }

        default:
            return state;
    }
};

export const setTeams = (teams) => ({type: SET_TEAMS, teams});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default homePageReducer;
