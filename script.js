const buttons = document.querySelectorAll("#regularButton");
const result=document.querySelector("#result");
const clearScreen=document.querySelector("#clearScreen");
const display=document.querySelector("#calculateButton");
const editButton=document.querySelector("#edit");


function showButton(){
    let element = this.value;
    if((/[+-\/*]/.test(this.value)&& /[+-\/*]$/.test(result.value)) ||(result.value[0] == "/" || result.value[0]=="*")){
        result.value = result.value.replace(element[element.length-1], '')
    }
    else{
        result.value+=element
    }
}
function clear(){
    result.value = "";
}
function calculate(){
    parsedResult = eval(result.value);
    result.value = parsedResult;
}
function edit(){
    result.value = result.value.slice(0, -1)
}
buttons.forEach(button => button.addEventListener('click', showButton))
clearScreen.addEventListener('click', clear);
display.addEventListener('click', calculate);
editButton.addEventListener('click', edit);
