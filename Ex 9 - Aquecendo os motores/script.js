const circle = document.querySelector('#circle');
let sizeDecrease = 1;
let gameOver = false;

document.addEventListener('DOMContentLoaded', function() {
    setInterval(reduce, 1000);
});

//Reduzir 1px do tamanho
function reduce(){
    const sizeObject = recoverSize();
    let widthValue = sizeObject.widthObj;
    let heightValue = sizeObject.heightObj;
    
    circle.style.width = ((widthValue - sizeDecrease) < 0) ? 0 + 'px' : (widthValue - sizeDecrease) + 'px'; //Se o número for negativo, vira zero
    circle.style.height = (heightValue - sizeDecrease) + 'px';

    if(!gameOver){
        validateSize();
    }
}

circle.addEventListener('click', expand);
//Expandir 5px do tamanho 
function expand(){
    const sizeObject = recoverSize();
    let widthValue = sizeObject.widthObj;
    let heightValue = sizeObject.heightObj;
    
    circle.style.width = (widthValue + 5) + 'px';
    circle.style.height = (heightValue + 5) +'px';

    //Aumentar 0,3px na redução do tamanho
    sizeDecrease += 0.3;

    if(!gameOver){
        validateSize();
    }
}

//Recuperar o tamanho do círculo
function recoverSize(){
    let position = circle.getBoundingClientRect();
    return{
        widthObj : position.width,
        heightObj : position.height
    }
}

//Validar se ganhou ou perdeu 
function validateSize(){
    const sizeObject = recoverSize();
    if(sizeObject.widthObj < 1 || sizeObject.widthObj > 500){
        gameOver = true;
        const result = confirm("GAME OVER! Deseja jogar novamente?");
        if(result){
            location.reload();
        }else{
            circle.style.width = 0;
            circle.style.height = 0;
        }
    }
}