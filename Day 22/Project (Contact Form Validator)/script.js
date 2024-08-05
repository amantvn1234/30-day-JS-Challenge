var nameerror=document.getElementById("name-error");
var phoneerror=document.getElementById("phone-error");
var emailerror=document.getElementById("email-error");
var messageerror=document.getElementById("message-error");
var submiterror=document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length==0){
        nameerror.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){  //adding expression name should match this, if regex=letter(any no. of times)+space+letter(any no. of times)
        nameerror.innerHTML="Enter Full Name";
        return false;
    }
    nameerror.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length==0){
        phoneerror.innerHTML="Phone no is required";
    }
    else if(!phone.match(/^[0-9]*$/)){
        phoneerror.innerHTML="Only digits are allowed"
    }
    else if(phone.length<10){
        phoneerror.innerHTML="10 digits are required";
    }
    else if(phone.length>10){
        phoneerror.innerHTML="Only 10 digits are required";
    }
    else{
        phoneerror.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    }
    return true;
    
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length==0){
        emailerror.innerHTML="Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}$/)){  //adding expression name should match this, if regex=letter(any no. of times)+space+letter(any no. of times)
        emailerror.innerHTML="Invalid mail";
        return false;
    }
    emailerror.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required=30;
    var left= required-message.length;

    if(message.length==0){
        messageerror.innerHTML="Message is required";
        return false;
    }
    if(left>0){  //adding expression name should match this, if regex=letter(any no. of times)+space+letter(any no. of times)
        messageerror.innerHTML=left+ " more characters required";
        return false;
    }
    messageerror.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()|| !validateMessage()){
        submiterror.style.display='block';
        submiterror.innerHTML="Please fix the error to submit";
        setTimeout(function(){submiterror.style.display="none";},3000);
        return false ;
   }
   else{return true;}
   
}