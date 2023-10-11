let firstName = "John"
// A basic ternary
console.log((firstName)) ? // if first name is truthy
firstName : // console log first name
 "Who are you"  // Otherwise ask "Who are you?"


// Using a template literal
console.log(`Hello${
    (firstName) ?    // if first name is truthy
    ", " + firstName :  // add  their name
    ""  // otherwise, don't add anything
}`)


function showData(data){
    console.log((data) ? // if we have data
    data : // console log the data
    "Loading..." // otherwise colsole log "Loading"
    )
}


let ourData = undefined; // our page loads
showData(ourData)

ourData = [ "Apples", "Oranges" ] // our page finishes loading
showData(ourData)
    


