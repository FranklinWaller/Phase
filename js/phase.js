(function(){
    var tId = setInterval(function(){
       if(document.readyState === "complete"){clearInterval(tId); onDocumentReady(); }; 
    },11); 
})();


function onDocumentReady(){
    sideMenuOpener();
}

function sideMenuOpener(){
    var sideMenuOpen = document.getElementsByClassName('sidemenu-open')[0];
    var sideMenuDOM = document.getElementsByClassName('sidemenu')[0];
    var htmlDOM = document.getElementsByTagName('html')[0];
    var sideMenuSize = window.matchMedia("(max-width: 768px)");
    
    if(sideMenuSize.matches){
        sideMenuOpen.addEventListener("click",function(event){
            event.preventDefault();
            event.stopPropagation();
            sideMenuDOM.style.display = "block";
        });

        htmlDOM.addEventListener("click",function(event){
           sideMenuDOM.style.display = "none"; 
        });
    }else{
        sideMenuDOM.style.display = "block";
    }
}
