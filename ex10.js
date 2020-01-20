function multiplyBy()
{
        num1 =document.getElementById("firstNumber").value;
        num2 =document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function add() 
{ 
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = num1 + num2;
}

function substract() 
{ 
        num1 = parseInt(document.getElementById("firstNumber").value);
        num2 = parseInt(document.getElementById("secondNumber").value);
document.getElementById("result").innerHTML = num1 - num2;
}