console.log(document.cookie)


document.cookie = "name=user";

let key = prompt("enter the key");
let value = prompt("enter the value");


// document.cookie = `${key}=${value}`
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`             // recommended as it also accepts special characters

console.log(document.cookie)


document.cookie = "ask=buddie; path=/; expires=" + new Date(2025, 0, 26).toUTCString()
console.log(document.cookie)