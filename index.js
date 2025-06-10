import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import UserRoute from "./server/Routes/User.Route.js"
import path from "path"

dotenv.config();

const dirname = path.resolve();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", UserRoute);
app.use(express.static(path.join(dirname, "/client/dist")))

app.get("/{*any}", (request, response) => {
    response.sendFile(path.join(dirname, "client", "dist", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Running successfully at port : ${PORT}`)
})
