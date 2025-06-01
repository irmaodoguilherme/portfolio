import { to } from './utils/utils.js'

export const buttonSwitchTheme = document.querySelector('[data-button="switch-theme"]')

const handleButtonSwitchThemeClick = async () => {
    const [error, { handleThemeSwap }] = await to(import('./handleThemeSwap.js'))

    if (error) {
        console.log(error)
        return
    }

    handleThemeSwap()
}

const init = async () => {
    const currentTheme = localStorage.getItem('portfolioTheme') || ''
    const isLight = currentTheme === 'light'

    if (!isLight) {
        return
    }

    const [error1, { getThemePreset }] = await to(import('./utils/getThemePreset.js'))

    if (error1) {
        console.log(error1)
        return
    }

    const [error2, { applyTheme }] = await to(import('./applyTheme.js'))

    if (error2) {
        console.log(error2)
        return
    }

    const lightThemePreset = getThemePreset(currentTheme)

    applyTheme(lightThemePreset)
}

buttonSwitchTheme.addEventListener('click', handleButtonSwitchThemeClick)

init()