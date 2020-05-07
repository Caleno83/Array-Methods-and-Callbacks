import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //function newInfo (array, time) {
    

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
//a: 

/* I tried the first example with this the filter way, but it only displayed all the info object of the final info
const teamGoals = fifaData.filter (function (info) {
  return info.Year === 2014 && info.Stage === "Final" 
   
})

console.log(teamGoals[0]["Home Team Name"])

*/ 
function newInfo (array, data) {
    let newArray = [];
    for ( let i = 0; i < array.length; i++) {
      if (array[i]["Stage"] === data && array[i]["Year"] === 2014)
      newArray.push (array[i]["Home Team Name"])
    }
    return newArray
  }
  
  console.log(newInfo(fifaData, "Final"))



  //b:

  /*
  

console.log(teamGoals[0]["Away Team Name"]) */
  function newInfo2 (array, data1) {
    let newArray2 = [];
    for ( let i = 0; i < array.length; i++) {
      if (array[i]["Stage"] === data1 && array[i]["Year"] === 2014)
      newArray2.push (array[i]["Away Team Name"])
    }
    return newArray2;
  }
  
  console.log(newInfo2(fifaData, "Final"))

  //c:
  /*
  
console.log(teamGoals[0]["Home Team Goals"]) */
  function newInfo3 (array, data2) {
    let newArray3 = [];
    for ( let i = 0; i < array.length; i++) {
      if (array[i]["Stage"] === data2 && array[i]["Year"] === 2014)
      newArray3.push (array[i]["Home Team Goals"])
    }
    return newArray3;
  }
  
  console.log(newInfo3(fifaData, "Final"))

  //d:
  /*
  

console.log(teamGoals[0]["Away Team Goals"]) */
  function newInfo4 (array, data3) {
    let newArray4 = [];
    for ( let i = 0; i < array.length; i++) {
      if (array[i]["Stage"] ===  data3 && array[i]["Year"] === 2014)
      newArray4.push (array[i]["Away Team Goals"])
    }
    return newArray4
  }
  
  console.log(newInfo4(fifaData, "Final"))
  
  //e:
  //console.log(teamGoals[0]["Win conditions"])
  
  

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let finalInfo = data.filter( function (info){
    
    return info.Stage === "Final"
    });
    
    return finalInfo;
    
    };
          
    //console.log(getFinals(fifaData));
    getFinals(fifaData);


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
  return callback(fifaData).map(data => data.Year)
}
console.log(getYears(getFinals));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb) {

    return  cb(fifaData).map(data => { if (data["Home Team Goals"] > data["Away Team Goals"]){
    return data["Home Team Name"];
  } 
  else {
    return data['Away Team Name'];
  }
    });
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cb1, cb2) {
  let years = cb2(getFinals);
  return cb1(getFinals).map((name, index) => `In ${years[index]}, ${name} won the world cup!`)

};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {


};

getCountryWins();

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const totalGoals = data.reduce((total, goals) => {
  return total += goals["Away Team Goals"]

}, 0);

};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
