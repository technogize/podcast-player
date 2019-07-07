const defaultTrack = {
    "title": "Episode 2 - 'The Art of Jacob Emory'",
    "pubDate": "2013-11-30 07:46:50",
    "link": "http://www.benviewnetwork.com/midnightmarinara/2013/11/29/episode-2-the-art-of-jacob-emory",
    "guid": "510094bde4b0d34aa0c31ea5:528af8cae4b065be58698d5b:529997b9e4b0d8d4512bb88c",
    "author": "David King",
    "thumbnail": "http://static1.squarespace.com/static/510094bde4b0d34aa0c31ea5/t/528b0229e4b039a9b8541c56/1384841770768/1500w/MidnightManProgress.png",
    "description": " <p>In a small town, an old man recounts the strange tale of Jacob Emory, whose art had vibrancy and life... Literally.</p> <p>Featuring the voice of UFO Bob. Check out his channel here: <a href='https://www.youtube.com/user/cyborlite/featured'>https://www.youtube.com/user/cyborlite/featured</a><br>Intro music by Kevin McLeod<br>Additional Music by the Black Twig Pickers and Steve G, Plankton Wa, Ragnar Hellspong, and myuu ( <a href='https://soundcloud.com/myuu'>https://soundcloud.com/myuu</a> )<br>Mixed and edited by David King</p> <p>Original pasta attributed to Peterdivine<br>Read the original here: <a href='http://www.creepypasta.com/the-art-of-jacob-emory/'>http://www.creepypasta.com/the-art-of-jacob-emory/</a></p> ",
    "content": " <p>In a small town, an old man recounts the strange tale of Jacob Emory, whose art had vibrancy and life... Literally.</p> <p>Featuring the voice of UFO Bob. Check out his channel here: <a href='https://www.youtube.com/user/cyborlite/featured'>https://www.youtube.com/user/cyborlite/featured</a><br>Intro music by Kevin McLeod<br>Additional Music by the Black Twig Pickers and Steve G, Plankton Wa, Ragnar Hellspong, and myuu ( <a href='https://soundcloud.com/myuu'>https://soundcloud.com/myuu</a> )<br>Mixed and edited by David King</p> <p>Original pasta attributed to Peterdivine<br>Read the original here: <a href='http://www.creepypasta.com/the-art-of-jacob-emory/'>http://www.creepypasta.com/the-art-of-jacob-emory/</a></p> ",
    "enclosure": {
        "link": "http://static1.squarespace.com/static/510094bde4b0d34aa0c31ea5/t/5299992ce4b05482b01b8c03/1385797932199/MMEp002 - The Art of Jacob Emory.MP3",
        "type": "audio/mpeg",
        "duration": 1038,
        "rating": {
            "scheme": "urn:itunes",
            "value": "no"
        }
    },
    "categories": [
        "Episodes"
    ]
};

export const nowPlaying = (state = defaultTrack, action) => {
    if(action.type === 'SET_TRACK') {
        return action.payload;
    }

    return state;
}