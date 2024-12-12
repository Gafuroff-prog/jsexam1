let son1 = prompt(`1 son kiriting`);
let son2 = prompt(`2 son kiriting`);
let operator = prompt("operator tanlang 1.+ 2.- 3.* 4./")

if (isNaN(son1) || son1 === '') {
    alert("Siz son yozmadingiz");
}
if (isNaN(son2) || son2 === '') {
    alert("Siz son yozmadingiz");
}


if (operator === '1') {
    alert("Siz qo'shish operatorini tanladingiz (+).");
} else if (operator=== '2') {
    alert("Siz ayirish operatorini tanladingiz (-).");
} else if (operator === '3') {
    alert("Siz ko'paytirish operatorini tanladingiz (*).");
} else if (operator === '4') {
    alert("Siz bo'lish operatorini tanladingiz (/).");
} else {
    alert("Tanlangan operator notogri!");
    prompt("operator tanlang 1.+ 2.- 3.* 4./")
}

  
let son1Element = document.createElement('div');
son1Element.classList.add('son1');
son1Element.innerText = " " + son1;
son1Element.style.alignItems = 'center'
son1Element.style.border = '2px solid black';
son1Element.style.backgroundColor = 'green';
son1Element.style.color = 'black';
son1Element.style.textAlign = 'center';
son1Element.style.width = '100px';
son1Element.style.height = '100px';
son1Element.style.lineHeight = '100px';
son1Element.style.margin = '10px';


document.body.appendChild(son1Element);


let operatorElement = document.createElement('div');
operatorElement.classList.add('operator');
operatorElement.innerText = " " ;
operatorElement.style.alignItems = 'center'
operatorElement.style.border = '2px solid black';
operatorElement.style.backgroundColor = 'green';
operatorElement.style.color = 'black';
operatorElement.style.textAlign = 'center';
operatorElement.style.width = '100px';
operatorElement.style.height = '100px';
operatorElement.style.lineHeight = '100px';
operatorElement.style.margin = '10px';

document.body.appendChild(operatorElement);


let son2Element = document.createElement('div');
son2Element.classList.add('son2');
son2Element.innerText = " " + son2;
son2Element.style.border = '2px solid black';
son2Element.style.backgroundColor = 'green';
son2Element.style.color = 'black';
son2Element.style.textAlign = 'center';
son2Element.style.width = '100px';
son2Element.style.height = '100px';
son2Element.style.lineHeight = '100px';
son2Element.style.margin = '10px';

document.body.appendChild(son2Element);


    son1 = parseFloat(son1);
    son2 = parseFloat(son2);

    if (operator === '1') {
        result = son1 + son2;
    } else if (operator === '2') {
        result = son1 - son2;
    } else if (operator === '3') {
        result = son1 * son2;
    } else if (operator === '4') {
        if (son2 !== 0) {
            result = son1 / son2;
        } else {
            alert("Bo'lishda nolga bo'lish mumkin emas!");
            result = "Noto'g'ri amal!";
        }
    }

    

    let resultElement = document.createElement('div');
    resultElement.classList.add('result');
    resultElement.innerText = "Natija: " + result;
    resultElement.style.alignItems = 'center'
    resultElement.style.border = '2px solid black';
    resultElement.style.backgroundColor = 'yellow';
    resultElement.style.color = 'black';
    resultElement.style.textAlign = 'center';
    resultElement.style.width = '400px';
    resultElement.style.height = '100px';
    resultElement.style.lineHeight = '100px';
    resultElement.style.margin = '10px';


    document.body.appendChild(resultElement);
