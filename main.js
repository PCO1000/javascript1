
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogString, dogNames){
    //Your code goes here
    for (let mdog of dogNames){

        let finalResult = dogString.toLowerCase().includes(mdog.toLowerCase());
        if (finalResult === true){
            console.log`Matched ${mdog}`
        }
        else{
            console.log("No Match")
        }
    
    }

}

console.log(findWords(dog_string, dog_names))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
    for(let index=0; index<arr.length; index++){ 
        if(index %2 === 0){
        arr.splice(index,1,"even index");
        }
    }
    return console.log(arr);
}
replaceEvens(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]