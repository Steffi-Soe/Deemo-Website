const forgot = document.getElementById("forgot")
const signin = document.getElementById("forgot1")
const firstform = document.getElementById("form")
const secondform = document.getElementById("form1")
const container = document.querySelector("#form1")

secondform.style.display = "none"

forgot.addEventListener("click", () => {
    secondform.style.display = "block"
    firstform.style.display = "none"
})

signin.addEventListener("click", () => {
    secondform.style.display = "none"
    firstform.style.display = "block"
})

firstform.addEventListener("submit", (e) => {
    e.preventDefault()
})

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