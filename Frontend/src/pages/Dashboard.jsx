import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFun, GetSuccess } from "../redux/notesReducer/action";
import { Box, Center, Grid } from "@chakra-ui/react";
import NoteCard from "../components/NoteCard";
import ChakraModal from "../components/ChakraModal";




const Dashboard = () => {
    const dispatch = useDispatch();
    const { notes } = useSelector((store) => store.notesReducer)

    const handleDelete = (noteId) => {
        // Implement delete functionality and update state
        console.log("delete btn")
    };

    const handleEdit = (noteId) => {
        // Implement edit functionality
        console.log("edit btn");
    };

    const getData = () => {
        dispatch(GetFun).then((res) => {
            console.log(res.data)
            dispatch(GetSuccess(res.data))
        }).catch((err) => {
            console.log(err)

        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Box bgColor={"gray.200"} p={4}
                pt={24}>
                    <Center>

                <ChakraModal />
                    </Center>
                <Grid
                    
                    templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                    gap={4}
                    mt={4}
                    minH={"64vh"}
                >


                    {notes && notes.map((note) => (
                        <NoteCard key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
                    ))}

                </Grid>
            </Box>
        </>
    )
}


export default Dashboard;