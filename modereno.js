let mybtn = document.getElementsByClassName("mybtn")[0];
let menu = document.getElementsByClassName("menu")[0];
let but_close = document.getElementsByClassName("clo")[0];

mybtn.onclick = function() {
menu.style.cssText = "right: 0px;"
}

but_close.onclick = function() {
menu.style.cssText = "right: -300px;";
};
let inputs = document.getElementsByClassName("form-control");
let sumbb = document.querySelector(".lastbb");

sumbb.onclick = function(event) {
for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
        return false;
    }
}
  return true;
};