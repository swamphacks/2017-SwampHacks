var selectedFile;
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
                    'message': {
                        'from_email': 'info@swamphacks.com',
                        'to': [
                        {
                            'email': email,
                            'name': firstname,
                            'type': 'to'
                        }
                        ],
                        'subject': 'Hey ' + firstname + '! Thanks for applying to SwampHacks!',
                        'html': 
                        <!doctype html>
                        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                        <head>
                        <!-- NAME: 1 COLUMN - BANDED -->
                        <!--[if gte mso 15]>
                        <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <title>*|SUBJECT|*</title>
                        
                        <style type="text/css">
                        p{
                            margin:10px 0;
                            padding:0;
                        }
                        table{
                            border-collapse:collapse;
                        }
                        h1,h2,h3,h4,h5,h6{
                            display:block;
                            margin:0;
                            padding:0;
                        }
                        img,a img{
                            border:0;
                            height:auto;
                            outline:none;
                            text-decoration:none;
                        }
                        body,#bodyTable,#bodyCell{
                            height:100%;
                            margin:0;
                            padding:0;
                            width:100%;
                        }
                        #outlook a{
                            padding:0;
                        }
                        img{
                            -ms-interpolation-mode:bicubic;
                        }
                        table{
                            mso-table-lspace:0pt;
                            mso-table-rspace:0pt;
                        }
                        .ReadMsgBody{
                            width:100%;
                        }
                        .ExternalClass{
                            width:100%;
                        }
                        p,a,li,td,blockquote{
                            mso-line-height-rule:exactly;
                        }
                        a[href^=tel],a[href^=sms]{
                            color:inherit;
                            cursor:default;
                            text-decoration:none;
                        }
                        p,a,li,td,body,table,blockquote{
                            -ms-text-size-adjust:100%;
                            -webkit-text-size-adjust:100%;
                        }
                        .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
                            line-height:100%;
                        }
                        a[x-apple-data-detectors]{
                            color:inherit !important;
                            text-decoration:none !important;
                            font-size:inherit !important;
                            font-family:inherit !important;
                            font-weight:inherit !important;
                            line-height:inherit !important;
                        }
                        .templateContainer{
                            max-width:600px !important;
                        }
                        a.mcnButton{
                            display:block;
                        }
                        .mcnImage{
                            vertical-align:bottom;
                        }
                        .mcnTextContent{
                            word-break:break-word;
                        }
                        .mcnTextContent img{
                            height:auto !important;
                        }
                        .mcnDividerBlock{
                            table-layout:fixed !important;
                        }
    /*
    @tab Page
    @section Background Style
    @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
    */
    body,#bodyTable{
        /*@editable*/background-color:#FAFAFA;
    }
    /*
    @tab Page
    @section Background Style
    @tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
    */
    #bodyCell{
        /*@editable*/border-top:0;
    }
    /*
    @tab Page
    @section Heading 1
    @tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
    @style heading 1
    */
    h1{
        /*@editable*/color:#202020;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:26px;
        /*@editable*/font-style:normal;
        /*@editable*/font-weight:bold;
        /*@editable*/line-height:125%;
        /*@editable*/letter-spacing:normal;
        /*@editable*/text-align:left;
    }
    /*
    @tab Page
    @section Heading 2
    @tip Set the styling for all second-level headings in your emails.
    @style heading 2
    */
    h2{
        /*@editable*/color:#202020;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:22px;
        /*@editable*/font-style:normal;
        /*@editable*/font-weight:bold;
        /*@editable*/line-height:125%;
        /*@editable*/letter-spacing:normal;
        /*@editable*/text-align:left;
    }
    /*
    @tab Page
    @section Heading 3
    @tip Set the styling for all third-level headings in your emails.
    @style heading 3
    */
    h3{
        /*@editable*/color:#202020;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:20px;
        /*@editable*/font-style:normal;
        /*@editable*/font-weight:bold;
        /*@editable*/line-height:125%;
        /*@editable*/letter-spacing:normal;
        /*@editable*/text-align:left;
    }
    /*
    @tab Page
    @section Heading 4
    @tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
    @style heading 4
    */
    h4{
        /*@editable*/color:#202020;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:18px;
        /*@editable*/font-style:normal;
        /*@editable*/font-weight:bold;
        /*@editable*/line-height:125%;
        /*@editable*/letter-spacing:normal;
        /*@editable*/text-align:left;
    }
    /*
    @tab Preheader
    @section Preheader Style
    @tip Set the background color and borders for your email's preheader area.
    */
    #templatePreheader{
        /*@editable*/background-color:#FAFAFA;
        /*@editable*/background-image:none;
        /*@editable*/background-repeat:no-repeat;
        /*@editable*/background-position:center;
        /*@editable*/background-size:cover;
        /*@editable*/border-top:0;
        /*@editable*/border-bottom:0;
        /*@editable*/padding-top:9px;
        /*@editable*/padding-bottom:9px;
    }
    /*
    @tab Preheader
    @section Preheader Text
    @tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
    */
    #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
        /*@editable*/color:#656565;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:12px;
        /*@editable*/line-height:150%;
        /*@editable*/text-align:left;
    }
    /*
    @tab Preheader
    @section Preheader Link
    @tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
    */
    #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
        /*@editable*/color:#656565;
        /*@editable*/font-weight:normal;
        /*@editable*/text-decoration:underline;
    }
    /*
    @tab Header
    @section Header Style
    @tip Set the background color and borders for your email's header area.
    */
    #templateHeader{
        /*@editable*/background-color:#FFFFFF;
        /*@editable*/background-image:none;
        /*@editable*/background-repeat:no-repeat;
        /*@editable*/background-position:center;
        /*@editable*/background-size:cover;
        /*@editable*/border-top:0;
        /*@editable*/border-bottom:0;
        /*@editable*/padding-top:9px;
        /*@editable*/padding-bottom:0;
    }
    /*
    @tab Header
    @section Header Text
    @tip Set the styling for your email's header text. Choose a size and color that is easy to read.
    */
    #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
        /*@editable*/color:#202020;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:16px;
        /*@editable*/line-height:150%;
        /*@editable*/text-align:left;
    }
    /*
    @tab Header
    @section Header Link
    @tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
    */
    #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
        /*@editable*/color:#2BAADF;
        /*@editable*/font-weight:normal;
        /*@editable*/text-decoration:underline;
    }
    /*
    @tab Body
    @section Body Style
    @tip Set the background color and borders for your email's body area.
    */
    #templateBody{
        /*@editable*/background-color:#FFFFFF;
        /*@editable*/background-image:none;
        /*@editable*/background-repeat:no-repeat;
        /*@editable*/background-position:center;
        /*@editable*/background-size:cover;
        /*@editable*/border-top:0;
        /*@editable*/border-bottom:0;
        /*@editable*/padding-top:9px;
        /*@editable*/padding-bottom:9px;
    }
    /*
    @tab Body
    @section Body Text
    @tip Set the styling for your email's body text. Choose a size and color that is easy to read.
    */
    #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
        /*@editable*/color:#202020;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:16px;
        /*@editable*/line-height:150%;
        /*@editable*/text-align:left;
    }
    /*
    @tab Body
    @section Body Link
    @tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
    */
    #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
        /*@editable*/color:#2BAADF;
        /*@editable*/font-weight:normal;
        /*@editable*/text-decoration:underline;
    }
    /*
    @tab Footer
    @section Footer Style
    @tip Set the background color and borders for your email's footer area.
    */
    #templateFooter{
        /*@editable*/background-color:#FAFAFA;
        /*@editable*/background-image:none;
        /*@editable*/background-repeat:no-repeat;
        /*@editable*/background-position:center;
        /*@editable*/background-size:cover;
        /*@editable*/border-top:0;
        /*@editable*/border-bottom:0;
        /*@editable*/padding-top:9px;
        /*@editable*/padding-bottom:9px;
    }
    /*
    @tab Footer
    @section Footer Text
    @tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
    */
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
        /*@editable*/color:#656565;
        /*@editable*/font-family:Helvetica;
        /*@editable*/font-size:12px;
        /*@editable*/line-height:150%;
        /*@editable*/text-align:center;
    }
    /*
    @tab Footer
    @section Footer Link
    @tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
    */
    #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
        /*@editable*/color:#656565;
        /*@editable*/font-weight:normal;
        /*@editable*/text-decoration:underline;
    }
    @media only screen and (min-width:768px){
        .templateContainer{
            width:600px !important;
        }

    }   @media only screen and (max-width: 480px){
        body,table,td,p,a,li,blockquote{
            -webkit-text-size-adjust:none !important;
        }

    }   @media only screen and (max-width: 480px){
        body{
            width:100% !important;
            min-width:100% !important;
        }

    }   @media only screen and (max-width: 480px){
        #bodyCell{
            padding-top:10px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImage{
            width:100% !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer{
            max-width:100% !important;
            width:100% !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnBoxedTextContentContainer{
            min-width:100% !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImageGroupContent{
            padding:9px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
            padding-top:9px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImageCardTopImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
            padding-top:18px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImageCardBottomImageContent{
            padding-bottom:9px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImageGroupBlockInner{
            padding-top:0 !important;
            padding-bottom:0 !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImageGroupBlockOuter{
            padding-top:9px !important;
            padding-bottom:9px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnTextContent,.mcnBoxedTextContentColumn{
            padding-right:18px !important;
            padding-left:18px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
            padding-right:18px !important;
            padding-bottom:0 !important;
            padding-left:18px !important;
        }

    }   @media only screen and (max-width: 480px){
        .mcpreview-image-uploader{
            display:none !important;
            width:100% !important;
        }

    }   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Heading 1
    @tip Make the first-level headings larger in size for better readability on small screens.
    */
    h1{
        /*@editable*/font-size:22px !important;
        /*@editable*/line-height:125% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Heading 2
    @tip Make the second-level headings larger in size for better readability on small screens.
    */
    h2{
        /*@editable*/font-size:20px !important;
        /*@editable*/line-height:125% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Heading 3
    @tip Make the third-level headings larger in size for better readability on small screens.
    */
    h3{
        /*@editable*/font-size:18px !important;
        /*@editable*/line-height:125% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Heading 4
    @tip Make the fourth-level headings larger in size for better readability on small screens.
    */
    h4{
        /*@editable*/font-size:16px !important;
        /*@editable*/line-height:150% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Boxed Text
    @tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
    */
    .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
        /*@editable*/font-size:14px !important;
        /*@editable*/line-height:150% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Preheader Visibility
    @tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
    */
    #templatePreheader{
        /*@editable*/display:block !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Preheader Text
    @tip Make the preheader text larger in size for better readability on small screens.
    */
    #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
        /*@editable*/font-size:14px !important;
        /*@editable*/line-height:150% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Header Text
    @tip Make the header text larger in size for better readability on small screens.
    */
    #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
        /*@editable*/font-size:16px !important;
        /*@editable*/line-height:150% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Body Text
    @tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
    */
    #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
        /*@editable*/font-size:16px !important;
        /*@editable*/line-height:150% !important;
    }

}   @media only screen and (max-width: 480px){
    /*
    @tab Mobile Styles
    @section Footer Text
    @tip Make the footer content text larger in size for better readability on small screens.
    */
    #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
        /*@editable*/font-size:14px !important;
        /*@editable*/line-height:150% !important;
    }

}</style></head>
<body>
<center>
<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
<tr>
<td align="center" valign="top" id="bodyCell">
                        <!-- BEGIN TEMPLATE // -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                        <td align="center" valign="top" id="templatePreheader">
                        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                        <td valign="top" class="preheaderContainer"></td>
                        </tr>
                        </table>
                        <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        <tr>
                        <td align="center" valign="top" id="templateHeader">
                        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                        <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                        <tbody class="mcnImageBlockOuter">
                        <tr>
                        <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                        <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                        
                        
                        <img align="center" alt="" src="https://gallery.mailchimp.com/44a52d9dbedc78feec6c91b97/images/6c7722ac-64c0-498e-8cd3-6170db1fa638.gif" width="370" style="max-width:370px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                        
                        
                        </td>
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody>
                        </table></td>
                        </tr>
                        </table>
                        <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        <tr>
                        <td align="center" valign="top" id="templateBody">
                        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                        <td valign="top" class="bodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                        <tbody class="mcnTextBlockOuter">
                        <tr>
                        <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                        <!--[if mso]>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                        <tr>
                        <![endif]-->
                        
                        <!--[if mso]>
                        <td valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                        
                        <h1>You did it! You applied to SwampHacks 2017.</h1>

                        <p>Thanks for applying! &nbsp;Keep an eye on your inbox in the coming weeks as we release decisions. &nbsp;In the meantime, feel free to share SwampHacks on any social platform with #swamphacks17. Go ahead! It feels good!&nbsp;<a href="http://twitter.com/intent/tweet?text=Applied%20to%20SwampHacks%202017!!%20See%20y%27all%20in%20January!&amp;url=http://2017.swamphacks.com/&amp;hashtags=swamphacks2017" target="_blank">Tweet</a>&nbsp;or&nbsp;<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F2017.swamphacks.com%2F&amp;src=sdkpreparse" target="_blank">post on Facebook</a>!&nbsp;<br>
                        <br>
                        We hope to see you in the Swamp in January!<br>
                        <br>
                        Regards,<br>
                        The SwampHacks Team</p>

                        </td>
                        </tr>
                        </tbody></table>
                        <!--[if mso]>
                        </td>
                        <![endif]-->
                        
                        <!--[if mso]>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        </tbody>
                        </table></td>
                        </tr>
                        </table>
                        <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        <tr>
                        <td align="center" valign="top" id="templateFooter">
                        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                        <td align="center" valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                        <tr>
                        <td valign="top" class="footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock" style="min-width:100%;">
                        <tbody class="mcnFollowBlockOuter">
                        <tr>
                        <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width:100%;">
                        <tbody><tr>
                        <td align="center" style="padding-left:9px;padding-right:9px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnFollowContent">
                        <tbody><tr>
                        <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                        <td align="center" valign="top">
                        <!--[if mso]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                        <![endif]-->
                        
                        <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->
                        
                        
                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                        <tbody><tr>
                        <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                        <tbody><tr>
                        <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                        <tbody><tr>
                        
                        <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                        <a href="https://twitter.com/SwampHacks" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-twitter-48.png" style="display:block;" height="24" width="24" class=""></a>
                        </td>
                        
                        
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        
                        <!--[if mso]>
                        </td>
                        <![endif]-->
                        
                        <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->
                        
                        
                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                        <tbody><tr>
                        <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                        <tbody><tr>
                        <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                        <tbody><tr>
                        
                        <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                        <a href="https://www.facebook.com/SwampHacks/" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                        </td>
                        
                        
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        
                        <!--[if mso]>
                        </td>
                        <![endif]-->
                        
                        <!--[if mso]>
                        <td align="center" valign="top">
                        <![endif]-->
                        
                        
                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                        <tbody><tr>
                        <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                        <tbody><tr>
                        <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                        <tbody><tr>
                        
                        <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                        <a href="https://swamphacks.com" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png" style="display:block;" height="24" width="24" class=""></a>
                        </td>
                        
                        
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        
                        <!--[if mso]>
                        </td>
                        <![endif]-->
                        
                        <!--[if mso]>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>
                        </td>
                        </tr>
                        </tbody></table>

                        </td>
                        </tr>
                        </tbody>
                        </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
                        <tbody class="mcnDividerBlockOuter">
                        <tr>
                        <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                        <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 2px solid #EEEEEE;">
                        <tbody><tr>
                        <td>
                        <span></span>
                        </td>
                        </tr>
                        </tbody></table>
                        <!--            
                        <td class="mcnDividerBlockInner" style="padding: 18px;">
                        <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
                        -->
                        </td>
                        </tr>
                        </tbody>
                        </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                        <tbody class="mcnTextBlockOuter">
                        <tr>
                        <td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
                        <!--[if mso]>
                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                        <tr>
                        <![endif]-->
                        
                        <!--[if mso]>
                        <td valign="top" width="600" style="width:600px;">
                        <![endif]-->
                        <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
                        <tbody><tr>
                        
                        <td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
                        
                        <em>Copyright © 2017 SwampHacks, All rights reserved.</em><br>
                        <br>
                        Want to change how you receive these emails?<br>
                        You can <a href="*|UPDATE_PROFILE|*">update your preferences</a> or <a href="*|UNSUB|*">unsubscribe from this list</a>
                        </td>
                        </tr>
                        </tbody></table>
                        <!--[if mso]>
                        </td>
                        <![endif]-->
                        
                        <!--[if mso]>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        </tbody>
                        </table></td>
                        </tr>
                        </table>
                        <!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </td>
                        </tr>
                        </table>
                        <!-- // END TEMPLATE -->
                        </td>
                        </tr>
                        </table>
                        </center>
                        </body>
                        </html>
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
