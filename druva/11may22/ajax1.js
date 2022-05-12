// const req = new XMLHttpRequest ();

// req.onload = function (){
// console.log ("It loaded");
// const data = JSON.parse (this.responseText);
// };

// req.onerror = function (){
//     console.log ("error");
//     console.log (this);
// };

// req.open ("GET", "https://swapi.dev/api/");
// req.send ();


// fetch("https://swapi.dev/api/people/1")
//     .then((res) => {
//         console.log("resolved", res);
//         return res.json();
//     })

//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2");

//     })

//     .then((res) => {
//         console.log("Second request resolved");
//         return res.json();
//     })

//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("error", e);
//     });


const load = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);

        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("error", e);
    }
};
load ();
