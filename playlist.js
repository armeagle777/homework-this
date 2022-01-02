function Song ( title, artist ) {
  this.title = title;
  this.artist = artist;
  this.isPlaying = false;
}

function Playlist () {
  this.currentSongIndex = 0;
  this.songs = [];


}

Playlist.prototype.add = function ( newSong ) {
  this.songs.push( newSong );
}
Playlist.prototype.play = function () {
  this.songs[ this.currentSongIndex ].isPlaying = true;
  console.log( this.songs[ this.currentSongIndex ].title + ' started to play' );
}
Playlist.prototype.next = function () {
  this.songs[ this.currentSongIndex ].isPlaying = false;
  if ( this.currentSongIndex <= this.songs.length - 2 ) {
    this.currentSongIndex++;
    this.songs[ this.currentSongIndex ].isPlaying = true;
    console.log( this.songs[ this.currentSongIndex ].title + ' started to play' );
  }
}
Playlist.prototype.stop = function () {
  this.songs[ this.currentSongIndex ].isPlaying = false;
  console.log( this.songs[ this.currentSongIndex ].title + ' stopped to play' );
}
const playlist = new Playlist();

const heyJude = new Song( 'Hey Jude', 'The Beatles' );
const jaded = new Song( 'Jaded', 'Aerosmith' );


playlist.add( heyJude );
playlist.add( jaded );

playlist.play();
playlist.stop();
playlist.play();
playlist.next();


