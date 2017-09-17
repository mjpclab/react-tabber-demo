import React = require('react');
import ReactDOM = require('react-dom');
import ReactTabber = require('react-tabber/with-css');

let tabs = [
	{label: 'title1', page: <div>content1</div>},
	{label: <span>title2</span>, page: <div>content2</div>},
];
ReactDOM.render(<ReactTabber tabs={tabs}/>, document.getElementById('container'));