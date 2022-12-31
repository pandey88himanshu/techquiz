var generateResult = document.getElementById("sub-btn");
var answers = document.querySelectorAll('input[type="radio"]');
var score = 0;
var nextBtn = document.getElementById("nxt-btn");

generateResult.addEventListener("click", function(){
	generateResult.disabled="true";
	for(let item of answers){
		if(item.checked){
			if(item.value=="correct"){
				score+=1;
				let iD = item.getAttribute("data-span-id");
				let circleCheck = document.getElementById(iD);
				circleCheck.classList.add("show");
			}
			else{
				item.nextElementSibling.classList.add("colRed");
				let iD = item.getAttribute("data-span-id");
				let circleWrong = document.getElementById(iD);
				circleWrong.classList.add("show");
			}
		}
		if(item.value=="correct"){
			item.nextElementSibling.classList.add("colGreen");
		}
		item.disabled="true";
	}
	let message = "You have scored " + score*10 + "%"; 
	alert(message);
});

nextBtn.addEventListener("click", function(){
	if(score<8){
		alert("Score 80% or more to proceed to next stage")
	}
	else{
		window.location.href=nextBtn.getAttribute("data-next-page");
	}
});