// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next = null){
    this.data = data;
    this.next = next
  }
}

class LinkedList {

  constructor(){
    this.head = null
  }

  insertFirst(data){
    this.head = new Node(data, this.head)
  }

  size(){
    let head = this.head
    let n = 0
    while(head){
      head = head.next
      n++
    }
    return n
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let head = this.head
    while(head.next){
      head = head.next
    }
    return head
  }

  clear(){
    this.head = null
  }

  removeFirst(){
    if(!this.head){
      return
    }

    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data){
    if (!this.head) {
      this.head = new Node(data)
    }

    let head = this.head

    while(head.next){
      head = head.next
    }

    return head.next = new Node(data)
  }

  getAt(n){

    if(n > this.size() - 1){
      return null
    }

    let node = this.head
    let counter = 0

    while(counter <= n){
      node = node.next
      counter++
    }

    return node
  }

}

module.exports = { Node, LinkedList };
