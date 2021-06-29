const btn_1 = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
const btn_3 = document.querySelector(".btn_3");
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');
const select = document.querySelector('#select');
let initialScore = 0;
let initialScores = 0;
let finalScore ;
let gameOver = false;

select.addEventListener('change' , function(){
    finalScore = parseInt( this.value );
    reset();
})

btn_1.addEventListener('click' , function (){
    if(!gameOver){
        if (initialScore<finalScore){
            initialScore += 1;
            initial.style.color = 'black';
        }
        if(initialScore == finalScore){
            initial.style.color = 'green';
            gameOver = true;
        }
        initial.innerText = initialScore;
    }
})
btn_2.addEventListener('click' , function (){
    if(!gameOver){
        if (initialScores<finalScore){
            initialScores += 1;
            final.style.color = 'black';
        }
        if(initialScores == finalScore){
            final.style.color = 'green';
            gameOver = true;
        }
        final.innerText = initialScores;
    }
})
btn_3.addEventListener('click' , reset)

function reset(){
    initial.innerText = '0';
    final.innerText = '0';
    initialScore = 0;
    initialScores = 0;
    gameOver = false
    initial.style.color = 'black';
    final.style.color = 'black'; 
}