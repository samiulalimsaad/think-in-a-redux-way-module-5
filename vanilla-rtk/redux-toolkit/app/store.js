const { configureStore } = require("@reduxjs/toolkit");
const { counterReducer } = require("../features/counter/counterSlice");
const {
    dynamicCounterReducer,
} = require("../features/dynamicCounter/dynamicCounterSlice");
const { createLogger } = require("redux-logger");
const { postReducer } = require("../features/post/postSlice");

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        posts: postReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        // createLogger(),
    ],
});

module.exports = store;
