import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: 1,
      title: "learning",
      content: "learn redux",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thombsUp: 0,
        heart: 0,
        wow: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: 2,
      title: "Slices...",
      content: "posts slice",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thombsUp: 0,
        heart: 0,
        wow: 0,
        rocket: 0,
        coffee: 0,
      },
    },
  ],
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
