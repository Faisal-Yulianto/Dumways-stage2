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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import upload from "../../assets/icon/gallery-add.png";
import React from "react";
import { ButtonGreen } from "../base/component/button-green";

const handleUploadClick = () => {
  const fileInput = document.getElementById("file-upload");
  if (fileInput) {
    fileInput.click();
  }
};

export function CreatePostModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <ButtonGreen onClick={onOpen}>Create Post</ButtonGreen>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="800px" h="max-content" bg={"#1D1D1D"}>
          <ModalCloseButton border={"1px"} borderRadius={"full"} m="2" />
          <ModalBody pt="8">
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
                  />
                </Box>
              </Flex>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="space-between" width="100%">
              <Box p={3}>
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: "none" }}
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
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#005E0E",
                    borderRadius: "50px",
                    width: "63px",
                    height: "33px",
                    fontSize: "14px",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Post
                </button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
