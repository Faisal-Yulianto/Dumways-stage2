import prisma from '../utils/prismaClient';

export const followUserService = async (followerId: number, followingId: number) => {
    // Cek apakah user sudah follow user lain
    const alreadyFollowing = await prisma.follow.findUnique({
        where: {
            followerId_followingId: {
                followerId,
                followingId,
            },
        },
    });

    if (alreadyFollowing) {
        return { status: 400, message: { message: 'You are already following this user.' } };
    }

    // Membuat hubungan follow baru
    await prisma.follow.create({
        data: {
            followerId,
            followingId,
        },
    });

    return { status: 200, message: { message: 'Followed user successfully.' } };
};

export const unfollowUserService = async (followerId: number, followingId: number) => {
    // Cari hubungan follow antara follower dan following
    const followRecord = await prisma.follow.findUnique({
        where: {
            followerId_followingId: {
                followerId,
                followingId,
            },
        },
    });

    if (!followRecord) {
        return { status: 404, message: { message: 'You are not following this user.' } };
    }

    // Hapus hubungan follow
    await prisma.follow.delete({
        where: {
            followerId_followingId: {
                followerId,
                followingId,
            },
        },
    });

    return { status: 200, message: { message: 'Unfollowed user successfully.' } };
};
