import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios
import { RootState } from './store/store';

interface User {
  id: number;
  avatar: string;
  name?: string;
  username?: string;
  bio?: string;
}

interface UserState {
  auth: any; 
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  auth: undefined, 
};
const baseUrl = import.meta.env.VITE_API_URL;

export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token: string) => {
  try {
    const response = await axios.get(`${baseUrl}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("User Data Fetched:", response.data);
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Simpan data user di state
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error'; // Tangani kesalahan
      });
  },
});

// Selector untuk mendapatkan data pengguna dari state
export const selectUser = (state: RootState) => state.user.user;

// Ekspor reducer
export default userSlice.reducer;
