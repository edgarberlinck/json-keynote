import React from 'react';

const CenteredContainer = ( { children }) => (
    <div style = {{ 'display': 'flex', 'flexDirection': 'column', 'fontSize': 'xx-large', 'padding': '10%' }}>
        {children}
    </div>
)

export default CenteredContainer;