var searchform = document.getElementById("search-form");
var searchbox = document.getElementById("search-box");
var searchresult = document.getElementById("search-result");
var showmorebtn = document.getElementById("show-more-btn");

const accesskey = "V8WMxXpaoRiD33mcgE5BxVnSC2_qUUuubes1VzNxOL0"

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response = await fetch(url);
    const data = await response.json();
    
    if(page === 1){
        searchresult.innerHTML= "";  // remove old images for new search.
    }
    
    const results = data.results;

    results.map((result)=> {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild (image);

        searchresult.appendChild(imagelink);
    })

    showmorebtn.style.display ="block";
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
})