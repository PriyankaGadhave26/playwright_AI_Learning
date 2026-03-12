
//normal function
function name()
{
    console.log('hi')
}
name();
// immediately invoked function expression (IIFE)
(function()
{
    console.log('hi')
})();

(function()
{
    console.log('staging')
})();

//arrow function with iief
(() =>
{
    console.log('arrow function')
})();