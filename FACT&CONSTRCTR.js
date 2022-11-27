/*function person(name){
    return {
        name:name,
        age:25,
        location:"namakkal",
        interest:["html","css","javascript","reactjs"],
        intro(){
            var msg =`My name is ${this.name},im from ${this.locaton}, my area of interests are ${this.interest}`
            console.log(msg);
        }

    }
}
var kk = person("kk");
kk.intro();
var karthi = person ("karthi");
karthi.intro();*/

function person(name,location){
       this.name=name,
        this.location=location,
        this.interest=["html","css","javascript","reactjs"],
        this.intro= function (){
            var msg =`My name is ${this.name},im from ${this.location}, my area of interests are ${this.interest}`
            console.log(msg);
        }
        }

        var kk = new person("kk","namakkal");
        kk.intro();