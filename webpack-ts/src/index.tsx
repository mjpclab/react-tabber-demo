import React from 'react'
import {render} from 'react-dom';
import ReactTabber from 'react-tabber'

import 'react-tabber/dist/theme/gray.css';
import './index.css';

const {Label, Panel} = ReactTabber;

const entries = [
	{label: 'title1', panel: <div>content1</div>},
	{label: <span>title2</span>, panel: <div>content2</div>},
];
render(
	<ReactTabber entries={entries}>
		<Label>title3</Label>
		<Panel>content 3</Panel>

		<Label>title4</Label>
		<Panel>content 4</Panel>
		<p>another content 4</p>
	</ReactTabber>
	, document.getElementById('app'));
