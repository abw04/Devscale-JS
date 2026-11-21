import { input, select } from "@inquirer/prompts";

const pilihan = await select({
    message: "Choose your Starter",
    choices: [
        {name: "Bulbasaur", value: "01"},
        {name: "Charmander", value: "02"},
        {name: "Squirtle", value: "03"},
    ]
})

if (pilihan == "01") {
    const hasil = "Will Become Venusaur";
    console.log(hasil)
} else if (pilihan == "02") {
    const hasil = "Will Become Charizard";
    console.log(hasil)
} else {
    const hasil = "Will Become Blastoise";
    console.log(hasil)
}