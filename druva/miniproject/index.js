const bookData = [];

let name1 = []
let email1 = []
let number1 = []

const hname = document.querySelector(".hname")
let hemail = document.querySelector(".hemail")
let hnumber = document.querySelector(".hnumber")
console.log(hname)

let show = document.querySelector(".appt")


function getAppointmentData(e ){
e.preventDefault()
const name = document.getElementById("name")
const email = document.getElementById("email")
const number = document.getElementById("number")

name1.push(name.value)
email1.push(email.value)
number1.push(number.value)

console.log(name1)
console.log(email1)
console.log(number1)






const data = { name: name.value, email: email.value, number: number.value

}
bookData.push(data)
// console.log(name.value, email.value,number.value);

console.log(bookData)
}



let temp = document.querySelector(".temp")
let submit = document.querySelector(".submit")


let showAp= document.querySelector (".showAppt")
showAp.addEventListener("click",function(){
    hname.innerText = name1[name1.length-1]
    hemail.innerText = email1[email1.length-1]
    hnumber.innerText = number1[number1.length-1]
    console.log(hname.innerText)
    console.log(hemail.innerText)
    console.log(hnumber.innerText)
    show.style.display="flex";
    console.log(show)
})


