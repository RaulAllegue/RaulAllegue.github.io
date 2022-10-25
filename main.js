const sidebar = document.getElementsByClassName('sidebar')[0];
const menubtn = document.getElementsByClassName('menubtn')[0];
const container = document.getElementsByClassName('container')[0];
let firstTime = 0;

function OpenBar(){
  sidebar.style.display = "block";
}
function CloseBar(){
	sidebar.style.display = 'none';
	  container.style.marginLeft = 'auto';
	  container.style.marginRight = 'auto';

	indice = -1;
}

let indice = -1;
menubtn.addEventListener('click', function(){
	indice*=-1;

	if (indice == 1) OpenBar();
	else CloseBar();
});