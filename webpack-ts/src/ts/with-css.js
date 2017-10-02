import * as React from 'react';
import { render } from 'react-dom';
import ReactTabber from 'react-tabber/with-css';
var tabs = [
    { label: 'title1', page: React.createElement("div", null, "content1") },
    { label: React.createElement("span", null, "title2"), page: React.createElement("div", null, "content2") },
];
render(React.createElement(ReactTabber, { tabs: tabs }), document.getElementById('container'));
