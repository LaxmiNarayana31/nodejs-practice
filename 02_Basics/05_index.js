// Asynchronous Node js

let a = 10;
let b = 5;

setTimeout(() => {
  b = 20;
  console.log(a + b);
}, 2000); // it will execute after 2 seconds of running (2000miloiseconds -> 2Sec)

console.log(a + b); // it will executes first





// Handle Asynchronous data in node js
// To handle this we can use callbacks or promises or async await
let c = 10;
let d = 5;


let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});


waitingData.then((data) => {
  console.log(c + data);
});