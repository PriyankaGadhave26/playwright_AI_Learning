//Different way to write the functions
//Normal function
function validatestatuscode(code)
{
    if( code >=200  && code<300)
    {
        console.log('request is fine')
    }
    else
    {
        console.log("failed request")
    }

}

validatestatuscode(278)

// Using function expression
const validatestatuscode_ex = function (code)
{
    if( code >=200  && code<300)
    {
        console.log('request is fine')
    }
    else
    {
        console.log("failed request")
    }

}

validatestatuscode_ex(404)

// Arrow FUnction
const validatestatuscode_arr = (code) =>
{
    if( code >=200  && code<300)
    {
        console.log('request is fine')
    }
    else
    {
        console.log("failed request")
    }

}
validatestatuscode_arr(200);
