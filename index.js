// Code your solution here
function findMatching (drivers, str){
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.startsWith(query))
}

function matchName(drivers,name){
    return drivers.filter(driver =>driver.name === name)
}