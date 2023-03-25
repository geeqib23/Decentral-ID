const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require('dotenv').config();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  console.log(`[CONNECTION]: ${socket.id}`);

  socket.on('ADDR', data => {
    console.log(data);
  })
});

server.listen(3001, () => {
  console.log("[SERVER] STARTED");
});