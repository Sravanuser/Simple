import express from "express"
import UserMessage from "../Controller/User.Controller.js"

const route = express.Router();

route.post("/message",UserMessage);

export default route;