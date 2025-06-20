const colors = require("colors");
const readLine = require("readline");
const muveletek = require("./muveletek.js");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//ez nem a legszebb megoldás de működik :) ez jutott eszembe először
function kor() {
    rl.question("Milyen műveletet szeretnél végezni? Nyomd le a megfelelő gombot!\n1: összeadás, 2: kivonás, 3: szorzás, 4: osztás\n", (valasz) => {
        switch (valasz) {
            case "1":
                rl.question("Add meg az első számot ", (input1) => {
                    rl.question("Add meg a második számot ", (input2) => {
                        console.log(colors.random(input1 + " + " + input2 + " = " + muveletek.osszead(parseFloat(input1), parseFloat(input2))));
                        kor();
                    })
                })
                break;
            case "2":
                rl.question("Add meg az első számot ", (input1) => {
                    rl.question("Add meg a második számot ", (input2) => {
                        console.log(colors.random(input1 + " - " + input2 + " = " + muveletek.kivon(parseFloat(input1), parseFloat(input2))));
                        kor();
                    })
                })
                break;
            case "3":
                rl.question("Add meg az első számot ", (input1) => {
                    rl.question("Add meg a második számot ", (input2) => {
                        console.log(colors.random(input1 + " * " + input2 + " = " + muveletek.szorzas(parseFloat(input1), parseFloat(input2))));
                        kor();
                    })
                })
                break;
            case "4":
                rl.question("Add meg az első számot ", (input1) => {
                    rl.question("Add meg a második számot ", (input2) => {
                        console.log(colors.random(input1 + " / " + input2 + " = " + muveletek.osztas(parseFloat(input1), parseFloat(input2))));
                        kor();
                    })
                })
                break;
            default:
                console.log("Nem olyan nehéz ez azért :)");
        }
        kor();
    });
}

//kor();

// ez egy átdolgozott szépített verzió, 
function kerdez(kerdes) {
    return new Promise((resolve) => rl.question(kerdes, resolve));
}

async function kor2() {
    while (true) {
        const valasz = await kerdez(
            "Milyen műveletet szeretnél végezni? Nyomd le a megfelelő gombot!\n" +
            "1: összeadás, 2: kivonás, 3: szorzás, 4: osztás, 0: kilépés\n"
        );

        if (valasz === "0") {
            rl.close();
            return;
        }

        try {
            const szam1 = parseFloat(await kerdez("Add meg az első számot: "));
            const szam2 = parseFloat(await kerdez("Add meg a második számot: "));

            switch (valasz) {
                case "1":
                    console.log(colors.rainbow(`Eredmény: ${muveletek.osszead(szam1, szam2)}`));
                    break;
                case "2":
                    console.log(colors.rainbow(`Eredmény: ${muveletek.kivon(szam1, szam2)}`));
                    break;
                case "3":
                    console.log(colors.rainbow(`Eredmény: ${muveletek.szorzas(szam1, szam2)}`));
                    break;
                case "4":
                    if (szam2 === 0) {
                        console.log("Nullával nem lehet osztani!");
                    } else {
                        console.log(colors.rainbow(`Eredmény: ${muveletek.osztas(szam1, szam2)}`));
                    }
                    break;
                default:
                    console.log("Kérlek 0-4 közötti számot adj meg!");
            }
        } catch (error) {
            console.log("Hibás input! Kérlek számot adj meg.");
        }
    }
}

kor2();