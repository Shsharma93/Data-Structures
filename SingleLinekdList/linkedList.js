class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //add element at end
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //remove element from end
  pop() {
    let current, newTail;
    current = this.head;
    newTail = current;
    if (this.length === 0) {
      return undefined;
    } else if (this.length > 1) {
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return current;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    }
  }

  //remove element from top
  shift() {
    let current = this.head;
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return current;
    } else if (this.length > 1) {
      this.head = current.next;
      this.length--;
      return current;
    }
  }
  //aa element from top
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length > 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  //Get element from index
  get(index) {
    let current = this.head;
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }
  //set element a value on specific index
  set(index, value) {
    let found = this.get(index);
    if (found) {
      found.val = value;
      return true;
    }
    return false;
  }
  //insert element at pecifin index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      const newNode = new Node(value);
      let prev = this.get(index - 1);
      let curr = prev.next;
      prev.next = newNode;
      newNode.next = curr;
      this.length++;
      return this;
    }
  }
  //remove elements from specific index
  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length) {
      return this.pop();
    } else {
      let prev = this.get(index - 1);
      let cur = prev.next;
      let nex = cur.next;
      prev.next = nex;
      this.length--;
      return cur;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SingleLinkedLists();
list.push(40);
list.push(20);
list.push(60);
list.push(80);
list.push(30);
