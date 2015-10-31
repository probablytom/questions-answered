var myDataRef = new Firebase('https://sizzling-heat-3896.firebaseio.com');

myDataRef.on('child_added', function(snapshot) {
	var added_entry = snapshot.val();
	console.log("Added question was: ");
	console.log(added_entry);
});

myDataRef.on('child_changed', function(snapshot) {
	var child_changed = snapshot.val();
	console.log("Changed child was: ");
	console.log(child_changed);
});

function submitQuestion() {
	//var questionText = $("new_question").val();
	//console.log(questionText);
	myDataRef.push({question: $("#new_question").val(), answer: null});
}

$("#add_question_button").click( submitQuestion() );

function submitAnswer(question_id, answer_text) {
}
