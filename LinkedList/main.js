// Implement a linked list in TypeScript
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    // Method to add an element ot the end of the list
    LinkedList.prototype.add = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    };
    // Method to remove an element from the list
    LinkedList.prototype.remove = function (value) {
        if (!this.head)
            return false;
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }
        var current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            return true;
        }
        return false;
    };
    // Method to find an element in the list
    LinkedList.prototype.find = function (value) {
        var current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.print = function () {
        var current = this.head;
        var elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    };
    return LinkedList;
}());
var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();
list.remove(2);
list.print();
// Find the element with value 3
var node = list.find(3);
console.log(node === null || node === void 0 ? void 0 : node.value);
