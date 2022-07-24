//Score keeper (score1 to score2)
//maxScore:
const max = document.querySelector('select');

let score1 = 0;
let score2 = 0;
let maxScore = 0;
let isGameOver  = false;

max.addEventListener('change', () => {
    maxScore = max.value;
    reset();
    //alert(maxScore);
})


const sc1 = document.querySelector('#score1');
const sc2 = document.querySelector('#score2');

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const rst = document.querySelector('#rst');

const ch = document.querySelector('.winner');

const score = document.querySelector('#score');

btn1.addEventListener('click', (e) => {
    if(score1 < maxScore){
        if(score1 === maxScore-1)
        {
            //console.log('Player 1 wins');
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            ch.innerText = 'Player 1 WINS!';
            ch.classList.add('has-text-success');

        }
        score1++;
        sc1.innerText = score1;
    }
    
})

btn2.addEventListener('click', (e) => {
    if(score2 < maxScore){
        if(score2 === maxScore-1)
        {
            //console.log('Player 2 wins');
            p2.classList.add('has-text-success');
            p1.classList.add('has-text-danger');
            ch.innerText = 'Player 2 WINS!';
            ch.classList.add('has-text-info');
        }
        score2++;
        sc2.innerText = score2;
    }
    
})

rst.addEventListener('click', (e) => {
    //Reset count
    reset();
    
})

function reset()
{
    score1 = 0;
    score2 = 0;
    ch.innerText = "Ping Pong Score Keeper";
    sc1.innerText = score1;
    sc2.innerText = score2;
    p1.classList.remove('has-text-success');
    p1.classList.remove('has-text-danger');

    p2.classList.remove('has-text-success');
    p2.classList.remove('has-text-danger');

    ch.classList.remove('has-text-success');
    ch.classList.remove('has-text-info');
}
