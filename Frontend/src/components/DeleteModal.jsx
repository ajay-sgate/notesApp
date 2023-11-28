import { DeleteIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Tooltip, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"

export default function DeleteModal({ onDelete, note }) {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(5px)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)

    return (
        <>
            <Tooltip label='Delete Note' hasArrow>
                <Button
                    colorScheme="red"
                    onClick={() => {
                        onOpen()
                    }}
                >
                    <DeleteIcon />
                </Button>
            </Tooltip>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Delete Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Do you want to delete this note ?</Text>
                    </ModalBody>
                    <ModalFooter gap={4}>
                        <Button colorScheme="green" onClick={onClose}>No</Button>
                        <Button colorScheme="red" onClick={() => onDelete(note.id)}>Yes</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}