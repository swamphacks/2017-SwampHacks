var selectedFile;
//get the data from mymlh; first, we need the access token.
var access_token = window.location.href.split(/[&#]/)[1].replace('access_token=', '');
var request_url = "https://my.mlh.io/api/v2/user/?access_token=" + access_token;
console.log(request_url);


$.ajax({
    type: 'GET',
    dataType: 'json',
    headers : {"Access-Control-Allow-Origin" : "*"},
    url: request_url,
    success: function(res) {
        console.log(res.data);
        populateForm(res.data);
    },
    error: function(err) {
        //whatever
    }
});

var populateForm = function(items) {
    //get the values
    var firstname = items["first_name"];
    var lastname = items["last_name"];
    var dob = items["date_of_birth"];
    var gender = items["gender"];
    var phone = items["phone_number"];
    var major = items["major"];
    var email = items["email"];
    var school = items["school"]["name"];
    var diet = items["dietary_restrictions"];
    var shirt = items["shirt_size"];
    var graduation = items["level_of_study"];


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
    $('#shirt').val(shirt);
    $('#grad').val(graduation);
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
    var grad = $('#graduation').val();

    if(!firstname || !lastname || !dob || !phone || !major || !email || !school || !diet || !shirt || !gradYear || !study || !linkedin) {
        $('.error').text( "Did you fill out all the required fields?" );
    }

    else {
            //send the mail
            $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': 'VI7kGwBHlDIIoTRtdLcctw',
                    "name" : "SwampHacks - Thanks!", 
                    'message': {
                        'from_email': 'info@swamphacks.com',
                        'to': [
                        {
                            'email': email,
                            'name': firstname,
                            'type': 'to'
                        }
                        ],
                        'subject' : 'Hey ' + firstname + '! Thanks for applying to SwampHacks!',
                    }
                }
            });

firebase.database().ref('applicants').push({
    firstname, lastname, dob, gender, phone, major, email,
    school, diet, shirt, gradYear, study, linkedin, github
})
.then(() => {
    window.location.replace('complete.html');
});
}
});
