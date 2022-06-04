var obj = {
    name: 'rudra'
};
function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray);
