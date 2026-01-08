import './style.css';
import { createListItem } from './classes';
import { formToObject } from './classes';

import { compareAsc, format } from "date-fns"

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

const myForm = document.getElementById('add-item-prompt')

if (myForm){
    new formToObject(myForm)
}