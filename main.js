let stickers = [
    "images/para.png",
    "images/sera.png",
    "images/respira-e-conta.png",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/joinha.png",
    "images/pensou.png",
    "images/tem-certeza.png",
    "images/bem-pensado.png",
    "images/voce-realmente-quer.png",
    "images/ultima-chance.png"
]

let classes = [
    "para",
    "sera",
    "respira",
    "um",
    "dois",
    "tres",
    "joinha",
    "pensou",
    "certeza",
    "pensado",
    "realmente",
    "chance"
]

let pageBackground = document.createElement("div");
let lightboxContainer = document.createElement("div");
let lightbox = document.createElement("div");
pageBackground.classList.add("pageBackground");
lightboxContainer.classList.add("lightboxContainer");
lightbox.classList.add("lightbox");

let eRef = document.getElementById("nav-header-menu-switch");

document.body.appendChild(pageBackground);
document.body.appendChild(lightboxContainer);
lightboxContainer.appendChild(lightbox);

document.body.insertBefore(pageBackground, eRef);
document.body.insertBefore(lightboxContainer, pageBackground);

lightbox.innerHTML = /*html*/ `
    <div class="header"> 
        <img class="icon-black-friday" src=${chrome.runtime.getURL("images/black-friday.png")}> 
        <p> 2021</p>
    </div>

    <div class="timer"> 
        <p>
            00:03
        </p> 
    </div>

    <div class="footer">
        <div>
        <p class="apelo">Para</p> 
        <p class="apelo">E</p> 
        <p class="apelo">Pensa</p> 
        </div>
        <img src=${chrome.runtime.getURL("images/logo-consul.png")}>
    </div>
`


// insertSticker(chrome.runtime.getURL("images/para.png"), "sticker pare");
// insertSticker(chrome.runtime.getURL("images/sera.png"), "sticker sera");
// insertSticker(chrome.runtime.getURL("images/respira-e-conta.png"), "sticker respira");
// insertSticker(chrome.runtime.getURL("images/1.png"), "sticker um");
// insertSticker(chrome.runtime.getURL("images/2.png"), "sticker dois");
// insertSticker(chrome.runtime.getURL("images/3.png"), "sticker tres");
// insertSticker(chrome.runtime.getURL("images/joinha.png"), "sticker joinha");
// insertSticker(chrome.runtime.getURL("images/pensou.png"), "sticker pensou");
// insertSticker(chrome.runtime.getURL("images/tem-certeza.png"), "sticker certeza");
// insertSticker(chrome.runtime.getURL("images/bem-pensado.png"), "sticker pensado");
// insertSticker(chrome.runtime.getURL("images/bem-pensado.png"), "sticker pensado");
// insertSticker(chrome.runtime.getURL("images/voce-realmente-quer.png"), "sticker realmente");
// insertSticker(chrome.runtime.getURL("images/ultima-chance.png"), "sticker chance");


function insertSticker(path, className) {
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", path);
    imgTag.setAttribute("class", className);
    lightbox.appendChild(imgTag)
}

for (let s = 0; s < stickers.length; s++) {
    setTimeout(function motionTimer() {
        insertSticker(chrome.runtime.getURL(stickers[s]), ("sticker " + classes[s]));
        console.log(1)
    }, s * 3000);
}