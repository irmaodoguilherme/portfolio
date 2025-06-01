const darkThemePreset = ({
    textToRemove: 'text-black',
    textToAdd: 'text-white',
    bgToRemove: 'bg-dark-subtle',
    bgToAdd: 'bg-dark',
    iconToRemove: 'bi-moon',
    iconToAdd: 'bi-sun-fill',
    dataBs: { 'data-bs-theme': 'dark' },
    linkToRemove: 'text-primary',
    linkToAdd: 'text-info',
    ariaPressed: { 'aria-pressed': true },
    bodyBgToRemove: 'my-bg-light',
    bodyBgToAdd: 'my-bg-dark'
})

const lightThemePreset = ({
    textToRemove: 'text-white',
    textToAdd: 'text-black',
    bgToRemove: 'bg-dark',
    bgToAdd: 'bg-dark-subtle',
    iconToRemove: 'bi-sun-fill',
    iconToAdd: 'bi-moon',
    dataBs: { 'data-bs-theme': 'light' },
    linkToRemove: 'text-info',
    linkToAdd: 'text-primary',
    ariaPressed: { 'aria-pressed': true },
    bodyBgToRemove: 'my-bg-dark',
    bodyBgToAdd: 'my-bg-light'
})

export const getThemePreset = theme =>
    theme === 'dark' ? darkThemePreset : lightThemePreset