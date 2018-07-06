export const LOGIN = 'UNLIKE_MESSAGE';
export const USERSIGNUP = 'USERSIGNUP';

export const login = (token) => {
    return {
        type: LOGIN,
        token: token,
    }
};
export const usersignup = (token) => {
    return {
        type: USERSIGNUP,
        token: token,
    }
};