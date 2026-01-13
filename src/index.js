import './style.css';
import { formToObject } from './classes';

import { removeCardControl } from './classes';

const myForm = document.getElementById('add-item-prompt')
const remove = document.getElementById('card-remove')
const card = document.getElementById("list-card")

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

if (myForm) new formToObject(myForm)