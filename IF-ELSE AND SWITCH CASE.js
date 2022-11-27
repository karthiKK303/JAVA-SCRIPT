// IF-ELSE CONDITION
let hrs = new Date();
let hours = hrs.getHours();
if(hours >= 0 && hours <= 12) 
{
    console.log("GOOD MORNING");
} 
else if (hours >= 12 && hours <= 18) 
{
    console.log("GOOD AFTERNOON");
}
else  
 {
    console.log("GOOD NIGHT");
}


// SWITCH CASE
let marks= 1000 
switch(true){
    case(marks>=90 && marks<=100):
    console.log("SUPER MARK");
    break;
    case(marks>=70 && marks<=90):
    console.log("GOOD MARKS");
    break;
    case(marks>=50 && marks<=70):
    console.log("PASS MARK");
    break;
    case(marks<50 && marks>0):
    console.log("STUDY WELL");
    default:
        console.log("UNKNOWN MARKS");


}