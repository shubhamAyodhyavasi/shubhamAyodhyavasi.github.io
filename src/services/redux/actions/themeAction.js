import { SET_THEME } from '../type';

export const setTheme = (payload) => {
    return ({
        type: SET_THEME,
        payload
    })
}