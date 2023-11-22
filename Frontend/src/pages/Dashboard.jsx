import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFun, GetSuccess } from "../redux/notesReducer/action";
import { Grid } from "@chakra-ui/react";
import NoteCard from "../components/NoteCard";




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
            <Grid
            bgColor={"gray.200"}
                templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
                gap={4}
                p={8}
                pt={24}
                minH={"87vh"}
            >
                {notes && notes.map((note) => (
                    <NoteCard key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
                ))}
            </Grid>
        </>
    )
}


export default Dashboard;