let person ={
    name:"karthi",
    age:25,
    location:"Namakkal",
    hobbies:["singing","wandering","trekking"],
    introduction :function(){
            let msg = `My name is ${this.name},I am ${this.age} years old, I'm coming from ${this.location}
            and my hobbies are ${this.hobbies}`
            console.log(msg);

        }
        
}
person.introduction();