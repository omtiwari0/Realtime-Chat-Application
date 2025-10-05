//  Create an Express app 
const express = require('express');
const app = express();
const http = require("http").createServer(app);   //create the actual web server

// socket io connect to http 
const io = require("socket.io")(http, { cors: { origin: "*" } });

// Serve static frontend files
app.use(express.static("public"));

const users = {};


io.on('connection', socket =>{
  
  // new users joined,  others connected get know about this 
    socket.on('new-user-joined',name=>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

    // broadcast sent msg to eevryone 
    socket.on('send',message=>{
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
    })

    // if someone leave let others know about it 
    socket.on('disconnect',message=>{
        socket.broadcast.emit('gone', users[socket.id])
        delete users[socket.id]
    })

})

const PORT = process.env.PORT || 5000;  //Starts the combined server
http.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});