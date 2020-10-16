// perfect square

function perfectsquare(input){
    var myNum = input;
    console.log(myNum);
    // if(myNum % 2 == 0){

    // }
    // var result, result2, result3, result4;
    // result = myNum/2;
    // console.log(result);
    // result2 = result/2
    // console.log(result2);
    // result3 = result2/2;
    // console.log(result3);
    // result4 = result3/2;
    // console.log(result4);
    // while(myNum<1){

    // }
    // for(var i =0 ; i< myNum ; i++){
    //     if(myNum = i * i){
    //         console.log("is perfect square")
    //     }
    // }
    // return true

    // var sqrt = Math.sqrt(myNum);
    // console.log(sqrt);
    for(var i=0 ; i< myNum/2 ; i++){
       //s console.log(myNum)
       // console.log(i)
        if(myNum == i * i){
            return true
        }
       
    }
    return false
   
}
console.log(perfectsquare(15));