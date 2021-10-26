let start = function() {
    var botoesContainer = document.querySelector(".ui-pdp-container__row--main-actions");
    // var botoesContainer = document.querySelector(".ui-pdp--sticky-wrapper");
    // console.log(botoesContainer);
    // let TopLeft = getElementTopLeft(".ui-pdp-container__row--main-actions");
    // console.log(TopLeft.top + ', ' + TopLeft.left);

    // var injecao = document.body.innerHTML += /*html*/ `
    // <div class="injecao">Oi eu fui injetado</div>
    // `;

    var injecao = document.createElement("div");
    injecao.classList.add("injecao");
    injecao.innerHTML = "teste";


    injecao.style.width = "200px";
    // injecao.style.position = "absolute !important";
    injecao.style.zIndex = "1 !important";

    var comprarAgoraBtn = document.getElementsByTagName("button")[3];
    comprarAgoraBtn.setAttribute("id", "botao-comprar")
    console.log(document.getElementById("botao-comprar"))

    setTimeout(function() { comprarAgoraBtn.appendChild(injecao); }, 500);

}

function getElementTopLeft(id) {

    var ele = document.querySelector(id);
    var top = 0;
    var left = 0;

    while (ele.tagName != "BODY") {
        top += ele.offsetTop;
        left += ele.offsetLeft;
        ele = ele.offsetParent;
    }
    return { top: top, left: left };
}



window.addEventListener("load", start())