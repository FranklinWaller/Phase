(function(){
    var tId = setInterval(function(){
       if(document.readyState === "complete"){clearInterval(tId); onDocumentReady(); }; 
    },11); 
})();


function onDocumentReady(){
    var sideMenuOpen = document.getElementsByClassName('sidemenu-open')[0];
    var sideMenuDOM = document.getElementsByClassName('sidemenu')[0];
  
    sideMenuOpen.addEventListener("click",function(){
        sideMenuDOM.style.display = "block";
    });
}
