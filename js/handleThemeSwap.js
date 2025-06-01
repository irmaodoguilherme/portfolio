import { to } from './utils/utils.js'

export const handleThemeSwap = async () => {
    const currentTheme = localStorage.getItem('portfolioTheme') || ''
    const isLight = currentTheme === 'light'

    const [error1, { applyTheme }] = await to(import('./applyTheme.js'))

    if (error1) {
        console.log(error1)
        return
    }

    const [error2, { getThemePreset }] = await to(import('./utils/getThemePreset.js'))

    if (error2) {
        console.log(error2)
        return
    }

    const [error3, { updatePortfolioTheme }] = await to(import('./updatePortfolioTheme.js'))

    if (error3) {
        console.log(error3)
        return
    }

    if (isLight) {
        const darkThemePreset = getThemePreset('dark')

        applyTheme(darkThemePreset)
        updatePortfolioTheme('dark')
        return
    }

    const lightThemePreset = getThemePreset('light')

    applyTheme(lightThemePreset)
    updatePortfolioTheme('light')
}