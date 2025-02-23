/*
    Task:
    You are to convert the given two arrays (bookIdArr & bookTitle) into an object (booksObj) with four key value pairs:
    - NLB1 -> Lord of the Rings
    - NLB2 -> Programming for Dummies
    - NLB3 -> Introduction to Software Testing
    - NLB4 -> How to be a Software Developer

    Tips: 
    - Use a for loop and utilizes the index variable as a running number.
    - Be sure got use google!
*/

const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];
let booksObj = {}; 

function convert(keyArr, valueArr){
    let booksObj1 ={}
    for (let i = 0; i< bookIdArr.length; i++) {
        booksObj1[bookIdArr[i]] = bookTitle[i];
    }
    return booksObj1;
  }

function printByKey(key){
      console.log(booksObj[key]);
  }
  
booksObj = convert(bookIdArr, bookTitle);
printByKey("NLB2");

// Ignore the code below this line
module.exports = {
    convert
}