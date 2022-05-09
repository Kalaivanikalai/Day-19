let title = document.createElement("h1")
title.setAttribute('class','settitle')
title.innerHTML = 'Calculator Using DOM Manipulation'
title.classList.add('text-center','mt-5')
document.body.appendChild(title)

let setcontainer = document.createElement('div')
setcontainer.setAttribute('class','container')
setcontainer.setAttribute('id','container')
document.body.appendChild(setcontainer);

let calculatordiv = document.createElement("div")
calculatordiv.setAttribute('class','calculator')
calculatordiv.setAttribute('id','calculatordiv')
document.getElementById('container').appendChild(calculatordiv)

let inputfield = document.createElement('input')
inputfield.setAttribute('type','text')
inputfield.setAttribute('placeholder','0')
inputfield.setAttribute('id','getvalue')
inputfield.setAttribute('onkeypress','typing()')
document.getElementById('calculatordiv').appendChild(inputfield)

let cancel_btn = document.createElement('button')
cancel_btn.setAttribute('class','button')
cancel_btn.style.backgroundColor='blue'
cancel_btn.setAttribute('onclick','clearval()')
cancel_btn.innerHTML = 'CL'
document.getElementById('calculatordiv').appendChild(cancel_btn)

let delete_btn = document.createElement('button')
delete_btn.setAttribute('class','button')
delete_btn.style.backgroundColor='red'
delete_btn.setAttribute('onclick','erase()')
delete_btn.innerHTML = 'DEL'
document.getElementById('calculatordiv').appendChild(delete_btn)

let division = document.createElement('button')
division.setAttribute('class','button')
division.setAttribute('onclick','division_btn()')
division.innerHTML = '%'
document.getElementById('calculatordiv').appendChild(division)

let multiplication = document.createElement('button')
multiplication.setAttribute('class','button')
multiplication.setAttribute('onclick','multiplication_btn()')
multiplication.innerHTML = ' * '
document.getElementById('calculatordiv').appendChild(multiplication)

let seven_btn = document.createElement('button')
seven_btn.setAttribute('class','button')
seven_btn.setAttribute('onclick','seven()')
seven_btn.innerHTML = ' 7 '
document.getElementById('calculatordiv').appendChild(seven_btn)

let eight_btn = document.createElement('button')
eight_btn.setAttribute('class','button')
eight_btn.setAttribute('onclick','eight()')
eight_btn.innerHTML = ' 8 '
document.getElementById('calculatordiv').appendChild(eight_btn)

let nine_btn = document.createElement('button')
nine_btn.setAttribute('class','button')
nine_btn.setAttribute('onclick','nine()')
nine_btn.innerHTML = ' 9 '
document.getElementById('calculatordiv').appendChild(nine_btn)

let subtraction = document.createElement('button')
subtraction.setAttribute('class','button')
subtraction.setAttribute('onclick','subtraction_btn()')
subtraction.innerHTML = '-'
document.getElementById('calculatordiv').appendChild(subtraction)

let five_btn = document.createElement('button')
five_btn.setAttribute('class','button')
five_btn.setAttribute('onclick','five(5)')
five_btn.innerHTML = '5'
document.getElementById('calculatordiv').appendChild(five_btn)

let six_btn = document.createElement('button')
six_btn.setAttribute('class','button')
six_btn.setAttribute('onclick','six()')
six_btn.innerHTML = '6'
document.getElementById('calculatordiv').appendChild(six_btn)

let four_btn = document.createElement('button')
four_btn.setAttribute('class','button')
four_btn.setAttribute('onclick','four()')
four_btn.innerHTML = '4'
document.getElementById('calculatordiv').appendChild(four_btn)

let addition = document.createElement('button')
addition.setAttribute('class','button')
addition.setAttribute('onclick','addition_btn()')
addition.innerHTML = '+'
document.getElementById('calculatordiv').appendChild(addition)

let three_btn = document.createElement('button')
three_btn.setAttribute('class','button')
three_btn.setAttribute('onclick','three()')
three_btn.innerHTML = '3'
document.getElementById('calculatordiv').appendChild(three_btn)

let two_btn = document.createElement('button')
two_btn.setAttribute('class','button')
two_btn.setAttribute('onclick','two()')
two_btn.innerHTML = '2'
document.getElementById('calculatordiv').appendChild(two_btn)

let one_btn = document.createElement('button')
one_btn.setAttribute('class','button')
one_btn.setAttribute('onclick','one()')
one_btn.innerHTML = '1'
document.getElementById('calculatordiv').appendChild(one_btn)

let decimal = document.createElement('button')
decimal.setAttribute('class','button')
decimal.setAttribute('onclick','decimal_btn()')
decimal.innerHTML = '.'
document.getElementById('calculatordiv').appendChild(decimal)

let zero_btn = document.createElement('button')
zero_btn.setAttribute('class','button')
zero_btn.setAttribute('onclick','zero()')
zero_btn.innerHTML ='0'
document.getElementById('calculatordiv').appendChild(zero_btn)

let double_zero_btn = document.createElement('button')
double_zero_btn.setAttribute('class','button')
double_zero_btn.setAttribute('onclick','double_zero()')
double_zero_btn.innerHTML ='00'
document.getElementById('calculatordiv').appendChild(double_zero_btn)

let equal_btn = document.createElement('button')
equal_btn.setAttribute('class','button')
equal_btn.setAttribute('id','equal')
equal_btn.setAttribute('onclick','equal()')
equal_btn.innerHTML ='='
document.getElementById('calculatordiv').appendChild(equal_btn)




function clearval(){
   let clearval = document.getElementById("getvalue");
   clearval.value = null;
}

function erase(){
   let outputval = document.getElementById("getvalue");
   outputval.value = outputval.value.slice(0,outputval.value.length-1);
}

function division_btn(){
   let divi = document.getElementById("getvalue");
   divi.value += "/";
}

function multiplication_btn(){
   let multiple = document.getElementById("getvalue");
   multiple.value += "*";
}

function subtraction_btn(){
   let subtract = document.getElementById("getvalue");
   subtract.value += "-";
}
function addition_btn(){
   let add = document.getElementById("getvalue");
   add.value += "+";
}

function decimal_btn(){
   let dot = document.getElementById("getvalue");
   dot.value += ".";
}

function equal(){
   let values = document.getElementById("getvalue");
   values.value = eval(values.value);
}

function one(){
   let one = document.getElementById("getvalue");
   one.value += 1;
}

function two(){
   let two = document.getElementById("getvalue");
   two.value += 2;
}


function three(){
   let three = document.getElementById("getvalue");
   three.value += 3;
}


function four(){
   let four = document.getElementById("getvalue");
   four.value += 4;
}


function five(){
   let five = document.getElementById("getvalue");
   five.value += 5;
}


function six(){
   let six = document.getElementById("getvalue");
   six.value += 6;
}


function seven(){
   let seven = document.getElementById("getvalue");
   seven.value += 7;
}


function eight(){
   let eight = document.getElementById("getvalue");
   eight.value += 8;
}


function nine(){
   let nine = document.getElementById("getvalue");
   nine.value += 9;
}

function zero(){
   let zero = document.getElementById("getvalue");
   zero.value += 0;
}

function double_zero(){
   let zero = document.getElementById("getvalue");
   zero.value += 0;
   zero.value += 0;
}

function typing(){
   let outputval = document.getElementById("getvalue");
   if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
      outputval.value += key;
   }
   else if(event.key==="Enter"){
       equal();
   }
   else{
    alert("Enter numbers only ");
     event.preventDefault();
   }
}
