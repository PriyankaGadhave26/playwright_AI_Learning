function testsuite( name,status, duration)
    {
        return `${name} : ${status} : (${duration}ms)`;
    }
    console.log(testsuite( 'ji','p',46))
