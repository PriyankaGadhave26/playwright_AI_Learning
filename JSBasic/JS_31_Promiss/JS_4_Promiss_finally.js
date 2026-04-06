let apiCall = new Promise(function (resolve, reject) {
  reject("API call failed!");
});

apiCall.then(function (response) {
    console.log(response);
    console.log(response.body);
    console.log(response.status);
}).catch(function (error) {
    console.log(error);

}).finally(function()
{
 console.log("This will always execute regardless of the Promise's outcome.");
})

// The then() method is used to specify what to do when the Promise is resolved successfully, while the catch() method is used to handle any errors that may occur during the execution of the Promise. 