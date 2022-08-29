const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState = {
    loading: false,
    posts: [],
    error: "",
};

const fetchPosts = createAsyncThunk(
    "post/fetchPosts",
    async () =>
        (await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"))
            .data
);

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.loading = true;
                state.posts = [];
                state.error = "";
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                state.error = "";
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.posts = [];
                state.error = action.error.message;
            }),
});

module.exports = {
    postReducer: postSlice.reducer,
    fetchPosts,
};
