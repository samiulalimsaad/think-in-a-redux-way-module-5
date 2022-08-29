const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
    dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

console.log(`Initial State: ${JSON.stringify(store.getState())}`);

store.subscribe(() => {
    console.log(store.getState());
});

// console.log(counterActions.reset());

store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());
// store.dispatch(counterActions.reset());

// store.dispatch(dynamicCounterActions.increment(1));
// store.dispatch(dynamicCounterActions.increment(5));
// store.dispatch(dynamicCounterActions.decrement(2));
// store.dispatch(dynamicCounterActions.reset());
