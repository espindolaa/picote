function func(){
	checkTime();
	setInterval(checkTime, 60 * 1000)
}

function checkTime(){
	let currentdate = new Date(); 
	if(currentdate.getHours() == currentdate.getMinutes()){
		document.getElementById("answer").innerHTML= "Sim :)";

		let audio = new Audio('pacote.mp3');
		audio.play();
	}
	else
		document.getElementById("answer").innerHTML= "N&atilde;o :(";
}