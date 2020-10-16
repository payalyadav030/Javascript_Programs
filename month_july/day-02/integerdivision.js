// given +ve integer n , n+ n/2 + n/4 + n/8 + ..

function integer(n){
    var num = n;
    console.log(num)
    var sum =0;
    for(var i=2; i<=num ; i=i*2){
       
        var result = parseInt(num /i)
        console.log(result)
          sum  = sum + result;
     
        
    }
    num = num +sum;
    console.log(num)
   



}
console.log(integer(81));