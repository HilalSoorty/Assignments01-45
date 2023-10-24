// Assignment 40 according to github
function makeAlbum(artistName, albumTitle, numTracks) {
    var album = {
        artist: artistName,
        title: albumTitle
    };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}
// Example usage:
var album1 = makeAlbum('Artist Name 1', 'Album Title 1');
var album2 = makeAlbum('Artist Name 2', 'Album Title 2', 12); // Including the number of tracks
var album3 = makeAlbum('Artist Name 3', 'Album Title 3');
console.log(album1);
console.log(album2);
console.log(album3);
