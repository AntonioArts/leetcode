/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const result = []

    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '+': {
                result.push(Number(result[result.length-1]) + Number(result[result.length-2]))
            } break
            case 'D': {
                result.push(Number(result[result.length-1]) * 2)
            } break
            case 'C': {
                result.pop()
            } break
            default: {
                result.push(Number(operations[i]))
            }
        }
    }

    return result.reduce((acc, el) => acc + el, 0)
};