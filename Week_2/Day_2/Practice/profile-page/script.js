function clickbtn(element){
  var a=document.querySelector(element)
  a.innerText="Any name"
}
function hide(element){
  var z=document.querySelector(element)
  z.remove()
}

function accept(id) {
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
  connectionSpan.innerText++;
}

function ignore(id) {
  var element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
}


