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
const handleUploadClick = () => {
  const fileInput = document.getElementById("file-upload");
  if (fileInput) {
    fileInput.click();
  }
};
export function EditProfileModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
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
              <Box width="100%">
                <Image src="cover.png" h="120px" mb='-50px'></Image>
              </Box>
              <Box position="relative" left="30px" top="15px">
                <Image
                  src="avatar.png"
                  w="60px"
                  border="1px"
                  borderRadius={"full"}
                  borderColor={"black"}
                ></Image>
              </Box>
              <Box position="relative" left="45px" top="-30px">
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
                />
                <Image
                  src="Frame.png"
                  width="30px"
                  onClick={handleUploadClick}
                ></Image>
              </Box>
              <Box>
                <Text fontSize="sm">Name</Text>
                <Input placeholder="Enter new name" />
              </Box>
              <Box>
                <Text fontSize="sm" mt={2}>
                  Username
                </Text>
                <Input placeholder="Enter new username" />
              </Box>
              <Box>
                <Text mt={2}>Bio</Text>
                <Textarea></Textarea>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor="#005E0E"
              color="white"
              borderRadius="full"
              width="80px"
              mr={3}
              onClick={onClose}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
