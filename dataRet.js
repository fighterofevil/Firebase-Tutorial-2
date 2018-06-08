$(document).ready(function(){

	var rootRef=firebase.database().ref().child("Users");

	rootRef.on("child_added", snap=>{

		// alert(snap.val());
		
		var name=snap.child("Name").val();
		var email=snap.child("Email").val();

		$("#table_body").append("<tr><td>"+ name +"</td><td>"+ email +"</td><td><button>Remove</button></td></tr>");

	});

});
