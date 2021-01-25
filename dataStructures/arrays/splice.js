// I like typescript because we can actually define the datatype here so
// we waste no time dealing with type errors when we start the splice
// e.g const splice = (array: Array) => { ...array}
const spliceArray = (array) => {
    array.splice(2, 0)
}