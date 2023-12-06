var mergeTwoLists = function(list1, list2) {
    let ans = new ListNode();
    let ptr = ans;
    while(list1 && list2){
        if(list1.val <= list2.val){
            ans.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            ans.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        ans = ans.next;
    }
    while(list1){
        ans.next = new ListNode(list1.val);
        list1 = list1.next;
        ans = ans.next;
    }
    while(list2){
        ans.next = new ListNode(list2.val);
        list2 = list2.next;
        ans = ans.next;
    }
    return ptr.next;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log()