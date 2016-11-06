var selectedFile;
var config = {
    apiKey: "AIzaSyCKrjgs7TMiPDl-nqaqnBTAhigNrNszQPk",
    authDomain: "swamphacks-a6338.firebaseapp.com",
    databaseURL: "https://swamphacks-a6338.firebaseio.com",
    storageBucket: "swamphacks-a6338.appspot.com",
    messagingSenderId: "949283718048"
};
firebase.initializeApp(config);

//watch for the uploaded files
$('#resume').on("change", function (event) {
   selectedFile = event.target.files[0];
});

$('#submit-info').click(e => {
    var fileName = selectedFile.name;
    console.log(fileName);
    var storageRef = firebase.storage().ref('/resumes/' + fileName);
    var uploadTask = storageRef.put(selectedFile);
    //TODO: add a progress bar

    //put the email and password in the database
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    firebase.database().ref('users').push({
        email,
        password
    }).then(() => {
        window.location.replace("index.html");
    });
});

$(document).ready(function(){
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  };

  var access_token = getUrlParameter('access_token');

  $.getJSON( "http://cors.io/?u=https://my.mlh.io/api/v2/user.json?access_token=90084152836baa97a47c411b2c79680eeb89a08199f7347fd0b002442443d030", function( json ) {
    //alert( "JSON Data: " + json.status );
    $("#email").val(json.data.email);
   });

});
