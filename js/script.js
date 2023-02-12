let documents = document.getElementById;

let dataNumber1 = document.getElementById("data-number1").value;
let dataNumber2 = document.getElementById("data-number2").value;
let dataNumber3 = document.getElementById("data-number3").value;

dataNumber1.addEventListener('click', myFunction);
dataNumber2.addEventListener('click', myFunction);
dataNumber3.addEventListener('click', myFunction);

function myFunction(){
  let result = "";
  if(dataNumber1){
    result += 1
  }else if(dataNumber2){
    result += 2
  }else if(dataNumber3){
    result += 3
  }
  result = dataNumber
  document.getElementById("window").innerHTML = result;
}