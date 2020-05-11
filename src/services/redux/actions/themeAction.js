import { SET_THEME, TOGGLE_THEME_MODE } from '../type';

export const setTheme = (payload) => {
    return ({
        type: SET_THEME,
        payload
    })
}
export const toggleThemeMode = () => {
    return ({
        type: TOGGLE_THEME_MODE,
    })
}