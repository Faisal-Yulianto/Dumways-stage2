import {
  Box,
  Button,
  Modal,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface EditProfileForm {
  name: string;
  username: string;
  bio: string;
}

const baseUrl = import.meta.env.VITE_API_URL;

export function EditProfileModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<EditProfileForm>();
  const [avatar, setAvatar] = React.useState<string>("avatar.png");
  const [file, setFile] = React.useState<File | null>(null);
  const [background, setBackground] = React.useState<string>("cover.png");
  const [backgroundFile, setBackgroundFile] = React.useState<File | null>(null); 
  const navigate = useNavigate();

  const handleEditProfileClick = () => {
    onOpen();
    navigate("/profile");
  };

  // Handle avatar upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setAvatar(e.target.result as string); // Set avatar preview
        }
      };
      reader.readAsDataURL(selectedFile); // Preview avatar image
      setFile(selectedFile); // Store selected file
    }
  };

  // Handle background upload
  const handleBackgroundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setBackground(e.target.result as string); // Set background preview
        }
      };
      reader.readAsDataURL(selectedFile); // Preview background image
      setBackgroundFile(selectedFile); // Store selected file
    }
  };

  const onSubmit: SubmitHandler<EditProfileForm> = async (data) => {
    const token = Cookies.get("token");

    if (!token) {
      console.error("No token found in local storage");
      alert("You are not authorized. Please log in.");
      return;
    }

    try {
      const formData = new FormData();
      if (file) {
        formData.append("avatar", file); // Upload avatar
      }
      if (backgroundFile) {
        formData.append("background", backgroundFile); // Upload background
      }
      formData.append("name", data.name);
      formData.append("username", data.username);
      formData.append("bio", data.bio);

      const response = await axios.put(`${baseUrl}/api/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Profile updated successfully!");
        window.location.reload();
      } else {
        console.error("Failed to update profile:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again later.");
    }

    onClose();
  };

  const handleUploadClick = () => {
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleBackgroundUploadClick = () => {
    const fileInput = document.getElementById("background-upload") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <>
      <Button
        onClick={handleEditProfileClick}
        color="white"
        borderRadius="full"
        variant="outline"
        width="80px"
        fontSize="12px"
        margin="10px"
        backgroundColor="#262626"
      >
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="#262626" color="white">
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Box width="100%" position="relative">
                <Image src={background} h="120px" mb="-50px" w='100%' borderRadius='15px' />
                <input
                  id="background-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleBackgroundChange}
                  accept="image/*"
                />
                <Image
                  src="Frame.png"
                  width="30px"
                  position="absolute"
                  top="5px"
                  right="5px"
                  onClick={handleBackgroundUploadClick}
                />
              </Box>

              <Box position="relative" left="30px" top="15px">
                {/* Avatar image */}
                <Image
                  src={avatar}
                  w="60px"
                  h="60px"
                  border="2px"
                  borderRadius="full"
                  borderColor="black"
                />
              </Box>
              <Box position="relative" left="45px" top="-30px">
                {/* Avatar file input */}
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <Image
                  src="Frame.png"
                  width="30px"
                  onClick={handleUploadClick}
                />
              </Box>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <Text fontSize="sm">Name</Text>
                  <Input {...register("name")} placeholder="Enter new name" />
                </Box>
                <Box>
                  <Text fontSize="sm" mt={2}>
                    Username
                  </Text>
                  <Input {...register("username")} placeholder="Enter new username" />
                </Box>
                <Box>
                  <Text mt={2}>Bio</Text>
                  <Textarea {...register("bio")} />
                </Box>
                <ModalFooter>
                  <Button
                    backgroundColor="#005E0E"
                    color="white"
                    borderRadius="full"
                    width="80px"
                    mr={3}
                    type="submit"
                  >
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
