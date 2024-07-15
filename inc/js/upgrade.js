 
function addDays(days) {
  var result = new Date();
  result.setDate(result.getDate() + days);
  return result;
}

 $('#stime').change(function(){
        if(this.value=='M')
        {
              var newDate = addDays(30);
              var month = newDate.getMonth() + 1;
              var date = newDate.getDate();
              var endDate = newDate.getFullYear()+'-'+(month<=9 ? '0' + month : month) +'-'+(date<=9 ? '0' + date : date);
              $('#edate').val(endDate);
              var tem = $('#spackageType option:selected').attr('price');

              var fina= tem * 1;
              $('#pprice').val(fina);

        }
        else{

               var newDate = addDays(365);
              var month = newDate.getMonth() + 1;
                 var date = newDate.getDate();
              var endDate = newDate.getFullYear()+'-'+(month<=9 ? '0' + month : month)+'-'+(date<=9 ? '0' + date : date);
              $('#edate').val(endDate);
              var tem = $('#spackageType option:selected').attr('price');
              var fina= tem * 12;
              $('#pprice').val(fina);

        }        
    });

 $('#spackageType').change(function(){
var s= $('#spackageType option:selected').attr('price');
      $('#pprice').val(s);

// console.log(jQueryArray);
 });
  $('#tType').change(function(){
var s= $('#tType option:selected').val();
if(s==4)

{
     // $('#AccountNo').hide();
}

// console.log(jQueryArray);
 });

$('#upgradePackage').submit(function(e)
{  e.preventDefault();
let x = Math.floor(Math.random() * (1000 + 1) + 1);
var username=$("input[name='username']").val();
var userid=$("input[name='userid']").val();
var spackage=$('#spackageType option:selected').val();
var period=$('#stime option:selected').val();
var startdate=$("#sstart").val();
var enddate=$("input[name='enddate']").val();
var price=$("input[name='price']").val();
var order_id = "Poss"+userid+""+x;
if(username==''|| userid==''|| spackage=='' || period=='' || startdate==''|| enddate=='' || price=='')
{
    alert("Some Fields are required");
   
}
else
{
    var data ={'user_id':userid,'package_id':spackage,'package_period':period,'startDate':startdate,'endDate':enddate,'paymentDate':startdate,'paymentPrice':price,'paymentMethod':'Alpha','paymentConfirmation':'0','order_id':order_id}; 



    var HS_ChannelId ="1002";
    var HS_MerchantId = "24992";
    var HS_StoreId = "034232";
    var HS_ReturnURL = "https://poss.pk/dashboard/package";
    var HS_MerchantHash = "OUU362MB1uqJo2QHiPZhCr4ru7hKhwbweCJ9P5VmWnhSGkf/Vt8iBQ==";
    var HS_MerchantUsername ="rofoli";
    var HS_MerchantPassword = "E/sh0VuuJs1vFzk4yqF7CA==";
    var mapString = "HS_ChannelId" + '=' + HS_ChannelId + '&'+"HS_MerchantId" + '=' + HS_MerchantId + '&'+"HS_StoreId" + '=' + HS_StoreId + '&'+"HS_ReturnURL" + '=' + HS_ReturnURL + '&'+"HS_MerchantHash" + '=' + HS_MerchantHash + '&'+"HS_MerchantUsername" + '=' + HS_MerchantUsername + '&'+"HS_MerchantPassword" + '=' + HS_MerchantPassword + '&'+"HS_TransactionReferenceNumber" + '=' + order_id ; 

    var hasher = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(mapString), CryptoJS.enc.Utf8.parse("wdANxReakCzSVSek"),                                                  
    {                                                                                                                                                                                                      
        keySize: 128 / 8,                                                                                                                                                                                  
        iv: CryptoJS.enc.Utf8.parse("2387446691445877"),                                                                                                                                                     
        mode: CryptoJS.mode.CBC,                                                                                                                                                                           
        padding: CryptoJS.pad.Pkcs7                                                                                                                                                                        
    }).toString();


    var requestdata = {
        "HS_ChannelId": HS_ChannelId,
        "HS_MerchantId": HS_MerchantId,
        "HS_StoreId": HS_StoreId,
        "HS_ReturnURL": HS_ReturnURL,
        "HS_MerchantHash": HS_MerchantHash,
        "HS_MerchantUsername":  HS_MerchantUsername,
        "HS_MerchantPassword": HS_MerchantPassword,
        "HS_TransactionReferenceNumber": order_id,
        "HS_RequestHash": hasher
    };
      $("#loadMe").modal({
          backdrop: "static", //remove ability to close modal with click
          keyboard: false, //remove option to close with keyboard
          show: true //Display loader!
        });
     $.ajax({
          type: "POST",
          url: "addNewPackage",
          dataType: 'json',
          data:data,
          success: function(response){
            
             $.ajax({
                      type: "POST",
                      url: "https://sandbox.bankalfalah.com/HS/api/HSAPI/HSAPI",
                      dataType: 'json',
                      data:requestdata,
                      success: function(response){
                        var result = $.parseJSON(response);
                        //console.log(result);
                          if(result.success=='true')
                          {
                              $('#paymentconfirmation').show();
                            $('#upgradePackage').hide();
                            $('#authToken').val(result.AuthToken);
                            $('#tamount').val(price);
                            $('#order_id').val(order_id);
                            $("#loadMe").modal("hide");
                            
                          }
                        
                            },
                        error: function(XMLHttpRequest, textStatus, errorThrown) { 
                         console.log(XMLHttpRequest);
                         console.log(textStatus);
                         console.log(errorThrown);
                    }       
                        });
                },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
             console.log(XMLHttpRequest);
             console.log(textStatus);
             console.log(errorThrown);
        }       
            });
       }
});

