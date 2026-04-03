// object declaration

let student1={name: "Alice", age: 20, grade: "A"}
console.log(student1.name );
let student2={name: "Alice", grade: "A"}

let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


console.log(student3.name);
console.log(student3 ['age'])
       
let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: 'pass' };
console.log(a1.status);

// keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);
// objects are reference type when we assign an object to another variable, it does not create a new copy of the object, but rather creates a reference to the same object in memory. So when we change the value of one variable, 
// it will affect the other variable as well.   
let b=a
b.status = "fail";
console.log(a.status);//Fail it will chnage to fail because both a and b are referencing the same object in memory.

let c = { status: "pass" };
let d = { status: "pass" };
console.log (c === d); // false because c and d are two different objects in memory, even though they have the same properties and values.  


const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);


const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);