  'use strict'
  document.addEventListener("DOMContentLoaded", iniciarPagina);
  function iniciarPagina() {
  window.onscroll = function () {
    pegado()
  };
  let header = document.querySelector("#myHeader");
  let sticky = header.offsetTop;

  function pegado() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    }
    else {
      header.classList.remove("sticky");
    }
  }

  let buildCaptchaBtn = document.getElementById("buildCaptchaBtn");
  buildCaptchaBtn.addEventListener("click", buildCaptcha);

  let validateCaptchaBtn = document.getElementById("validateCaptchaBtn");
  validateCaptchaBtn.addEventListener("click", validateCaptcha);

  let captcha;

  function buildCaptcha() {
    captcha = makeid(6);
    document.getElementById("generatedCaptcha").innerHTML = "Captcha: " + captcha;
    return captcha;
  }

  function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function validateCaptcha(event) {
    event.preventDefault();
    let validate = document.getElementById("captcha").value;
    console.log("AAA: " + validate);
    console.log("BBB: " + captcha);
    if (captcha === validate) {
      let verificator = document.querySelector("#captchaValidation");
      console.log("CCC:" + verificator)
      verificator.innerHTML = "Formulario enviado con exito"
    }
    else {
      let verificator = document.getElementById("captchaValidation");
      console.log("DDD:" + verificator)
      verificator.innerHTML = "El captcha ingresado es incorrecto"

    }

  }
}