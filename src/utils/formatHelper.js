

const extractHost = url => {
    if (!url) return '';
    let host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    if (host.indexOf('www.') === 0) host = host.replace('www.', '');
    return host;
}


/**
 *  __ minutes/hours/days ago
 */
const hour = 3600;
const day = 3600 * 24;
const calcTime = time => {
    const fromNow = Date.now() / 1000 - (+time);
    let num; let label;
    if (fromNow < hour) {
        num = fromNow / 60;
        label = 'minute';
    }
    else if (fromNow < day) {
        num = fromNow / hour;
        label = 'hour';
    }
    else {
        num = fromNow / day;
        label = 'day';
    }
    num = ~~num;

    return num > 1 ? `${num} ${label}s` : `${num} ${label}`;
}
 
export default window.localStorage.getItem('user');