// Sending and receiving data in JSON format using POST method
//
var xhr = new XMLHttpRequest();
var url = "https://grayrhinos.github.io/workflow";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.email + ", " + json.password);
    }
};
var data = JSON.stringify(workflow.json);
xhr.send(data);
