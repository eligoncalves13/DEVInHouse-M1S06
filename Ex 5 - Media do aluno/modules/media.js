export const studentAverage = (n1,n2,n3) => {
    const sum = n1 + n2 + n3;
    const average = sum/3;

    if(average >= 7){
        window.alert(`Aprovado! Sua média é ${average.toFixed(2)}`);
    }else{
        window.alert(`Reprovado! Sua média é ${average.toFixed(2)}`);
    }
}

