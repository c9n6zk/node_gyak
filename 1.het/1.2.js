async function add(numA, numB) {
    return numA + numB;
}

function sub(numA, numB) {
    return new Promise(resolve => resolve(numA - numB));
}

function mul(numA, numB) {
    return numA * numB;
}

add(5, 4).then(a => add(2, 1).then(b => sub(a, mul(3, b)))).then(c => sub(c, 6)).then(eredmeny => console.log(eredmeny));

//(await sub(await sub(await add(5, 4), await mul(3, await add(2, 1))), 6)).then(eredmeny => console.log(eredmeny));

//sub(add(5, 4), mul(3, add(2, 1))).then(diff => sub(diff, 6)).then(console.log(eredmeny));

//sub(add(5, 4), mul(3, add(2, 1))).then(result => sub(result, 6)).then(eredmeny => console.log(eredmeny));



/*
let otmegnegy = add(5, 4);
let ketomegegy = add(2, 1);
let haromxharom = mul(3, ketomegegy);
let elsokivonas = sub(otmegnegy, haromxharom);
let eredmeny = sub(elsokivonas, 6);
*/