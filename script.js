var databass = [
	{
		username: "Amir",
		passwoord: "Shah",
	}

];

var NewsFeed = [
			{
				username: "Ahmad",
				timline: "wawa that was a nice day"
			},

			{
				username: "Sahib",
				timline: "Varry nice and cool weather in USA wawa that was a nice day"
			}
];

var usernamePrompt = prompt ("Inter your user Name");
var passwoordPrompt = prompt ("Inter your passwoord");

function signIn (user, Pass) {
	if (user === databass [0].username && 
		pass === databass[0].passwoord) {
		console.log(NewsFeed);
	} else {
		alert("sory please inter correct user name or passwoord")
	}
	}

	signIn(usernamePrompt, passwoordPrompt);



