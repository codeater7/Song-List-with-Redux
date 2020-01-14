import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions'

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
                        <button className="ui button primary"
                        onClick ={ ()=> this.props.selectSong(song)}> Select</button>
					</div>

					<div className="content"> {song.title}</div>
				</div>
			);
		});
	}

	render() {
        
		return <div className= "ui divided list"> {this.renderList()} </div>;
	}
}
// going to state data from redux store and run some computation
//By convention, it is called mapStateToProps
const mapStateToProps = state => {
	//this.props=== {songs:state.songs}
	return { songs: state.songs };
};
export default connect(mapStateToProps, {selectSong:selectSong})(SongList);
//connect returns the function ,
//second set invokes the  function that got returned

// function connect(){
//     return function () {
//       return  'Hi there';
//     }
//   }
//   connect() ()
