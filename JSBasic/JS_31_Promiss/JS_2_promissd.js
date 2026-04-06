let apiCall= new Promise(function(resolve,reject){
   resolve({status:200, body:"user data"});  
});

apiCall.then(function(response){
    console.log(response);
    console.log(response.body);
    console.log(response.status);
    });

    // The then() method is used to specify what to do when the Promise is resolved successfully, while the catch() method is used to handle any errors that may occur during the execution of the Promise. 