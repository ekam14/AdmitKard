document.getElementById("verify").addEventListener("click", function(event){
  const otp = document.getElementById("otp");

  if(otp.length < 4){
    alert('OTP must be 4 digits')
  }else{
    var randomNumber = Math.random()

    if(randomNumber > 0.5){
      alert('OTP verified');
      document.location.href = './success.html';
    }else{
      alert('Not verified');
    }
  }
})

document.getElementById("resend").addEventListener("click", function(event){
  event.preventDefault();
  alert('Resending the OTP');

  const phone = document.getElementById("phoneNumber").textContent;
  console.log(phone);
  url = './otp.html?name=' + encodeURIComponent(phone);
  document.location.href = url;
})
