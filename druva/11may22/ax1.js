// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("resolved", res);
//         return res.json();

//     })
//     .then((data) => {
//         console.log("data");
//     })
//     .catch ((e) => {
//     console.log("error.e");
// });

// const getStart = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("error", e);
//     }
// };

// getStart(5);
// getStart(10);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async ()=>{
const jokeText = await getDadJoke ();
const newLI = document.createElement ('LI');
newLI.append(jokeText);
jokes.append(newLI)

}

const getDadJoke = async () => {
try{ const config = { headers: { Accept: 'application/json' } }
const res = await axios.get('https://icanhazdadjoke.com/', config)
return res.data.joke

}
catch{
    console.log("nojokes available")
}
} 


button.addEventListener('click',addNewJoke)


//     console.log(res.data.joke)
//     const newLI = document.createElement('LI');
//     newLI.append(res.data.joke);
//     jokes.append(newLI)

// }
// // getDadJoke()
// // getDadJoke()
