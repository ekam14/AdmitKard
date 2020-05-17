const phone = document.getElementById("phone");

document.getElementById("otp").addEventListener("click", function(event){
  event.preventDefault();

  if(phone.value.length < 10){
    alert('Enter a valid phone number');
  }else{
    alert('Sending otp !');

    url = './otp.html?name=' + encodeURIComponent(phone.value);
    console.log(url)
    document.location.href = url;
  }
})
