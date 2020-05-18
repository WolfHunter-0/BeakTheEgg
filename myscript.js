var res = document.querySelector("#Res");
var decrease = 1;
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
var c5 = document.querySelector("#c5");
var c6 = document.querySelector("#c6");
function Crack() {
	if(res.innerHTML <= 0) {
		res.innerHTML -= 0;
		c6.style.visibililty = "visible";
		alert("You Just Wasted Your Fucking Time! Ha-Ha-Ha!");
	}
	else if(res.innerHTML == 7500) {
		c1.style.visibility = "visible";
		res.innerHTML -= decrease;
	}
	else if(res.innerHTML == 6000) {
		c2.style.visibility = "visible";
		res.innerHTML -= decrease;
	}
	else if(res.innerHTML == 4500) {
		c3.style.visibility = "visible";
		res.innerHTML -= decrease;
	}
	else if(res.innerHTML == 3000) {
		c4.style.visibility = "visible";
		res.innerHTML -= decrease;
	}
	else if(res.innerHTML == 1500) {
		c5.style.visibility = "visible";
		res.innerHTML -= decrease;
	}
	else {
		res.innerHTML -= decrease;
	}
}