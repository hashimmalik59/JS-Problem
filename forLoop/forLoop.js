// JS for loop problems

// Practice these programs
// 1. Generate and display 10 random integers between 1 and 100 using a for loop.
for (let i = 1; i <= 10; i++) { // step 2
    let randomNumber = Math.floor(Math.random() * 100 + 1) // step 1 and 3
    console.log(`i: ${i} and Random Number: ${randomNumber}`);
}

// 2. Simulate rolling a 6 - sided dice 20 times and print the result of each roll.
for (let i = 1; i <= 20; i++) { // Step 2
    let rollingDice = Math.floor(Math.random() * 6 + 1); // Step 1
    console.log(rollingDice);
}

// 3. Create a program that generates 10 random even numbers between 2 and 50.
for (let i = 0; i < 10; i++) {
    let randomEvenNumber = Math.floor(Math.random() * 50 + 1); // Step 1
    if (randomEvenNumber % 2 === 0) {
        console.log(randomEvenNumber);
    } else {
        i--;
    }
}

// 4. Write a program that generates 5 random numbers between 1 and 20, adds them together, and displays the total sum.
let sum = 0;
for (let i = 0; i < 5; i++) { // Step 2
    let newRandomNumbers = Math.floor(Math.random() * 20 + 1); // Step 1
    sum += newRandomNumbers;
}
console.log(`Sum of 5 random numbers: ${sum}`);

// 5. Simulate a number guessing game where the computer picks a random number from 1 to 10, and the loop tries each number until it finds the correct one.
let randomNumberForGame = Math.floor(Math.random() * 10 + 1); // Step 1
for (let i = 0; i < 3; i++) {
    if (randomNumberForGame === i) {
        console.log(`Number mill gaya ${randomNumberForGame} === ${i}`);
    } else {
        console.log(`Number nahi mila`);
    }
}