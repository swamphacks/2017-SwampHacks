var error = $('.error');
var err = $('.err');
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
    // create the user and redirect to the home page
    auth.createUserWithEmailAndPassword(email, pass);
    toastr.success('Check your email to confirm your account! Taking you home.');
  })
  .then(() => {
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000);
  })
  .catch(err => { console.log(err.message); });
};

//login event
$('#login').click(() => {
  var eMail = $('#eMail').val();
  var passWord = $('#passWord').val();

  if(eMail, passWord == "") {
    err.text( "Please don't leave any fields blank!" );
  } else if(!eMail.match(re)) {
    err.text( "Please enter a valid e-mail address!" );
  } else {
    //log them in
    firebase.auth().signInWithEmailAndPassword(eMail, passWord)
    .then(() => { document.location.href = 'index.html'; })
    .catch(err => { console.log(err.message); });
  }

});

//log out event
$('.logout').click(() => {
  firebase.auth().signOut()
  .catch(err => { console.log(err.message); });
});

//listener to watch for auth state changes
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in');
    $('.login').addClass("hide");
    $('.logout').removeClass("hide");
    $('.account').removeClass("hide");
  } else {
    console.log('not logged in');
    $('.login').removeClass("hide");
    $('.logout').addClass("hide");
    $('.account').addClass("hide");
  }

  //check if the email has been confirmed
  if(!user.emailVerified) {
    //send the mail
    user.sendEmailVerification();
  }

});
