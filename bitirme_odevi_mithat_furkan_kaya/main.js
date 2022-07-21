  // Register Validation Start

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const rpassword = document.getElementById('rpassword');
const rpassword2 = document.getElementById('rpassword2');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const rpasswordValue = rpassword.value.trim();
    const rpassword2Value = rpassword2.value.trim();

    if(fnameValue === '') {
        setError(fname, 'Lütfen adınızı giriniz.');
    } else {
        setSuccess(fname);
    }

    if(surnameValue === '') {
      setError(surname, 'Lütfen soyadınızı giriniz.');
  } else {
      setSuccess(surname);
  }

    if(emailValue === '') {
        setError(email, 'Lütfen e-mail adresinizi giriniz.');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Geçersiz e-mail!');
    } else {
        setSuccess(email);
    }

    if(rpasswordValue === '') {
        setError(rpassword, 'Lütfen şifrenizi giriniz.');
    } else if (rpasswordValue.length < 8 ) {
        setError(rpassword, 'Şifre en az 8 karakterden oluşmalıdır!')
    } else {
        setSuccess(rpassword);
    }

    if(rpassword2Value === '') {
        setError(rpassword2, 'Lütfen şifrenizi doğrulayınız.');
    } else if (rpassword2Value !== rpasswordValue) {
        setError(rpassword2, "Girdiğiniz şifreler eşleşmiyor!");
    } else {
        setSuccess(rpassword2);
    }

};

 // Register Validation End


  // Login Validation Start

$(function () {
  $("#btnSubmit").click(function () {
    let user_email, user_password;
    user_email = jQuery.trim($("#user_email").val());
    user_password = jQuery.trim($("#user_password").val());

    if (user_email == "") {
      $("#validation_email").html("Lütfen email adresinizi giriniz.")
    } else if (regexEmail(user_email) == false) {
      $("#validation_email").html("Geçersiz email!")
    }

    function regexEmail(user_email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(user_email);
    }

   if (user_password == "") {
    $("#validation_password").html("Lütfen şifrenizi giriniz.")
  } else if (regexPassword(user_password) == false) {
    $("#validation_password").html("Şifre en az 8 karakter, bir büyük harf ve bir küçük harf içermelidir.")
  }

  function regexPassword(user_password) {
    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,20})$/;
    return regex.test(user_password);
  }
  })
}); 

  // Login Validation End

  


  



