

const extractHost = url => {
    if(!url) return '';
    let host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    if(host.indexOf('www.') === 0) host = host.replace('www.', '');
    return host;
}

export { extractHost };