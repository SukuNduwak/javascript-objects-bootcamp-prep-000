/**
 * An Object to hold playlist key value pair of an artist and their songs
 */

var playlist = {
  'Craig David': 'Raise and fall.',
  
};

function updatePlaylist(playlist, artist, song) {
  playlist.artist = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  if (delete playlist.artist) {
    return playlist;
  }
}