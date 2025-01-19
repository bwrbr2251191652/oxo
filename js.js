let c = document.querySelectorAll(".c");
let r = document.getElementById("r");
let f = ["","","","","","","","",""];
let p = "✕";
let w = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let pAudio = new Audio("p.mp3");
let xAudio = new Audio("x.mp3");
let a = 1;
let endOfGame = false;
c.forEach(cc => {cc.addEventListener("click",oxo)});
r.addEventListener("click",clr);
function oxo(cc){
	if(cc.target.innerHTML === "" && a === 1){
		cc.target.innerHTML = p;
		pAudio.play();
		f [cc.target.id] = p;
		wlt();
		if (endOfGame == false){
			if(p === "✕"){p = "⭘"} else{p = "✕"};
			document.getElementById("message").innerHTML = p + "'s turn";
		}
	}
};
function clr(){
	xAudio.play();
	a = 1;
	c.forEach(cc => {cc.innerHTML = ""});
	f = ["","","","","","","","",""];
	p = "✕";
	endOfGame = false;
	document.getElementById("message").innerHTML = p + "'s turn";
	document.getElementById("r").innerHTML = p;
};
function wlt(){
	console.log(p + " pressed")
	w.forEach(www => {
		if(f[www[0]] && f[www[0]] === f[www[1]] && f[www[1]] === f[www[2]]){
			a = 0;
			endOfGame = true;
			document.getElementById("message").innerHTML = p + " won!";
		}
	})
	if(endOfGame == false){
		let i = 0;
		while(i < 9){
			if(f[i] === ""){
				return false;
			}
			++i;
		}
		endOfGame = true;
		document.getElementById("message").innerHTML = "Tie!"; 
	}
};