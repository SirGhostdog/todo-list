const activeList = []

export class createListItem{

    constructor(title, desc, due, priority){

        this.title = title
        this.desc = desc
        this.due = `Due by: ${due}`
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


    console.log(list.title)

}
