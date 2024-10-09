import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser, getFollowers, getFollowing } from '../../redux/followSlice';
import { RootState, AppDispatch } from '../../redux/store/store';
import Cookies from 'js-cookie'; // Import js-cookie untuk akses token

const FollowUser: React.FC<{ userId: number }> = ({ userId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const followers = useSelector((state: RootState) => state.follow.followers);
    const following = useSelector((state: RootState) => state.follow.following);
    const loading = useSelector((state: RootState) => state.follow.loading);
    const error = useSelector((state: RootState) => state.follow.error);

    const token = Cookies.get('token');

    useEffect(() => {
        if (token) {
            dispatch(getFollowers(userId));
            dispatch(getFollowing(userId));
        }
    }, [dispatch, userId, token]);

    const handleFollow = (followingId: number) => {
        if (token) {
            dispatch(followUser({ followerId: userId, followingId }));
        }
    };

    const handleUnfollow = (followingId: number) => {
        if (token) {
            dispatch(unfollowUser({ followerId: userId, followingId }));
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Followers</h2>
            <ul>
                {followers.map((follower) => (
                    <li key={follower.id}>
                        {follower.name}
                        <button onClick={() => handleUnfollow(follower.id)}>Unfollow</button>
                    </li>
                ))}
            </ul>
            <h2>Following</h2>
            <ul>
                {following.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleUnfollow(user.id)}>Unfollow</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleFollow(123)}>Follow User 123</button> 
        </div>
    );
};

export default FollowUser;
