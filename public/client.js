var socket = io();

var chatlist = document.getElementById("chatlist");
var username = prompt("enter usename", "xxxxx");
socket.on("msgrec", function (msg) {
    msg_Rec(msg);
})
document.getElementById("sendchat").onclick = function () {

    sendmessage(document.getElementById("chatinput").value);
}
function msg_Rec(msg) {
    addtolist(msg);
}

function sendmessage(msg) {
    addtolist("me:" + msg);
    socket.emit("sendmessage", username + ":" + msg);
}
function addtolist(msg) {
    var listele = document.createElement("li");
    listele.innerHTML = msg;
    chatlist.append(listele);
}