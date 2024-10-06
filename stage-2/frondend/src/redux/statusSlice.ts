import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store/store';

interface Post {
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

export const fetchPosts = createAsyncThunk<Post[], void>(
  'status/fetchPosts',
  async () => {
    const response = await axios.get('http://localhost:3000/api/status');
    return response.data;
  }
);

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export const selectPosts = (state: RootState) => state.status;

export default statusSlice.reducer;
