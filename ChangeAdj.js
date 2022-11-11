const adj = document.getElementById('adj');

const colorCode =['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const adjArr = ['Passionate', 'Self Learning', 'Responsible', 'Junior', 'Individual', 'Former', 'Freelance', 'Casual', 'Functional'];
let index = -1;

setInterval(function(){
	let rnd = Math.floor(Math.random()*adjArr.length);
	let color = '#';

	for (let i=0; i<3; i++){
		let colorRnd = Math.floor(Math.random()*colorCode.length);
		color += colorCode[colorRnd];
	}


	index *= -1;
	if (index == 1){
		adj.style.color = 'white';
		adj.style.transition = '0.5s';
	}
	if (index == -1){
		adj.textContent = adjArr[rnd] + ',';
		adj.style.color = color;
		adj.style.transition = '0.5s';
	}

}, 3000)