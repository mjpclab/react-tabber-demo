require.config({
	baseUrl: 'lib',
	packages: [
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
	var ReactTabberLabel = ReactTabber.Label;
	var ReactTabberPage = ReactTabber.Page;

	var tabs = [
		{label: 'title1', page: 'content 1'},
		{label: 'title2', page: 'content 2'}
	];

	ReactDOM.render(
		React.createElement(ReactTabber,
			{tabs: tabs},
			React.createElement(ReactTabberLabel, null, 'title3'),
			React.createElement(ReactTabberPage, null, 'content 3'),
			React.createElement(ReactTabberLabel, null, 'title4'),
			React.createElement(ReactTabberPage, null, 'content 4')
		),
		document.getElementById('app')
	);
});