import express from "express"
import http from "node:http"
import { HTTP_PORT, NODE_ENV } from "@/utils/env.js";

const HOST = "0.0.0.0"

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("OK")
})

// @ts-ignore
app.listen(HTTP_PORT, HOST, () => {
    console.log(`Starting ${NODE_ENV} server at:`)
    console.log(`➜  Local: \t\thttp://localhost:${HTTP_PORT}`)
    console.log(`➜  On your network: \thttp://${HOST}:${HTTP_PORT}`)
});
