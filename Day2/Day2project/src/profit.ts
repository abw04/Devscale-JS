import { input, select } from "@inquirer/prompts";
import { netProfit, grossProfit } from "./formula";

const revenue = await input({message: "input revenue"})
const cogs = await input({message: "input cogs"});
const expenses = await input({message: "input expenses"});
const gProfit = grossProfit(Number(revenue), Number(cogs))
const nProfit = netProfit(Number(gProfit), Number(expenses));

if (nProfit>0) {
    console.log(`Keuntungan Perusahaan Anda adalah ${nProfit} Rupiah, pertahankan`)
} else if (nProfit==0) {
    console.log(`Perusahaan anda Impas, perbaiki`)
} else {
    console.log(`Kerugian Perusahaan Anda adalah ${nProfit} Rupiah, segera perbaiki`)
}

