//Using a loop write code that will console.log all of the odd values from 1 up to 20.
console.log("Print odds 1-20 -------------------------------")
for(var i=1;i<20;i++){
    if(i%2 !=0)
    {
        console.log(i);
    }
}
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
console.log("Decreasing Multiples of 3 -------------------------------")
for(var i=100;i>0;i--){
    if(i%3 == 0){
        console.log(i);
    }
}
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
console.log("Print the sequence -------------------------------")
for(var i=4 ; i> -4 ; i-=1.5)
{
    console.log(i);
}
//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
console.log("Sigma -------------------------------")
function findSum(){
var sum=0;
for(var i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);
}
findSum();
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
console.log("Factorial -------------------------------")
function findFactorial(n){
    var fact=1;
   if(n == 0 || n == 1){
        fact = 1;
   }else{
    for(var i=1 ; i<= n; i++){
        fact *= i;
    }
    console.log("factioral of "+ n +" = "+fact);
   
    }
}
findFactorial(12);

