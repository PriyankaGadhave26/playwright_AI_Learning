//rest parameter
function logintest( suitName,...resultSet)
{
    console.log(`suite :${suitName}`);
    console.log(`result: ${resultSet.join(',')}`);
}
logintest('auth re','pass','fail','skip','log')//suite :auth re
//result: pass,fail,skip,log