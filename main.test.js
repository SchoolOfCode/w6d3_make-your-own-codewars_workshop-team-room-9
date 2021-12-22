import { secretLanguage } from "./main.js"

//👉 Write your tests below here:

describe(`secret sentence`, () =>{
test('checking your new sentence', ()=>{
    //arrange
        const sentence ='Hello there';
        const expected ='ello here';
    //act
        const actual = secretLanguage(sentence)
    //assert
        expect(actual).toBe(expected)
})
})

describe(`secret sentence`, () =>{
test('checking your new sentence', ()=>{
    //arrange
        const sentence ='You need to isolate';
        const expected ='ou eed o solate';
    //act
        const actual = secretLanguage(sentence)
    //assert
        expect(actual).toBe(expected)
})
})

//test(``)