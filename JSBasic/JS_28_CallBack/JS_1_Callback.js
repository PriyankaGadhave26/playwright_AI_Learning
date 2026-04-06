//callback is calling function as a parameter and it is called inside the function at the end of function execution
function placeOrder(item,callback){
    console.log('order is plced',item);
        callback();
    }
function orderDelivered(){
    console.log('order is delivered');  
}
// first way- calling using nornal function
placeOrder('Burger',orderDelivered);


//Calling it 2 times
function placeOrder1(item,callback1,callback2){
    console.log('order is plced',item);
        callback1();
        callback2();
    }
function Delivered(){
    console.log('call-back order is delivered');  
}
placeOrder1('Burger',Delivered,Delivered);


//   call back function using anonymous function -

placeOrder('vadapav',function()
    {
         console.log(' anonymous function is called');
    });

    // Callback function using arrow function

    placeOrder(' Panipuri',() =>
    {
        console.log('arrow function is called');
    })