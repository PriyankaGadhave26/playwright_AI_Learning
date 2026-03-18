let suite1 = [{ name: "login", status: "pass" }];
//let suite2 = [...suite1];
// console.log(suite2)
// suite2[0].status = "fail";
// console.log(suite2)
// console.log(suite1[0].status);

//However, if suite1 contains objects or nested arrays, only the references are copied—not the nested contents themselves. Modifying a nested object in suite2 will also change it in suite1, demonstrating the shallow nature.

let suite3=structuredClone(suite1)
suite3[0].status = "fail";
console.log(suite3)
console.log(suite1[0].status);
