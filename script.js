//Factory function for linked list
const LinkedListFactory = () => {
    //https://www.raulmelo.me/en/blog/data-structure-with-javascript-linked-list
    let head = null;
    let length = 0;


    //Adds node to end of list
    function append (value) {
        //New node is created
        const node = Node();
        node.value = value;

        //If there is no head, new node is assigned to head
        if (head === null) {
            head = node;
        } else {
        //Otherwise, start at head and traverse list until currentNode.next does
        //not exist
            let currentNode = head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        //Increase length by 1
        length++;

        console.log()
    }

    //Adds node to beginning of list (becomes head)
    function prepend (value) {
        //head = Node(value);
    }

    //Returns number of nodes in list
    function size () {
        console.log(length);
        return length;
    }

    //Returns first node in list
    function showHead () {

    }

    //Returns last node in list
    function tail () {
        let currentNode = head;

        //Traverse through list while node.next exists. Return the node whose
        //next is null
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    //Returns node at given index
    function at (index) {

    }

    //Removes last element from list
    function pop () {
        let lastNode = tail();

        //Do stuff here

        length--;
    }

    //Returns true or false based on if value is in list
    function contains (value) {

    }

    //Returns index of node containing value or null if not found
    function find (value) {
        let nodeIndex = 0;
        let currentNode = head;

        while (currentNode) {
            if (value === currentNode.value) {
                return nodeIndex;
            }

            nodeIndex++;

            currentNode = currentNode.next;
        }

        //Return null index if value is not found
        return null;
    }

    //Represents linked list objects as strings
    function toString () {
        let result = '';
        let current = head;

        while (current) {
            result += `${current.value}${current.next ? ', ' : ''}`;
            current = current.next;
        }

        return result;
    }

    //(Extra credit) Inserts new node at given index
    function insertAt (value, index) {
        //Check if index is within the range of the linked list
        const isValidIndex = index > -1 && index <= length;
        if (!isValidIndex) {
            return false
        }

        //Create new node
        const newNode = Node();
        newNode.value = value;

        let currentNode = head;

        const isHeadIndex = index === 0;

        //If index is 0, make this node the new head and the old head is .next
        if (isHeadIndex) {
            newNode.next = currentNode;
            head = newNode;
        } else {
        //Otherwise, traverse list while desired position < index
        //Once the position and index match, set the previous node's next to the
        //new node
            let previousNode = null;
            let position = 0;

            while (position++ < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = newNode;
            newNode.next = currentNode;
        }

        length++;
        return true;
    }

    //(Extra credit) Removes node at given index
    function removeAt (index) {

    }

    return {
        head,
        length,
        append,
        prepend,
        size,
        showHead,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }
}


//Factory function for nodes
const Node = (
    value = null,
    next = null
    ) => {

    value = value;
    next = next;

    return {
        value,
        next,
    }
}

const linkedList = LinkedListFactory();

linkedList.append('A');
linkedList.append('B');
linkedList.append('C');
linkedList.append('4');
linkedList.append('5');
linkedList.append('6');