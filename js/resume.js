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
};


//watch for the uploaded files
$('#resume').on("change", function (event) {
   selectedFile = event.target.files[0];
});

$('#submit-info').click(e => {
        var fileName = selectedFile.name;
        console.log(fileName);
        var storageRef = firebase.storage().ref('/resumes/' + fileName);
        var uploadTask = storageRef.put(selectedFile);
    //grab the values
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var dob = $('#dob').val();
        var gender = $('#gender').val();
        var phone = $('#phone').val();
        var major = $('#major').val();
        var email = $('#email').val();
        var school = $('#school').val();
        var diet = $('#diet').val();
        var shirt = $('#shirt').val();
        var gradYear = $('#grad').val();
        var study = $('#study').val();
        var linkedin = $('#linkedin').val();
        var github = $('#github').val();

        if(!firstname || !lastname || !dob || !phone || !major || !email || !school || !diet || !shirt || !gradyear || !study) {
            $('.error').text( "Did you fill out all the fields?" );
        }



    firebase.database().ref('applicants').push({
        firstname, lastname, dob, gender, phone, major, email,
        school, diet, shirt, gradYear, study, linkedin, github
    }).then(() => {
        window.location.replace('complete.html');
    });
});
