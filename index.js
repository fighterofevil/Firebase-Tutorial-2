// window.alert("ok");


var mainText= document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");
var fireHeading= document.getElementById("fireHeading");


var firebaseHeadingRef=firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
	fireHeading.innerText=datasnapshot.val();
});


function submitClick(){
	// window.alert("it works");
	var fireRef=firebase.database().ref();

	var messageText=mainText.value;

	// fireRef.child("Text").set(messageText);
	fireRef.push().set(messageText);

}



