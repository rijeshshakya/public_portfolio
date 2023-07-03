var clicked = false;

function navButtonClick(){
    if(clicked == false){
        document.getElementById("bar").style.display = "block";
        document.getElementById("navicon").src = "realcross.png";
        document.getElementById("background").style.transform = "scale(100)";
        clicked = true;
    } else if(clicked == true){
        document.getElementById("bar").style.display = "none";
        document.getElementById("navicon").src = "3053386.png";
        document.getElementById("background").style.transform = "scale(1)";
        clicked = false;
    }
}

function barClick(){
    document.getElementById("background").style.transform = "scale(1)";
    document.getElementById("bar").style.display = "none";
    document.getElementById("navicon").src = "3053386.png";
}