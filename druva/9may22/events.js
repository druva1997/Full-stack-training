const btn = document.querySelector ('#v2');
btn.onclick =function(){
   console.log ("you clicked me") 
   console.log("I hope it worked")
}
function scream (){
    console.log("ahhahaa");
    console.log ("stop touching me")
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick= ()=> {
    alert ('youu touched me')

}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function (){
    alert ("clicked meeee");
})

function twist (){
    console.log("twist")
}
function shout (){
    console.log("shout")
}
const tasButton =document.querySelector('#tas');
//tasButton.onclick = shout;


tasButton.addEventListener('click',twist, {once:true} )
tasButton.addEventListener('click',shout)
