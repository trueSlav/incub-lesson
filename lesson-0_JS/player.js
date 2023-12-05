let playlist = {
	title: 'Hip-Hop Hits',
	coverImageUrl: 'coverPlaylist.png',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSeconds: 733
	},
	tracks: [
		{
			coverImageUrl: 'track2.png',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: 'Eminem_-_Rap_God.mp3',
			isHot: false
		},
		{
			coverImageUrl: 'track1.png',
			artistName: '50cent',
			title: 'In da Club',
			fileUrl: 'eminem-50cent-you-dont-know.mp3',
			isHot: true
		}
	]
}

//render

renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {

	renderPlaylistHeader(playlistForRendering);
	
	renderTrack(playlistForRendering.tracks[0])
	renderTrack(playlistForRendering.tracks[1])

 }

function renderPlaylistHeader(inputPlaylistForRendering){

	let playlistImageElement = document.createElement('img');
	playlistImageElement.src = inputPlaylistForRendering.coverImageUrl;
	document.body.append(playlistImageElement);
	
	let playlistTitleElement = document.createElement('h2');
	playlistTitleElement.append(inputPlaylistForRendering.title);
	document.body.append(playlistTitleElement);

} 

function renderTrack(inputTrackForRendering){

  let trackElement = document.createElement('div');
	
	trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);

	document.body.append(trackElement);
} 