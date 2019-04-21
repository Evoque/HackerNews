
import Cookies from 'universal-cookie';

const cookies = new Cookies();

let cookieHelper = {
    isLogin: () => {
        return !!cookies.get('user');
    },

    loginedUser: () => {
        return cookies.get('user');
    },

    addItem: (key, value) => {
        cookies.set(key, value);
    }
};


export default cookieHelper;