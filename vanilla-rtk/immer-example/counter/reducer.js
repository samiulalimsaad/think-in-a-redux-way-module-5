const { DECREMENT, INCREMENT } = require("./actionTypes");
const { produce } = require("immer");

// initial state
const initialState = {
    count: 0,
};

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            // return {
            //     ...state,
            //     count: state.count + 1,
            // };
            return produce(state, (draftState) => {
                ++draftState.count;
            });

        case DECREMENT:
            // return {
            //     ...state,
            //     count: state.count - 1,
            // };
            return produce(state, (draftState) => {
                --draftState.count;
            });

        default:
            return state;
    }
};

module.exports = counterReducer;
