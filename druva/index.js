/*const animals = ['lions','tigers','tiger']
{for (let i=0; i<animals.length; i++)
console.log(i,animals[1])
}*/


 
/*for (let i= 0; i<=10 ; i++){
    console.log(`1 is :$ {i}`);
    for (let j=1; j<4;j++ ){
        console.log(` j is : ${j} `)
    }
}*/

/*const seatingChart =[
    ['ram', 'lakshman','bharat' ],
    ['arjuna','nakula','sahadeva'],
    ['sita', 'ahalya','droupadi']
]
for (let i= 0; i<seatingChart.length;i++){
    /*console.log(seatingChart[1])
}*/

/*const row = seatingChart [i];
console.log (`row #${ i+1}`)
for (let j=0; j<row.length;j++){
    console.log(row [j])

}
}*/

/*while loop*/

/*let count =0;
while (count<10){
    count++;
    console.log(count)
}*/

/*const secret = "Druva";

let guess = prompt ("enter the secret code ");
while (guess !== secret){
    guess =prompt ("enter the secret code ");

}
console.log ("congraaaaaats")*/

/*let input =prompt ("hey,say something")
while (true){
    input = prompt(input);
    if (input.toLowerCase()==="stopcopying") break;

}
console.log("okkkkkkk")*/

/* Gaming*/

/*let maximum = parseInt(prompt("enther the max no"));
while (!maximum){
    maximum = parseInt(prompt("enter a valid no"));

}
const target =Math.floor(Math.random()*maximum)+1;
let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== target){

    if (guess==='q')break;
    attempts++;
    if (guess>target){
        guess= prompt ("tooo high");
     }
     else{
         guess= prompt("toolow");    
     }
    }
    if (guess==='q'){
        console.log("ok, you quit")
    } else {
        console.log("conngraats")
        console.log("you win ")
    }*/


    /*for of loop*/ 

    for(let char of "hello world"){
        console.log(char)
    }
