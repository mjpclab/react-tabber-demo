const React = require('react');                 //import * as React from 'react'; not work for IE8 after webpack compilation
const ReactDOM = require('react-dom');          //import * as ReactDOM from 'react-dom'; not work for IE8 after webpack compilation
const ReactTabber = require('react-tabber');    //import ReactTabber from 'react-tabber'; not work for IE8 after webpack compilation

let tabs = [
	{label: 'title1', page: <div>content1</div>},
	{label: <span>title2</span>, page: <div>content2</div>},
];
ReactDOM.render(<ReactTabber tabs={tabs}/>, document.getElementById('container'));