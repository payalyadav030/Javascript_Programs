function battleGround( username, weapon, level ){
    this.username = username;
    this.weapon  = weapon;
    this.level = level;
}

battleGround.prototype.changeWeapon = function(){
    if(this.weapon != "gun" && this.weapon != "knife" && this.weapon != "laser"){
        throw new Error ("weapon required")
    }
    

}
battleGround.prototype.changeLevel = function(){
    if(this.level != "easy" && this.level != "medium" && this.level != "hard"){
        throw new Error ("level required")
    }
}
battleGround.prototype.attack = function(){
    console.log("attacking the opponent with weapon", this.weapon);
}
var mybattleGround = new battleGround("payalyadav", "wire" ,"easy");
console.log(mybattleGround);
mybattleGround.changeWeapon();
mybattleGround.changeLevel();
mybattleGround.attack();