let count = 0;

function inc(){
  count = count + 1;
   document.querySelector("#countDisplay").innerHTML = count;
}

function dec(){
  count = count - 1;
   document.querySelector("#countDisplay").innerHTML = count;
}
