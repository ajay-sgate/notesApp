import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"


export default function ViewModal({note}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen} colorScheme="blue">View</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Title : {note.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Content : {note.content}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }