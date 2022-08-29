const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
    count: 0,
};

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
        reset: (state, action) => {
            state.count = 0;
        },
    },
});

module.exports = {
    dynamicCounterReducer: dynamicCounterSlice.reducer,
    dynamicCounterActions: dynamicCounterSlice.actions,
};
