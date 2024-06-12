// //question1
// let fruits =["apple","banana","mango","orange","strawberry"]
// // for (let a=1; a<=5; a++)
// document.write("element at index 0 is " +fruits[0]+ "<br>")
// document.write("element at index 1 is "+fruits[1]+"<br>" )

// document.write("element at index 2 is"  +fruits[2] +"<br>" )

// document.write("element at index 3 is " +fruits[3] +"<br>" )
// document.write("element at index 3 is " +fruits[4] +"<br>" )

// //question2
// document.write("Counting:")
// for (let i=0; i<=15; i++){
//     document.write(i+ ""+",")
// }

// document.write( "<br> <br>" + " Reverse Counting:")
// for (let i=15; i>=0; i--){
//     document.write(i+ ""+",")
// }

// document.write( "<br> <br>" + " Even Counting:")
// for (let i=0; i<=20; i+=2){
//     document.write(i+ ""+",")
// }
// document.write( "<br> <br>" + " Odd Counting:")

// for (let i=1; i<=20; i+=2){
//     document.write(i+ ""+",")
// }
// document.write( "<br> <br>" + " Series Counting:")
// for (let i=2; i<=20; i+=2){
//     document.write(i+ "k"+",")
// }

let things=["cake","apple pie","cookie","chips","patties"];
let userInput=prompt("Welcome to ABC Bakery.what do you want to Sir/Ma'am")
let found = things.includes(userInput);
if (found){
    document.write(userInput + " is available in our Bakery.");

}
else{
    document.write("Sorry, "+ userInput+ " is not available in our Bakery")
}

