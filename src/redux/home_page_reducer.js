const SET_TEAMS = "SET-TEAMS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const CLEAR_TEAMS = "CLEAR_TEAMS";


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
        case CLEAR_TEAMS: {
            return {
                ...state,
                teams: []
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
export const clearTeams = () => ({type: CLEAR_TEAMS});

export default homePageReducer;
