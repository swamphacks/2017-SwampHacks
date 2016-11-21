var error = $('.error');
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDz1rvxuYDgsqMrGMdZ4iBIOqUBGETAo04",
    authDomain: "swamphacks-confirmed-attendees.firebaseapp.com",
    databaseURL: "https://swamphacks-confirmed-attendees.firebaseio.com",
    storageBucket: "swamphacks-confirmed-attendees.appspot.com",
    messagingSenderId: "1008919618491"
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
		email
	})
	.then(() => {
		// log them in and redirect to the home page
		auth.createUserWithEmailAndPassword(email, pass);
	});
};

// add a listener to watch for auth state changes
firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          console.log(firebaseUser);
          firebaseUser.sendEmailVerification();
          window.location.replace('index.html');
		  //TODO: show the log out  button, make the login button disappear. figure out how to not send the verification email more than once.
        } else {
        	console.log('not logged in');
        }
      });