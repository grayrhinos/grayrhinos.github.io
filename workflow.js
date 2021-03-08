fetch('https://grayrhinos.github.io/workflow')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)
});
