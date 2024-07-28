function setFlag(flagName)
{
	var img = document.getElementById('flag-icon');
	img.src = "../assets/images/"+ flagName +".svg"
}

function setFlag_FR()
{
	setFlag("fr")
}
function setFlag_EN()
{
	setFlag("gb")
}
