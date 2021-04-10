function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  let sum = new ListNode();
  let currentNode = sum;
  let temp = 0;

  while (cur1 || cur2 || temp) {
    let nextNode = new ListNode();
    let first = cur1 ? cur1.val : 0;
    let second = cur2 ? cur2.val : 0;

    if (first + second + temp > 9) {
      currentNode.val = first + second - 10 + temp;
      temp = 1;
      console.log(currentNode.val);
    } else {
      currentNode.val = first + second + temp;
      temp = 0;
      console.log(currentNode.val);
    }

    if ((cur1 && cur1.next) || (cur2 && cur2.next) || temp) {
      currentNode.next = nextNode;
      currentNode = nextNode;
    }

    cur1 = cur1 ? cur1.next : null;
    cur2 = cur2 ? cur2.next : null;
  }

  return sum;
}

let list1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))
  )
);
let list2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log(addTwoNumbers(list1, list2));
