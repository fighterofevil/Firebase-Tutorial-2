firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    $(".login-cover").hide();

    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal){
    	dialogPolyfill.registerDialog(dialog);
    }
    dialog.close();

  } else {
    // No user is signed in.
    // alert("you are not logged in")
    $(".login-cover").show();
    var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal){
    	dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});

// LOGIN PROCESS

$('#loginButton').click(
	function(){
		var email=$('#loginEmail').val();
		var password=$('#loginPassword').val();

		if (email !="" && password !=""){
			$('#loginProgress').show();
			$('#loginButton').hide();

			firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
				$('#loginError').show().text(error.message);
				$('#loginProgress').hide();
				$('#loginButton').show();				
			});
		}
	}
);


// LOGOUT PROCESS

$('#signOutButton').click(
	function(){
		firebase.auth().signOut().then(function(){
			// signout successful
		}, function(error){
			// error happened 
			alert(error.message);
		});
	}
);