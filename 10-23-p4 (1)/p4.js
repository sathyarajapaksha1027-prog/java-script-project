const now = new Date();
const hour = now.getHours();
let greeting;

if (8 < hour && hour < 18) {
    greeting = 'こんにちは';
    document.body.style.backgroundColor = 'lightblue';
} else {
    greeting = 'こんばんは';
    document.body.style.backgroundColor = 'lightgray';
}
document.querySelector('.box1').textContent = greeting;