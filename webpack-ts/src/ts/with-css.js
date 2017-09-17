"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var ReactTabber = require("react-tabber/with-css");
var tabs = [
    { label: 'title1', page: React.createElement("div", null, "content1") },
    { label: React.createElement("span", null, "title2"), page: React.createElement("div", null, "content2") },
];
ReactDOM.render(React.createElement(ReactTabber, { tabs: tabs }), document.getElementById('container'));
