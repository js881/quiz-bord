function mark() {
	// body...
	var firstQuation=document.quiz.capital.value;
	var secondQuation=document.quiz.html.value;
	var thirdQuation=document.quiz.full.value;
	var fourthQuation=document.quiz.Website.value;
	var correct=0;
	if(firstQuation == "KIGALI") {
		correct=correct+2.5;
	}
	if(secondQuation == "Hypertext Markup Language"){
		correct=correct+2.5;
	}
	if(thirdQuation == "Global Positioning System"){
		correct=correct+2.5;
	}
	if(fourthQuation == "a set of pages of information on the internet about a particular subject, published by a single person or organization"){
		correct=correct+2.5;
	}
	
	swal({title: "Thank you ", text: "YOU GOT " + correct + "/10", icon: "success"});



}