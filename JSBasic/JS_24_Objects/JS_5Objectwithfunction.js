 const cal={
   value :0,
   name:"promod",
   add(n){

    this.value=this.value+n;
    this.name+='sharma';// it will concatenate the string 'sharma' to the name property of the cal object
     return this
   },
   substract(n)
   {
    this.value=this.value-n;
    return this;
   }
 }

 console.log(cal.add(10).substract(5))// it will return 5 because the add method will add 10 to the value property of the cal object and then the substract method will subtract 5 from the value property of the cal object and return the final value which is 5

  //{
//   value: 5,
//   name: 'promodsharma',
//   add: [Function: add],
//   substract: [Function: substract]
// }
 console.log(cal.name) // it will return 'promodsharma' because the add method will concatenate the string 'sharma' to the name property of the cal object and then return the final value which is 'promodsharma'