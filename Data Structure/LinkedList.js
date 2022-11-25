/* Linked list */

/*Node  */
class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null
  }
}

/* LinkedList */

class Linked {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  /* IsEmpty */
  isEmpty() {
    return this.size === 0
  }

  /* Prepend */
  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.pointer = this.head;
      this.head = node
    }
    this.size++;
  }

  /* Append */
  append(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.pointer = node;
      this.tail = node;
    }
    this.size++;
  }
  /* Print values */
  print() {
    let value = ''
    let curr = this.head;
    while (curr) {
      value += `${curr.value} `
      curr = curr.pointer
    }
    return value
  }

  /* Insert values by Index */
  Insert(value, index) {
    if (index == 0) {
      return this.prepend(value)
    } else if (index < this.size) {
      const node = new Node(value)
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.pointer
      }
      node.pointer = curr.pointer;
      curr.pointer = node
      this.size++;
    } else {
      return console.log('Index exceeded the length of Linked list')
    }
  }
  /* Delete by Index */
  delete(index) {
    if (index == 0) {
      if (this.head) {
        const deletedNode = this.head;
        this.head = deletedNode.pointer
        this.size--;
        return `Deleted Node value is ${deletedNode.value} and Index is ${index}`
      }
    } else if (index < this.size) {
      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
        curr = curr.pointer
      }
      const deletedNode = curr.pointer
      curr.pointer = deletedNode.pointer
      this.size--;
      return `Deleted Node value is ${deletedNode.value} and Index is ${index}`
    }
  }
  /* Remove by value */
  remove(value) {
    if (this.head.value === value) {
      const deletedElem = this.head
      this.head = deletedElem.pointer
      this.size--;
      return `Deleted value is ${deletedElem.value}`
    }
    let curr = this.head;
    while (curr.pointer && curr.pointer.value !== value) {
      curr = curr.pointer
    }
    if (!curr.pointer) {
      return `Search Element not found`
    }
    const deletedElem = curr.pointer;
    curr.pointer = deletedElem.pointer
    this.size--
    return `Deleted value is ${deletedElem.value}`
  }

  /* Remove from front */
  removeFromFront() {
    if (this.isEmpty()) {
      return 'Linked list is Empty'
    }
    const deletedNode = this.head;
    this.head = deletedNode.pointer;
    this.size--;
    return `Front Node ${deletedNode.value} has been removed`
  }
  /* Remove from rear */
  removeFromRear() {
    if (this.isEmpty()) {
      return 'Linked list is Empty'
    }
    let curr=this.head;
    let prev;
    while(curr.pointer){
      prev=curr;
      curr=curr.pointer
    }
    const deletedElem=prev.pointer;
    this.tail=prev;
    this.tail.pointer=null;
    this.size--
    return `Rear Node ${deletedElem.value}`
  }
  /* Reverse the Linked List */
  reverse(){
    let prev=null;
    let curr=this.head;
    while(curr){
      let pointer=curr.pointer;
      curr.pointer=prev;
      prev=curr;
      curr=pointer
    }
    this.head=prev;
    let curr2=this.head;
    while(curr2.pointer){
      curr2=curr2.pointer
    }
    this.tail=curr2
  }
}

const List = new Linked()
console.log(List.isEmpty())
List.prepend(20)
List.prepend(15)
List.prepend(12)
List.prepend(7)
List.prepend(5)
List.append(30)
List.prepend(80)
List.Insert(19, 2)
console.log(List.print())
List.reverse()
console.log(List.print())
console.log(List)
