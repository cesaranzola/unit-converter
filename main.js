// ======================= Grab elements ============================

// Main title
let mainTitle = document.getElementById('main-title');

// Input number
let inputNum = document.getElementById('inputNum');

// Convert button
let btnEl = document.getElementById('btnEl');

// Titles
let titleOne = document.getElementById('title-one');
let titleTwo = document.getElementById('title-two');
let titleThree = document.getElementById('title-three');

// Paragraphs
let pElOne = document.getElementById('p-el-one');
let pElTwo = document.getElementById('p-el-two');
let pElThree = document.getElementById('p-el-three');

// ======================= Add event listeners ========================
btnEl.addEventListener('click', () => {
	let num = inputNum.value;
	toLen(num);
	// volume(num);
	// mass(num);
	inputNum.value = '';
});

// ======================= Functions ==================================
function toLen(num) {
	let meterToFt = num * 3.281;
	let ftToMeter = num / 3.281;
	pElOne.textContent = `${num} meters = ${meterToFt} feet | ${num} feet = ${ftToMeter.toFixed(2)} meters`;
}

function volume(num) {
	let liToGal = num / 4.546;
	let galToLit = num * 4.546;
}

function mass(num) {
	let kToPound = num * 2.205;
	let poundToK = num / 2.205;
}
