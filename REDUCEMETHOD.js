// REDUCE METHOD IN ARRAY

let numbers = [12,14,17,16,19,10]
let add = numbers.reduce(function(fvalue,cvalue){
return fvalue+cvalue
}
);
console.log("total:",add);

// REDUCE METHOD IN OBJECT

let items = [
    {id:1,choc:"diarymilk",price:50},
    {id:1,choc:"milky bar",price:10},
    {id:1,choc:"munch",price:5},
    {id:1,choc:"kitkat",price:12}
]

let prise = items.reduce(function(frvalue,crvalue){
return frvalue+crvalue.price
},0);
console.log("result:",prise);