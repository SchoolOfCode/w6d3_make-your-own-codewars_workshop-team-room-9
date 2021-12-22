/* 
👉 Write your kata here!
*/ 
//You are trying to navigate through Covid during your holiday, but you need to be secretive so others wont judge you. Create a new langauge so your partner in-crime could understand you but not others.

//Given a string remove the first letter of every words and return the new string.

//e.g `Dont forget the PCR test` = `ont orget he CR est`

//👉 Write the function your CodeWarriors will start with below here:
export function secretLanguage(string){
    let newString = string.split(" ");
    console.log(newString)
    for(let i = 0; i<newString.length; i++){
let output = newString[i].split("").splice(1, newString[i].length-1).join("")
//let final = output.join(" ")
return output 

    }
}

secretLanguage("monday morning")
/*Step 1: Write Your kata

hello world
//write a function 
//function to split the string
['hello','world]
//iterate through the string and remove the first letter 
['hello'] =['ello']
splice(index,1)
//we join("") the string back together*/
