import * as React from 'react'
import {render} from 'react-dom';
import ReactTabber from 'react-tabber'

let tabs = [
	{label: 'title1', page: <div>content1</div>},
	{label: <span>title2</span>, page: <div>content2</div>},
];
render(<ReactTabber tabs={tabs}/>, document.getElementById('container'));