function indices(input1, input2){
    var target = input1;
    var myArray = input2;
    console.log(target, myArray);

    var store=[];
    for(var i=0; i< myArray.length; i++){
        for(j=i+1; j<myArray.length; j++){
            if(myArray[i]+ myArray[j] == target){
                console.log(myArray[i], myArray[j])
                store.push(myArray.indexOf(myArray[i]), myArray.indexOf(myArray[j]));
               // console.log(store);
            }
        }
    }
    return store;
   //console.log(store);

}
console.log(indices(18,[2,7,11,15,4,3]));