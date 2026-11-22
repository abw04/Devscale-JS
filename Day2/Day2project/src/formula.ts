export function box(length: number, height: number, width: number): number {
    return length*height*width;
}

export function sphere(r: number): number{
    return 4/3*22/7*r*r*r
}

export function pyramid(length: number, height: number, width: number): number {
    return (length*height*width)/3;
}

export function trueShooting(points:number, fga:number, fta:number): number{
    const ts = points/(2*(fga+0.44*fta))*100
    return Math.round(ts)
}

export function grossProfit(revenue:number, cogs:number): number{
    return revenue - cogs
}

export function netProfit(grossProfit:number, expenses:number): number{
    return grossProfit - expenses
}