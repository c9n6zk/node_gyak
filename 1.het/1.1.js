const list = [false, 1, '2', [3, 4], { ot: '5' }];
const bucket = { bool: [], string: [], number: [], list: [], object: [] };

list.forEach((item) => {
    if (typeof item === 'boolean') { bucket.bool.push(item); }
    else if (typeof item === 'string') { bucket.string.push(item); }
    else if (typeof item === 'number') { bucket.number.push(item); }
    else if (typeof item === 'object') {
        if (item.length) {
            bucket.list.push(item);
        }
        else {
            bucket.object.push(item);
        }
    }
});

console.log(bucket);