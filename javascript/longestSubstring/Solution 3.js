var lengthOfLongestSubstring = function(s) {
    var mySet = new Set();

    var max = 0;
    var i = 0;
    var j = 0;

    while(i<s.length)
    {
        const charA = s[i]
        const charB = s[j]
        if(!mySet.has(charA))
        {
            mySet.add(charA);
            i++;
        }
        else
        {
            max = Math.max(max,mySet.size);
            mySet.delete(charB);
            j++;
        }
    }
    max = Math.max(max,mySet.size);
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))