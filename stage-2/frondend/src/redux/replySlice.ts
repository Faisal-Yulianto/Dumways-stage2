import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/reply';

interface Reply {
  id: number;
  content: string;
  postId: number;
  userId: number;
  user: {
    id: number;
    username: string;
    name: string;
    avatar: string;
  };
}

interface ReplyState {
  replies: Reply[];
  error: string | null;
}

export const fetchReplies = createAsyncThunk<Reply[], number>(
  'replies/fetchReplies',
  async (postId) => {
    const response = await axios.get<Reply[]>(`${API_URL}/${postId}`);
    return response.data;
  }
);

export const createReply = createAsyncThunk<Reply, { postId: number; userId: number; content: string }>(
  'replies/createReply',
  async ({ postId, userId, content }) => {
    const response = await axios.post<Reply>(`${API_URL}/${postId}`, {
      content,
      postId,
      userId,
    });
    return response.data;
  }
);

const replySlice = createSlice({
  name: 'replies',
  initialState: {
    replies: [],
    error: null,
  } as ReplyState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchReplies.fulfilled, (state, action: PayloadAction<Reply[]>) => {
      state.replies = action.payload;
      state.error = null;
    });
    builder.addCase(fetchReplies.rejected, (state, action) => {
      state.error = action.error.message || 'Error fetching replies';
    });

    builder.addCase(createReply.fulfilled, (state, action: PayloadAction<Reply>) => {
      state.replies.push(action.payload);
      state.error = null;
    });
    builder.addCase(createReply.rejected, (state, action) => {
      state.error = action.error.message || 'Error creating reply';
    });
  },
});

export default replySlice.reducer;

export const {} = replySlice.actions; 
