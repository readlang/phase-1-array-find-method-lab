
const record = [
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "L"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "L"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
]



function superbowlWin(arr) {
    let newVal =  arr.find(callback)
    console.log(newVal)
    if (newVal === undefined) {
        return(undefined)
    }
    return (newVal.year)  
    
}

function callback(element, index, array) {
    return (element.result === "W") 
}


// console.log(
// superbowlWin(record)
// )