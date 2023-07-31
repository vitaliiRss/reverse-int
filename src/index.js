module.exports = function reverse (n) {
    const numbertoString = String(Math.abs(n));
    let str = '';

    /* Option 1 */
    // for (let i = numbertoString.length - 1; i >= 0 ; i--) {
    //     str = `${str}${numbertoString[i]}`;
    // }

    /* Option 2 */
    str = numbertoString.split('').reverse().join('');

    return str;
}
