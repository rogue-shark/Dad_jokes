const jokeCard = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', jokeGen)

jokeGen()

//Using Async/Await
async function jokeGen() {
    const config = {
        headers: {
            accept: 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    
    const data = await res.json()

    jokeCard.innerHTML = data.joke
}

//Using .then()
// function jokeGen(){
//     const config = {
//                 headers: {
//                     Accept: 'application/json'
//                 }
//             }
    
//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeCard.innerHTML = data.joke
//         })
// }