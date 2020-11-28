
var valueLista = [];
function countTotal(e){
    e.preventDefault();
    console.log("Hello")
    var options = document.querySelector("#selectOption")
    console.log(options.value)
if(options.value === "+")
    {
var description = document.querySelector("#description").value;
var value = document.querySelector("#value").value;
valueLista.push(Number(value));
var inkomstData = document.querySelector(".inkomstData");
inkomstData.innerText = value;
var li = document.createElement("li");
li.innerText = description + ":" + value;
var ul = document.querySelector(".listaIncome");
ul.appendChild(li);
    }
    else if (options.value === "-")
    {
var description = document.querySelector("#description").value;
var value = document.querySelector("#value").value;
valueLista.push(Number(-value));
var kostnadData = document.querySelector(".kostnadData");
kostnadData.innerText = value;
var li = document.createElement("li");
li.innerText = description + ":" + value;
var ul = document.querySelector(".listaKostnad");
ul.appendChild(li);

    }
    console.log(valueLista);
    var summa = 0;
    for(var i=0; i<valueLista.length;i++)
    {
        summa += valueLista[i];
    }
    var vinstSpan = document.querySelector(".vinstData");
    vinstSpan.innerText = summa;
}
function rensa(){
location.reload();
}

var btn = document.querySelector(".add");
btn.addEventListener("click",countTotal);
var clean = document.querySelector(".rensa");
clean.addEventListener("click",rensa)