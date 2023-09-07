var email = document.getElementById('email')
var pswd = document.getElementById('pswd')
var phone = document.getElementById('phone')
var errorpswd = document.getElementById('errormail')
var errorpswd = document.getElementById('errorpswd')
var errorphone = document.getElementById('errorphone')
var regexp1 = /^([a-zA-z0-9\.-]+)@([a-zA-z0-9\-]+).([a-z]{2,3})(.\[a-z]{2,3})?$/
var regexphone = /^\+?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
function validate(){
    console.log('form submitted')
    validatephone()

    if(email.value == ''){
        errormail.innerText = "Email field is empty"
        errormail.style.color = "red"   

    }
    else{
        validateemail()
    }

    if(pswd.value == ''){
        errorpswd.innerText = "Password field is empty"
        errorpswd.style.color = "red"   
     }
     else
     {
        validatepass()
     }
    
      
}

// Validate Email
function validateemail(){
     if(regexp1.test(email.value))
    {
        errormail.innerText = "Valid Mail Id"
        errormail.style.color = "green"   
        return true
    }
    else
    {
        errormail.innerText = "Invalid Mail Id"
        errormail.style.color = "red"   
        return true
    }
}

//Validate password
var strengthBadge = document.getElementById('StrengthDisp')
var regexps = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{14,20}$/
var regexpm = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{10,13}$/
var regexpw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,10}$/
function validatepass(){
    console.log('form submitted')
    if(regexps.test(pswd.value)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
        errorpswd.innerText = "Valid password"
        errorpswd.style.color = "green"   
        return true

    } else if(regexpm.test(pswd.value)){
        strengthBadge.style.backgroundColor = 'orange'
        strengthBadge.textContent = 'Medium'
        errorpswd.innerText = "Valid password"
        errorpswd.style.color = "green"   
        return true
    } else if(regexpw.test(pswd.value)){
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
        errorpswd.innerText = "Valid password"
        errorpswd.style.color = "green"   
        return true
    }
    else{
        errorpswd.innerText = "Invalid password"
        errorpswd.style.color = "red"   
        return false
    }
    
      
}

//validate phone 
function validatephone() {

    if(phone.value == '')
    {
        errorphone.innerText = 'Phone number field empty'
        errorphone.style.color = "red"   
        return false
    }
    else if(regexphone.test(phone.value))
    {
            errorphone.innerText = 'Valid Phone number '
            errorphone.style.color = "green" 
    }
    else
    {
        errorphone.innerText = 'Invalid phone number format'
        errorphone.style.color = "red" 
    }
    

}