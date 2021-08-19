
function getPin() {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } else{
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
        const prevNumber = calcInput.value;
        const newNumber = prevNumber + number;
        calcInput.value = newNumber;
    }
    
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('type-numbers').value;

    const successMessage = document.getElementById('notify-success');
    const errorMassage = document.getElementById('notify-fail');

    if(pin == typedNumber){
        successMessage.style.display = 'block';
        errorMassage.style.display = 'none';
    }else{
        errorMassage.style.display = 'block';
        successMessage.style.display = 'none';
    }
    
}