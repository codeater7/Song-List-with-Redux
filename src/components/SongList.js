import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions'

class SongList extends Component {
	renderList() {
		return this.props.songsss.map(song => {
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
// to make data show up as props
//PROPS ma aauxa //this.props=== {songs:state.songs}

const mapStateToProps = (state) => {
    console.log(state)
    // songs is the name of prop we give 
    // wonder what is songs, name given in combine reducers
	return { songsss: state.songs };
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
