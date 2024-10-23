class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyLinked {
    constructor() {
        this._length = 0
        this.head = null
    }

    add(value) {
        let node = new ListNode(value), currentNode = this.head;

        // 1st use-case: an empty list 
        if (!currentNode) {
            this.head = node;
            this._length++;
            return node;
        }
        // 2nd use-case: a non-empty list 
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this._length++;
        console.log("currentNode: ", currentNode);
        return currentNode;
    }
    
    get(position) {
        let currentNode = this.head
        let count = 1
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        console.log("position - " + position, currentNode);
        return currentNode;
    }
}

const list = new SinglyLinked()

const data = [141,302,164,530,474]
let w = 0
while (w < 5) {
    list.add(data[w])
    w++
}

list.get(2)