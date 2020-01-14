import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'NO Scrubs', duration: '4:05' },
		{ title: 'Macerena', duration: '2:30' },
		{ title: 'All Star ', duration: '3:15' },
		{ title: 'I want you', duration: '2:35' },
	];
};
const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
