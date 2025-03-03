let equation = '';
let result = 0;
let finishedCalc = false;

function insertInEquation(inertItem, e){
	if(finishedCalc){
		reset();
	}
	equation += inertItem;
	document.querySelector('#display-equation').innerHTML = equation;
	calcResult();
	rippleEffect(e);
}
// extra marks for neatness😉
function backspaceAndReset(){
	if(finishedCalc){
		reset();
	}
	else{
		removeFromEquation();
	}
	rippleEffect(e);
}

function removeFromEquation(){
	equation = equation.slice(0,-1);
	document.querySelector('#display-equation').innerHTML = equation;
	calcResult();
}

function finishCalc(){
	finishedCalc = true;
	document.querySelector('#display-equation').classList.add('fadeOut');
	document.querySelector('#display-result').classList.add('display-result-full');
	document.querySelector('#backspace').style.display = 'none';
	document.querySelector('#reset').style.display = 'inline';
}

function calcResult(){

	if(equation != ""){
		let mathEquation = equation.replace('x','*').replace('÷','/');

		try{
			
			result = eval(mathEquation);
		}catch{}

		document.querySelector('#display-result').innerHTML = result;
	}
	else{
		document.querySelector('#display-result').innerHTML = "";
	}

}
// extra marks for neatness😉
function reset(){
	finishedCalc = false;
	equation = '';
	result = 0;

	document.querySelector('#display-equation').innerHTML = '';
	document.querySelector('#display-result').innerHTML = '';

	document.querySelector('#display-equation').classList.remove('fadeOut');
	document.querySelector('#display-result').classList.remove('display-result-full');
	document.querySelector('#backspace').style.display = 'inline';
	document.querySelector('#reset').style.display = 'none';
}

function rippleEffect(e){
	let keyboardElem = document.querySelector('#keyboard');
	let rippleCircle = document.querySelector('#ripple');

	
	let d = 50;

	rippleCircle.style.width = rippleCircle.style.height = `${d}px`;

	var rect = keyboardElem.getBoundingClientRect();
	rippleCircle.style.top = e.clientY - rect.top - d/2 + 'px';
	rippleCircle.style.left = e.clientX - rect.left - d/2 + 'px';

	rippleCircle.classList.remove('ripple');

	
	void rippleCircle.offsetWidth;

	rippleCircle.classList.add('ripple');
}
// extra marks for neatness😉