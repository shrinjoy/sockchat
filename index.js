var express = require("express")
var app = express();
var http = require("http").createServer(app);
var port = 3000;
var io = require("socket.io")(http);
var tempnameholder;
app.use(express.static(__dirname + "/public/"))
app.get("/", function (req, res) {

    res.sendFile(__dirname + "/public/sockchat.html");
});
io.on("connection", (socket) => {
    console.log("user connected");


    socket.on("sendmessage", function (msg) {
        socket.broadcast.emit("msgrec", msg);
    })

    socket.on("disconnect", (socket) => {
        console.log("user disconnected");
    })

})

http.listen(3000, function () {
    console.log("server running on localhost:" + port);
});
