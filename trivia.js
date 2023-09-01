//Step1:
//Get Dom elements
// - Select the question, answer, and feedback elements by their IDs
// Call the first variable questionDiv and select the DOM element containing the #question id.
// Call the second variable answerDiv and select the DOM element containing the #answer id.
// Call the third variable feedbackDiv and select the DOM element containing the #feedback id.
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
const player1ScoreDisplay = document.getElementById('player1-score');
const player2ScoreDisplay = document.getElementById('player2-score');

//Ininitialze current question variable
// - Create a fourth variable using let and call it currentQuestion
// - Give it an initial value of null. This variable will store the question that is returned from the Promise
let currentQuestion = null;
let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
 
//Step2:
//Function to display a new question
function getTriviaQuestion() {  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         const index = Math.floor(Math.random() * questions.length);// get a random index
         const question = questions[index]; //  get the question at that index
         if (index > questions.length) { // if the index is greater than the number of questions
            reject('An error while fetching the trivia question');
         } else {
            resolve(question);// resolve the promise 
         }   //code to fetch random trivia will go here)
        }, 1000); // wait 1 second before returning the question 
    });     
}

// clear previous feedback


// Get a random question from your JSON data (questions)


// Display the question
//clear the prvious answer
function displayQuestion (triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question // give new content to the div
    answerDiv.value = ''; // reset the answer field
    feedbackDiv.textContent = ''; //reset the feedbackdive
}
function updatePlayerScores() {
    player1ScoreDisplay.textContent = `Player 1 Score: ${player1Score}`;
    player2ScoreDisplay.textContent = `Player 2 Score: ${player2Score}`;
}
function incrementScore() {
    if (currentPlayer === 1) {
        player1Score++;
    } else if (currentPlayer === 2) {
        player2Score++;
    }
    updatePlayerScores();
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}



// Event listener for the "New Question" button
document.querySelector('#questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question)=> { //get random question
        currentQuestion = question; //store the question in the currentQuestion variable
        displayQuestion(question); //pass the 

    })
    .catch((error) => { //catch any errors
        console.error(error); //log the error
    })
})

// Event listener for he "Submit Answer" button

document.querySelector('#answerBtn').addEventListener('click', () => {
    //let feedbackMessage; //temporary variable to store the feedback message
    const userAnswer = answerDiv.value.trim().toLowerCase(); //prints both answers to the log to help with debugging
    console.log(userAnswer, currentQuestion.answer);
    if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
        incrementScore(); // Call the function to increment the score   
        feedbackDiv.style.color = "green"; // update the font color of the feedbackDiv object
        feedbackMessage = 'You got it! :)';
    } else {
        feedbackDiv.style.color = "red";
        feedbackMessage = `Sorry, wrong answer. The correct answer is ${currentQuestion.answer}.`;// update the message variable
    }
    //feedbackDiv.textContent = feedbackMessage; // update the content of the feedbackDiv object
    switchPlayer();
});


updatePlayerScores();

// Get the user's answer


// Check if the the user's answer is correct