$('#paymentconfirmation').submit(function(e)
{ 
      $("#loadMe").modal({
      backdrop: "static", //remove ability to close modal with click
      keyboard: false, //remove option to close with keyboard
      show: true //Display loader!
    });
 e.preventDefault();
var authToken=$("input[name='authToken']").val();
var orderid=$("input[name='orderid']").val();
var email=$("input[name='email']").val();
var mobile=$("input[name='mobile']").val();
var tType=$('#tType option:selected').val();
var accountno=$("input[name='accountno']").val();
var currency=$("input[name='currency']").val();
var tamount=$("input[name='tamount']").val();
var country=$('#country option:selected').val();

if(authToken == '' ||orderid == '' ||email == '' ||mobile == '' ||tType == '' ||accountno == '' ||currency == '' ||tamount == '' ||country == '')
{
    alert("some Fields are required");
     $("#loadMe").modal("hide");
}
else if(tType == 4)
{
 var   HS_IsRedirectionRequest = "0";
var HS_ChannelId ="1002";
var HS_MerchantId = "24992";
var HS_StoreId = "034232";
var HS_MerchantHash = "OUU362MB1uqJo2QHiPZhCr4ru7hKhwbweCJ9P5VmWnhSGkf/Vt8iBQ==";
var HS_ReturnURL = "https://poss.pk/dashboard/package";
var HS_MerchantUsername ="rofoli";
var HS_MerchantPassword = "E/sh0VuuJs1vFzk4yqF7CA==";
  var   HS_TransactionReferenceNumber =orderid;

var mapString = "__RequestVerificationToken=&HS_MerchantId" + '=' + HS_MerchantId + '&'+"HS_StoreId" + '=' + HS_StoreId + '&'+"HS_ChannelId" + '=' + HS_ChannelId + '&'+"HS_MerchantHash" + '=' + HS_MerchantHash + '&'+"HS_MerchantUsername" + '=' + HS_MerchantUsername + '&'+"HS_MerchantPassword" + '=' + HS_MerchantPassword + '&'+"HS_IsRedirectionRequest" + '=' + HS_IsRedirectionRequest + '&'+"HS_ReturnURL" + '=' + HS_ReturnURL + '&'+"HS_TransactionReferenceNumber" + '=' + HS_TransactionReferenceNumber ;
console.log(mapString);

var hasher = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(mapString), CryptoJS.enc.Utf8.parse("wdANxReakCzSVSek"),                                                  
{                                                                                                                                                                                                      
    keySize: 128 / 8,                                                                                                                                                                                  
    iv: CryptoJS.enc.Utf8.parse("2387446691445877"),                                                                                                                                                     
    mode: CryptoJS.mode.CBC,                                                                                                                                                                           
    padding: CryptoJS.pad.Pkcs7                                                                                                                                                                        
}).toString();
console.log(hasher);
var crequestdata = {
    "HS_MerchantId": HS_MerchantId,
    "HS_StoreId": HS_StoreId,
    "HS_ChannelId": HS_ChannelId,
    "HS_MerchantHash": HS_MerchantHash,
    "HS_MerchantUsername": HS_MerchantUsername,
    "HS_MerchantPassword": HS_MerchantPassword,
    "HS_IsRedirectionRequest": "0",
    "HS_ReturnURL": HS_ReturnURL,
    "HS_RequestHash": hasher,
    "HS_TransactionReferenceNumber": orderid,
    "__RequestVerificationToken": ""
};
 var settings = {
  "url": "https://sandbox.bankalfalah.com/HS/HS/HS",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "ASP.NET_SessionId=y3p0qtuhmkrkmea4qhlcr5ex; BIGipServerAPG-Sandbox-Pool=!G5zoFIkW94+OFBVdhb37dB69yKuWEJq0PdGKd6QiMn8P/bVEo5DLR0SWLS+w/Ac9+wVx6pYdLICQDA4=; TS016b4fac=01228fab95981a066d7127ff5283c9249b31ee0cc0986bf9811837f2e9c5f834a8227b2c873e76b10b20970569d0cfb501410eb8f72bbb178454f25e12e890a8ddeb5b02db97d00c20d539834589f3229b05be4f4d"
  },
  "data": crequestdata
};

$.ajax(settings).done(function (response) {
  console.log(response['success']);
    // AuthToken = response['AuthToken']
    // RequestHash
    // ChannelId = HS_ChannelId
    // Currency  = currency
    // ReturnURL = HS_ReturnURL
    // MerchantId = HS_MerchantId
    // StoreId = HS_StoreId
    // MerchantHash = HS_MerchantHash
    // MerchantUsername =  HS_MerchantUsername
    // MerchantPassword = HS_MerchantPassword
    // TransactionTypeId = "3"
    // TransactionReferenceNumber = orderid
    // TransactionAmount = tamount

var mapString = "ChannelId" + '=' + HS_ChannelId + '&'+"MerchantId" + '=' + HS_MerchantId + '&'+"StoreId" + '=' + HS_StoreId + '&'+"MerchantHash" + '=' + HS_MerchantHash + '&'+"MerchantUsername" + '=' + HS_MerchantUsername + '&'+"MerchantPassword" + '=' + HS_MerchantPassword + '&'+"ReturnURL" + '=' + HS_ReturnURL + '&'+"Currency" + '=' + currency + '&'+"AuthToken="+response["AuthToken"]+"TransactionTypeId=3&"+"TransactionReferenceNumber" + '=' + orderid +"&TransactionAmount" + '=' + tamount;
console.log(mapString);
  var hasher = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(mapString), CryptoJS.enc.Utf8.parse("wdANxReakCzSVSek"),                                                  
    {                                                                                                                                                                                                      
        keySize: 128 / 8,                                                                                                                                                                                  
        iv: CryptoJS.enc.Utf8.parse("2387446691445877"),                                                                                                                                                     
        mode: CryptoJS.mode.CBC,                                                                                                                                                                           
        padding: CryptoJS.pad.Pkcs7                                                                                                                                                                        
    }).toString();
    console.log(hasher);
    // window.location.href = "https://sandbox.bankalfalah.com/SSO/SSO/SSO/AuthToken="+response["AuthToken"]+"&"
    // +hasher+"&"
    // +HS_ChannelId+"&"
    // +currency+"&"
    // +HS_ReturnURL+"&"
    // +HS_MerchantId+"&"
    // +HS_StoreId+"&"
    // +HS_MerchantHash+"&"
    // +HS_MerchantUsername+"&"
    // +HS_MerchantPassword+"&"
    // +response["AuthToken"]+"&"
    // +response["AuthToken"]+"&";
   var myForm = '<form id="payout" action="https://sandbox.bankalfalah.com/SSO/SSO/SSO" method="POST">\
        <input name="AuthToken" value='+response["AuthToken"]+'>\
        <input name="RequestHash" value='+hasher+'>\
        <input name="ChannelId" value='+HS_ChannelId+'>\
        <input name="Currency" value='+currency+'>\
        <input name="ReturnURL" value='+HS_ReturnURL+'>\
        <input name="MerchantId" value='+HS_MerchantId+'>\
        <input name="StoreId" value='+HS_StoreId+'>\
        <input name="MerchantHash" value='+HS_MerchantHash+'>\
        <input name="MerchantUsername" value='+HS_MerchantUsername+'>\
        <input name="MerchantPassword" value='+HS_MerchantPassword+'>\
        <input name="TransactionTypeId" value="3">\
        <input name="TransactionReferenceNumber" value='+orderid+'>\
        <input name="TransactionAmount" value='+tamount+'>\
    </form>';
    $('body').append(myForm);
    $('#payout').submit();
    $('#payout').remove();
});

