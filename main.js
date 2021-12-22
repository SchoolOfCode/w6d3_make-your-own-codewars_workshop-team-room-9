/* 
👉 Write your kata here!
*/ 
//You are trying to navigate through Covid during your holiday, but you need to be secretive so others wont judge you. Create a new langauge so your partner in-crime could understand you but not others.

//Given a string remove the first letter of every words and return the new string. If hte first position on the string is number or punctuation leave them be.

//e.g `Dont forget the PCR test` = `ont orget he CR est`

//👉 Write the function your CodeWarriors will start with below here:
export function secretLanguage(string){
    let newString = string.split(" ");
    // console.log(newString)


    const newStuff = newString.map((input)=>{
       
                if(/^[A-Za-z\s]*$/.test(input)){
                    return input.split("").splice(1, input.length-1).join("")
                }else{ return input }
            
    })

    return newStuff.join(" ")
    //for basic find without ignoring numbers and punctuation
    //     let result =[];
    //     for(let i = 0; i<newString.length; i++){
        
    //     if(the indivdual item is a letter than we remove the first letter else we keep it as it is)
    //     let output = newString[i].split("").splice(1, newString[i].length-1).join("")
    //     //let final = output.join(" ")
    //     result.push(output)
    //     }

    // return result.join(" ")
}

console.log(secretLanguage("monday morning 5'oclock !"));
/*Step 1: Write Your kata

hello world
//write a function 
//function to split the string
['hello','world]
//iterate through the string and remove the first letter 
['hello'] =['ello']
splice(index,1)
//we join("") the string back together*/
