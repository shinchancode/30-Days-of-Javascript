const text = document.getElementById("text");
const text1 = document.getElementById("text1");
const speedEl = document.getElementById("speed");
const prog = "Hi, I am Aarti Rathi from Pune. Currently pursuing Bachelor of Engineering (2019 - 2023) from ARMY INSTITUTE OF TECHNOLOGY PUNE.";
const prog1="Welcome to 30 Days of JavaScript";
let idx = 1;
let idx1 = 1;
let speed = 300 / speedEl.value;

// initial call
writeText();

function writeText() {
    text.innerText = prog.slice(0, idx)
    text1.innerText = prog1.slice(0, idx1)
	
	idx++;
	idx1++;
	
	if(idx > prog.length){
      idx = 1;
    }
	if(idx1 > prog1.length){
      idx1 = 1;
    }

	
	setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
});