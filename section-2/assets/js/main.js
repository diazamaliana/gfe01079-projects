function createPlaylist(){
    var x = document.forms["formList"]["title","description"].value
    if (x == "" || x == null){
        return alert("Form must be filled out");
    }else {
        return alert("The form was submitted");
    }
}

const titleTxt = document.getElementById("song-title");
const artistTxt = document.getElementById("song-artist");
const albumTxt = document.getElementById("song-album");
const image = document.querySelector("img");

//call to get a track info
fetch(
    "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Try to call above endpoint with a GET method, and console.log() the response
      const { name, album, artists, external_urls} = data;
      titleTxt.innerHTML = `<a href="${external_urls.spotify}">${name}</a>`;
      artistTxt.innerHTML = artists.map((artist) => `<a href="${external_urls.spotify}">${artist.name}</a>`);
      albumTxt.innerHTML = `<a href="${album.external_urls.spotify}">${album.name}</a>`;
      image.src = album.images[0].url;
    })
    .catch((error) => alert(error)); //Do alert() when there is an error
