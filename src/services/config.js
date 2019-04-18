


const IS_DEV = process.env.NODE_ENV === 'development';

const BaseUrl = IS_DEV ? 'dev url' : 'prod url';

export default BaseUrl;