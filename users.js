import express from "express";
import { getUser} from "../controllers/user.js";

const router = express.Router()

{/*router.get("/test",(req,res)=>{//to check

router.get("/test",getUser)=>{
    res.send("it works!")
})*/}
router.get("/find/:userId", getUser)
{/*router.put("/", updateUser)
*/}

export default router