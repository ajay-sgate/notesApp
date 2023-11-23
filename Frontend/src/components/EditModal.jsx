import { Button, ModalOverlay, Modal, useDisclosure, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useToast } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { GetFail, GetFunc, GetSuccess, PostFail, PostFunc, PostSuccess, UpdateFail, UpdateFunc, UpdateSuccess } from "../redux/notesReducer/action"

export default function EditModal({ note }) {
    const toast = useToast();
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [noteData, setNoteData] = useState(note || {
        "title": "",
        "content": ""
    })


    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const handleChange = (e) => {

        setNoteData(() => {
            return { ...noteData, [e.target.name]: e.target.value }
        })

    }

    const getData = () => {
        dispatch(GetFunc).then((res) => {
            dispatch(GetSuccess(res.data))
        }).catch((err) => {
            dispatch(GetFail)

        })
    }

    const handleSubmit = () => {

        if (confirm("Alert! You want to update this note ?") == true) {
            console.log("yes");
        }

        dispatch(UpdateFunc(noteData)).then((res) => {
          dispatch(UpdateSuccess)
          toast({
            title: res.data.message,
            status: "success",
            position: "top-center",
            isClosable: true,
        })
          getData()
          onClose()
        }).catch((err) => {
          dispatch(UpdateFail)
          toast({
            title: err.response.data.msg,
            status: "error",
            position: "top-center",
            isClosable: true,
        })
        onClose()
        })

    }

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>Edit</Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={"center"}>Update Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input ref={initialRef} placeholder='Enter your note title here' value={noteData.title} name="title" type="text" onChange={(e) => handleChange(e)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Content</FormLabel>
                            <Input placeholder='Enter your note content here' value={noteData.content} name="content" type="text" onChange={(e) => handleChange(e)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Update
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}