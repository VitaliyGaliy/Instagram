import axios from "axios";

const types = {
    SET_HISTORY: 'SET_HISTORY'
};

const initialState = {
    history: []
};

export default function reducer(state = initialState, action) {
    if (action.type in types) {
        const { type, ...payload } = action;

        return { ...state, ...payload };
    }
    return state;
}

const setHistory = token => (dispatch) => {
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`)
        .then(({ data }) => {
            const history = data.data
            dispatch({
                type: types.SET_HISTORY,
                history
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

};

export const actions = {
    setHistory
}