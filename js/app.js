function changebgcolor_black(){
    document.getElementById("intro-btn").style.color = "black";
}

function changebgcolor_white(){
    document.getElementById("intro-btn").style.color = "white";
}

function bgChanger(){
    if(window.scrollY > window.innerHeight / 2){
        document.body.classList.add("bg-active");
        window.setTimeout(changebgcolor_black, 300);
    }
    else{
        document.body.classList.remove("bg-active");
        window.setTimeout(changebgcolor_white, 300); 
    }
}

window.addEventListener("scroll", bgChanger)