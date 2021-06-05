// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
   
}

function setBestCustomer(){
    var bestCustomer = 'not bob';
    console.log(bestCustomer);
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    console.log(bestCustomer);
}
const leastFavoriteCustomer = "Joe"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob"
}