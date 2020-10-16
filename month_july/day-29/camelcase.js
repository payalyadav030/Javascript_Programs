function camelCase(s){
    console.log(s);

   var count = 0;
    var camel=[];
    camel.push(s[0])
    //console.log(camel)
    //count = count + 1;
   // console.log(count)

//    var val = 'booK';
//    for(var j=0; j< val.length; j++){
//        if(val[j] == val[j].toUpperCase()){
//            return val[j]
//        }
//    }
        
    for(var i=0; i< s.length; i++){
        if(s[i] == s[i].toUpperCase()){
            camel.push(s[i])
           // console.log(camel)
        }
    }
    return camel.length;
   
    

}

console.log(camelCase('saveChangesInTheEditor'))