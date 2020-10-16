function plusMinus(arr){
    var len = arr.length;
    console.log(len)

   var  pos =[];
   var neg=[];
   var zero=[];
   var value=[]

    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            pos.push(arr[i]);

            var prob1 = pos.length;
            var ratio1 = prob1/len;
            value.push(ratio1)
         
        }
        
        if(arr[i]<0){
            neg.push(arr[i]);

            var  prob2 = neg.length;
            var ratio2 = prob2/len;
            value.push(ratio2)
        }

        if(arr[i]==0){
            zero.push(arr[i]);

            var prob3 = zero.length;
            var ratio3 = prob3/len;
            value.push(ratio3)
        }
        
    }
    return value;
  
    

}
console.log(plusMinus([-1,-3,2,3,0]))