//DOM - Document object Model
// dev console
////////////////////////////////////////////////////////////////////////
console.log(document);
 var divTags = document.getElementsByTagName('div');
 console.log(divTags);

//  var pTags = [{
//      classList: ["content", "article"]
//  }]
//  console.log(pTags);
//  console.log(pTags[0].classList);
//  console.log(pTags[0].classList[0]);
var idTags = document.getElementById("myid")  // id is always unique so element not elements
console.log(idTags);
console.log(idTags.classList); // shows the class present
console.log(idTags.innerText); // to get the content of the particular div id etc

// var queryElem = document.querySelectorAll('div')
// console.log(queryElem)

// if two diff tags have same class and want to access the class of particular tag
var diffTag = document.getElementsByClassName("cls-a")
console.log(diffTag)

///////////////////////////////////////////////////////////////
// EVENT LISTENER