console.log("creditcard");
}
else
{
    var HS_ChannelId ="1002";
var HS_MerchantId = "24992";
var HS_StoreId = "034232";
var HS_MerchantHash = "OUU362MB1uqJo2QHiPZhCr4ru7hKhwbweCJ9P5VmWnhSGkf/Vt8iBQ==";
var HS_ReturnURL = "https://poss.pk/dashboard/package";
var HS_MerchantUsername ="rofoli";
var HS_MerchantPassword = "E/sh0VuuJs1vFzk4yqF7CA==";
var mapString = "ChannelId" + '=' + HS_ChannelId + '&'+"MerchantId" + '=' + HS_MerchantId + '&'+"StoreId" + '=' + HS_StoreId + '&'+"MerchantHash" + '=' + HS_MerchantHash + '&'+"MerchantUsername" + '=' + HS_MerchantUsername + '&'+"MerchantPassword" + '=' + HS_MerchantPassword + '&'+"ReturnURL" + '=' + HS_ReturnURL + '&'+"Currency" + '=' + currency + '&'+"AuthToken" + '=' + authToken + '&'+"TransactionTypeId" + '=' + tType + '&'+"TransactionReferenceNumber" + '=' + orderid + '&'+"TransactionAmount" + '=' + tamount + '&'+"AccountNumber" + '=' + accountno + '&'+"Country" + '=' + country +"EmailAddress" + '=' + email+ '&'+"MobileNumber" + '=' + mobile;


var hasher = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(mapString), CryptoJS.enc.Utf8.parse("wdANxReakCzSVSek"),                                                  
{                                                                                                                                                                                                      
    keySize: 128 / 8,                                                                                                                                                                                  
    iv: CryptoJS.enc.Utf8.parse("2387446691445877"),                                                                                                                                                     
    mode: CryptoJS.mode.CBC,                                                                                                                                                                           
    padding: CryptoJS.pad.Pkcs7                                                                                                                                                                        
}).toString();


