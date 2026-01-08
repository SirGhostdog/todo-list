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
