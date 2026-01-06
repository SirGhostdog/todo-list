import './style.css';

function openForm(){
    document.getElementById("myForm").style.display = "grid"
}

function closeForm(){
    document.getElementById("cancel-button").style.display = "none"
}

document.getElementById("card").addEventListener("click", openForm)

document.getElementById("cancel-button").addEventListener("click", closeForm)
