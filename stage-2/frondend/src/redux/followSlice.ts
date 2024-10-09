// src/features/followSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

// Define types for the follow state
interface FollowState {
    followers: any[];
    following: any[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: FollowState = {
    followers: [],
    following: [],
    loading: false,
    error: null,
};

// Function to get JWT token from cookies
const getToken = () => {
    return Cookies.get('token');  // Assume JWT token is stored in 'token' cookie
};

// Async thunks for API calls
export const followUser = createAsyncThunk(
    'follow/followUser',
    async ({ followerId, followingId }: { followerId: number; followingId: number }) => {
        const token = getToken();  // Get JWT token from cookies
        const response = await axios.post('http://localhost:3000/api/follow', 
            { followerId, followingId }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,  // Set Authorization header
                },
            }
        );
        return response.data;
    }
);

export const unfollowUser = createAsyncThunk(
    'follow/unfollowUser',
    async ({ followerId, followingId }: { followerId: number; followingId: number }) => {
        const token = getToken();
        const response = await axios.post('http://localhost:3000/api/unfollow', 
            { followerId, followingId }, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        return response.data;
    }
);

export const getFollowers = createAsyncThunk(
    'follow/getFollowers',
    async (userId: number) => {
        const token = getToken();
        const response = await axios.get(`http://localhost:3000/api/followers/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    }
);

export const getFollowing = createAsyncThunk(
    'follow/getFollowing',
    async (userId: number) => {
        const token = getToken();
        const response = await axios.get(`http://localhost:3000/api/following/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.data;
    }
);

// Create the follow slice
const followSlice = createSlice({
    name: 'follow',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(followUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(followUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.following.push(action.payload);
            })
            .addCase(followUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to follow user';
            })
            .addCase(unfollowUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(unfollowUser.fulfilled, (state, action: PayloadAction<{ id: any; message: string }>) => {
                state.loading = false;
                state.following = state.following.filter(user => user.id !== action.payload.id);
            })
            .addCase(unfollowUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to unfollow user';
            })
            .addCase(getFollowers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFollowers.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.followers = action.payload;
            })
            .addCase(getFollowers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch followers';
            })
            .addCase(getFollowing.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFollowing.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.following = action.payload;
            })
            .addCase(getFollowing.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch following';
            });
    },
});

// Export the actions and reducer
export default followSlice.reducer;
