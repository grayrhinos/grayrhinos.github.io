const URL_BASE = 'https://us-central1-bigquerygame-262603.cloudfunctions.net/DocRepo/';
const HANDSET_URL = URL_BASE + 'handsetdocs';

let docs;

fetch(HANDSET_URL).then(function(response) {
  return response.json();
}).then(function(responseJson) {
  docs = responseJson;
  const handsetNames = [...new Set(docs.map(doc => doc.handset))];
  let ul = document.querySelector('#handset_list');
  handsetNames.forEach(handsetName => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute('href', '#');
    a.onclick = () => { populateDocList(handsetName) };
    a.appendChild(document.createTextNode(handsetName));
    li.appendChild(a);
    ul.appendChild(li);
  })
});

function populateDocList(handsetName) {
  let ul = document.querySelector('#doc_list');
  ul.innerHTML = '';
  docs.forEach(doc => {
    if (doc.handset == handsetName) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute('href', doc.url);
      a.appendChild(document.createTextNode(doc.name));
      li.appendChild(a);
      ul.appendChild(li);
    }
  })
}
