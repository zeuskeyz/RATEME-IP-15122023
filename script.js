const ratings = document.querySelectorAll('.rating');
const agentName = document.getElementById('agentName');

let respondents = 0;
let promoters = 0;
let passives = 0;
let detractors = 0;

ratings.forEach(rating => {
    //adds an event listener to each button
    rating.addEventListener('click', event => {
        respondents++;
        let score = parseInt(event.target.innerText);
        score > 7 ? promoters++ : score <= 5 ? detractors++ : passives++;
    });
});

agentName.addEventListener('click', () => {
    let NPS = (promoters - detractors) / respondents * 100;
    return alert(`PROMOTERS : ${promoters}\nDETRACTORS : ${detractors}\nNPS SCORE : ${NPS}%origin master`);
})


