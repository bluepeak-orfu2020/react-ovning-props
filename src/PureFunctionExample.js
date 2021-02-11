const unPureFunction = (a, b) => {
    a = 1
    return a + b
}

const pureFunction = (a, b) => {
    return a + b
}