const emojis = document.querySelectorAll('.emojis');
const agentName = document.getElementById('agentName');

let respondents = 0;
let promoters = 0;
let passives = 0;
let detractors = 0;
const targetNPS = 90

emojis.forEach(emoji => {
    //adds an event listener to each card
    emoji.addEventListener('click', event => {
        event.stopPropagation()
        respondents++;
        let service = event.target.id;
        service === 'excellent' ? promoters++ : service === 'poor' ? detractors++ : passives++
    });
});

agentName.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log(`promoters: ${promoters}`)
    console.log(`detractors: ${detractors}`)
    console.log(`passives: ${passives}`)
    console.log(`respondents: ${respondents}`)
    let nps = 100*(promoters - detractors)/respondents
    nps < targetNPS ? agentName.className += ' btn-danger' : nps > targetNPS ? agentName.className += ' btn-success' : agentName.className += ' btn-warning'; 
    return agentName.innerText = (`Your NPS : ${nps}%`);
}, {capture:true})


