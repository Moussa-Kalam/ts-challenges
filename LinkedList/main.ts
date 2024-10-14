
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  // Method to add an element ot the end of the list
  add(value: T): void {
    const newNode = new ListNode<T>(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail!.next = newNode;
    }
    this.tail = newNode;
  }

  // Method to remove an element from the list
  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      return true;
    }
    return false;
  }

  // Method to find an element in the list
  find(value: T): ListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  print(): void {
    let current = this.head;
    const elements: T[] = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

const list = new LinkedList<number>();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();

// Remove the element with value 2
list.remove(2);

// Display the list
list.print();


// Find the element with value 3
const node = list.find(3);
console.log(node?.value);
