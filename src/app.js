/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const NAME = document.querySelector("#First");
const SURNAME = document.querySelector("#Last");
const CARD = document.querySelector("#cc-number");
const CVC = document.querySelector("#cc-cvc");
const AMOUNT = document.querySelector("#cc-amount");
const CITY = document.querySelector("#inputCity");
const STATE = document.querySelector("#inputState");
const ZIP = document.querySelector("#inputZip");
//const CARDS = document.querySelector("#input-group-prepend");
const SEND = document.querySelector("#Send");
window.onload = function() {
  SEND.addEventListener("click", function(event) {
    event.preventDefault();
  });
  NAMEVALIDATION();
  LASTNAMEVALIDATION();
  CARDVALIDATION();
  CVCVALIDATION();
  AMOUNTVALIDATION();
  CITYVALIDATION();
  ZIPVALIDATION();
  STATEVALIDATION();
};

const CHECKNUMBERS = myNumber => {
  return Number(myNumber) % 1 == 0;
};
const CHECKSTRING = string => {
  return /^[a-zA-Z]+$/.test(string);
};

const VALIDINPUT = event => {
  event.classList.remove("is-invalid");
  event.classList.add("is-valid");
};
const INVALIDINPUT = event => {
  event.classList.remove("is-valid");
  event.classList.add("is-invalid");
};

const CARDVALIDATION = () => {
  CARD.addEventListener("focusout", event => {
    CHECKNUMBERS(CARD.value) &&
    CARD.value.length >= 15 &&
    CARD.value.length <= 19
      ? VALIDINPUT(CARD)
      : INVALIDINPUT(CARD);
  });
};
const CVCVALIDATION = () => {
  CVC.addEventListener("focusout", event => {
    CHECKNUMBERS(CVC.value) && (CVC.value.length == 3 || CVC.value.length == 4)
      ? VALIDINPUT(CVC)
      : INVALIDINPUT(CVC);
  });
};

const AMOUNTVALIDATION = () => {
  AMOUNT.addEventListener("focusout", event => {
    Number(AMOUNT.value) && AMOUNT.value > 0
      ? VALIDINPUT(AMOUNT)
      : INVALIDINPUT(AMOUNT);
  });
};

const NAMEVALIDATION = () => {
  NAME.addEventListener("focusout", event => {
    CHECKSTRING(NAME.value) ? VALIDINPUT(NAME) : INVALIDINPUT(NAME);
  });
};

const LASTNAMEVALIDATION = () => {
  SURNAME.addEventListener("focusout", event => {
    CHECKSTRING(SURNAME.value) ? VALIDINPUT(SURNAME) : INVALIDINPUT(SURNAME);
  });
};
const CITYVALIDATION = () => {};
CITY.addEventListener("focusout", event => {
  CHECKSTRING(CITY.value) ? VALIDINPUT(CITY) : INVALIDINPUT(CITY);
});
const ZIPVALIDATION = () => {
  ZIP.addEventListener("focusout", event => {
    CHECKNUMBERS(ZIP.value) && ZIP.value.length == 5
      ? VALIDINPUT(ZIP)
      : INVALIDINPUT(ZIP);
  });
};
const STATEVALIDATION = () => {};
STATE.addEventListener("focusout", event => {
  CHECKSTRING(STATE.value) ? VALIDINPUT(STATE) : INVALIDINPUT(STATE);
});
