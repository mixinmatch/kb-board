class Column {
    constructor(obj) {
        this.name = obj.name || "";
        this.id= obj.id || -1;
    }
}

export {Column as MColumn}