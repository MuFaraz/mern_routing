import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import { Server } from "socket.io";
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/chat.html");
  //   res.send("<h1>Hello world</h1>");
});
io.on("connection", (socket) => {
//   console.log(socket.conn.server.clientsCount);
//   console.log(socket.conn)
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
  socket.on('number_of_client', () => {
    io.emit('number_of_client', socket.conn.server.clientsCount);
    console.log('message: ' + socket.conn.server.clientsCount);
  });
  socket.on('typing', (data)=>{
      console.log("faraz",data)
    if(data.typing==true){
       io.emit('display', data)
    }
    else{
        io.emit('display', data)
    }
       
  })
  
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
