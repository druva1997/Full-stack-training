const bookData = [];


function getAppointmentData(e ){
e.preventDefault()
const name = document.getElementById("name")
const email = document.getElementById("email")
const number = document.getElementById("number")

const data = { name: name.value, email: email.value, number: number.value

}
bookData.push(data)
// console.log(name.value, email.value,number.value);

console.log(bookData)
}
arrname = new Array();
arremail = new Array();
arrnumber = new Array();



