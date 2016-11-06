var selectedFile;
/**var app = firebase.initializeApp({
    apiKey: firebase.api_key,
    authDomain: firebase.auth_domain,
    databaseURL: firebase.database_url,
    storageBucket: firebase.storage_bucket
});**/

//get the data from mymlh; first, we need the access token.
var access_token = window.location.href.split(/[&#]/)[1].replace('access_token=', '');
var request_url = "https://my.mlh.io/api/v1/user/?access_token=" + access_token;
console.log(request_url);

function getData() {
    window.location.replace('https://my.mlh.io/oauth/authorize?client_id=4152857ec50532295c5cc45ec8a48e35ec1f093c9370aaeb71dbc2b3efe8f4aa&redirect_uri=https%3A%2F%2Fbrownac.github.io%2Fresume.html&response_type=token');
}

$.ajax({
    type: 'GET',
    dataType: 'json',
    url: request_url,
    success: function(res) {
        console.log(res.data);
        var fields = $.map(res.data, function(val) {
            return val;
        });
        console.log(fields);
        populateForm(fields);
    },
    error: function(err) {
        //whatever
    }
});
        
var populateForm = function(items) {
    //get the values
    var firstname = items[4];
    var lastname = items[5];
    var dob = items[10];
    var gender = items[11];
    var phone = items[12];
    var major = items[6];
    var email = items[1];
    var school = items[13]['name'];
    var diet = items[8];
    var shirt = items[7];

    //put them in the fields
    $('#firstname').val(firstname);
    $('#lastname').val(lastname);
    $('#dob').val(dob);
    $('#gender').val(gender);
    $('#phone').val(phone);
    $('#major').val(major);
    $('#email').val(email);
    //grad year?
    $('#school').val(school);
    $('#diet').val(diet);
    $('#shirt').val(shirt)
    //todo: see if there are any more fields we can get
    
    //submit to the database
    firebase.database().ref('applicants').push({
        firstname, lastname, dob, gender, phone, major, email,
        school, diet, shirt
    });
};


//watch for the uploaded files
$('#resume').on("change", function (event) {
   selectedFile = event.target.files[0];
});

$('#submit-info').click(e => {
    if(selectedFile == null) {
        //scold them for not uploading their resume. naughty children!
        $('.error').text("Naughty child! Upload your resume.").show().fadeOut(2000);
    } else if(selectedFile.name.split('.').pop() != 'pdf') {
        $('.error').text("Naughty child! Only PDF's are accepted here.").show().fadeOut(2000);
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