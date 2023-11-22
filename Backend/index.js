const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const { UserRouter } = require("./routes/userRoute");
const auth = require("./middlewares/authMIddleware");
const { NotesRouter } = require("./routes/notesRoute");

const port = 8080;

const app = express();
app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({msg:"Welcome to Notes Backend API"})
})

app.use('/auth', UserRouter)

app.use("/notes", auth, NotesRouter);

app.listen(port, async() => {
    try{
       db.connect((error)=>{
            if(error){
                console.log(error)
            }else{
                console.log("connected to the database")
            }
        })
    }catch(err){
        console.log(err)
    }
  console.log(`server is running on port ${port}`);
});