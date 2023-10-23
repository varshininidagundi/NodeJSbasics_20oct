var head;
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
printList();

insert_at_start(7);
printList();

insert_at_start(1);
printList();

insert_at_end(4);
printList();

insert_at_mid(head.next,10);
printList();
