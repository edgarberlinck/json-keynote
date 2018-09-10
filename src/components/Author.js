import React from 'react';

const Author = ({ name }) => (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <small>by: { name }</small>
                             </div>)

export default Author;