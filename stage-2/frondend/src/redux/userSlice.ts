import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios
import { RootState } from './store/store';

interface User {
  id: number;
  avatar: string;
  name?: string;
  username?: string;
  bio?: string;
  background?: string; // Pastikan ini adalah string
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

const baseUrl = import.meta.env.VITE_API_URL; // Ambil URL dasar dari environment variable

// Fetch user data from API
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token: string) => {
  try {
    const response = await axios.get(`${baseUrl}/api/user`, { // Menggunakan endpoint `/api/profile`
      headers: {
        Authorization: `Bearer ${token}`, // Tambahkan header token
      },
    });

    console.log("User Data Fetched:", response.data); // Log data yang diterima
    return response.data; 
  } catch (error: any) {
    console.error("Error fetching user data:", error); // Log error jika ada
    throw new Error(error.response?.data?.message || 'Failed to fetch user data');
  }
});

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null; // Reset error
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false; // Stop loading
        state.user = action.payload; // Update user dengan data dari API
        console.log("User Updated in State:", state.user); // Log untuk memverifikasi update
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false; // Stop loading
        state.error = action.error.message || 'Unknown error'; // Set error message
        console.error("Error Updating State:", action.error.message); // Log error jika ada
      });
  },
});

// Selector to get user data
export const selectUser = (state: RootState) => state.user.user; // Selector untuk mengambil data user dari state

export default userSlice.reducer; // Export reducer
