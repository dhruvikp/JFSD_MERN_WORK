class Queue {

    constructor(size) {
        this.front = -1;
        this.rear = -1;

        this.size = size;
        this.arr = new Array(size);
    }

    enqueue(element) {
        if(this.rear === this.size - 1) {
            console.log("Queue is full");
            return;
        }
        this.rear++;
        this.arr[this.rear] = element;
    }

    dequeue() {
        if(this.front === this.rear) {
            console.log("Queue is empty");
            return;
        }
        this.front++;
        let dequeuedElement = this.arr[this.front];
        return dequeuedElement;
    }

    peek() {
        if(this.front === this.rear) {
            console.log("Queue is empty");
            return;
        }
        return this.arr[this.front + 1];
    }

}

let q = new Queue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue());
console.log(q.peek());  