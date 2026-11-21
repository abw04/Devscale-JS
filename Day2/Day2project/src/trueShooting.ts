import { trueShooting } from "./formula";
import { input, select } from "@inquirer/prompts";

const player = await input({message: "input player"})
const points = await input({message: "input points"});
const fga = await input({message: "input fga"});
const fta = await input({message: "input fta"});
const result = trueShooting(Number(points), Number(fga), Number(fta));
console.log(`${player} has ${result}% true shooting percentage`)