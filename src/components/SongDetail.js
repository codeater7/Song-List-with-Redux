import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    // props.song.title
    // props.song.duration
    if (!song){
        return <div> Select a song</div>
    }
    return (
        <div>
        <h3> Details for:</h3>
        <p>Title: {song.title}
         Duration: {song.duration}
        </p>
        </div>
        )
};

const mapStateToProps =(state) => {
	// combine Reducer ma name k hunxa tei nai hunxa
	return {mySelectedSong: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);
