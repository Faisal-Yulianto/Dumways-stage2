import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store/store';

interface Post {
  replies: number;
  replyCount: number;
  createdAt: string | number | Date;
  id: number;
  content: string;
  likeCount: number;
  image?: string;
  user: {
    id: number;
    name: string;
    username: string;
    avatar: string;
  };
  like: {
    postid: number;
    likeCount: number;
  };
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const baseUrl = import.meta.env.VITE_API_URL;

// Thunk untuk fetch posts
export const fetchPosts = createAsyncThunk<Post[], void>(
  'status/fetchPosts',
  async () => {
    const response = await axios.get(`${baseUrl}/api/status`);
    return response.data;
  }
);

// Thunk untuk create post baru
export const createNewPost = createAsyncThunk<Post, { content: string; userId: number }>(
  'status/createNewPost',
  async ({ content, userId }) => {
    const response = await axios.post(`${baseUrl}/api/status`, { content, userId });
    return response.data;
  }
);

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch posts
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });

    // Create new post
    builder
      .addCase(createNewPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload); // Menambahkan post baru di bagian depan
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create new post';
      });
  },
});

export const selectPosts = (state: RootState) => state.status;

export default statusSlice.reducer;
