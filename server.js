const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const a = require("./database/db");

const port =  process.env.port ||3000;


if(process.env.NODE !== "prod"){
    require("dotenv").config()
}
server.listen(port ,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})