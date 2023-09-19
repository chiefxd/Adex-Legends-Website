function formSubmitted(event){
    let usernameTxt = document.getElementById('usernameTxt')
    let username = usernameTxt.value
    let fullnameTxt = document.getElementById('fullnameTxt')
    let fullname = fullnameTxt.value
    let password = document.getElementById('passwordTxt').value
    let address = document.getElementById('addressTxt').value
    let email = document.getElementById('emailTxt').value

    
    if (username.length < 5){
         alert('Username length must be at least 5 characters')
    }
    else if (!email.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com')
    }
    else if (password.length < 6){
        alert('Password length must be at least 6 characters')
    }
    else if (!address.startsWith('Jl. ')){
        alert('Address must starts with Jl. ')
    }
    else{
        alert('Register Success!')
    }

    event.preventDefault()

}