//EVENTS FOR ACCOUNT MAANAGEMENT

var selectedFile;

var config = {
  apiKey: confirmed_keys.apiKey,
  authDomain: confirmed_keys.authDomain,
  databaseURL: confirmed_keys.databaseURL,
  storageBucket: confirmed_keys.storageBucket,
  messagingSenderId: confirmed_keys.messagingSenderId
};
var app = firebase.initializeApp(config);
var auth = app.auth();

// expand

$('#update').click(() => {
	$('.cancel').slideToggle('fast');
  if($('.travel').is(":visible")){
    $('.travel').slideToggle('fast');
  }
})

$('#reimburse').click(() => {
  $('.travel').slideToggle('fast');
  if($('.cancel').is(":visible")){
    $('.cancel').slideToggle('fast');
  }
})

$("#submit-name").click( () => {
  var user = firebase.auth().currentUser;
  var email = user.email;
  var mail = email.split("@").join("").split(".").join("");
  var name = $("#name").val();
  console.log(name);
  if (name == "")
    $(".error").text("Please enter your name!");
  else {
      user.updateProfile({
        displayName : name
      });
      firebase.database().ref('confirmed').child(mail).update({ 'name' : name })
      .then( () => {
        setTimeout(() => {
          window.location.href = 'account.html';
        }, 1000)
      });
    }
})

//cancel

$('#cancel-attendance').click(() => {
	const user = firebase.auth().currentUser;
	console.log(user)
	const userEmail = user.email;
  const name = user.displayName;
	const email = $('#cancel-email').val();


	if(email == "") {
		$('.error').text("Please enter an email address!");
	} else if (userEmail.match(email)) {
		//DESTROY
		user.delete()
		.then(() => {
			toastr.success('Your attendence for SawmpHacks 2017 has been cancelled. Taking you home.');
		})
		.then(() => {
			setTimeout(() => {
				window.location.href = 'http://swamphacks.com';
			}, 2000);
		})
		.catch(err => { toastr.error(err.message); });
	}
})

// travel reimbursement
$('#resume').on("change", function (event) {
  selectedFile = event.target.files[0];
});

/**$('#submit-travel').click(() => {
  const usr = firebase.auth().currentUser;
  const usrEmail = usr.email;
  const location = $('#location').val();
  const method = $('#method').val();
  const cost = $('#cost').val();

  if (location, method, cost == "") {
    $('.travel-error').text("Please don't leave any fields blank!");
  } else {
    const fileName = selectedFile.name;
    const storageRef = firebase.storage().ref('/receipts/' + fileName);
    const uploadTask = storageRef.put(selectedFile);
    //submit to firebase
    firebase.database().ref('travel-reimbursement-applications').push({
      usrEmail, location, method, cost
    })
    .then(() => {
      toastr.success("You have applied for travel reimbursement. Keep an eye on your inbox regarding your status.");
      setTimeout(() => {
        window.location.href = "http://swamphacks.com/account";
      }, 2000);
    })
    .catch(err => { toastr.error(err.message); });
  }
}) **/

firebase.auth().onAuthStateChanged(user => {
    $("#logged-name").text(user.displayName);
    console.log(user.displayName);
});
