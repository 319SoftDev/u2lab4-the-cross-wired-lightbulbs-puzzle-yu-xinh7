// YOUR CODE HERE
console.log("Script Running.");

// #1
const switch1 = document.querySelector("#switch1")

const change38 = () => {
    const light3 = document.querySelector("#lightbulb3");
    const light8 = document.querySelector("#lightbulb8");
    light3.classList.toggle("active");
    light8.classList.toggle("active");
}

switch1.addEventListener('change', change38);


// Mild 
// Switch 2
const change17 = () => {
    const light1 = document.querySelector("#lightbulb1");
    const light7 = document.querySelector("#lightbulb7");
    light1.classList.toggle("active");
    light7.classList.toggle("active");
}

switch2.addEventListener('change', change17);

// Switch 3
const change468 = () => {
    const light4 = document.querySelector("#lightbulb4");
    const light6 = document.querySelector("#lightbulb6");
    const light8 = document.querySelector("#lightbulb8");
    light4.classList.toggle("active");
    light6.classList.toggle("active");
    light8.classList.toggle("active");
}

switch3.addEventListener('change', change468);

// Switch 4
const change29 = () => {
    const light2 = document.querySelector("#lightbulb2");
    const light9 = document.querySelector("#lightbulb9");
    light2.classList.toggle("active");
    light9.classList.toggle("active");
}

switch4.addEventListener('change', change29);


// Switch 5
const change5 = () => {
    const light5 = document.querySelector("#lightbulb5");
    light5.classList.toggle("active");
}

switch5.addEventListener('change', change5);

// Switch 6
const change14 = () => {
    const light1 = document.querySelector("#lightbulb1");
    light1.classList.toggle("active");
    const light4 = document.querySelector("#lightbulb4");
    light4.classList.toggle("active");
}

switch6.addEventListener('change', change14);

// Switch 7
const change23 = () => {
    const light2 = document.querySelector("#lightbulb2");
    light2.classList.toggle("active");
    const light3 = document.querySelector("#lightbulb3");
    light3.classList.toggle("active");
}

switch7.addEventListener('change', change23);

// Switch 8
const change59 = () => {
    const light5 = document.querySelector("#lightbulb5");
    light5.classList.toggle("active");
    const light9 = document.querySelector("#lightbulb9");
    light9.classList.toggle("active");
}

switch8.addEventListener('change', change59);

// Switch 9
const change67 = () => {
    const light6 = document.querySelector("#lightbulb6");
    light6.classList.toggle("active");
    const light7 = document.querySelector("#lightbulb7");
    light7.classList.toggle("active");
}

switch8.addEventListener('change', change57);

// Medium 
const masterSwitch = () => {

}