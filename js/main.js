/* Creating an array of nested objects for category questions */
let categoryData = [
    {
        fifaData:
        {
            id: ["routeFifa10", "routeFifa30", "routeFifa50", "routeFifa100"],
            questions: "Where was the first-ever World Cup held?",
            allAnswers: [
                {
                    answerOne: "",
                    isCorrect: false
                },
                {
                    answerTwo: "",
                    isCorrect: false
                },
                {
                    answerThree: "",
                    isCorrect: true
                }

            ],
            points: 10,
            
            
        }
    },
    {
        cfbQuestions:
        {
            id: ["routeCfb10", "routeCfb30", "routeCfb50", "routeCfb100"],
            tenPts: "Which of these teams is not in the SEC/?",
            thirtyPts: "Which bowl game is played in Tampa, Florida (as of 2001)/?",
            fiftyPts: "What two schools played in the first ever college football game in 1869/?",
            oneHundredPts: "Which of these 4 major colleges did NOT put a QB into the NFL in the 1990s/?"
        }
    },
    {
        nflQuestions:
        {
            id: ["routeNfl10", "routeNfl30", "routeNfl50", "routeNfl100"],
            tenPts: "Which city are the 'Broncos' from/?",
            thirtyPts: "This franchise played in Cleveland, Los Angeles, and St. Louis. Which team is this/?",
            fiftyPts: "Which of the following is NOT an NFL team name/?",
            oneHundredPts: "The Miami Dolphins began their franchise in 1966 in the AFL. They joined the NFL in 1970 under the helm of which head coach/?"
        }
    },
    {
        nbaQuestions:
        {
            id: ["routeNba10", "routeNba30", "routeNba50", "routeNba100"],
            tenPts: "Everyone knows about Dr. J, but do you know his real name/?",
            thirtyPts: "What was the original name of the NBA/?",
            fiftyPts: "What is Wilt Chamberlain's record for most points in a game/?",
            oneHundredPts: "What was the original name of the NBA/?"
        }
    },
    {
        mlbQuestions:
        {
            id: ["routeMlb10", "routeMlb30", "routeMlb50", "routeMlb100"],
            tenPts: "In the 2000s decade, which team other than the Yankees won two World Series/?",
            thirtyPts: "Which American League team represented their league in the 2014 World Series/?",
            fiftyPts: "Which team never had a winning record in a season during the 2000s decade/?",
            oneHundredPts: "Who was the first player to hit 50 home runs and 50 doubles in a season/?"
        }
    },
    {
        olympicsQuestions:
        {
            id: ["routeOlympics10", "routeOlympics30", "routeOlympics50", "routeOlympics100"],
            tenPts: "Who won the Olympics 100m race in London 2012/?",
            thirtyPts: "Where was the summer olympics hosted in 1996/?",
            fiftyPts: "Which athlete has won the most Olympic medals/?",
            oneHundredPts: "Which of these countries has not hosted the summer Olympics/?"
        }

    }

] //End of categoryQuestions array of nested objects


/* thirtyPts: "Who is the Champion of FIFA World Cup 2006/?",
fiftyPts: "Who is the Champion of FIFA World Cup 2010 South Africa/?",
oneHundredPts: "What was the score between Brazil and Italy in the 1970 Final/?" */


/* Creating an array of nested objects for category answers */

/*
let categoryAnswers = [
    {
        fifaAnswers:
        {
            tenPtsAnswer: ["Argentina", "Brazil", "Uruguay", "London"],
            thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            isCorrect: ["RightAnswer", "RightAnswer", "RightAnswer", "RightAnswer" ]
        }
    },
    {
        cfbAnswers: 
        {
            tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            isCorrect: ["RightAnswer", "RightAnswer", "RightAnswer", "RightAnswer" ]
        }
    },
    {
        nflAnswers: 
        {
            tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            isCorrect: ["RightAnswer", "RightAnswer", "RightAnswer", "RightAnswer" ]
        }
    },
    {
        nbaAnswers: {
            tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            isCorrect: ["RightAnswer", "RightAnswer", "RightAnswer", "RightAnswer" ]
        }
    },
    {
        mlbAnswers: 
        {
            tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            isCorrect: ["RightAnswer", "RightAnswer", "RightAnswer", "RightAnswer" ]
        }        
    },
    {
        olympicsAnswers: 
        {
            tenPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            thirtyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            fiftyPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            oneHundredPtsAnswer: ["Answer1", "Answer2", "RightAnswer", "Answer3"],
            isCorrect: ["RightAnswer", "RightAnswer", "RightAnswer", "RightAnswer" ]
        }        
    }

] */ 

// End of array of objects for categoryAnswers


/* Routing data into question and answers */

/* Storing id array in variable for access purposes */

let routeFifaContent = categoryQuestions[0].fifaQuestions.id;
console.log(routeFifaContent);

let routeCfbContent = categoryQuestions[1].cfbQuestions.id;
console.log(routeCfbContent);

let routeNflContent = categoryQuestions[2].nflQuestions.id;
console.log(routeNflContent);

let routeNbaContent = categoryQuestions[3].nbaQuestions.id;
console.log(routeNbaContent);

let routeMlbContent = categoryQuestions[4].mlbQuestions.id;
console.log(routeMlbContent);

let routeOlympicsContent = categoryQuestions[5].olympicsQuestions.id;
console.log(routeOlympicsContent);


/*Storing right answer in variable for access purpose */

let accessFifaRightAnswer = categoryAnswers[0].fifaAnswers.isCorrect;
console.log(accessFifaRightAnswer);


/*






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


// User must have atleast one answer selected to submit
/*
function validateSub() {
    let x = document.forms['myForm']['catanswer'].value;
    console.log(document.forms['myForm']['catanswer'])
  if (x == "") {
    event.preventDefault();
    document.getElementsByClassName('errormessage').innerHTML = "You must select one answer!";

  }
  //console.log("work");

} */











