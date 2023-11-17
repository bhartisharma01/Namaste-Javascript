// console.log("start");
// setTimeout(function cb() {
//   console.log("settimeout callback function");
// }, 5000);
// console.log("end");

//event loop
//callback queue

console.log("fetch start");
setTimeout(function fcb() {
  console.log("fetch callback");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("fetch cbF function");
});

console.log("fetch end");
