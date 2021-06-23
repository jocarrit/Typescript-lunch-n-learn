// Functions

function add(...nums: number[]) :number{
    return nums.reduce((prev, curr) => prev + curr)
}

console.log(add(1, 2, 3, 87,m ))