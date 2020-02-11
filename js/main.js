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
        answer: "Italy",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeFifa50",
        questions: "Who is the Champion of FIFA World Cup 2010 South Africa?",
        answer: "Spain",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeFifa100",
        questions: "What was the score between Brazil and Italy in the 1970 Final?",
        answer: "4-3",
        isCorrect: true,
        isWrong: false,
        points: 100
            
    },
    {
        id: "routeCfb10",
        questions: "Which school is termed as the Mecca of college football in South Bend?",
        answer: "Notre Dame",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeCfb30",
        questions: "Which bowl game is played in Tampa, Florida (as of 2001)?",
        answer: "Outback Bowl",
        isCorrect: true,
        isWrong: false,
        points: 30
            
    },
    {
        id: "routeCfb50",
        questions: "What two schools played in the first ever college football game in 1869?",
        answer: "Rutgers and Princeton",
        isCorrect: true,
        isWrong: false,
        points: 50
            
    },
    {
        id: "routeCfb100",
        questions: "Who won a Heisman Trophy playing for the University of Pittsburgh?",
        answer: "Tony Dorsett",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeNfl10",
        questions: "Tommie Fraizer won a national championship with what college?",
        answer: "Nebraska",
        isCorrect: true,
        isWrong: false,
        points: 10
            
    },
    {
        id: "routeNfl30",
        questions: "This franchise played in Cleveland, Los Angeles, and St. Louis. Which team is this?",
        answer: "Rams",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeNfl50",
        questions: "The 2008 Indianapolis Colts franchise joined the NFL in 1953 under which name?",
        answer: "Baltimore Colts",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeNfl100",
        questions: "Which year saw the Cincinnati Bengals become part of the NFL?",
        answer: "1968",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeNba10",
        questions: "Which NBA team played at Amway Arena 1989-2010?",
        answer: "Orlando Magic",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeNba30",
        questions: "The Atlanta Hawks franchise joined the NBA in 1950. What was their franchise name in 1950?",
        answer: "Tri-Cities Blackhawks",
        isCorrect: true,
        isWrong: false,
        points: 30
       
    },
    {
        id: "routeNba50",
        questions: "What is Wilt Chamberlain's record for most points in a game?",
        answer: "100",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeNba100",
        questions: "What was the original name of the NBA?",
        answer: "Basketball Association of America",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeMlb10",
        questions: "In the 2010s decade who was the first player to win the league MVP and Cy Young Award in the same season in the National League?",
        answer: "Clayton Kershaw",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeMlb30",
        questions: "Which American League team represented their league in the 2014 World Series?",
        answer: "Kansas City Royals",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeMlb50",
        questions: "Which team never had a winning record in a season during the 2000s decade?",
        answer: "Baltimore Orioles",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeMlb100",
        questions: "Who was the first player to hit 50 home runs and 50 doubles in a season?",
        answer: "Albert Belle",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "routeOlympics10",
        questions: "Who won the Olympics 100m race in London 2012?",
        answer: "Usain Bolt",
        isCorrect: true,
        isWrong: false,
        points: 10
        
    },
    {
        id: "routeOlympics30",
        questions: "Where was the summer olympics hosted in 1996?",
        answer: "Atlanta GA",
        isCorrect: true,
        isWrong: false,
        points: 30
        
    },
    {
        id: "routeOlympics50",
        questions: "Which athlete has won the most Olympic medals?",
        answer: "Michael Phelps",
        isCorrect: true,
        isWrong: false,
        points: 50
        
    },
    {
        id: "routeOlympics100",
        questions: "Carl Lewis won Gold in which event at four consecutive Olympics?",
        answer: "Long Jump",
        isCorrect: true,
        isWrong: false,
        points: 100
        
    },
    {
        id: "final-question",
        questions: "In 1978 US Masters, who was leading Gary Player by seven strokes, only to lose by a single stroke?",
        answer: "Hubert Green",
        isCorrect: true,
        isWrong: false,
        points: 500
        
    }
    


] //End of categoryData array of nested objects



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
    return newArr.answer ;
    
});
//console.log(rightAnswer);



let beginPoints = 0;
let losingBenchmark = -150;
//Access the points in array of objects
const arrayOfPts = [10,30,50,100,500];
const isWrong = false;

/*
//Selected all child descendents of #row-one and set equal to 10 pts
const rowOneDescendants = document.querySelectorAll('#row-one > div');
console.log(rowOneDescendants);
const rowOnePts = arrayOfPts[0];
console.log(rowOnePts);


//Selected all child descendents of #row-two and set equal to 30 pts
const rowTwoDescendants = document.querySelectorAll('#row-two > div');
console.log(rowTwoDescendants);
const rowTwoPts = arrayOfPts[1];
console.log(rowTwoPts);


//Selected all child descendents of #row-three and set equal to 50 pts
const rowThreeDescendants = document.querySelectorAll('#row-three > div');
console.log(rowThreeDescendants);
const rowThreePts = arrayOfPts[2];
console.log(rowThreePts);


//Selected all child descendents of #row-four and set equal to 100 pts
const rowFourDescendants = document.querySelectorAll('#row-four > div');
console.log(rowFourDescendants);
const rowFourPts = arrayOfPts[3];
console.log(rowFourPts);


//Selected all child descendents of #row-five and set equal to 500 pts
const rowFiveDescendants = document.querySelectorAll('#row-five > div');
console.log(rowFiveDescendants);
const rowFivePts = arrayOfPts[4];
console.log(rowFivePts);

*/


// Variable that stores the content of Player Points
const getPoints = document.querySelector('#pointsTab .score');





/* Modal Functionality */

const modalScreen = document.getElementById('myModal');

// Creates an array of elements that have the class .modal-btn
const btns = document.querySelectorAll('.modal-btn');

const submitBtn = document.querySelector('.submission');


// Variable that acess text input
const accessInput = document.querySelector('.answers');


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
    
    //console.log(captureAnswer);
    
    categoryData.forEach((pt) => {
        //console.log(pt.answer)
        if(captureAnswer == "") {
            document.querySelector('.answers').style.borderColor = "red";
            document.querySelector('.errormessage').textContent = "You entered the wrong answer!";
            
        } else if(captureAnswer == pt.answer) {
            
            //console.log('Your right!');
            beginPoints += pt.points;
            getPoints.textContent = beginPoints;
            
            modalScreen.style.display = "none";        
            
            
        } else if (beginPoints >= 600) {

            alert("HOORAY! You have officially won the game!");
            

        }


    
    document.querySelector('.answers').value = "";
    document.querySelector('.errormessage').textContent = "";
    document.querySelector('.answers').style.borderColor = "none";

    

    
})






}) // End of submitBtn EventListener






