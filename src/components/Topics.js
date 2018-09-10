import React from 'react';

const Topics = ({ items }) => (
    <ul>
        { items.map(topic => <li key={topic}>{topic}</li>) }
    </ul>)

export default Topics;