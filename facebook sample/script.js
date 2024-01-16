var database = [
    {
        username: "Saroj",
        password: "123"
    },
    {
        username: "Subash",
        password: "1234"
    }
];

var newsFeed = [
    {
        username: "Subash",
        timeline: "I want to learn JavaScript!!"
    },
    {
        username: "Alisha",
        timeline: "I also want to learn JavaScript!!"
    }
];

var userNamePrompt = prompt("Enter yout Username.");
var passwordPrompt = prompt("Enter yout Password");

var username = userNamePrompt;
var password = passwordPrompt;

function validateuser(username, password){
    for(i = 0; i < database.length;i++ ){
        if(username === database[i].username && password === database[i].password){
            return true;
        }
    } return false;
}

function signin(validateuser){
    if(validateuser(username, password) === true){
        alert("Welcome " + username + " !");
        document.getElementById("a").innerHTML = newsFeed[0].username+":"+newsFeed[0].timeline + "<br>" 
        + newsFeed[1].username+":"+newsFeed[1].timeline;
    } else{
        alert("Sorry wrong Credentials. Please try again.");
    }
}
signin(validateuser);


