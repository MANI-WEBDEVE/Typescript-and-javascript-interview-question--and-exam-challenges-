const findMin = (arr: number[]): string => {
    const sum  = arr.sort((a: number, b: number) => {
        
        if (a > b) return 1;
        if (a < b) return -1;
        console.log(a)
        console.log(b)
        return 0;
    })[0];
    return `${sum} val`

    // return Math.min(...arr) //! SIMPLE METHOD
}

console.log(findMin([1,2,3]));
