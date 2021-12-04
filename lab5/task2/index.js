const Player = require('./lib/jasmine_examples/Player')
const Song = require('./lib/jasmine_examples/Song')

let song = new Song("Billie Jean")
let player = new Player()

player.play(song)

if (player.isPlaying) {
    console.log(player.currentlyPlayingSong.title)
}