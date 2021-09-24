// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(collection, string){
  let chosen = []
  for (const driver of collection){
    if(driver.toLowerCase() === string.toLowerCase())
   chosen.push(driver)
    
   } 
    return chosen;
  }


  function fuzzyMatch(collection, string){
    let chosenD = []
    for(const driver of collection){
      if(driver.startsWith(string))
      chosenD.push(driver)
    }
    return chosenD
  }


  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  //findMatching(drivers, 'Bobby');

  function matchName(collection, string){
    for (const driver of collection){
      if (driver.name === string){
        console.log(driver);

      }
    }
}

