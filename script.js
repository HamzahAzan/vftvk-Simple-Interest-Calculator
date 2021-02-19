
function compute()
{

 var p = document.getElementById("principal");
 var r = document.getElementById("rate");
 var y = document.getElementById("myList");

 var principle = p;
 let rate =r;
 var years =y;
 var interest ;
 var ls;
 ls = Number( years.value) + Number(2021);

 interest = Number(principle.value) * Number(years.value) * Number(rate.value)/100;
 var btn = document.getElementById("result");

 if(p.value === ""){
  alert("Please enter a number");
  p.focus();
  return false;
 }
 //Check if email field is empty
 if(p.value === "0"){
  alert("Please enter a positive number");
  p.focus();
  return false;
 }
 if(p.value < 0){
  alert("Please enter a positive number");
  p.focus();
  return false;
 }
 btn.innerHTML = `If you deposit <mark>${principle.value}</mark>,</br>at an interest of <mark>${rate.value}</mark>.</br>You will receive an amount of <mark>${interest}</mark>,</br> in the year <mark>${ls}</mark>`;
}

function updateTextInput() {
 var slider = document.getElementById("rate");
 var demo = document.getElementById("sliderRate");
 demo.innerHTML = slider.value + "%";
 slider.oninput = function() {demo.innerHTML = this.value;
 }
}



