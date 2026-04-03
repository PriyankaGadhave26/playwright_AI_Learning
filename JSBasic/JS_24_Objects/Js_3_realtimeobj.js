const realobj={}
realobj.browser='chrome';
realobj.timeout=1000;
realobj.timeout=2000;// it will take the latest value of timeout
console.log(realobj) //
delete realobj.browser;// it will delete the browser property from the realobj object
console.log(realobj) // { timeout: 2000 }
