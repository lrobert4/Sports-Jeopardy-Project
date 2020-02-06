/* Objects that contain category questions */
let fifaQuestions = {
    tenPts: "Where was the first-ever World Cup held/?",
    thirtyPts: "Who is the Champion of FIFA World Cup 2006/?",
    fiftyPts: "Who is the Champion of FIFA World Cup 2010 South Africa/?",
    oneHundredPts: "What was the score between Brazil and Italy in the 1970 Final/?"
}

let cfbQuestions = {
    tenPts: "Which of these teams is not in the SEC/?",
    thirtyPts: "Which bowl game is played in Tampa, Florida (as of 2001)/?",
    fiftyPts: "What two schools played in the first ever college football game in 1869/?",
    oneHundredPts: "Which of these 4 major colleges did NOT put a QB into the NFL in the 1990s/?"
}

let nflQuestions = {
    tenPts: "Which city are the 'Broncos' from/?",
    thirtyPts: "This franchise played in Cleveland, Los Angeles, and St. Louis. Which team is this/?",
    fiftyPts: "Which of the following is NOT an NFL team name/?",
    oneHundredPts: "The Miami Dolphins began their franchise in 1966 in the AFL. They joined the NFL in 1970 under the helm of which head coach/?"
}

let nbaQuestions = {
    tenPts: "Everyone knows about Dr. J, but do you know his real name/?",
    thirtyPts: "What was the original name of the NBA/?",
    fiftyPts: "What is Wilt Chamberlain's record for most points in a game/?",
    oneHundredPts: "What was the original name of the NBA/?"
}

let mlbQuestions = {
    tenPts: "In the 2000s decade, which team other than the Yankees won two World Series/?",
    thirtyPts: "Which American League team represented their league in the 2014 World Series/?",
    fiftyPts: "Which team never had a winning record in a season during the 2000s decade/?",
    oneHundredPts: "Who was the first player to hit 50 home runs and 50 doubles in a season/?"
}

let olympicsQuestions = {
    tenPts: "Who won the Olympics 100m race in London 2012/?",
    thirtyPts: "Where was the summer olympics hosted in 1996/?",
    fiftyPts: "Which athlete has won the most Olympic medals/?",
    oneHundredPts: "Which of these countries has not hosted the summer Olympics/?"
}

/* Objects that contain category answers */

let fifaAnswers = {
    tenPtsAnswer: ["Argentina", "Brazil", "Uruguay", "London"],
    thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"]
}

let cfbAnswers = {
    tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"]
}

let nflAnswers = {
    tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"]
}

let nbaAnswers = {
    tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"]
}

let mlbAnswers = {
    tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"]
}

let olympicsAnswers = {
    tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
    oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"]
}

/* Modal Functionality */


const modalScreen = document.getElementById('myModal');

// Creates an array of elements that have the class .modal-btn
const btns = document.querySelectorAll('.modal-btn');

const submitBtn = document.querySelector('.submission');

// Storing all input element values in captureAnswer variable
let captureAnswer = document.querySelectorAll('.answers').value;

// For each statement: it loops through the btns array of elements 
// and adds an event listener to each one. 
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        modalScreen.style.display = "block";
    })
})

    submitBtn.addEventListener('click', () => {
        modalScreen.style.display = "none";
    })


function validateSub() {
    console.log('Your answer is submitted.');

}











