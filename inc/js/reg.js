var regdata;
$('.afterVerification').hide();
const firebaseConfig = {
    apiKey: "AIzaSyDy_dISvcQty9f9le0aXL2LnMx_41xTLLU",
    authDomain: "poss-ef855.firebaseapp.com",
    projectId: "poss-ef855",
    storageBucket: "poss-ef855.appspot.com",
    messagingSenderId: "468971859534",
    appId: "1:468971859534:web:5a177786c64649ca349d1f",
    measurementId: "G-VK6NBH95LZ"
};
firebase.initializeApp(firebaseConfig);
function sendOTP(number) {


    var phoneNumber = number;
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            $('.beforeVerification').hide();
            $('.afterVerification').show();
            window.confirmationResult = confirmationResult;
        })
        .catch(function (error) {
            console.error("Error sending OTP: ", error);
        });
}
function verifyOTP() {
    //console.log(regdata);
    var verificationCode = document.getElementById('otp').value;
    confirmationResult.confirm(verificationCode)
        .then(function (result) {
            // console.log("User signed in: ", result);
            $.ajax({
                type: "POST",
                url: "register",
                data: regdata,
                success: function (response) {
                    // alert('Profile Created Successfully');
                    window.location.href = "dashboard";
                }
            });
        })
        .catch(function (error) {
            console.error("Error verifying OTP: ", error);
        });
}


$('#compname').on("input", function () {
    // Print entered value in a div box
    $('#inv_compname_empty').hide();
    document.getElementById('compname').style.borderColor = "gray";
});

$('#compphone').on("input", function () {
    // Print entered value in a div box
    $('#inv_compphone_empty').hide();
    document.getElementById('compphone').style.borderColor = "gray";
});

$('#compusername').on("input", function () {
    // Print entered value in a div box
    $('#inv_compusername_empty').hide();
    $('#inv_compusername_empty').hide();
    document.getElementById('compusername').style.borderColor = "gray";

    len = $('#compusername').val();

    if (len.length >= 8) {
        $('#inv_compusername_length').hide();
        document.getElementById('compusername').style.borderColor = "gray";

        // check from server if exist already
        // alert("sending");
        $.ajax({
            type: "POST",
            url: "checkname",
            data: { 'uname': len },
            success: function (response) {
                // alert(response); 
                if (response == 0) {
                    $('#inv_compusername_exist').show();
                    document.getElementById('compusername').style.borderColor = "red";
                    $('#acc').val(0);
                }
                else {
                    $('#inv_compusername_exist').hide();
                    document.getElementById('compusername').style.borderColor = "green";
                    $('#acc').val(1);
                }
            }
        });
        ///

    }


});

$('#comppassword').on("input", function () {
    // Print entered value in a div box
    $('#inv_comppassword_empty').hide();
    $('#inv_comppasswordconf').hide();

    document.getElementById('comppassword').style.borderColor = "gray";
    document.getElementById('comppasswordconf').style.borderColor = "gray";
});

$('#comppasswordconf').on("input", function () {
    // Print entered value in a div box
    $('#inv_comppasswordconf').hide();

    document.getElementById('comppassword').style.borderColor = "gray";
    document.getElementById('comppasswordconf').style.borderColor = "gray";
});

$('#compemail').on("input", function () {
    // Print entered value in a div box
    $('#inv_compemail_empty').hide();
    document.getElementById('compemail').style.borderColor = "gray";

    $('#inv_compemail_nc').hide();

});

$("#btnRegister").click(function () {
    var compname = $('#compname').val();
    var compphone = $('#compphone').val();
    var ncode = $('#ncode').val();
    if (compphone.startsWith('0')) {

        compphone = compphone.replace(compphone.charAt(0), "");
        compphone = "+" + ncode + compphone;
    }
    else {
        compphone = "+" + ncode + compphone;
    }
    var compusername = $('#compusername').val();
    var comppassword = $('#comppassword').val();
    var comppasswordconf = $('#comppasswordconf').val();
    var compemail = $('#compemail').val();
    var acc = $('#acc').val();
    mt = "";
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (compname == "") {

        $('#inv_compname_empty').show();
        document.getElementById('compname').style.borderColor = "red";
        // $('#compname').addClass(".invalid-feedback");
        // alert("Company Name cannot be empty");
    }
    else if (compphone == "") {
        $('#inv_compphone_empty').show();
        document.getElementById('compphone').style.borderColor = "red";
        // alert("Phone cannot be empty");
    }
    else if (compusername == "") {
        $('#inv_compusername_empty').show();
        document.getElementById('compusername').style.borderColor = "red";

        // alert("Username cannot be empty");
    }

    else if (compusername.length < 8) {
        $('#inv_compusername_length').show();
        document.getElementById('compusername').style.borderColor = "red";
    }
    else if (comppassword == "") {
        $('#inv_comppassword_empty').show();
        document.getElementById('comppassword').style.borderColor = "red";

    }
    else if (comppassword != comppasswordconf) {
        $('#inv_comppasswordconf').show();
        document.getElementById('comppassword').style.borderColor = "red";
        document.getElementById('comppasswordconf').style.borderColor = "red";
        // var element = $("#comppasswordconf").get(0);
        // element.setCustomValidity('Passwords must match');
        // alert(element.validationMessage);
    }
    else if (compemail == "") {
        $('#inv_compemail_empty').show();
        document.getElementById('compemail').style.borderColor = "red";
    }

    else if (!emailReg.test(compemail)) {
        $('#inv_compemail_nc').show();
        document.getElementById('compemail').style.borderColor = "red";
    }

    else if (acc == 0) {
        alert("Change User Name");
    }
    else {
        regdata = { 'compname': compname, 'compphone': compphone, 'compusername': compusername, 'comppassword': comppassword, 'compemail': compemail };
        // console.log(data);
        sendOTP(compphone);
        // $.ajax({
        //    type: "POST",
        //    url: "register",
        //    data: {'compname' :compname,'compphone' :compphone,'compusername' :compusername,'comppassword' :comppassword,'compemail' :compemail},
        //    success: function(response){
        //  alert('Profile Created Successfully');
        //   window.location.href = "dashboard";
        //          }
        //     });
    }
});