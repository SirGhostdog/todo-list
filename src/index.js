import './style.css';
import { formToObject } from './classes';

const popupControl = (() => {

const myForm = document.getElementById('add-item-prompt')

function openForm(){
        myForm.style.display = "grid"
    }
    
function closeForm(){
        myForm.style.display = "none"
        myForm.reset(); 
    }

document.getElementById("cancel-button").addEventListener("click", closeForm)

document.getElementById("card").addEventListener("click", openForm)

})();

const openSidebar = (() => {

    const sideBtn = document.getElementById("burger")

    const sidebar = document.getElementById("sidebar")

    const hero = document.getElementById("hero")
    
    sideBtn.addEventListener("click", function(){
        sidebar.classList.toggle("active")
        hero.classList.toggle("shifted")
    })

})();

if (myForm) new formToObject(myForm)