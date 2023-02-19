//step 1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // taking email field id
    const emailField = document.getElementById('email-field');
     // taking email field value
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if(email === 'akash@gmail.com' && password === 'secret'){
        location.href = "bank.html";
    }else{
        alert("Please provide valid email or password");
    }   
});