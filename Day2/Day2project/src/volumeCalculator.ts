import { box, pyramid, sphere } from "./formula";
import { input, select } from "@inquirer/prompts";

const option = await select({
    message: "What do you want to calculate?",
    choices: [
        {name: "Box", value: "01"},
        {name: "Sphere", value: "02"},
        {name: "Pyramid", value: "03"},    ]
})

if (option == "01") {
    const length = await input({message: "input length"});
    const width = await input({message: "input width"});
    const height = await input({message: "input height"});
    const result = box(Number(length), Number(height), Number(width)) 
    console.log(result)
} else if (option == "02") {
    const r = await input({message: "input r"});
    const result = sphere(Number(r)) 
    console.log(result)
} else {
    const length = await input({message: "input length"});
    const width = await input({message: "input width"});
    const height = await input({message: "input height"});
    const result = pyramid(Number(length), Number(height), Number(width)) 
    console.log(result)
}