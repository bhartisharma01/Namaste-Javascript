setTimeout(function () {
  console.log("settimeout");
}, 1000);
function x(y) {
  y();
  console.log("x");
}
x(function y() {
  console.log("y");
});


