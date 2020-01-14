import React from 'react';
// Curlybraces is for the named export but for default normal
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide ">
					<SongDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
