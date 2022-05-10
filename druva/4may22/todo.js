/*let input = ("what would youu like todo ?")
const todos = ['collect chiken','clean litter box'];

while (input!=='quit'&& input!== 'q')
{
    if (input==='list'){
        console.log ('*******')
        for (let i=0; i<todos.length;i++){
          console.log(`${i}:${todos[i]}`);

        }
        console.log ('*******')
    } else if (input ==='new'){
        const newTodo = prompt ('ok, what is the new');
      todos.push (newTodo);
      console.log(`${newTodo} added to the list`)
    }
    else if (input ==='delete')

    {
    const index= prompt('ok, enter an index to delet');
    parseInt(index);
    const deleted = todos.splice(index,1);
    console.log(`ok,deleted ${deleted [0]}`);
    }
    input= prompt("what would you like todo")
}
console.log('ok quit the app')
*/
/*function singSong(){
console.log("do");
console.log("re");
console.log("mi");
}*/

/*function greet(firstName,lastName){
  console.log(`hey there , ${firstName} ${lastName[0]}`)

}

function repeat(str,numTimes) {
  let result =' ';
  for (let i=0; i<numTimes;i++){
    result +=str;
  }
  console.log(result);
}*/

/*function add(x,y) {
  if (typeof x !== 'number' || typeof y !=='number'){
    return false ;
  }
  return x+y;
}*/


/*function makeMystery() {
  const rand = Math.random();
    if (rand >0.5){
      return function(){
        console.log ("congrats")
        console.log ("youwon")
      }
    }
    else{
      return function(){
        alert ("you have been infected")
        alert ("stop it")
                alert ("stop it")

      }
    }
  
}*/


/*const Math = {
  PI : 3.141,
  square (num){
    return num*num;

  },
  cube(num){
    return num**3; 
  }
}8*/
 
/*const cat = { 
  name: 'qwerty',
  color: 'blue',
  breed : 'food',
  meow(){
    console.log(`${this.name} says meow meoww`);

  }
}
const meow2 = cat.meow;*/

/*function yell(msg) {
  try{
    console.log (msg.toUpperCase().repeat (3));

  }catch(lppppeas){
    console.log ("please pass a string next")
  }
}*/


/*const number = [1,2,3,4,5,6,7,8,9,]
number.forEach (function (el){
  console.log (el)
})*/


/*const doubles =number.map (function (num){
  return num * 2;
} )*/


/*const add = (x,y) =>{
  return x+y;
}
const square = num => {
  return num*num;
}*/


/*const rollDie = ()=> (
   Math.floor (Math.random ()*6)+1
)
const add = (a,b) => a+b*/

/*const newMovies = movies.map(movie =>(
  `${movie.title}-${movie.score/10}`
))*/


/*setTimeout and setInterval */

/*console.log("hello...")
setTimeout (()=>{
  console.log ("...are u fine")
},3000)

console.log ("good bye")*/


/*const id = setInterval (() =>{
console.log (Math.random())
},2000);*/


/* javascript features*/

function rollDies(numSides = 6) {
  return Math.floor (MAth.random()* numSides)+1
}
function greet(msg= Heyyyy, person) {
  console.log(`$ {msg},${person}`)
  
}