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

// Paragraphs boxes
let subBoxOne = document.getElementById('subBoxOne');
let subBoxTwo = document.getElementById('subBoxTwo');
let subBoxThree = document.getElementById('subBoxThree');

// Paragraphs
let pElOne = document.getElementById('p-el-one');
let pElTwo = document.getElementById('p-el-two');
let pElThree = document.getElementById('p-el-three');

// ======================= Add event listeners ========================
btnEl.addEventListener('click', () => {
	let num = inputNum.value;
	toLen(num);
	volume(num);
	mass(num);
	subBoxOne.classList.add('constant-tilt-shake-para');
	subBoxTwo.classList.add('constant-tilt-shake-para');
	subBoxThree.classList.add('constant-tilt-shake-para');

	setTimeout(() => {
		subBoxOne.classList.remove('constant-tilt-shake-para');
		subBoxTwo.classList.remove('constant-tilt-shake-para');
		subBoxThree.classList.remove('constant-tilt-shake-para');
	}, 3000);
});

// ======================= Functions ==================================
function toLen(num) {
	let meterToFt = num * 3.281;
	let ftToMeter = num / 3.281;
	pElOne.textContent = `${num} meters = ${meterToFt.toFixed(
		2
	)} feet | ${num} feet = ${ftToMeter.toFixed(2)} meters`;
}

function volume(num) {
	let liToGal = num / 4.546;
	let galToLit = num * 4.546;
	pElTwo.textContent = `${num} liters = ${liToGal.toFixed(
		2
	)} gallons | ${num} gallons = ${galToLit.toFixed(2)} liters`;
}

function mass(num) {
	let kToPound = num * 2.205;
	let poundToK = num / 2.205;
	pElThree.textContent = `${num} kilos = ${kToPound.toFixed(
		2
	)} pounds | ${num} pounds = ${poundToK.toFixed(2)} kilos`;
}
