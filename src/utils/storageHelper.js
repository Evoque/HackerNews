


const KEY_USER = 'user';

export default {
    isLogin: () => {
        return !!window.localStorage.getItem(KEY_USER);
    },

    loginnedUser: () => {
        const userStr = window.localStorage.getItem(KEY_USER);
        console.log(userStr);
        if (userStr) return JSON.parse(userStr);
        return undefined;
    },

    setUser: (user) => {
        window.localStorage.setItem(KEY_USER, JSON.stringify(user));
    }
}