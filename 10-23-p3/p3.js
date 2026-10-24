const now = new Date();
const hour = now.getHours();
let greeting;

if (8 < hour && hour < 18) {
    greeting = 'こんにちは';
} else {
    greeting = 'こんばんは';
}
document.querySelector('.box1').textContent = greeting;