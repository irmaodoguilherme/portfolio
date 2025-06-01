export const addClasses = (el, ...classes) => el.classList.add(...classes)
export const removeClasses = (el, ...classes) => el.classList.remove(...classes)

export const removeAttribute = (el, ...attributes) =>
    attributes.forEach(attribute => el.removeAttribute(attribute))

export const setAttribute = (el, attributeObj) => {
    const attributes = Object.entries(attributeObj)
    attributes.forEach(([attribute, value]) => el.setAttribute(attribute, value))
}

export const to = promise => promise
    .then(result => [null, result])
    .catch(error => [error, null])