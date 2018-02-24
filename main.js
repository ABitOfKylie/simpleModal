var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);

function openModal(){
	modal.style.display = "block";	
	modalBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

function closeModal(){
	console.log(4,5,6);
	modal.style.display = "none";
	modalBtn.style.display = "block";
}

window.addEventListener("click", clickOutside);

function clickOutside(e){
	if(e.target == modal){
		modal.style.display = "none";
		modalBtn.style.display = "block";
	}
}
