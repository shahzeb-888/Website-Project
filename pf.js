// =============================================
// back to top functionss
function scrollToTop() {
    window.scrollTo(0, 0);
    return false;
}

// =============================================
// names validationss
function validation()
{
var a = document.getElementById("username").value;
if(a=="")
{
    document.getElementById("message").innerHTML="** Please fill username";
    return false;
}
}
// ====================================================
// email validations
function validation()
{
    var a = document.forms.email.value;
    if (a.indexof('@')<=0) {
        document.getElementById("message_email").innerHTML="** Please enter valid Email";
        return false;
    }
    if((a.charAt(a.length-4)!='.') && (a.charAt(a.length-3)!='.')){
        document.getElementById("message_email").innerHTML="** Please enter valid Email";
        return false;
    }
}

