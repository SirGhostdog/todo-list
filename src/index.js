import './style.css';
import { createListItem } from './classes';


const popupControl = (() => {

    function openForm(){
        document.getElementById("myForm").style.display = "grid"
    }

    function closeForm(){
        document.getElementById("cancel-button").style.display = "none"
    }

    document.getElementById("card").addEventListener("click", openForm)

    document.getElementById("cancel-button").addEventListener("click", closeForm)
    
    
    
    })();

    const test = new createListItem ("Workout", "Workout Now", "Today", "high")
    
    test.listInfo()