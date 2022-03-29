const ID = document.querySelector('#AdviceID'),
    CONTENT = document.querySelector('#AdviceContent'),
    DICE = document.querySelector('#Dice'),
    DICE_IMG = document.querySelector('#DiceImg');
let DataFecth;

//FUNCTION TO GET A RANDOM NUMBER BETWEEN 0 and 220
function random() {
    return Math.floor(Math.random() * 220);
}
//FUNCTION TO FETCH ADVICE AND CALL print FUNCTION TO PAINT DOM
function getAdvice(number) {
    return fetch(`https://api.adviceslip.com/advice/${number}`)
        .then(r => r.json())
        .then(data => print(data));
}
//FUNCTION TO HANDLER DOM DATA INSERTION 
function print(data) {
    ID.textContent = `ADVICE #${data.slip.id}`
    CONTENT.textContent = `"${data.slip.advice}"`
}
//CATCH BUTTON DICE EVENT AND EXECUTE getAdvice FUNCTION
DICE.addEventListener('click', () => {
    DICE_IMG.classList.toggle('active')
    setTimeout(()=> DICE_IMG.classList.toggle('active'),500)
    getAdvice(random())
})
//FIRST ADVICE PRINT
getAdvice(random())