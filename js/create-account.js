var error = $('.error');
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var config = {
  		apiKey: "AIzaSyCKrjgs7TMiPDl-nqaqnBTAhigNrNszQPk",
  		authDomain: "swamphacks-a6338.firebaseapp.com",
  		databaseURL: "https://swamphacks-a6338.firebaseio.com",
  		storageBucket: "swamphacks-a6338.appspot.com",
  		messagingSenderId: "949283718048"
  	};
var app = firebase.initializeApp(config);
var auth = app.auth();

$('#submit-info').click(e => {
	e.preventDefault();
	var email = $('#email').val();
	var password = $('#password').val();
	var passwordConfirm = $('#password-confirm').val();

	if(email, password, passwordConfirm == "") {
		error.text( "Please don't leave any fields blank!" );
	} else if(!email.match(re)) {
		error.text( "Please enter a valid email address!" );
	} else if(password != passwordConfirm) {
		error.text( "Passwords must match!" );
	} else if(password.length < 6) {
		error.text( "Password must be at least 6 characters in length!" );
	} else {
		submitData(email, password, passwordConfirm);
	}
});

var submitData = function(email, pass) {
	firebase.database().ref('confirmed-attendees').push({
		email, pass
	})
	.then(() => {
		// log them in and redirect to the home page
		auth.createUserWithEmailAndPassword(email, pass);

		firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          firebaseUser.sendEmailVerification();
          console.log('the email sent');
          window.location.replace('index.html');
        } else {
          console.log('something is wrong');
        }
      });
	});
};