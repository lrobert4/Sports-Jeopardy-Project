/* Creating an array of nested objects for category data */
let categoryData = [
    {
        id: "routeFifa10",
        questions: "Where was the first-ever World Cup held?",
        answer: "Brazil",
        isCorrect: true,
        isWrong: false,
        points: 10
            
    },
    {
        id: "routeFifa30",
        questions: "Who is the Champion of FIFA World Cup 2006?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeFifa50",
        questions: "Who is the Champion of FIFA World Cup 2010 South Africa?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeFifa100",
        questions: "What was the score between Brazil and Italy in the 1970 Final?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 100
            
    },
    {
        id: "routeCfb10",
        questions: "Which of these teams is not in the SEC?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeCfb30",
        questions: "Which bowl game is played in Tampa, Florida (as of 2001)?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 30
            
    },
    {
        id: "routeCfb50",
        questions: "What two schools played in the first ever college football game in 1869?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 50
            
    },
    {
        id: "routeCfb100",
        questions: "Which of these 4 major colleges did NOT put a QB into the NFL in the 1990s?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeNfl10",
        questions: "Which of these teams is not in the SEC?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 10
            
    },
    {
        id: "routeNfl30",
        questions: "This franchise played in Cleveland, Los Angeles, and St. Louis. Which team is this?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeNfl50",
        questions: "Which of the following is NOT an NFL team name?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeNfl100",
        questions: "The Miami Dolphins began their franchise in 1966 in the AFL. They joined the NFL in 1970 under the helm of which head coach?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeNba10",
        questions: "Everyone knows about Dr. J, but do you know his real name?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeNba30",
        questions: "What was the original name of the NBA?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 30
       
    },
    {
        id: "routeNba50",
        questions: "What is Wilt Chamberlain's record for most points in a game?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeNba100",
        questions: "What was the original name of the NBA?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeMlb10",
        questions: "In the 2000s decade, which team other than the Yankees won two World Series?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeMlb30",
        questions: "Which American League team represented their league in the 2014 World Series?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeMlb50",
        questions: "Which team never had a winning record in a season during the 2000s decade?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeMlb100",
        questions: "Who was the first player to hit 50 home runs and 50 doubles in a season?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeOlympics10",
        questions: "Who won the Olympics 100m race in London 2012?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeOlympics30",
        questions: "Where was the summer olympics hosted in 1996?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeOlympics50",
        questions: "Which athlete has won the most Olympic medals?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeOlympics100",
        questions: "Which of these countries has not hosted the summer Olympics?",
        answer: "right answer",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    }
    


] //End of categoryData array of nested objects

/*
const getRightAnswers = categoryData.map(answers) => {
    return questionAnswers.rightAnswer[0];
}

console.log(getRightAnswers);

*/


// Added click event to all elements with the modal-btn class. 
const categoryBox = document.querySelectorAll('.modal-btn');
//console.log(categoryBox);

categoryBox.forEach(box => {
    box.addEventListener('click', (e) => {
        
        for(i=0; i < categoryData.length; i++) {
            if (e.currentTarget.id === categoryData[i].id) {
                let newParagraph = categoryData[i].questions;
                document.querySelector('#myModal .question').textContent = newParagraph;
                
            }
        }
     

    })
})


//Create a new array with just the right answers
const rightAnswer = categoryData.map(function(newArr) {
    return newArr.answer;
});



/* Modal Functionality */

const modalScreen = document.getElementById('myModal');

// Creates an array of elements that have the class .modal-btn
const btns = document.querySelectorAll('.modal-btn');

const submitBtn = document.querySelector('.submission');

// For each statement: it loops through the btns array of elements 
// and adds an event listener to each one. 
btns.forEach(btn => {
    btn.addEventListener('click', () => {

        modalScreen.style.display = "block";
        
    })
})

submitBtn.addEventListener('click', () => {
    // Storing all input element values in captureAnswer variable
    const captureAnswer = document.querySelector('.answers').value;
    console.log(captureAnswer);


    rightAnswer.forEach((validate) => {
        if(captureAnswer == rightAnswer) {
            console.log('Your right!');
        } 
    })
    
    /*for(i=0; i < categoryData.length; i++) {
        let validateAnswer = categoryData[i].questionAnswers.rightAnswer[0].answer;
        //console.log(captureAnswer);
        console.log(validateAnswer);





        /*
        if(captureAnswer !== validateAnswer) {
            
            return "Wrong Answer!";
            

        } else {
            
              return   // console.log(categoryData[i].questionAnswers.rightAnswer[0].isWrong);
            
            

        }*/

    //}

    /*while(categoryData[i].questionAnswers.rightAnswer[0].answer < 25) {



    }*/
    

    modalScreen.style.display = "none";
})



// User must have atleast one answer selected to submit




/*function validateSub() {
    let x = document.querySelector('answers').value;
    console.log(x);
  if (x == "") {
    event.preventDefault();
    document.getElementsByClassName('errormessage').textContent = "You must select one answer!";

  }


} */
























