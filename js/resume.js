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
    if(selectedFile === null) {
        //scold them for not uploading their resume. naughty children!
        $('.error').text("Naughty child! Upload your resume.").show();
    } else {

    var fileName = selectedFile.name;
    console.log(fileName);
    var storageRef = firebase.storage().ref('/resumes/' + fileName);
    var uploadTask = storageRef.put(selectedFile);
    //TODO: add a progress bar

    //put the email and password in the database
    e.preventDefault();
    /**var email = $('#email').val();
    var password = $('#password').val();
    firebase.database().ref('users').push({
        email,
        password
    })**/
    window.location.replace("https://my.mlh.io/oauth/authorize?client_id=4152857ec50532295c5cc45ec8a48e35ec1f093c9370aaeb71dbc2b3efe8f4aa&redirect_uri=https%3A%2F%2Fbrownac.github.io%2Fthanks.html&response_type=token");

}
});