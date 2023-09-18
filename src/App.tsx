import React from 'react';
import Card from './Card';

import './App.sass';
import './Cards.sass'

const App: React.FunctionComponent = (): React.ReactElement => {

	return (
		<div className="container">

			<Card />
			<Card />
			<Card />
			<Card />
			<Card />

		</div>
	);
}

export default App;