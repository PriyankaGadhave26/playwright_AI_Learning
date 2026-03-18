let isLoggedIn = true; // this is a boolean variable that can be either true or false. It is used to check if the user is logged in or not. If the user is logged in, then we can check the user role and give access accordingly. If the user is not logged in, then we can show a message to the user that they are not logged in.
let userRole = "editor"; // this is a string variable that can be either "admin", "editor" or "viewer". It is used to check the user role and give access accordingly. If the user role is "admin", then we can give access to all the things. If the user role is "editor", then we can give access to edit and view. If the user role is "viewer", then we can give access to view only. If the user role is not any of these, then we can show a message to the user that we have no idea which role they are.
// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    } else if (userRole === "editor") {
        console.log("Welcome Editor — Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome Viewer — Read-only access.");
    } else {
        console.log("No idea which role you are !");
    }
} else {
    console.log("You are not logged in!!")
}