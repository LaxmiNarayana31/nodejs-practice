// This module used when we work with different operating systems

const os = require("os");

// imp functions
console.log(os.arch()); // output: x64

console.log(os.type()); // output: Windows_NT

console.log(os.version()); // output: Windows 11 Home Single Language

console.log(os.totalmem()); // total ram available in your system in bytes

console.log(os.freemem()); // free ram available in your system in bytes

console.log(os.hostname()); // your system name

console.log(os.machine()); // output: x86_64

console.log(os.platform()); // output: win32

console.log(os.userInfo()); // return system information in a object
