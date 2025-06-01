import { addClasses, setAttribute, removeClasses, removeAttribute } from './utils/utils.js'
import { applyToAll } from './utils/applyToAll.js'
import { buttonSwitchTheme } from './app.js'

export const applyTheme = theme => {
    const {
        textToRemove,
        textToAdd,
        bgToRemove,
        bgToAdd,
        iconToRemove,
        iconToAdd,
        dataBs,
        linkToRemove,
        linkToAdd,
        ariaPressed,
        bodyBgToRemove,
        bodyBgToAdd
    } = theme

    const elsWithTextToBeRemoved = [...document.querySelectorAll(`.${textToRemove}`)]
    const elsWithBGToBeRemoved = [...document.querySelectorAll(`.${bgToRemove}`)]
    const elWithIconToBeRemoved = document.querySelector(`.${iconToRemove}`)
    const elsWithLinkToBeRemoved = [...document.querySelectorAll(`.${linkToRemove}`)]
    const navbar = document.querySelector('[data-container="navbar"]')

    applyToAll(elsWithTextToBeRemoved, removeClasses, textToRemove, addClasses, textToAdd)
    applyToAll(elsWithBGToBeRemoved, removeClasses, bgToRemove, addClasses, bgToAdd)
    applyToAll(elsWithLinkToBeRemoved, removeClasses, linkToRemove, addClasses, linkToAdd)
    applyToAll([document.body], removeClasses, bodyBgToRemove, addClasses, bodyBgToAdd,)
    applyToAll([elWithIconToBeRemoved], removeClasses, iconToRemove, addClasses, iconToAdd,)
    applyToAll([navbar], removeAttribute, dataBs['data-bs-theme'], setAttribute, dataBs)

    setAttribute(buttonSwitchTheme, ariaPressed)
}