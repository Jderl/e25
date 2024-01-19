class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        $("#output").append(`<p>${element} added to ${this.count}</p>`);
        // console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        $("#output").append(`<p>${deleteItem} removed</p>`);
        return deleteItem
    }

    // Check top element in stack
    peek() {
        let peek2 = (`Top element is ${this.items[this.count - 1]}`);
        $("#output").append(`<p>${peek2}</p>`);
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        let empty = this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty'
        $("#output").append(`<p>${empty}</p>`);
        return this.count == 0
    }

    // Check size of stack
    size() {
        $("#output").append(`<p>${this.count} elements in stack</p>`);
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        $("#output").append(`<p>Stack elements: ${str}</p>`)
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        // console.log('Stack cleared..')
        $("#output").append(`<p>Stack cleared</p>`)
        return this.items
    }
}

const stack = new Stack()
$(document).ready(function () {
    // Appending the stack operations to an HTML element with the id "output"
    stack.isEmpty();
    stack.push(100);
    stack.push(200)
    stack.peek()
    stack.push(300)
    console.log(stack.print())
    stack.pop()
    stack.pop()
    stack.clear()
    console.log(stack.print())
    stack.size()
    stack.isEmpty()
    
});
    
    


