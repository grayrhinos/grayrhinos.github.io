// Sending and receiving data in JSON format using POST method
//
var xhr = new XMLHttpRequest();
var url = "https://grayrhinos.github.io/workflow";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");

var data = JSON.stringify({ "options": { "field-key1":{ "display1":"value1", "display2":"value2" } } });
xhr.send(data);
