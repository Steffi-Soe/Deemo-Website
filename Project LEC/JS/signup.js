function openNav(){
    let a = document.getElementById("side-nav");
    let b = document.getElementById("open");
    a.style.width = "59.8%";
    a.style.height = "100vh";
    a.style.overflowX = "hidden";
    b.style.visibility = "hidden";
    b.style.transition = "0s";
}

function closeNav(){
    let a = document.getElementById("side-nav");
    let b = document.getElementById("open");
    a.style.width = "0";
    a.style.height = "0";
    b.style.visibility = "visible";
}