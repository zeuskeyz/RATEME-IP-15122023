const ratings = document.querySelectorAll('.rating')

let ratingsArray = []
let totalRespondents = 0
let promoters = 0
let passives = 0
let detractors = 0

ratings.forEach(rating => {
    //adds an event listener to each button
    rating.addEventListener('click', event => {
        totalRespondents++;
        ratingsArray.push(event.target.innerText);
        let score = parseInt(event.target.innerText);
        score > 7 ? promoters++ : score <= 5 ? detractors++ : passives++;
    })
})



