//this javascript is responsible for the logic implementation in the sample calculator web application in Html-Js-Css
var thisNumber = 0
function signFn(clicked) 
{ 
    thisNumber = clicked;
    /*if (getElementById("plusSign") == '+'||getElementById("minuseSign") == '-'|| getElementById("multiplySign") == '*'||getElementById("divideSign") == '/')
    {
        thisNumber = 'thisNumber' + 'thisNumber';
    }*/
    document.getElementById("result").value+= thisNumber;
}
function clearSign()
{
    document.getElementById("result").value = ""
}

function solve()
{
let x = document.getElementById("result").value
let y = eval(x)
document.getElementById("result").value = y
}