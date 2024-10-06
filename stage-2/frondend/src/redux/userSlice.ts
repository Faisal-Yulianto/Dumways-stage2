// src/store/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store/store';

interface User {
  id: number;
  avatar: string;
  name?: string;
  username?: string;
  bio?: string;
}

interface UserState {
  auth: any; // Jika ada tipe yang lebih spesifik, gunakan tipe tersebut
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  auth: undefined, // Periksa logika ini jika perlu disesuaikan
};

// Thunk untuk mengambil data pengguna dari API
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token: string) => {
  const response = await fetch('http://localhost:3000/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  const data = await response.json();
  console.log("User Data Fetched:", data); // Log data untuk memverifikasi respons
  return data;
});

// Membuat slice user
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
        state.user = action.payload; // Simpan data pengguna
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
