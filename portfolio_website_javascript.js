function dropdown_open(){
    let menuOpen = document.getElementById('menu_thinscreen');
    menuOpen.style.height = ("250px");
    document.getElementById("hamburger").style.transform = 'rotateX(180deg)';
    document.getElementById("close").style.transform = 'rotateX(0deg)';
    setTimeout(() => {document.getElementById("hamburger").style.display = ("none")}, 500);
    setTimeout(() => {document.getElementById("close").style.display = ("block")}, 500); 
    }

function dropdown_close(){
    let menuOpen = document.getElementById('menu_thinscreen');
    menuOpen.style.height = ("50px");
    document.getElementById("hamburger").style.transform = 'rotateX(0deg)';
    document.getElementById("close").style.transform = 'rotateX(180deg)';
    setTimeout(() => {document.getElementById("hamburger").style.display = ("block")}, 500);
    setTimeout(() => {document.getElementById("close").style.display = ("none")}, 500); 
    // document.getElementById("close").style.display = ("none")
    // document.getElementById("hamburger").style.display = ("block")
    }
