// var inputElem = document.getElementById('input');
// console.log(inputElem);

var btnElem = document.getElementById('btn');
console.log(btnElem);
btnElem.addEventListener('click', function(){
    var inputElem = document.getElementById('input').value;
    console.log(inputElem);
    var resultElem = document.getElementById('activity');
    console.log(resultElem);
    resultElem.append(inputElem);

})
document.body.style.backgroundColor = "grey"
