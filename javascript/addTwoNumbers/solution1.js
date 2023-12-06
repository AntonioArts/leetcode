function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        const node = new ListNode(newVal % 10, nextNode);
        return node
    }
    return iter(l1, l2);
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
// const l1 = new ListNode(0, null)
// const l2 = new ListNode(0, null)
// const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
// const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))

let result = addTwoNumbers(l1, l2)

while (result.next) {
    console.log(result.val)
    result = result.next
}
console.log(result.val)

