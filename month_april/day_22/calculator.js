// var inputElem1 = document.getElementById('input1');
// console.log(inputElem1);
// var inputElem2 = document.getElementById('input2');
// console.log(inputElem2);

var btnElem1 = document.getElementById('plus');
console.log(btnElem1);
btnElem1.addEventListener('click', function(){
    var inputElem1 = document.getElementById('input1').value;
   // console.log(inputElem1);
    var inputElem2 = document.getElementById('input2').value;
   // console.log(inputElem2);
    var output1 = parseInt(inputElem1) + parseInt(inputElem2);
   // console.log(output1);
    var resElem1 = document.getElementById('result');
    console.log(resElem1);
    resElem1.append(output1);
})

var btnElem2 = document.getElementById('minus');
console.log(btnElem2);
btnElem2.addEventListener('click', function(){
    var inputElem3 = document.getElementById('input1').value;
    console.log(inputElem3);
    var inputElem4 = document.getElementById('input2').value;
    console.log(inputElem4);
    var output2 = (parseInt(inputElem3)) - (parseInt(inputElem4));
    console.log(output2);
    var resElem2 = document.getElementById('result');
    console.log(resElem2);
    resElem2.append(output2);
})

var btnElem3 = document.getElementById('multiply');
console.log(btnElem3);
btnElem3.addEventListener('click', function(){
    var inputElem1 = document.getElementById('input1').value;
    console.log(inputElem1);
    var inputElem2 = document.getElementById('input2').value;
    console.log(inputElem2);
    var output3 = (parseInt(inputElem1)) * (parseInt(inputElem2));
    console.log(output3);
    var resElem3 = document.getElementById('result');
    console.log(resElem3);
    resElem3.append(output3);
})

var btnElem4 = document.getElementById('divide');
console.log(btnElem4);
btnElem4.addEventListener('click', function(){
    var inputElem1 = document.getElementById('input1').value;
    console.log(inputElem1);
    var inputElem2 = document.getElementById('input2').value;
    console.log(inputElem2);
    var output4 = (parseInt(inputElem1)) / (parseInt(inputElem2));
    console.log(output4);
    var resElem4 = document.getElementById('result');
    console.log(resElem4);
    resElem4.append(output4);
})
