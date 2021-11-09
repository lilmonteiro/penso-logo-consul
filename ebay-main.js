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
];

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
];

let hrefActions = [];

let time = 30;

let btnArray = [
    document.getElementById("binBtn_btn"),
    document.getElementById("bidBtn_btn"),
    document.getElementById("isCartBtn_btn"),
    document.getElementById("vi-viewInCartBtn"),
    document.getElementById("vi-atl-lnk-99")
];

for (const btn of btnArray) {
    hrefActions.push(btn.getAttribute("href"));
    btn.removeAttribute("href");
    btn.addEventListener("click", initExtension);
    console.log(btn);
}

function initExtension() {

    let maskOly = document.querySelector(".oly_mask");
    let modalOly = document.getElementById("vi_oly_streamLineBinOly");

    let reference = document.getElementById("gh-gb");
    let pageBackground = document.createElement("div");
    let lightboxContainer = document.createElement("div");
    let lightbox = document.createElement("div");
    pageBackground.classList.add("pageBackground");
    lightboxContainer.classList.add("lightboxContainer");
    lightbox.classList.add("lightbox");

    document.body.appendChild(pageBackground);
    document.body.appendChild(lightboxContainer);
    lightboxContainer.appendChild(lightbox);

    document.body.insertBefore(pageBackground, reference);
    document.body.insertBefore(lightboxContainer, pageBackground);

    lightbox.innerHTML = /*html*/ `
    <div class="header"> 
        <img class="icon-black-friday" src=${chrome.runtime.getURL("images/black-friday.png")}> 
        <p> 2021</p>
    </div>

    <div class="timer"> 
        <p id="counter">
        00:30
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
    let counterEl = document.getElementById("counter");

    let timer = setInterval(function() {

        time = time < 10 ? '0' + time : time;
        counterEl.innerHTML = `00:${time}`
        time--;

        if (time < 0) {
            clearInterval(timer);
            document.body.removeChild(pageBackground);
            document.body.removeChild(lightboxContainer);
            lightboxContainer.removeChild(lightbox);
            for (let btnI = 0; btnI < btnArray.length; btnI++) {
                btnArray[btnI].setAttribute("href", hrefActions[btnI]);
                maskOly.style.display = "block !important";
                modalOly.style.display = "block !important";
                btnArray[btnI].removeAttribute("type");
                btnArray[btnI].removeEventListener("click", initExtension);

            }
        }
    }, 1000);

    function insertSticker(path, className) {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", path);
        imgTag.setAttribute("class", className);
        lightbox.appendChild(imgTag)
    }

    window.setTimeout(() => {
        for (let s = 0; s < stickers.length; s++) {
            setTimeout(function motionTimer() {
                insertSticker(chrome.runtime.getURL(stickers[s]), ("sticker " + classes[s]));
            }, s * 2000);
        }
    }, 1000);
}