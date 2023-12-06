/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s || !s.length) return 0
    const set = new Set()
    let maxSubstring = 0
    let left = 0
    for (let i = 0; i < s.length; i++) {
      const char = s[i]
      while (set.has(char)) {
        set.delete(s[left])
        left++
      }
      set.add(char)
      maxSubstring = Math.max(maxSubstring, i - left + 1)
    }
    return maxSubstring;
};

console.log(lengthOfLongestSubstring('abcabcbb'))