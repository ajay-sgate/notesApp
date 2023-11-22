import { Button, ModalOverlay, Modal, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"
import { useRef } from "react"

export default function ChakraModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Create Note</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={"center"}>Create New Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Note Title</FormLabel>
                <Input ref={initialRef} placeholder='Enter your note title here' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Note Content</FormLabel>
                <Input placeholder='Enter your note content here' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }