

import React from 'react';

const styleLike = {color: '#ff6600'};
const styleUnlike = {color: '#828282'};
export default ({like}) => {
    if (like) return <span style={styleUnlike}>unlike</span>
    return <span style={styleLike}>like</span>
}