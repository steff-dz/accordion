const bass = document.querySelector('#rightSide');
const piano = document.querySelector('#leftSide');
const buttons = document.querySelectorAll('.buttons');

for (button of buttons) {
	button.addEventListener('click', () => {
		if (bass.style.animationName === '' && piano.style.animationName === '') {
			bass.style.animationName = 'moveBass';
			piano.style.animationName = 'moveKeyboard';
		} else {
			bass.style.animationName = '';
			piano.style.animationName = '';
		}
	});
}

let isDown;
let startX;
let startY;
let bassPosition;

bass.addEventListener('mousedown', function(e) {
	bass.classList.add('active');
	isDown = true;
	bassPosition = bass.getBoundingClientRect();
	startX = e.clientX;
	startY = e.clientY;
	//console.log(bassPosition, startX, startY);
});

bass.addEventListener('mouseup', function(e) {
	bass.classList.remove('active');
	isDown = false;
	//console.log(bass);
});

bass.addEventListener('mouseLeave', function(e) {
	bass.classList.remove('active');
	isDown = false;
});

bass.addEventListener('mousemove', function(e) {
	if (!isDown) {
		return;
	}
	let deltaX = startX - e.clientX;
	let deltaY = startY - e.clientY;
	bass.style.left = bassPosition.left - deltaX + 'px';
	bass.style.top = bassPosition.top - deltaY + 'px';
});
