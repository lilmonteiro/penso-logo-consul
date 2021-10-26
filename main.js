let start = function() {
    var botoesContainer = document.querySelector(".ui-pdp-container__row--main-actions");

    var injecao = document.createElement("div");
    var frase = document.createElement("p");
    var countDown = document.createElement("p");
    injecao.classList.add("injecao");
    injecao.appendChild(frase)
    injecao.appendChild(countDown)
    frase.innerHTML = "Pense e Consul!";

    var comprarAgoraBtn = document.getElementsByTagName("button")[3];
    var addToCart = document.getElementsByTagName("button")[4];
    var comprarMercadoCredito = document.getElementsByTagName("a")[48];

    comprarAgoraBtn.disabled = true;
    addToCart.disabled = true;
    comprarMercadoCredito.style.visibility = "hidden";


    botoesContainer.addEventListener("click", function(e) {
        botoesContainer.appendChild(injecao);
        console.log("clicado")

        var timeleft = 5;
        var regressiveCount = setInterval(function() {
            if (timeleft <= 0) {
                clearInterval(regressiveCount);
            } else {
                countDown.innerHTML = timeleft + " segundo(s)";
            }
            timeleft -= 1;
        }, 1000);

        setTimeout(() => {
            comprarAgoraBtn.disabled = false;
            addToCart.disabled = false;
            comprarMercadoCredito.style.visibility = "visible";
            botoesContainer.removeChild(injecao);
        }, 5500);
    })

}

window.addEventListener("load", start())