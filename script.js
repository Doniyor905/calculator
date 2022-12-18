

let result = document.querySelector(".cal__result");
let number = document.querySelectorAll(".calc__number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        let value = this.innerText;

        switch(value) {
            case 'clear':
            result.innerText = "";
            break;

            case '=':
            if (result.innerText == "") {
                result.innerText = "Пустое значения"
            }
            result.innerText = eval(result.innerText);
            break;

            default:
            result.innerText += value;  
        }

    })
}
