// Asynchronous JS
console.log("Starting");

setTimeout(() => {
    console.log("Run after 2 seconds");
},2000)

setTimeout(() => {
    console.log("Run after 0 seconds");
}, 0)

console.log("Ending");