var requestdata = {
    "ChannelId": HS_ChannelId,
    "MerchantId": HS_MerchantId,
    "StoreId": HS_StoreId,
    "MerchantHash": HS_MerchantHash,
    "MerchantUsername": HS_MerchantUsername,
    "MerchantPassword": HS_MerchantPassword,
    "ReturnURL": HS_ReturnURL,
    "Currency": currency, 
    "AuthToken": authToken,
    "TransactionTypeId": tType, 
    "TransactionReferenceNumber": orderid,  
    "TransactionAmount": tamount, 
    "AccountNumber": accountno,
    "Country": country,
    "EmailAddress": email,
    "MobileNumber": mobile,
    "RequestHash": hasher
};

 $.ajax({
      type: "POST",
      url: "https://sandbox.bankalfalah.com/HS/api/Tran/DoTran",
      dataType: 'json',
      data:requestdata,
      success: function(response){
        var result = $.parseJSON(response);
        //console.log(result);
          if(result.success=='true')
          {
              $('#paymentconfirmation').hide();
            $('#upgradePackage').hide();
               $('#otpconfirm').show();
            $('#otphash').val(result.HashKey);
             $("#loadMe").modal("hide");
            
          }
        
            },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
         console.log(XMLHttpRequest);
         console.log(textStatus);
         console.log(errorThrown);
    }       
        });
}




});

