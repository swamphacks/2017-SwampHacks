var config = {
  apiKey: "AIzaSyDz1rvxuYDgsqMrGMdZ4iBIOqUBGETAo04",
  authDomain: "swamphacks-confirmed-attendees.firebaseapp.com",
  databaseURL: "https://swamphacks-confirmed-attendees.firebaseio.com",
  storageBucket: "swamphacks-confirmed-attendees.appspot.com",
  messagingSenderId: "1008919618491"
};
var app = firebase.initializeApp(config);
var auth = app.auth();
// expand

$('#update').click(() => {
	$('.cancel').slideToggle('fast');
})

//cancel

$('#cancel-attendance').click(() => {
	const user = firebase.auth().currentUser;
	const userEmail = user.email;
	const email = $('#cancel-email').val();


	if (userEmail.match(email)) {
		//DESTROY
		user.delete()
		.then(() => {
			toastr.success('Your attendence for SawmpHacks 2017 has been cancelled. Taking you home.');
		})
		.then(() => {
			setTimeout(() => {
				window.location.href = 'index.html';
			}, 2000);
		})
		.catch(err => { console.log(err.message); });
	}
})
