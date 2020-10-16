function arraySum(input){
    var sum=0;
    
    for(var i=0; i<input.length; i++){
        sum = sum + input[i]
        
    }
    return sum;

}
console.log(arraySum([1,2,3,4]))