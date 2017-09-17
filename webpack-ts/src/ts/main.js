"use strict";
exports.__esModule = true;
var React = require("react"); //import * as React from 'react'; not work for IE8 after webpack compilation
var ReactDOM = require("react-dom"); //import * as ReactDOM from 'react-dom'; not work for IE8 after webpack compilation
var ReactTabber = require("react-tabber"); //import ReactTabber from 'react-tabber'; not work for IE8 after webpack compilation
var tabs = [
    { label: 'title1', page: React.createElement("div", null, "content1") },
    { label: React.createElement("span", null, "title2"), page: React.createElement("div", null, "content2") },
];
ReactDOM.render(React.createElement(ReactTabber, { tabs: tabs }), document.getElementById('container'));
