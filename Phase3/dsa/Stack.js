class Stack {

    constructor(size) {
        this.top = -1;
        this.size = size;
        this.arr = new Array(size);
    }

    push(element) {
        if(this.top === this.size - 1) {
            console.log("Stack is full");
            return;
        }
        this.top++;
        this.arr[this.top] = element;
    }

    pop() {
        if(this.top === -1) {
            console.log("Stack is empty");
            return;
        }
        let poppedElement = this.arr[this.top];
        this.top--;
        return poppedElement;
    }

    
}