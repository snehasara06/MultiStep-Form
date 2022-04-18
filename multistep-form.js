var basic=document.getElementById("basic");
var others=document.getElementById("others");
var work=document.getElementById("work");
var education=document.getElementById("education");
var team=document.getElementById("team");

var basicnext=document.getElementById("basicnext");

var othersprev=document.getElementById("othersprev");
var othersnext=document.getElementById("othersnext");

var eduprev=document.getElementById("eduprev");
var edunext=document.getElementById("edunext");

var workprev=document.getElementById("workprev");
var worknext=document.getElementById("worknext");

var teamprev=document.getElementById("teamprev");
var othersnext=document.getElementById("othersnext");

othersprev.onclick=function(){
    basic.style.left="40px";
    others.style.left="750px";
}
eduprev.onclick=function(){
    education.style.left="750px";
    work.style.left="40px";
}
workprev.onclick=function(){
    console.log("clicked");
    work.style.left="750px"
    others.style.left="40px";
}
teamprev.onclick=function(){
    education.style.left="40px";
    team.style.left="750px";
}

basicnext.onclick = function () {
    others.style.left = "40px";
    basic.style.left = "-750px";
    
}

othersnext.onclick = function () {
    work.style.left = "40px";
    others.style.left = "-750px";
    
}
worknext.onclick = function () {
    education.style.left = "40px";
    work.style.left = "-750px";
   
}
edunext.onclick = function () {
    team.style.left = "40px";
    education.style.left = "-750px";
    
}

    
    var fname=document.getElementById("firstn");
    var lname=document.getElementById("lastn");
    var mail=document.getElementById("mail");
    var phone=document.getElementById("mobno")
    
        function allLetter()
        { 
            console.log(fname.value);
            var letters = /^[A-Za-z]+$/;
            if(letters.test(fname.value)==true)
            {
            return true;
            }
            else
            {
            alert('Please input alphabet characters only');
           
            return false;
            }
        }
        function allLetterLast(){
            console.log(lname.value);
            var letters = /^[A-Za-z]+$/;
            if(letters.test(lname.value)==true)
            {
            return true;
            }
            else
            {
            alert('Please input alphabet characters only');

            return false;
            }
        }
    function phonenumber()
    {
        console.log(mobno.value);
        var phoneno = /^\d{10}$/;
        if(phoneno.match(phone.value))
        {
        return true;
        }
        else
        {
        alert("Not a valid Phone Number");
        return false;
        }
    }        
                
   
    function ValidateEmail()
        {
            console.log(mail.value);
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mailformat.test(mail.value)==true)
        {
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
     
        return false;
        }
    }
            function validategender(form){
    ErrorText= "";
    if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )
    {
    alert ( "Please choose your Gender: Male or Female" );
    return false;
    }
    if (ErrorText= "") { form.submit() }
    }

    
    function validatePassword() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }
    function thanksmsg(){
        alert("Thank you for registering! ")
    }
