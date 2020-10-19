var gameTab = [];
for(var i =0; i < 2; i++)
{
	gameTab[i] = [];
}


function addGame()
{
	var name = "Game" + gameTab[0].length;
	var gender = "Gender" + gameTab[1].length;
	gameTab[0].push(name);
	gameTab[1].push(gender);
	update();
}

function update()
{
	document.getElementById("genreTab").innerHTML = "";
	document.getElementById("nameTab").innerHTML = "";
	for(var i = 0; i < gameTab[0].length; i++)
	{
		document.getElementById("nameTab").innerHTML = document.getElementById("nameTab").innerHTML + "<div style ='height:100px;'>" + gameTab[0][i] + "</div>";
		document.getElementById("genreTab").innerHTML = document.getElementById("genreTab").innerHTML + "<div style ='height:100px;'>" + gameTab[1][i] + "</div>";

	}
}

function toggleShow()
{
	if(document.getElementById("genreTab").style.display == "none")
		document.getElementById("genreTab").style.display = "block";
	else
		document.getElementById("genreTab").style.display = "none";
		
	update();
}