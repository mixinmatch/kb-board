export default class Task {
    constructor(obj){
        this.id = obj.id || -1;
        this.title= obj.title || "";
        this.assignees= obj.assignees || [];
        this.columnId = obj.columnId || -1;
    }
} 