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
    
    sideMenuOpen.onmouseover = function(){
        sideMenuDOM.style.display = "block";
    };
    
    sideMenuDOM.onmousover = function(){
        sideMenuDOM.style.display = "block";
    };
    
}
