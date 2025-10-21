export const Add = (first:number, second:number) =>{
    return first + second;
}

export const Substruct = (first:number, second:number) =>{
    return first - second;
}

export const Multiply = (first:number, second:number) =>{
    return first * second;
}

export const Divide = (first:number, second:number) =>{
    if(second === 0)
        throw new Error("На ноль делить нельзя");

    return first / second;
}

export const IsEven = (value:number) =>{
    return value % 2 === 0;
}

export const Percentage = (value:number, percentage:number) =>{

    if(percentage < 0)
        throw new Error("percentage должен быть больше 0");
    if(percentage > 100)
        throw new Error("percentage должен быть меньше 100");

    return value * percentage / 100;
}