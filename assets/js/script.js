// Declaración de constantes
// SVG Logo
const $planeta = $("#planeta");

// Quienes Somos Cards (h5)
const $qshPlane = $("#qsh-plane");
const $qshMountain = $("#qsh-mountain");
const $qshRoute = $("#qsh-route");

// Quienes Somos Cards (p)
const $qspPlane = $("#qsp-plane");
const $qspMountain = $("#qsp-mountain");
const $qspRoute = $("#qsp-route");

var jetLag = false;

// El avión rotará al hacer clic
$planeta.on("click", function() {
    $planeta.toggleClass('que-vuele'); 
});

// Cambia algo de su P
// Alerta de Jetlag
$qshPlane.on("click", function() {
    jetLag = !jetLag;
    console.log(jetLag);
    if (jetLag === true) {
        alert('Viaja por Chile');    
    } else {
        alert('Desafio, tienes JetLag!');        
    }
});

// Oculta o muestra P de Quienes Somos Card 2
$qshMountain.on("click", function() {
    $qspMountain.toggleClass('d-none'); 
});

// Hace girar el P de Quienes Somos Card 3
$qshRoute.on("click", function() {
    $qspRoute.toggleClass('que-vuele'); 
});
