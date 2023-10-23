var head;
var tail;
class Node 
{
	constructor(val) 
	{
		this.data = val;
		this.next = null;
	}
}
// insert at beginning
function insert_at_start(new_data)
{
    let new_Node = new Node(new_data);
    new_Node.next = head;
    new_Node.prev = null;
    if (head != null){
        head.prev = new_Node;
    }
    head = new_Node;
}
//insert at mid
function insert_at_mid(prev_Node,new_data)
{
    if (prev_Node == null) {
        document.write("The given previous node cannot be NULL <br>");
        return;
    }
    
    let new_node = new Node(new_data);
    new_node.next = prev_Node.next;
    prev_Node.next = new_node;
    new_node.prev = prev_Node;
    if (new_node.next != null){
        new_node.next.prev = new_node};
    
}
//insert at end or push or append
function insert_at_end(new_data)
{
	var new_node = new Node(new_data);
	var last = head;
	new_node.next = null;
	if (head == null) {
		new_node.prev = null;
		head = new_node;
		return;
	}
	while (last.next != null)
		last = last.next;
	last.next = new_node;
	new_node.prev = last;
}

// printing
function printList() 
{
	var tnode = head;
	while (tnode != null) 
	{
		console.log("  "+tnode.data + " \r");
		tnode = tnode.next;
	}
    console.log("\n")
}


insert_at_end(6);
insert_at_start(7);
insert_at_start(1);
insert_at_end(4);
insert_at_mid(6,10);
insert_at_end(23);
printList();

//dlete starting node
function delete_start() { 
	if (head == null) {  // Assuming head is declared somewhere in your code
		console.log("List is empty"); 
		return; 
	} 
	let curr = head; 
	head = head.next; 
	if (head) {
		head.prev = null; 
	}
	let delValue = curr.data; 
	curr = null; 
	console.log("Deleted element: " + delValue); 
}

delete_start();
printList();

//delete last node
function delete_at_End() { 
	if (this.head == null) { 
		console.log("List is empty"); 
		return; 
	}
	let curr = this.tail; 
	this.tail = this.tail.prev;
	this.tail.next = null; 
	let delValue = curr.data; 
	curr = null; 
	console.log("Removed element: " + delValue); 
}

console.log("after deleting last element");
delete_at_End();
printList();
//delete perticular node for given value
/*function deleteVal(val) {
    if (head == null) {
        console.log("List is empty");
        return;
    }
    if (head.data == val) {
        delete_start();
        return;
    }
    let curr = head;
    while (curr && curr.data !== val) {
        curr = curr.next;
        if (curr == null)
            return console.log(
                "Incorrect Value! Element does not exist."
            );
    }

    if (curr.next == null) {
        delete_End();
        return;
    }

    let previous = curr.prev;
    let next = curr.next;
    previous.next = next;
    next.prev = previous;
    let delValue = curr.data;
    curr = null;
    console.log("Removed element: " + delValue);
}

deleteVal(23);
printList();*/


