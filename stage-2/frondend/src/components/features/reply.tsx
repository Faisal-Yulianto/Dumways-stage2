import { Input, Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
import { fetchUserData } from "../../redux/userSlice";

interface CreatePostForm {
  content: string;
}

export function Reply() {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, reset } = useForm<CreatePostForm>(); 
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { user,error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch]);

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  const avatarUrl = user?.avatar
    ? `http://localhost:3000${user.avatar}`
    : "avatar.png";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(selectedFile);
      setErrorMessage(""); 
    } else {
      setErrorMessage("No file selected.");
    }
  };

  const onSubmit: SubmitHandler<CreatePostForm> = async (data) => {
    const token = Cookies.get("token");
    if (!token) {
        alert("You are not authorized. Please log in.");
        return;
    }

    try {
        const formData = new FormData();
        if (file) {
            formData.append("image", file);
        }
        formData.append("content", data.content);

        const response = await axios.post(
            "http://localhost:3000/api/posts",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        if (
            response.status === 200 &&
            response.data.message === "Post created successfully"
        ) {
            alert("Post created successfully!"); 
            reset(); 
            setFile(null);
            setImagePreview(null); 
            window.location.reload()
        } else {
            console.error("Failed to create post:", response.data.message);
        }
    } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create post. Please try again later.");
    }
};


  const handleUploadClick = () => {
    const fileInput = document.getElementById(
      "file-upload"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <Box
      ml='-80px'
      h='80px'
      width="700px"
      borderBottom="1px"
      borderTop='1px'
      borderColor={"gray"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex mt={4}>
          <Box ml={10}>
            <Image borderRadius="50%" w='60px' h='40px' src={avatarUrl} />
          </Box>
          <Box width="100%" height="40px" p={3}>
            <Input
              variant="unstyled"
              placeholder=" Type your Reply"
              {...register("content", { required: true })}
            />
          </Box>
          <Box p={3}>
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
            <Image
              src='gallery-add.png'
              alt="Upload"
              cursor="pointer"
              width="30px"
              height="24px"
              onClick={handleUploadClick}
            />
          </Box>
          <Box p={2}>
            <Button
              type="submit"
              backgroundColor="#005E0E"
              borderRadius="50px"
              width="63px"
              height="33px"
              fontSize="14px"
              color="white"
            >
              Post
            </Button>
          </Box>
        </Flex>
        {imagePreview && (
          <Image src={imagePreview} alt="Preview" borderRadius="md" mt={3} />
        )}
        {errorMessage && (
          <Text color="red.500" mt={2}>
            {errorMessage}
          </Text>
        )}
      </form>
    </Box>
  );
}
