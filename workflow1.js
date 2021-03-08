 $.ajax({
  type: "POST", // Type of Request
  url: "https://grayrhinos.github.io/workflow", // Url to Post to
  data: {
  "options": {
    "field-key1":{
        "display1":"value1",
        "display2":"value2"
    },
    "field-key2":{
        "display3":"value3",
        "display4":"value4"
    }
  }
}, // What you are send. Not applicable for GET Requests
  success: function(success){
  // Enter code after scucess of request
 },
  dataType: JSON // Type of Data you are sending. Would recommend JSON.
});
