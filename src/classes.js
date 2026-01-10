import { format } from "date-fns"

const activeList = []

export class createListItem{

    constructor(title, desc, due, priority){

        this.title = title
        this.desc = desc
        this.due = `Due by: ${format(new Date(due), "MM/dd/yyyy")}`
        this.priority = `Priority: ${priority}`
    }

    listInfo() {
        activeList.push(this)
        addItemToPage();
    }
   
}

export class formToObject{
    
    constructor (form){
        this.form = form
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        this.processForm();
    }
    
    processForm() {
        const promptData = new FormData(this.form)

        const titleData = promptData.get('title')
        const descData = promptData.get('desc')
        const dueData = promptData.get('due-date')
        const priorityData = promptData.get('priority')

        this.form.style.display = "none";
        this.form.reset(); 
        
        const listObj = new createListItem(titleData, descData, dueData, priorityData)
        listObj.listInfo();
    }

 
}

function addItemToPage(){

   function createEl(tag, className, text = '') {
        const el = document.createElement(tag);
        if (className) el.setAttribute("id", className) 
        if (text) el.textContent = text
        return el
    }

    function colorSelect(element) {

        const colors = [ '#ff7eb9','#7afcff','#cdfc93','#ce81ff' ]

        const randomIndex = Math.floor(Math.random() * colors.length);

        const randomColor = colors[randomIndex];

        element.style.backgroundColor = randomColor

    }

    function borderSelect(listElement, element){

        const borderColors = ["#FF0000", "#ff7a2dff", "#00a100ff" ]

        if (listElement == "Priority: High"){
            element.style.border = (`${borderColors[0]}, solid, 3px`)
        } else if (listElement == "Priority: Medium") {
           element.style.border = (`${borderColors[1]}, solid, 3px`) 
        } else if (listElement == "Priority: Low") {
           element.style.border = (`${borderColors[2]}, solid, 3px`) 
        }
    }

    const list = activeList[activeList.length - 1]

    const card = createEl("div", "list-card");
    const head = createEl("div", "card-header");
    const foot = createEl("div", "card-footer");

    head.append(createEl("div", "card-title", list .title));
    head.append(createEl("div", "card-desc", list.desc));

    foot.append(createEl("div", "card-due", list.due))
    foot.append(createEl("div", "card-priotiy", list.priority))

    card.append(head, foot);

    const hero = document.getElementById("hero")
    const addCard = document.getElementById("card")
    hero.insertBefore(card, addCard);
    colorSelect(card);
    borderSelect(list.priority, card);

}
