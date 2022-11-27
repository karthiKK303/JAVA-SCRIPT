//TESTING AN ARRAY USING SOME

let accessories = [
    {no:1,item:"AC",isDeliverable:true},
    {no:2,item:"fan",isDeliverable:true},
    {no:3,item:"TV",isDeliverable:false}
]
  let kk= accessories.some(function(poruls){
    return poruls.isDeliverable == true;
    })
    console.log("Is Deliverable:"+kk);
// TESTING AN ARRAY USING EVERY

let accessories1 = [
    {no:1,item:"AC",isDeliverable:true},
    {no:2,item:"fan",isDeliverable:true},
    {no:3,item:"TV",isDeliverable:false}
]
  let kk1= accessories1.every(function(poruls1){
    return poruls1.isDeliverable == true;
    })
    console.log("Is Deliverable:"+kk1);
