
function findOutlier(integers){
    var myArray = integers;
    console.log(myArray);

    // if(myArray.length <=3){
    //     console.log("arr")
    //     for(var k=0 ; k<myArray.length; k++){
    //         console.log("arr")
    //         if(myArray[k] %2 == 0 && myArray[k+1] %2 == 0){
               
    //             for(var i=0; i<myArray.length ; i++){
    //                 if(myArray[i]%2 !=0){
    //                     return myArray[i]
    //                 }
                          
    //             }
    //         }
    //     }
    // }
    // if(myArray.length == 3){
    //     for(var i=0; i<myArray.length; i++){
    //         if(myArray[i] %2 != 0 && myArray[i+1]!=0){
    //             return myArray[i] + " is the even number"
    //         }
    //     } 
    // }
    



    for(var i=0 ; i< myArray.length ; i++){
        //console.log("ok")
        if(myArray[i] %2 == 0 && myArray[i+1]%2 == 0){
            //console.log("okk")
            for(var j=0; j< myArray.length; j++){
                if(myArray[j] %2 !=0){
                    return myArray[j] + " is the odd number"
                }
            }

        }
        else{
            console.log("okkk")
            if(myArray[i]%2 !=0 && myArray[i+1]%2 !=0){
                console.log("ok")
                for(var j=0; j<myArray.length ;j++){
                    if(myArray[j]%2 == 0){
                        return myArray[j] + " is the even number"
                    }
                }
            }
        }
    }
  
}

//console.log(findOutlier(['2','11','0','100','4','4','2602','36']))
//console.log(findOutlier(['3','160','1719','19','11','13','-21']))
console.log(findOutlier(['1','4','3']))