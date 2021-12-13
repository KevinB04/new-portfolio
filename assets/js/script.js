import Vue from "vue";
import App from "./App.vue";

const app = Vue.createApp({
    template: '<h1>Hello World</h1>'
})

app.mount('#app')

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");

alert("Welcome to my page!") // display the alert

var name=prompt("What is your name?"); // prompts the user for their name
alert("Welcome " + name + "!");

var num1 = prompt("Enter a number"); // prompts the user to enter a number
var num2 = prompt("Enter another number");
function add(num1, num2) {
    alert(num1+num2); // add num1 and num2
} 

if (num1 + num2 > 10){
    alert("That is a big number.")
} else {
    (num1 + num2 <= 10){
    alert("That is a small number.")
    }
}

var add = confirm("Would you like to add two numbers again?"); // ask the user if they want to add two more numbers
if (add) {
    console.log("Yes") // print yes
    function add(num1, num2) {
        alert(num1+num2);
        if (num1 + num2 > 10){
            alert("That is a big number.")
        } else {
            (num1 + num2 <= 10){
                alert("That is a small number.")
            }
        }
    }
} else {
    console.log("Thank you for using the program!") // close the program
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}