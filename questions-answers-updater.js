
var myDataRef = new Firebase('https://sizzling-heat-3896.firebaseio.com');



$(document).ready( function() {

	myDataRef.on('child_added', function(snapshot) {
		$("#questions-container").append("<h3>" + snapshot.val()["question_text"] + "</h3>");
		console.log(snapshot.val());
	});

	myDataRef.on('child_changed', function(snapshot) {
		var answers = snapshot.val()["answer_text"];
		console.log(answers);
	});

});


function submitQuestion() {
	question_text = $("#new_question").val();
	console.log(question_text);
	myDataRef.push({question_text: question_text, answer_text: {none: null}});
}

function submitAnswer(question_id, answer_text) {
}
		
