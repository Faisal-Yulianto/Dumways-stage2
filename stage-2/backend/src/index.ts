import express, {Express,Response,Request} from "express";
import dotenv from "dotenv";

dotenv.config();

const app : Express = express();
const port = process.env.PORT || 3000;

app.get("/",(req : Request,res : Response)=> {
    res.send("hello su")
});

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});