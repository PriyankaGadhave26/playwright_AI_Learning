const unique_id='USR-000',user='TestUser_',email='@testingacademy.com';
let role=['admin', 'editor', 'viewer', 'tester','manager'];
let sta='';

for( let i=1;i<=8;i++)
{
    console.log(unique_id,i ,'|',user,i,'|',email,i,'|');
    console.log(role[i-1],'|')
    if (i%3!==0)
    { 
      sta='Active';
        console.log (sta);

    }
    else
    {
        sta='Inactive';
        console.log(sta)
        break;
    }

}

//Other bettrer way

const roleOptions = ["admin", "editor", "viewer", "tester", "manager"];
var counter = 8;

for (i = 1; i <= counter; i++) {
    let paddedNumber = i.toString().padStart(4, '0');//converts number i to a string padded with zeros on the left to ensure 4 digits total.
    let roleIndex = (i - 1) % roleOptions.length;
    let role = roleOptions[roleIndex];
    let isActive = (i % 3 !== 0) ? "ACTIVE" : "INACTIVE";
    console.log(`USR-${paddedNumber} | TestUser_${i} | testuser${i}@testingacademy.com | ${role} | ${isActive}`);
}



