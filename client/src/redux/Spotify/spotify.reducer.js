import { SET_CATEGORIES } from './spotify.types';

const INITIAL_STATE = {
    categories: {}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...INITIAL_STATE,
                categories: action.payload
            }
        default: return state;
    }
}

export default reducer;