//Score keeper (score1 to score2)
//maxScore:
const max = document.querySelector('select');

let score1 = 0;
let score2 = 0;
let maxScore = 0;
let isGameOver  = false;

max.addEventListener('change', () => {
    maxScore = max.value;
    //alert(maxScore);
})


const sc1 = document.querySelector('#score1');
const sc2 = document.querySelector('#score2');


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const rst = document.querySelector('#rst');

const score = document.querySelector('#score');

btn1.addEventListener('click', (e) => {
    if(score1 < maxScore){
        score1++;
        //console.log(score1);
        sc1.innerText = score1;
    }
    isGameOver = true;
})

btn2.addEventListener('click', (e) => {
    if(score2 < maxScore){
        score2++;
        console.log(score2);
        sc2.innerText = score2;
    }
    isGameOver = true;
})

rst.addEventListener('click', (e) => {
    //Reset count
    score1 = 0;
    score2 = 0;
    sc1.innerText = score1;
    sc2.innerText = score2;
    
})
