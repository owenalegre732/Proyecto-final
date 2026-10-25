function cambiarImagenKumara(imagen) { 
    
    document.getElementById("imagenKumara").src = imagen; 

}


function cambiarImagenLogitech(imagen) {

    document.getElementById("imagenLogitech").src = imagen;

}


function cambiarImagenRazer(imagen) {

    document.getElementById("imagenRazer").src = imagen;

}


function cambiarImagenMouseRazer(imagen) {

    document.getElementById("imagenMouseRazer").src = imagen;

}


function cambiarImagenMouseLogitech(imagen) {

    document.getElementById("imagenMouseLogitech").src = imagen;

}


function cambiarImagenMouseRedragon(imagen) {

    document.getElementById("imagenMouseRedragon").src = imagen;

}


function cambiarImagenAuricularesRedragon(imagen) {

    document.getElementById("imagenAuricularesRedragon").src = imagen;

}


function cambiarImagenAuricularesRazer(imagen) {

    document.getElementById("imagenAuricularesRazer").src = imagen;

}


function cambiarImagenAuricularesLogitech(imagen) {

    document.getElementById("imagenAuricularesLogitech").src = imagen;

}

function cambiarImagenRam(imagen) {

    document.getElementById("imagenRam").src = imagen;

}


function cambiarImagenValueTech(imagen) {

    document.getElementById("imagenValueTech").src = imagen;

}


function cambiarImagenPatriot(imagen) {

    document.getElementById("imagenPatriot").src = imagen;

}

function cambiarImagenMotherMsi(imagen) {
    
    document.getElementById("imagenMotherMsi").src = imagen;
}

function cambiarImagenmotherIntel(imagen) {
    
    document.getElementById("imagenMotherIntel").src = imagen;
}

function cambiarImagenmotherRyzen(imagen) {
    
    document.getElementById("imagenMotherRyzen").src = imagen;

}

function cambiarImagenProceRyzen(imagen) {
    
    document.getElementById("imagenProceRyzen").src = imagen;

}

function cambiarImagenProceIntel(imagen) {
    
    document.getElementById("imagenProceIntel").src = imagen;
}

function cambiarImagenGraficaZotac(imagen) {
    
    document.getElementById("imagenGraficaZotac").src = imagen;
}

function cambiarImagenGraficaAsus(imagen) {
    
    document.getElementById("imagenGraficaAsus").src = imagen;
}

function cambiarImagenGraficaSapphire(imagen) {
    
    document.getElementById("imagenGraficaSapphire").src = imagen;
}

function mismaPagina () {
    
    alert("usted ya se encuentra en esta pestaña")
}

 function calculoTotal(){
            let procesador= parseInt(document.getElementById('proce').value);
            let Graficas= parseInt(document.getElementById('grafica').value);
            let Madre= parseInt(document.getElementById('madre').value);
            let Ram= parseInt(document.getElementById('ram').value);

            alert("precio total: $"+ (procesador+Graficas+Madre+Ram));
        }




