var btn = document.getElementsByClassName("generate-meme-btn");
var memetitle = document.getElementsByClassName("meme-title");
var memeimage = document.querySelector(".meme-generator img")
var memeauthor = document.getElementsByClassName("meme-author");

function updateDetails(image,title,author){
    memeimage.src= image;
    memeauthor[0].innerHTML = `Meme by: ${author}`;
    memetitle[0].innerHTML = title;
}

function generateMeme() {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    })
    .catch(error => console.error('Error:', error)); // Handle any errors during the fetch
}

generateMeme();

btn[0].addEventListener("click",generateMeme)