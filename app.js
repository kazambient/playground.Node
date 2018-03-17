const Items = require('./objects/Items');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
var item = new Items.Item(1);
var comp = new Items.Computer(1);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    //console.log(req);
    
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    setInterval(function () {
        socket.emit('news', { hello: Date.now() });
    }, 2000);




//console.log(item.props);

});