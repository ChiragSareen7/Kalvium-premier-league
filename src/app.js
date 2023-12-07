//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let details = [managerName, managerAge, currentTeam, trophiesWon];
  return details;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  else {
    var formationObject = {
      defender: formation[0], midfield: formation[1], forward: formation[2]
    }
  }
  return formationObject;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  return players.filter(player => player.debut == year);
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  return players.filter(player => player.position == position);
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(award) {
  let ans = []
  players.forEach((player) => {
    let awardArray = player.awards
    awardArray.forEach((awardRecieved) => {
      if (awardRecieved.name == award) {
        ans.push(player)
      }
    })
  })
  return ans
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let show = [];
  players.filter((player) => {
    var awardArray = player.awards;
    let count = 0;

    awardArray.filter((awardRecieved) => {
      if (awardRecieved.name == awardName) {
        count++;
      }
    });
    if (count == noOfTimes) {
      show.push(player);
    }
  });
  return show;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let show = [];
  players.forEach((player) => {
    let awardArray = player.awards;
    awardArray.forEach((awardRecieved) => {
      if (awardRecieved.name == awardName && player.country == country) {
        show.push(player);
      }
    });
  });
  return show;
}

// const result = filterByAwardxCountry("FIFA FIFPro World XI", "Brazil");
// console.log(result);


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let show = [];
  players.forEach((player) => {
    if (player.awards.length >= noOfAwards && player.team == team && player.age < age) {
      show.push(player);
    }
  });
  return show;
}

// const hope = filterByNoOfAwardsxTeamxAge(2, "Paris St-Germain", 30);
// console.log(hope);

//Progression 9 - Sort players in descending order of their age

function sortByAge
  () {
  return players.sort((x, y) => y.age - x.age);
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team) {
  let teamPlayers = players.filter((player) => player.team === team);
  if (teamPlayers.length === 0) return [];
  return teamPlayers.sort((x, y) => y.awards.length - x.awards.length);
}



//Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var byAwards = filterByAwardxTimes(awardName, noOfTimes);
  var byCountry = byAwards.filter((player) => {
    return player.country === country;
  });
  byCountry.sort((x, y) => x.name.localeCompare(y.name));

  return byCountry;
}

//Challenge 2 - Sort players that are older than ___ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age) {
  
  var storage = players.filter((player) => player.age >= age);


  return storage;
}