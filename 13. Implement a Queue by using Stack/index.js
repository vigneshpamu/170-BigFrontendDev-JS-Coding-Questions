/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
  constructor() {
    this.inStack = new Stack()
    this.outStack = new Stack()
  }
  enqueue(element) {
    this.inStack.push(element)
    // add new element to the rare
  }
  peek() {
    if (this.outStack.size() === 0) {
      while (this.inStack.size() > 0) {
        this.outStack.push(this.inStack.pop())
      }
    }

    return this.outStack.peek()
    // get the head element
  }
  size() {
    return this.inStack.size() + this.outStack.size()
    // return count of element
  }
  dequeue() {
    if (this.outStack.size() === 0) {
      while (this.inStack.size() > 0) {
        this.outStack.push(this.inStack.pop())
      }
    }

    return this.outStack.pop()

    // remove the head element
  }
}

// Doc - https://chatgpt.com/c/6862cb90-db74-8004-bd14-97a0030a6a68
