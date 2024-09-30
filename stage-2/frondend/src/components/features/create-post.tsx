import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Image,
  Textarea,
  Text,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import upload from "../../assets/icon/gallery-add.png";
import React, { useState } from "react"; 
import { ButtonGreen } from "../base/component/button-green";
import axios from "axios"; 
import { SubmitHandler, useForm } from "react-hook-form";

interface CreatePostForm {
  content: string;
}

export function CreatePostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register, handleSubmit } = useForm<CreatePostForm>();

  const handleUploadClick = () => {
    const fileInput = document.getElementById("file-upload-create-post") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

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
    const token = localStorage.getItem("token");
    
    // Check if token exists
    if (!token) {
        console.error("No token found in local storage");
        alert("You are not authorized. Please log in.");
        return; // Exit early if token is not found
    }

    try {
        const formData = new FormData();
        if (file) {
            console.log("Appending file to FormData:", file);
            formData.append("image", file); // Attach image file
        }
        formData.append("content", data.content); // Attach post content

        const response = await axios.post(
            "http://localhost:3000/api/posts", // URL endpoint untuk membuat post
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.status === 201) {
            console.log("Post created:", response.data.message);
            alert("Post created successfully!");
            window.location.reload(); 
        } else {
            console.error("Failed to create post:", response.data.message);
        }
    } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create post. Please try again later.");
    }

    onClose();
};


  return (
    <>
      <ButtonGreen onClick={onOpen}>Create Post</ButtonGreen>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="800px" bg={"#1D1D1D"}>
          <ModalCloseButton border={"1px"} borderRadius={"full"} m="2" />
          <ModalBody pt="8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                width="100%"
                pl={4}
                pb={5}
                gap={3}
                borderBottom="1px"
                borderColor={"gray"}
              >
                <Flex>
                  <Box pt={'4'}>
                    <Image borderRadius="full" boxSize="40px" src="avatar.png" />
                  </Box>
                  <Box width="590px" pl={5} pt={4}>
                    <Textarea
                      variant="unstyled"
                      overflow={'hidden'}
                      resize={'none'}
                      placeholder="What is happening?"
                      {...register("content", { required: true })} 
                    />
                  </Box>
                </Flex>
              </Box>
              {imagePreview && (
                <Image src={imagePreview} alt="Preview" borderRadius="md" mt={3} />
              )}
              {errorMessage && (
                <Text color="red.500" mt={2}>{errorMessage}</Text>
              )}
              <ModalFooter>
                <Flex justifyContent="space-between" width="100%">
                  <Box p={3}>
                    <input
                      id="file-upload-create-post"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <Image
                      src={upload}
                      alt="Upload"
                      cursor="pointer"
                      width="24px"
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
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
