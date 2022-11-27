let accessories2 = [
    {no:1,firstname:"karthi",lastname:"keyan"},
    {no:2,firstname:"NR",lastname:"Gopal"},
    {no:3,firstname:"sree",lastname:"gokul"}
]
let kk2 = accessories2.map(function(poruls2){
    let fullname = [poruls2.firstname,poruls2.lastname].join(" ")
    let object = {fullname }
    
        return object;
    
}
);
console.log(kk2);