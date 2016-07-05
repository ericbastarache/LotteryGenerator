var pick = 0, dateVal = 0;

function getNumber1() {
	dateVal = new Date();
	pick = dateVal.getTime();
	pick = (pick * pick) % 49 + 1;
	document.getElementById("number1").innerHTML = pick;
}

function getNumber2() {
	dateVal = new Date();
	pick = dateVal.getTime();
	pick = (pick * pick) % 49 + 1;
	document.getElementById("number2").innerHTML = pick;
}

function getNumber3() {
	dateVal = new Date();
	pick = dateVal.getTime();
	pick = (pick * pick) % 49 + 1;
	document.getElementById("number3").innerHTML = pick;
}

function getNumber4() {
	dateVal = new Date();
	pick = dateVal.getTime();
	pick = (pick * pick) % 49 + 1;
	document.getElementById("number4").innerHTML = pick;
}

function getNumber5() {
	dateVal = new Date();
	pick = dateVal.getTime();
	pick = (pick * pick) % 49 + 1;
	document.getElementById("number5").innerHTML = pick;
}

function getNumber6() {
	dateVal = new Date();
	pick = dateVal.getTime();
	pick = (pick * pick) % 49 + 1;
	document.getElementById("number6").innerHTML = pick;
}

var gen1 = document.getElementById("gen1");
var gen2 = document.getElementById("gen2");
var gen3 = document.getElementById("gen3");
var gen4= document.getElementById("gen4");
var gen5= document.getElementById("gen5");
var gen6 = document.getElementById("gen6");

gen1.addEventListener('click', function () {
	getNumber1();
});

gen2.addEventListener('click', function () {
	getNumber2();
});

gen3.addEventListener('click', function () {
	getNumber3();
});

gen4.addEventListener('click', function () {
	getNumber4();
});

gen5.addEventListener('click', function () {
	getNumber5();
});

gen6.addEventListener('click', function () {
	getNumber6();
});