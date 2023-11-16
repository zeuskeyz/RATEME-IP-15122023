const ratings = document.querySelectorAll('.rating');
const agentScore = document.getElementById('agentScore');

let respondents = 0;
let promoters = 0;
let passives = 0;
let detractors = 0;
const targetNPS = 92

ratings.forEach(rating => {
    //adds an event listener to each button
    rating.addEventListener('click', event => {
        respondents++;
        let score = parseInt(event.target.innerText);
        score > 7 ? promoters++ : score <= 5 ? detractors++ : passives++;
    });
});

agentScore.addEventListener('click', () => {
    let NPS = (promoters - detractors) / respondents * 100;
    NPS < targetNPS ? agentScore.className += 'btn-danger' : NPS > targetNPS ? agentScore.className += 'btn-success' : agentScore.className += 'btn-warning'; 
    return agentScore.innerText = (`Your NPS : ${promoters}%`);
})


