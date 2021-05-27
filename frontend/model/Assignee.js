export default class Assignee {
    constructor(obj) {
        this.name = obj.name || "";
        this.role = obj.supervisor || "";
        this.id= obj.id || "";
    }
}
