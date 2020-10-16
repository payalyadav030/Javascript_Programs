// js prog to find all the number pairs in an array whose sum is equal to a given number

function findPairs(input1, input2){
     var num = input1;
     var myArray = input2;
     console.log(num, myArray);
   
    var store=[];
    for(var i=0; i< myArray.length; i++){
     
        for(var j=i+1; j< myArray.length; j++){
          
            if(myArray[i] + myArray[j] == num){
             
                store.push(myArray[i], myArray[j])
               
            }
        }
        
    }
    return store;
}
console.log(findPairs(10, [1,2,4,5,6,10,12]));