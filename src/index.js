import './style.css';
import { formToObject, projectToObject } from './classes';
const myForm = document.getElementById('add-item-prompt')
const promptForm = document.getElementById('add-project')

const popupControl = (() => {

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

if (promptForm) new projectToObject(promptForm)

    

