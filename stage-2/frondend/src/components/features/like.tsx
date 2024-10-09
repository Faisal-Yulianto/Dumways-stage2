import React, { useState, useEffect } from 'react';
import { Image, Text, Flex, Spinner, Alert } from '@chakra-ui/react';
import axios from 'axios';

interface LikeButtonProps {
  postId: number; 
  userId: number;  
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId, userId }) => {
  const [likes, setLikes] = useState<number>(0);  
  const [liked, setLiked] = useState<boolean>(false);  
  const [loading, setLoading] = useState<boolean>(false);  
  const [error, setError] = useState<string | null>(null);  

  const apiUrl = `http://localhost:3000/api/likes`;  

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        setLoading(true);
        const [likesResponse, userLikeResponse] = await Promise.all([
          axios.get(`${apiUrl}/count/${postId}`),
          axios.get(`${apiUrl}/${postId}/${userId}`)
        ]);

        setLikes(likesResponse.data.likeCount || 0);  
        setLiked(userLikeResponse.data.liked);
      } catch (error) {
        console.error("Error fetching likes:", error);
        setError("Gagal memuat data like. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, [postId, userId]); 
  useEffect(() => {
    setLiked(false); 
  }, [userId]);
  
  const handleLikeToggle = async () => {
    try {
      setLoading(true);
      if (liked) {
        await axios.delete(`${apiUrl}/${postId}/${userId}`);
        setLikes((prevLikes) => prevLikes - 1);
      } else {
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
