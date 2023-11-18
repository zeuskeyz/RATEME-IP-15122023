const emojis = document.querySelectorAll('.emojis');
const agentScore = document.getElementById('agentScore');

let respondents = 0;
let promoters = 0;
let passives = 0;
let detractors = 0;
const target= 90

emojis.forEach(emoji => {
    //adds an event listener to each card
    emoji.addEventListener('click', event => {
        event.stopPropagation()
        respondents++;
        let service = event.target.id;
        service === 'excellent' ? promoters++ : service === 'poor' ? detractors++ : passives++
    });
}, {capture:true});

agentScore.addEventListener('click', (event) => {
    event.stopPropagation()
    let nps = 100*(promoters - detractors)/respondents
    nps < target && nps > 0 ? agentScore.className += ' btn-danger' : nps > target ? agentScore.className += ' btn-success' : agentScore.className += ' btn-warning'; 
    return agentScore.innerText = (`Your NPS : ${nps.toFixed(2)}%`);
}, {capture:true})


