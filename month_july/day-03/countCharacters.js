//count the occurrences of each character and return it as a list of tuples in order of appearnces.

function count(input){
    var num =0;
    var value =[]
    var char = input;
    console.log(char)

    for(var i=0; i<char.length; i++){
        num = num +1;
        //console.log(char[i])
        var store =[];
        store.push(char[i])
        store.push(num)

        value.push(store);
       // console.log(value)

      
        
       for(var j = i+1; j<char.length; j++){
           if(char[i]== char[j]){
         
            console.log(value)
           }
      
          
            }
           
            
        }
    }

 
console.log(count("abracadabra"))