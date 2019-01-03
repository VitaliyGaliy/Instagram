const types = {
    SET_TOKEN: 'SET_TOKEN'
};

const initialState = {
    token: ''
};

export default function reducer(state = initialState, action) {
    if (action.type in types) {
        const { type, ...payload } = action;

        return { ...state, ...payload };
    }
    return state;
}

const setToken = token => {
    return {
        type: types.SET_TOKEN,
        token
    };
};

export const actions = {
    setToken
}