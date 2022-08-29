const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk");
const axios = require("axios");

const initialState = {
    loading: false,
    posts: [],
    error: "",
};

const fetchPostRequested = () => ({ type: "post/requested" });

const fetchPostSucceeded = (posts) => ({
    type: "post/succeeded",
    payload: posts,
});

const fetchPostFailed = (error) => ({
    type: "post/failed",
    payload: error,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "post/requested":
            console.log("first");
            return {
                ...state,
                loading: true,
                posts: [],
                error: "",
            };

        case "post/succeeded":
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: "",
            };

        case "post/failed":
            return {
                ...state,
                loading: false,
                error: action.payload,
                posts: [],
            };

        default:
            return state;
    }
};

// thunk function

const fetchPost = () => async (dispatch) => {
    dispatch(fetchPostRequested());
    try {
        const { data: posts } = await axios.get(
            // "https://jsonplaceholder.typicode.com/posts?_limit=5"
            "https://jsonplaceholder.typicodea.com/posts?_limit=5"
        );
        // console.log(posts);
        dispatch(fetchPostSucceeded(posts));
    } catch (error) {
        dispatch(fetchPostFailed(error.message));
    }
};

const store = createStore(reducer, applyMiddleware(thunk.default));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchPost());
