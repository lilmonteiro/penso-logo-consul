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

let formActions = [];

let time = 30;

let btnArray = document.getElementsByTagName("button");

for (const btn of btnArray) {
    if (btn.innerHTML.includes("Comprar") || btn.innerHTML.includes("carrinho")) {
        console.log(btn.getAttribute("formaction"))
        formActions.push(btn.getAttribute("formaction"));
        console.log(formActions);
        console.log(btn);
        btn.removeAttribute("formaction");
        btn.removeAttribute("type");
        btn.setAttribute("type", "button");
        btn.addEventListener("click", initExtension);
    }
}

console.log(formActions)

function initExtension() {

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

    const counterEl = document.getElementById("counter");

    var timer = setInterval(function() {

        time = time < 10 ? '0' + time : time;
        counterEl.innerHTML = `00:${time}`
        time--;
        if (time < 0) {
            clearInterval(timer);
            document.body.removeChild(pageBackground);
            document.body.removeChild(lightboxContainer);
            lightboxContainer.removeChild(lightbox);
            for (let btnI = 0; btnI < btnArray.length; btnI++) {
                if (btnArray[btnI].innerHTML.includes("Comprar") || btnArray[btnI].innerHTML.includes("carrinho")) {
                    for (let actionI = 0; actionI < formActions.length; actionI++) {
                        console.log(formActions[actionI], actionI, btnArray[btnI] )
                        btnArray[btnI].setAttribute("formaction", formActions[actionI]);
                    }
                    btn.removeAttribute("type");
                    btnArray[btnI].setAttribute("type", "submit");
                    btnArray[btnI].removeEventListener("click", initExtension);
                }
            }
        }
    }, 1000);


    function insertSticker(path, className) {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", path);
        imgTag.setAttribute("class", className);
        lightbox.appendChild(imgTag)
    }

    setTimeout(() => {
        for (let s = 0; s < stickers.length; s++) {
            setTimeout(function motionTimer() {
                insertSticker(chrome.runtime.getURL(stickers[s]), ("sticker " + classes[s]));
            }, s * 2000);
        }
    }, 1000);
}