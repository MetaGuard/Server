const ws = require('ws');

const wss = new ws.WebSocketServer({ port: 8080 });

var perSecond = 0;

wss.on('connection', function connection(ws) {
  console.log('client connected!');

  ws.on('message', function message(data) {
    // console.log('received: %s', data);
    perSecond++;
  });
});

setInterval(() => {
  console.log('requests per second: ' + perSecond);
  perSecond = 0;
}, 1000);
