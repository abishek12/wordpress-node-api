import Express from "express";
import morgan from "morgan";
import {connection} from "./database.js";

const app = Express();

// establish database connection
connection();

/**
 * use of middleware
 */
app.use(Express.json());
app.use(morgan('tiny'));

app.get("/", (req,res)=>{
    return res.status(200).json({
        message: "Working"
    });
});

app.listen(8000, ()=>{});