// Reversing the binary in an integer

function reverseBinary(input){
    var num = input;
    console.log(num);
    var sum =0, s=1;
    //var store=[]

    var max =0, rem;
    var value=0;
    var temp =0;
   
    // var result = parseInt( num /2);
    // while(result != 1){
    //     result =  parseInt( result/2);
    //     console.log(result)
   
    // }
    
//    while(num >=0){
//        var result = num %2;
//        console.log(result);
//        num = num /2;
//    }
    while(num !=0){
        var result = parseInt( num %2);
        //console.log(result);
        num =  parseInt( num /2);
       // console.log(num);
        sum = sum + result * s;
       // console.log(sum)
        s = s*10
        //console.log(s)

    }
    console.log(sum)

    // store.push(sum)
    // console.log(store)
    // var reverse = store.reverse()
    // console.log(reverse)
    // var value =  parseInt( sum %10)
    // console.log(value)
    // var val1 = sum%2
    // console.log(val1)
    while(sum!=0){
        rem = parseInt( sum %10);
        //console.log(rem)
        sum = parseInt( sum /10);
        //console.log(sum)
        max = max *10 + rem;


    }
    console.log("m", max)

    // while(max !=0){
        
    // }
    while(max!=0){
        var remainder =parseInt( max%10);
        console.log(remainder)
        max = parseInt( max/10);
        console.log(max);
        value = value+ remainder*Math.pow(2, temp);
        temp = temp +1;


    }
    console.log(value)
    return value

  


}
console.log(reverseBinary(417))