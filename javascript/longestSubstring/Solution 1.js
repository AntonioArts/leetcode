var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        while (set.has(char)) {
            set.delete(s[left])
            left++;
        }
        set.add(char);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}

console.log(lengthOfLongestSubstring("abcabcbb"))