


let span = document.getElementById("arrow-icon");

window.onscroll=function(){
    // console.log(this.scrollY);

    if(this.scrollY>=1290){
     span.classList.add("arrow");
    }else{
      span.classList.remove("arrow");
    }
};

span.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};