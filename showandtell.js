// closures
// functions as values
// anonymous function                                          

var add1=function (outside){
var add2=function (within){ 

     return outside + within;
};
return add2; 
};
var addition=new add1(6);
var additionb=new add1(8);
console.log(addition(3));
console.log(additionb(2));

// arrays
(function Clients(){
    var names=["Sharon","Mary","John","Tom","Kelvin"];
    var age=[18,25,15,35,20];
    var movies=["Wounds","Nocturne","The Silence","Klaus","Jaws"];
    // join two arrays
    console.log(names.concat(age));
    console.log(names[0] + " " + "is" +"  "+age[1]+" "+"years"+" "+"old");
})();

// conditions
function details(age){ 
    if (age<=15) {
        console.log ("Watch  Klaus");
    }
   else if(age<=18){
       console.log("Watch The Silence");
   }else if(age<=20){
    console.log("Wounds");
   }else if(age<=25){
   console.log("Nocturne");
   }else{
     console.log("Jaws");  
   }
 }
    details(15);

    // object and method
    
    var customer={
        name:"Alice",
        product:"Smart television",
        price:12000,
        deposit:6000,
        televisionbalance:function (price,deposit) {
         televisionbalance=price-deposit;
         return this.totalbalance=televisionbalance}
         }  
customer.televisionbalance(12000,6000);
console.log(customer.name +" "+ "bought a " +" " + customer.product+" "+"for KES"+" "+
customer.price.toFixed(2) +" "+"after paying a deposit of KES 6000"+" "+"and a balance of"+" "+ "KES" +" "+ televisionbalance.toFixed(2));
    
    
    


    

    
    

























