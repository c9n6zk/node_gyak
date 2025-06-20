function hatvany(x, n) {
    let eredmeny = 1;
    let list = [];
    list.push(eredmeny);

    for (let i = 0; i < n; i++) {
        eredmeny = eredmeny * x;

        if (i !== (n - 1))
            list.push(eredmeny);
    }

    return {
        result: eredmeny,
        subresults: list
    }
}

//console.log(hatvany(2, 3));
let eredmeny = hatvany(2, 300);
console.log(eredmeny.result, eredmeny.subresults);