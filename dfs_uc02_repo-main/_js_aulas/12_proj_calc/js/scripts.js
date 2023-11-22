const mutiplicationForm = document.querySelector("#multiplication-form");

const numberImput = document.querySelector ("#number");

const multiplicationInput = document.querySelector ("multiplicator");

//Função
const createTabela = (number, multiplicatorNumber) =>
{
    multiplicationTable.innerHTML = "";

    //criar a tabuada

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x $ {i}
    =</div>
    <div class="result"> ${result}</div>
    </div>`;

    const parser = new DOMParser

    const htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row")

    multiplicationTable.appendChild(row)

    }
    multiplicationTitle.innerText = number
}





// Eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const multiplicationNumber = numberImput.value;
    const multiplicatorNumber = multiplicatorInput.
    value;

    if(!multiplicationNumber || !multiplicatorNumber ) return; 

    createTable(multiplicationNumber, multiplicatorNumber) 
});
