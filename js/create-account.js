var error = $('.error');
var err = $('.err');
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var selected;

//resume listener
$('#resume').on("change", function (event) {
  selected = event.target.files[0];
  console.log(selected);
});

$('#submit-info').click(() => {
  var email = $('#email').val();
  var password = $('#password').val();
  var passwordConfirm = $('#password-confirm').val();
  var name = $('#name').val();
  var school = $("#school").val();
  var radioVal = $('#r2');
  var radioVal2 = $('#r4');

  if(email, password, passwordConfirm, name, school == "") {
    error.text( "Please don't leave any fields blank!" );
  } else if(!email.match(re)) {
    error.text( "Please enter a valid email address!" );
  } else if(password != passwordConfirm) {
    error.text( "Passwords must match!" );
  } else if(password.length < 6) {
    error.text( "Password must be at least 6 characters in length!" );
  } else if (radioVal.is(':checked')) {
    error.text("You must agree to the MLH Code of Conduct!")
  } else if (radioVal2.is(':checked')) {
    error.text("You must agree to the privacy policy!");
  } else {
    submitData(email, password, name, school);
  }
});

var submitData = function(email, pass, name, school) {
	//submit the resume
    //const fileName = selected.name;
    //const storageRef = firebase.storage().ref('/resumes/' + fileName);
    //const uploadTask = storageRef.put(selectedFile);
    var events = "";
    var points = 0;
    var qr = "";
    var volunteer = false;
  firebase.database().ref('confirmed').child(email.split('.').join('').split('@').join('')).set({
    email, name, events, points, qr, volunteer, school
  })
  .then(() => {
    // create the user and redirect to the home page
    auth.createUserWithEmailAndPassword(email, pass)
    .then(user => {
    	user.sendEmailVerification();
      user.updateProfile({
        displayName : name
      });
    });
    toastr.success('Thanks for creating an account!');
  })
  .then(() => {
    setTimeout(() => {
      window.location.reload();
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
      .then( (user) => {
        if (user.displayName == null) {
          window.location.href = 'name.html';
        } else {
          setTimeout(() => {
            window.location.href = 'http://swamphacks.com/account';
          }, 500);
        }
      })
      .then(() => { toastr.success('Login successful!') })
      .catch(err => { toastr.error(err.message); });
    }
});

//log out event
$('.logout').click(() => {
  firebase.auth().signOut()
  .then(() => { toastr.success('Signed out.') })
  .catch(err => { console.log(err.message); });
});

//listener to watch for auth state changes
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in');
    $('nav').addClass("logged-in");
    $('.nav-apply').addClass("hide");
    $('.login').addClass("hide");
    $('.logout').removeClass("hide");
    $('.account').removeClass("hide");
  } else {
    console.log('not logged in');
    $('nav').removeClass("logged-in");
    $('.nav-apply').removeClass("hide");
    $('.login').removeClass("hide");
    $('.logout').addClass("hide");
    $('.account').addClass("hide");
  }
});
