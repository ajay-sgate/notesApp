import { ViewIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure } from "@chakra-ui/react"


export default function ViewModal({ note }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

      <Tooltip label='View Note'>

        <Button onClick={onOpen} colorScheme="blue">
          <ViewIcon />
        </Button>

      </Tooltip>

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