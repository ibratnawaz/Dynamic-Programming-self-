// Singly Linked List Implementation and operations performed on it.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
  }

  //   Insert a node in the starting of the list.
  insertFront(val) {
    let newNode = new Node(val)
    if (!this.head) this.head = newNode
    else {
      newNode.next = this.head
      this.head = newNode
    }
    return this.head
  }

  //   Remove the node from the starting of the list.
  removeFront() {
    if (!this.head) return 'empty'
    else {
      let deleteNode = this.head
      this.head = this.head.next
      return deleteNode.val
    }
  }

  //   Insert a node in the end of the list.
  insertLast(val) {
    let newNode = new Node(val)
    if (!this.head) this.head = newNode
    else {
      let cur = this.head
      while (cur && cur.next) {
        cur = cur.next
      }
      cur.next = newNode
    }
    return this.head
  }

  //   Remove the node from the end of the list.
  removeLast() {
    if (!this.head) return 'empty'
    else {
      let cur = this.head
      let prev
      while (cur && cur.next) {
        prev = cur
        cur = cur.next
      }
      prev.next = null
      return cur.val
    }
  }

  //   Print the data stored in the nodes in the list.
  print() {
    let data = []
    let cur = this.head
    while (cur) {
      data.push(cur.val)
      cur = cur.next
    }
    return data
  }

  //   Reverse the linked list.
  reverse() {
    let cur = this.head
    let prev = null
    let next
    while (cur) {
      next = cur.next
      cur.next = prev
      prev = cur

      cur = next
    }
    this.head = prev
  }

  //   Retrieve the middle node from the list.
  getMiddleElement() {
    let slow_ptr = this.head
    let fast_ptr = slow_ptr
    while (fast_ptr != null && fast_ptr.next != null) {
      slow_ptr = slow_ptr.next
      fast_ptr = fast_ptr.next.next
    }
    return slow_ptr.val
  }
}

let myList = new SingleLinkedList()
myList.insertFront(50)
myList.insertFront(40)
myList.insertFront(30)
myList.insertFront(20)
myList.insertFront(10)
myList.insertLast(70)
myList.insertLast(80)
console.log(myList.removeFront())
console.log(myList.removeLast())
console.log(myList.print())
myList.reverse()
console.log(myList.getMiddleElement())
