document.getElementById('clickme').onclick = getFortune
function getFortune() {
	var hometown = document.getElementById('hometown').value
	var partner = document.getElementById('partner').value
	var numKids = document.getElementById('numKids').value
	var jobTitle = document.getElementById('jobTitle').value

	//2: Run your func logic
	var fortuneStr = "You will be a " + jobTitle + "living in" + hometown + "married to" + partner + "with" + numKids

	// 3: output
	document.getElementById('output').innerHTML = fortuneStr
}