import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { GameRoom } from './GameRoom.js';
import { DEFAULT_MAP_ID } from '../shared/maps/index.js';

const PORT        = process.env.PORT   || 3001;
const startMapId  = process.env.MAP_ID || DEFAULT_MAP_ID;

const app        = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: '*' },
});

const gameRoom = new GameRoom(io, startMapId);

io.on('connection', (socket) => {
  console.log(`+ connected: ${socket.id} | room players: ${gameRoom.playerCount} | state: ${gameRoom.state}`);

  socket.once('join',          (data) => gameRoom.handleJoin(socket, data));
  socket.on('startGame',       (data) => gameRoom.handleStartGame(socket, data || {}));
  socket.on('soloPlay',        (data) => gameRoom.handleSoloPlay(socket, data || {}));
  socket.on('input',           (data) => gameRoom.handleInput(socket, data));
  socket.on('hit',             (data) => gameRoom.handleHit(socket, data));
  socket.on('meleeHit',        (data) => gameRoom.handleMeleeHit(socket, data));
  socket.on('spawnProjectile', (data) => gameRoom.handleProjectile(socket, data));
  socket.on('collectDrop',     ()     => gameRoom.handleDropCollected(socket));
  socket.on('ping',            ({ clientTime }) =>
    socket.emit('pong', { serverTime: Date.now(), clientTime })
  );

  // Map change request — accepted from any client while in WAITING state (v1: no auth)
  socket.on('requestMapChange', ({ mapId }) => {
    const ok = gameRoom.setMap(mapId);
    socket.emit('mapChangeResult', { ok, mapId: gameRoom.currentMapId });
  });

  socket.on('disconnect', () => {
    gameRoom.handleDisconnect(socket);
    console.log(`- disconnected: ${socket.id} | room players after: ${gameRoom.playerCount}`);
  });
});

app.get('/health', (_, res) => {
  res.json({
    status:  'ok',
    players: gameRoom.playerCount,
    state:   gameRoom.state,
    mapId:   gameRoom.currentMapId,
    uptime:  process.uptime(),
  });
});

httpServer.listen(PORT, () =>
  console.log(`Waddle War server on :${PORT} — map: ${gameRoom.currentMapId}`)
);
