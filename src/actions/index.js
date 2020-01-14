// action creater index
export const selectSong =(song) =>{
    return {
        type: "SONG_SELECTED",
        payload: song
    }
}
// Export default will only give one  but with export we can export many