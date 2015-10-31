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

$("#add_question_button").click( submitQuestion() );

function submitQuestion() {
	var questionText = $("#new_question").val();
	console.log(questionText);
	myDataRef.push({'question_text': question_text, 'answer_text': null});
}

function submitAnswer(question_id, answer_text) {
}
