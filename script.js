// Script for navigation bar
let menulist = document.getElementById("navbar")
menulist.style.maxHeight="0px"

function tagglemenu(){
    if(menulist.style.maxHeight =="0px")
    {
        menulist.style.maxHeight="1000px";
    }
    else{
        menulist.style.maxHeight="0px";
    }
}
//img order section//
var mainimg = document.getElementById("mainimg");
var smallimg =document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}