// .load async_callbacks2.js

function sleep(delay) {
  let start = new Date().getTime();
  while(new Date().getTime() < start + delay);
}

// function serverRequest(resource) {
//   sleep(5000);
//   let response = resource + " loaded!";
//   console.log("Response from server: " + response);
// }



function serverRequest(resource, cb) {
  setTimeout(() => cb(resource + ' loaded'), 5000);
}

serverRequest("Resource A", console.log);
console.log('doing other work')