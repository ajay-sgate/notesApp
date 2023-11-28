import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFail, DeleteFunc, DeleteSuccess, GetFail, GetFunc, GetSuccess } from "../redux/notesReducer/action";
import { Box, Button, Center, Grid, Heading, useColorModeValue, useToast } from "@chakra-ui/react";
import NoteCard from "../components/NoteCard";
import ChakraModal from "../components/ChakraModal";




const Dashboard = () => {
    const [page, setPage] = useState(0)
    const toast = useToast();
    const bg = useColorModeValue("gray.200", "gray.600")
    const dispatch = useDispatch();
    const { notes } = useSelector((store) => store.notesReducer)
    const limit = 8;

    const handleDelete = (noteId) => {
        // Implement delete functionality and update state

        dispatch(DeleteFunc(noteId)).then((res) => {
            dispatch(DeleteSuccess)
            getData()
            toast({
                title: res.data.message,
                status: "warning",
                position: "top-center",
                isClosable: true,
            })
        }).catch((err) => {
            dispatch(DeleteFail)
            toast({
                title: err.response.data.msg,
                status: "error",
                position: "top-center",
                isClosable: true,
            })
        })
    };

    const handleEdit = (noteId) => {
        // Implement edit functionality
        console.log("edit btn");
    };

    const getData = () => {
        dispatch(GetFunc(limit, page * limit)).then((res) => {
            dispatch(GetSuccess(res.data))
        }).catch((err) => {
            dispatch(GetFail)
        })
    }

    const handlePagination = (value) => {
        setPage((prev) => (prev + value))
    }

    useEffect(() => {
        getData()
    }, [page])

    return (
        <>
            <Box bgColor={bg} p={4}
                pt={24}>
                <Center>

                    <ChakraModal getData={getData} />
                </Center>
                {notes.length > 0 &&
                    <>
                        <Grid

                            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                            gap={8}
                            mt={6}
                            mb={4}
                            minH={"62vh"}
                        >


                            {notes && notes.map((note) => (
                                <NoteCard key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} getData={getData} />
                            ))}

                        </Grid>

                        <Center gap={2}>
                            <Button isDisabled={page == 0} colorScheme="teal" onClick={() => handlePagination(-1)}>Prev</Button>
                            <Button>{page + 1}</Button>
                            <Button isDisabled={notes.length < limit} colorScheme="teal" onClick={() => handlePagination(+1)}>Next</Button>
                        </Center>

                    </>
                }

                {notes.length == 0 && <Center mt={6}
                    minH={"62vh"} >
                    <Heading>Please Create Some Notes !!!</Heading>
                </Center>
                }
            </Box>
        </>
    )
}


export default Dashboard;