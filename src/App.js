import Tab from 'react-tabber'
const { Label, Panel } = Tab;

import 'react-tabber/dist/theme/gray.css';

const entries = [
	{ label: 'title1', panel: <div>content1</div> },
	{ label: <span>title2</span>, panel: <div>content2</div> },
];

export function App() {
	return <Tab entries={entries}>
		<Label>title3</Label>
		<Panel>content 3</Panel>

		<Label>title4</Label>
		<Panel>content 4</Panel>
		<p>another content 4</p>
	</Tab>
}