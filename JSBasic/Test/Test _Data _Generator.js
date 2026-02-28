const unique_id='USR-000',user='TestUser_',email='@testingacademy.com';
let role=['admin', 'editor', 'viewer', 'tester','manager'];
let sta='';

for( let i=1;i<=8;i++)
{
    console.log(unique_id,i ,'|',user,i,'|',email,i,'|');
    console.log(role[i],'|')
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