$('#otpconfirm').submit(function(e)
{ 
    $("#loadMe").modal({
      backdrop: "static", //remove ability to close modal with click
      keyboard: false, //remove option to close with keyboard
      show: true //Display loader!
    });
 e.preventDefault();
    var authToken=$("input[name='authToken']").val();
    var orderid=$("input[name='orderid']").val();
    var userid=$("input[name='userid']").val();
    var email=$("input[name='email']").val();
    var mobile=$("input[name='mobile']").val();
    var tType=$('#tType option:selected').val();
    var accountno=$("input[name='accountno']").val();
    var currency=$("input[name='currency']").val();
    var tamount=$("input[name='tamount']").val();
    var country=$('#country option:selected').val();
     var SMSOTAC ="";
     var EmailOTAC="";
     var SMSOTP = $("input[name='otp']").val();
     var HashKey = $("input[name='otphash']").val();
var HS_ChannelId ="1002";
var HS_MerchantId = "24992";
var HS_StoreId = "034232";
var HS_MerchantHash = "OUU362MB1uqJo2QHiPZhCr4ru7hKhwbweCJ9P5VmWnhSGkf/Vt8iBQ==";
var HS_ReturnURL = "https://poss.pk/dashboard/package";
var HS_MerchantUsername ="rofoli";
var HS_MerchantPassword = "E/sh0VuuJs1vFzk4yqF7CA==";
var mapString = "ChannelId" + '=' + HS_ChannelId + '&'+"MerchantId" + '=' + HS_MerchantId + '&'+"StoreId" + '=' + HS_StoreId + '&'+"MerchantHash" + '=' + HS_MerchantHash + '&'+"MerchantUsername" + '=' + HS_MerchantUsername + '&'+"MerchantPassword" + '=' + HS_MerchantPassword + '&'+"ReturnURL" + '=' + HS_ReturnURL + '&'+"Currency" + '=' + currency + '&'+"AuthToken" + '=' + authToken + '&'+"TransactionTypeId" + '=' + tType + '&'+"TransactionReferenceNumber" + '=' + orderid + '&'+"SMSOTAC" + '=&'+"EmailOTAC" + '=&'+"SMSOTP" + '=' + SMSOTP +'&'+"HashKey" + '=' + HashKey+'&'+"isOTP" + '=true';


var hasher = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(mapString), CryptoJS.enc.Utf8.parse("wdANxReakCzSVSek"),                                                  
{                                                                                                                                                                                                      
    keySize: 128 / 8,                                                                                                                                                                                  
    iv: CryptoJS.enc.Utf8.parse("2387446691445877"),                                                                                                                                                     
    mode: CryptoJS.mode.CBC,                                                                                                                                                                           
    padding: CryptoJS.pad.Pkcs7                                                                                                                                                                        
}).toString();



requestdata = {
    "ChannelId": HS_ChannelId,
    "MerchantId": HS_MerchantId,
    "StoreId": HS_StoreId,
    "MerchantHash": HS_MerchantHash,
    "MerchantUsername": HS_MerchantUsername,
    "MerchantPassword": HS_MerchantPassword,
    "ReturnURL": HS_ReturnURL,
    "Currency": currency, 
    "AuthToken": authToken,
    "TransactionTypeId": tType, 
    "TransactionReferenceNumber": orderid,  
    "SMSOTAC": "", 
    "EmailOTAC": "",
    "SMSOTP": SMSOTP,
    "HashKey": HashKey,
    "RequestHash": hasher,
    "IsOTP": "true"
};


console.log(requestdata);

$.ajax({
      type: "POST",
      url: "https://sandbox.bankalfalah.com/HS/api/ProcessTran/ProTran",
      dataType: 'json',
      data:requestdata,
      success: function(response){
        var result = $.parseJSON(response);
       // console.log(result);
              $('.loader-txt').html(result.transaction_status);
              $('.loader').hide();
if(result.transaction_status)
          {
            var data ={
                'order_id':orderid,
                'user_id':userid,
                'order_description':result.description,
                'order_mobileNumber':result.mobile_number,
                'order_dateTime':result.order_datetime,
                'order_paymentMedthod':result.payment_method,
                'order_transactionAmount':result.transaction_amount,
                'order_transactionStatus':result.transaction_status,
                'order_uniqueTransactionId':result.unique_tran_id
                }; 

                $.ajax({
                  type: "POST",
                  url: "addOrder",
                  data:data,
                  success: function(response){
                    // var result = $.parseJSON(response);
                   $("#loadMe").modal("hide");
                    window.location.href = "dashboard";
                    
                        },
                    error: function(XMLHttpRequest, textStatus, errorThrown) { 
                     console.log(XMLHttpRequest);
                     console.log(textStatus);
                     console.log(errorThrown);
                }       
                    });
                 // $("#loadMe").modal("hide");
        
            
          }



    //     "merchant_id": "24992",
    // "merchant_name": null,
    // "response_code": "00",
    // "order_id": "110",
    // "order_datetime": "12/18/2023 7:25 PM",
    // "paid_datetime": "12/18/2023 7:25 PM",
    // "transaction_status": "PAID",
    // "transaction_amount": 10,
    // "mobile_number": "03125102285",
    // "payment_method": "1",
    // "account_number": "930003009542301",
    // "description": "Transaction Successful",
    // "unique_tran_id": "243565871010"
          
        
            },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
         console.log(XMLHttpRequest);
         console.log(textStatus);
         console.log(errorThrown);
    }       
        });
    // "ChannelId": "1002",
// "MerchantId": "170",
// "StoreId": "000001",
// "MerchantHash":
// "MerchantUsername": "tyvasy",
// "MerchantPassword": "m8KePI8Nep+YrRUrObmaUg==",
// "ReturnURL": "http://localhost:58934/Test/TestMerchantReturnPage", 
// "Currency": "PKR",
// "AuthToken":
// "TransactionTypeId": "1", 
// "TransactionReferenceNumber": "A100", 
// "SMSOTAC": "",
// "EmailOTAC": "", 
// "SMSOTP": "12345678",
// "HashKey": "",
});

// $(document).ready(function()
// {
//  console.log("hello");


// });

