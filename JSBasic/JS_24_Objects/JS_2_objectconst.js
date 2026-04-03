const user={
    name:'priya',
    age:20,
    city:'mumbai'
}
// accessing the properties of the object
console.log(user.name);
console.log(user["city"]);

//dyanamic property access
const key='city';
console.log(user.key);//undefined because there is no property named key in the user object
console.log(user[key]);//mumbai because key is a variable that holds the value 'city' which is a property of the user object

//adding /modify extra properties to the object
user.country='india';
user.age=67;
console.log(user);//{ name: 'priya', age: 67, city: 'mumbai', country: 'india' }