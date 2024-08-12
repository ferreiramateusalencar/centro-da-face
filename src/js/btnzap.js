var div = document.createElement("div");
div.style.position = "fixed";
div.style.bottom = "60px";
div.style.height = "65px";
div.style.right = "20px";
div.style.alignItems = "center";
div.style.display = "flex";

var btn = document.createElement("div");
btn.style.cursor = "pointer";
btn.id = '#button-whatsapp';

var image = document.createElement("img");
image.src = "https://www.dsmeletro.com/wp-content/uploads/2020/04/whatsapp-icon-transparent-png-6.png";
image.style.width = "65px";

var p = document.createElement("h4");
//p.style.marginRight = "5px";
//p.style.fontSize = "0.9em";
//p.innerHTML = "Fale conosco!";
//p.style.border = "solid #000 2px";
//p.style.borderRadius = "5px";
//p.style.background = "#fbfaf9";
//p.style.opacity = "0.9";
//p.style.padding = "4px 15px";
//p.classList.add("hide-on-small-screen");

div.appendChild(p);
btn.appendChild(image);
div.appendChild(btn);

var div2 = document.createElement("div");
div2.style.position = "fixed";
div2.style.bottom = "60px";
div2.style.right = "20px";
div2.style.alignItems = "center";
div2.style.width = "60px";

var btnLigar = document.createElement("a");
var imgLigar = document.createElement("img");
imgLigar.style.width = "60px";
imgLigar.src = "https://cdn-icons-png.flaticon.com/512/4517/4517980.png";
imgLigar.style.borderRadius = "50%";
imgLigar.style.border = "solid #000 2px";
imgLigar.style.marginBottom = "5px";
btnLigar.href = "tel:(87) 9 8861-2772";
btnLigar.id = "btnLigar";
btnLigar.appendChild(imgLigar);

var btnInstagram = document.createElement("a");
var imgInstagram = document.createElement("img");
imgInstagram.style.width = "60px";
imgInstagram.src = "https://cdn.icon-icons.com/icons2/2412/PNG/512/instagram_icon_146245.png";
imgInstagram.style.borderRadius = "50%";
imgInstagram.style.border = "solid #000 2px";
imgInstagram.style.marginBottom = "5px";
btnInstagram.id = "btnInstagram";
btnInstagram.href = "https://www.instagram.com/centrodaface/";
btnInstagram.appendChild(imgInstagram);

var btnWhatsapp = document.createElement("a");
var imgWhatsapp = document.createElement("img");
imgWhatsapp.style.borderRadius = "50%";
imgWhatsapp.style.width = "60px";
imgWhatsapp.src = "https://portais.univasf.edu.br/programadegestao/imagens/icon-whatsapp.png/@@images/5799978b-ce74-4807-9b1b-18871680e34b.png";
imgWhatsapp.style.border = "solid #000 2px";
btnWhatsapp.id = "btnWhatsapp";
btnWhatsapp.href = "https://wa.me/5587988612772?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+a+clínica.";
btnWhatsapp.appendChild(imgWhatsapp);

var btnClose = document.createElement("img");
btnClose.src = "https://cdn-icons-png.flaticon.com/512/1617/1617543.png";
btnClose.style.width = "20px";
btnClose.style.marginLeft = "40px";
btnClose.style.cursor = "pointer";

div2.appendChild(btnClose);
div2.appendChild(btnLigar);
div2.appendChild(btnInstagram);
div2.appendChild(btnWhatsapp);
div2.style.display = "none";

var html = document.querySelector('html');
html.appendChild(div);
html.appendChild(div2);
div.style.zIndex = "999999";
div2.style.zIndex = "999999";

btn.onclick = function () {
    if(div2.style.display == "none"){
        div2.style.display = "block";
        p.style.display = "none";
        btn.style.display = "none";
    }
};

btnClose.onclick = function() {
    div2.style.display = "none";
    p.style.display = "block";
    btn.style.display = "flex";
}
