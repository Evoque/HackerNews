


const KEY_USER = 'user';
const KEY_IDS = 'visitedids';

export default {
    isLogin: () => {
        return !!window.localStorage.getItem(KEY_USER);
    },

    loginnedUser: () => {
        const userStr = window.localStorage.getItem(KEY_USER); 
        if (userStr) return JSON.parse(userStr);
        return undefined;
    },

    setUser: (user) => {
        window.localStorage.setItem(KEY_USER, JSON.stringify(user));
    },

    setVisitedIDs: ids => {
        window.localStorage.setItem(KEY_IDS, JSON.stringify(ids));
    },
    getVisitedIDs: () => { 
        return JSON.parse(window.localStorage.getItem(KEY_IDS) || '{}');
    }
}