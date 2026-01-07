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


    

export class todoDOM{
    
}