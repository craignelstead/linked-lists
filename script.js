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

        console.log(`${value} has been appended to this linked list`);
    }

    //Adds node to beginning of list (becomes head)
    function prepend (value) {
        //head = Node(value);
    }

    //Returns number of nodes in list
    function size () {
        console.log(`This linked list's length is ${length}`);
        return length;
    }

    //Returns first node in list
    function showHead () {
        console.log(`This linked list's head has a value of ${head.value}`);
        return head;
    }

    //Returns last node in list
    function tail () {
        let currentNode = head;

        //Traverse through list while node.next exists. Return the node whose
        //next is null
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        console.log(`${currentNode.value} is the last item in this linked list`);
        return currentNode;
    }

    //Returns node at given index
    function at (index) {
        //Check if index is valid
        const isValidIndex = index > -1 && index <= length;
        if (!isValidIndex) {
            console.log('Index is outside of list range');
            return false
        }

        let currentNode = head;
        let position = 0;

        while (position++ < index) {
            currentNode = currentNode.next;
        }

        console.log(`The value at index ${index} is ${currentNode.value}`);
        return currentNode.value;
    }

    //Removes last element from list
    function pop () {
        let lastNode = tail();

        //Do stuff here

        length--;
        console.log();
    }

    //Returns true or false based on if value is in list
    function contains (value) {
        let currentNode = head;
        console.log(head);

        //Traverse list, if current node's value matches search return true
        while (currentNode) {
            if (value === currentNode.value) {
                console.log(`This linked list does contain the value ${value}`);
                return true;
            }

            //Move onto next node
            currentNode = currentNode.next;
        }

        //Return false if value is not found
        console.log(`This linked list does not contain the value ${value}`);
        return false;
    }

    //Returns index of node containing value or null if not found
    function find (value) {
        let nodeIndex = 0;
        let currentNode = head;

        while (currentNode) {
            if (value === currentNode.value) {
                console.log(`${value} is found at index ${nodeIndex}`);
                return nodeIndex;
            }

            nodeIndex++;

            currentNode = currentNode.next;
        }

        //Return null index if value is not found
        console.log(`Your search of ${value} returned no results in this linked list`);
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
            console.log(`The provided index of ${index} is outside of the linked list's range of 0 - ${size() - 1}`);
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
        console.log(`${value} has been inserted at index ${index}`);
        return true;
    }

    //(Extra credit) Removes node at given index
    function removeAt (index) {

    }

    return {
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