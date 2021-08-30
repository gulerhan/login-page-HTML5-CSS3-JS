
var email = document.getElementById('emailId');
var pass = document.getElementById('passwordId');

function loginButton(){        
    if(email.value == 'abcd@gmail.com' || 'abcd@hotmail.com' && pass.value == 123456){
        alert('Tebrikler, Giriş Başarılı');
    }else{
        alert('Lütfen bilgileri kontrol ediniz');
    }

}

function hamburgerMenu() {
    document.getElementById('toggleMenu').classList.remove('ds-none');
    document.getElementById('toggleMenu').classList.add('ds-block');
    
    }
  

  function buttonx() {
    document.getElementById('toggleMenu').classList.remove('ds-block');
    document.getElementById('toggleMenu').classList.add('ds-none');
  }
