// Created by Junk



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    
document.getElementsByClassName("img")[0].style.display = "none";
      document.getElementById("relative").style.marginTop = "180px";
      document.getElementById("text").style.display  = "none";
      
document.getElementById("head").innerHTML = "Noob-Junk";
      document.getElementById("head").style.fontSize = "20px";
  } 
  else {
      
  document.getElementsByClassName ("img")[0].style.display = "block";
      document.getElementById("relative").style.marginTop = "280px"; 
      
  
document.getElementById("text").style.display  = "block";
      
document.getElementById("head").innerHTML = "Noob-Junk";
      
      document.getElementById("head").style.fontSize = "32px";
}
}
