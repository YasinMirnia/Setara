//Active int-tel-input library
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  //Defult Country
  initialCountry: "pk",
  preferredCountries: ["pk"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});
