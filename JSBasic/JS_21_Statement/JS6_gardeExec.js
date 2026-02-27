let marks=789;

if (typeof marks !== "number") {
    console.log("Are you fool,why you are gving score as not a number");
    return;
}

if (marks < 0 || marks > 100) {
    console.log("Are you fool,why you are giving score <0 or. > 100");
    return;
}
  if ( marks>=90  && marks<=100)
    {
     console.log("Grade A");
    }
    else if( marks>= 80 && marks<90)
    {
        console.log("Grade B");
    }
    else  if(marks>=70 && marks<80){
        console.log("Grade C");
    }
    else if(marks>=60 && marks<70)
    {
        console.log("Grade D");
    }
    else
    {
        console.log("Grade F");
    }
   
