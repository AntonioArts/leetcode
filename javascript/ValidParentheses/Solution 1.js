/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []

    const closingCompliment = (parenthesis) => {
        if (parenthesis == ')') {
            return '('
        }
        if (parenthesis == ']') {
            return '['
        }
        if (parenthesis == '}') {
            return '{'
        }
        return false
    }

    for (let i = 0; i < s.length; i++) {
        const closing = closingCompliment(s[i])
        if (closing) {
            if (stack.length == 0) return false
            const lastElemInStack = stack[stack.length-1]
            if (closing == lastElemInStack) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }

    return stack.length == 0 ? true : false
};