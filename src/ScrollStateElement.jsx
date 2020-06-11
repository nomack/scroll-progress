import React from 'react';
import ReactDOM from 'react-dom';

let pct = 0;

const handleScroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    pct = (winScroll / height) * 100;

    render();
};

const render = () => {
    const progress = <div id="st-bar" style={{ width: pct + '%' }}></div>;

    ReactDOM.render(progress, document.querySelector('#st-container'));
};

handleScroll();

window.addEventListener('scroll', handleScroll);
