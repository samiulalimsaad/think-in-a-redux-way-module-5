const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counter/counterSlice");

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
    // extraReducers: {
    //     "counter/increment": (state, action) => {
    //         ++state.count;
    //     },
    // },
    extraReducers: (builder) =>
        builder.addCase(counterActions.increment, (state, action) => {
            ++state.count;
        }),
});

module.exports = {
    dynamicCounterReducer: dynamicCounterSlice.reducer,
    dynamicCounterActions: dynamicCounterSlice.actions,
};
