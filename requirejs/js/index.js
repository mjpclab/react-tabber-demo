require.config({
	baseUrl: 'lib',
	packages: [
		{
			name: 'prop-types',
			location: 'prop-types',
			main: 'prop-types'
		},
		{
			name: 'react',
			location: 'react',
			main: 'react.development'
		},
		{
			name: 'react-dom',
			location: 'react',
			main: 'react-dom.development'
		},
		{
			name: 'react-tabber',
			location: 'react-tabber',
			main: 'react-tabber'
		}
	]
});

require(['react', 'react-dom', 'react-tabber'], function (React, ReactDOM, ReactTabber) {
	var Label = ReactTabber.Label;
	var Panel = ReactTabber.Panel;

	var tabs = [
		{label: 'title1', panel: 'content 1'},
		{label: 'title2', panel: 'content 2'}
	];

	ReactDOM.render(
		React.createElement(ReactTabber,
			{tabs: tabs},
			React.createElement(Label, null, 'title3'),
			React.createElement(Panel, null, 'content 3'),
			React.createElement(Label, null, 'title4'),
			React.createElement(Panel, null, 'content 4')
		),
		document.getElementById('app')
	);
});