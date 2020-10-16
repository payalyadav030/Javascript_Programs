function battleGround(username, weapon, level){
 
  

    
   if(!username){
       throw new Error("username required")
   }
   
   this.username = username;
   //console.log("username", this.username)
   this.weapon = weapon;
   //console.log("weapon", this.weapon)
   this.level = level;
   //console.log("level", this.level)  
}


battleGround.prototype.attack = function(){
    console.log("Attacking the opponent with weapon", this.weapon);

}



//  battleGround.prototype.changeWeapon = function(gun, knife, laser){
//      console.log("weapon", this.weapon)

//      this.gun = gun;
//      if(!gun){
//          throw new Error("wepon req")
//      }

   
    // if(!gun){
    //     throw new Error("weapon required");
    // }
    // if(!knife){
    //     throw new Error("weapon required");
    // }
    // if(!laser){
    //     throw new Error("weapon required");
    // }
    
   
//}

// battleGround.prototype.changeLevel = function(easy, medium, hard){
//     if(!easy){
//         throw new Error("level required");
//     }
//     if(!medium){
//         throw new Error("level required");
//     }
//     if(!hard){
//         throw new Error("level required");
//     }
    
// }
// // battleGround.prototype.attack = function(){
//     console.log("Attacking the opponent with weapon", this.weapon);

// }
 
    
   


var mybattleGround = new battleGround(  "gun", "easy");
console.log(mybattleGround);
mybattleGround.attack();
//mybattleGround.changeWeapon();
//mybattleGround.changeLevel();

 //mybattleGround.attack();

