// Generate two random numbers
let num1 = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
let num2 = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10

// Generate a random operator
let operators = ['+', '-', '*', '/'];
let operator = operators[Math.floor(Math.random() * operators.length)];

// Display the math problem and ask the user to solve it
let userAnswer = parseFloat(prompt(`Calculate the result of: ${num1} ${operator} ${num2}`));

// Calculate the correct answer based on the operator
let correctAnswer;

if (operator === '+') {
    correctAnswer = num1 + num2;
} else if (operator === '-') {
    correctAnswer = num1 - num2;
} else if (operator === '*') {
    correctAnswer = num1 * num2;
} else if (operator === '/') {
    // Avoid division by zero
    if (num2 === 0) {
        correctAnswer = "undefined"; // Set the answer to undefined if num2 is zero
    } else {
        correctAnswer = num1 / num2;
    }
}
if (userAnswer === correctAnswer) {
    alert("Correct!");
} else {
    alert("Try Again!");
}
