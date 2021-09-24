// Code your solution here


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



  //findMatching(drivers, 'Bobby');

  function matchName(collection, string){
    let chosen = []
    for (const driver of collection){
      if (driver.name === string){
        chosen.push(driver);
  }
      
    }
   return chosen;
  }

