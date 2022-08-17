// 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit clicked');
    // 2: get the email address inside the email input
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // 3: get password
    // 3.1: set id on the html element
    // 3.2: get the element
    // 3.3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);

        // 4: Verify email and password and check whether valid or not
    if(email === 'sakib@gmail.com' && password === 'Sakib15'){
        // console.log('Valid User');
        window.location.href = 'bank.html';
    }    
    else{
        alert('Wrong email or password. Please try to set right email or password.');
    }
})