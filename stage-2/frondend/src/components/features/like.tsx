import React, { useState, useEffect } from 'react';
import { Image, Text, Flex, Spinner, Alert } from '@chakra-ui/react';
import axios from 'axios';

interface LikeButtonProps {
  postId: number;  // ID dari postingan
  userId: number;  // ID dari user yang sedang login
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId, userId }) => {
  const [likes, setLikes] = useState<number>(0);  // Jumlah like
  const [liked, setLiked] = useState<boolean>(false);  // Status like
  const [loading, setLoading] = useState<boolean>(false);  // Status loading
  const [error, setError] = useState<string | null>(null);  // Pesan error

  const apiUrl = `http://localhost:3000/api/likes`;  // URL API

  // Mengambil data like ketika komponen dimuat
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        setLoading(true);
        
        // Mengambil jumlah like dan status like user
        const [likesResponse, userLikeResponse] = await Promise.all([
          axios.get(`${apiUrl}/count/${postId}`),
          axios.get(`${apiUrl}/${postId}/${userId}`)
        ]);

        setLikes(likesResponse.data.likeCount || 0);  // Pastikan sesuai dengan response dari server
        setLiked(userLikeResponse.data.liked);
      } catch (error) {
        console.error("Error fetching likes:", error);
        setError("Gagal memuat data like. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, [postId, userId]); // Memanggil ulang saat userId berubah

  // Reset status liked ketika userId berubah
  useEffect(() => {
    setLiked(false); // Reset liked ke false ketika userId berubah
  }, [userId]);

  // Menghandle toggle like
  const handleLikeToggle = async () => {
    try {
      setLoading(true);
      if (liked) {
        // Jika sudah dilike, hapus like
        await axios.delete(`${apiUrl}/${postId}/${userId}`);
        setLikes((prevLikes) => prevLikes - 1);
      } else {
        // Jika belum dilike, tambahkan like
        await axios.post(apiUrl, { postId, userId });
        setLikes((prevLikes) => prevLikes + 1);
      }
      setLiked((prevLiked) => !prevLiked);
    } catch (error) {
      console.error("Error updating like:", error);
      alert("Gagal memperbarui like. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex alignItems="center" cursor="pointer" onClick={handleLikeToggle}>
      {loading ? (
        <Spinner size="sm" />
      ) : (
        <>
          <Image
            src={liked ? 'heartactive.png' : 'heart.png'}
            alt={liked ? 'Unlike' : 'Like'}
            boxSize="30px"
          />
          <Text ml={2} fontSize="md">{likes} {likes === 1 ? 'Like' : 'Likes'}</Text>
        </>
      )}
      {error && <Alert status="error">{error}</Alert>}
    </Flex>
  );
};

export default LikeButton;
