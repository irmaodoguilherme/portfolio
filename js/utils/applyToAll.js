export const applyToAll = (
    elements,
    funcRemove,
    classToRemove,
    funcAdd,
    classToAdd
) => {
    elements.forEach(element => {
        funcRemove(element, classToRemove)
        funcAdd(element, classToAdd)
    })
}