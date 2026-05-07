const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('User baru bergabung! ✨');

  socket.on('kirim-pesan', (data) => {
    // Mengirim pesan ke semua orang
    io.emit('pesan-baru', data);
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Aplikasi aktif di http://localhost:${PORT}`);
});
