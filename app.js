// Carrousel //

document.addEventListener('DOMContentLoaded', () => {
    const nbr = 4;
    var p=0;
    var container = document.getElementById('container');
    var g = document.getElementById('g');
    var d = document.getElementById('d');
        container.style.width = (360*nbr) + "px";


g.addEventListener('click', () => {
    if(p>-nbr+1){
        p--;  
        container.style.transform="translate("+ p * 360 + "px)";
        container.style.transition = "all 1s ease";
     }
    });
d.addEventListener('click', () => {
    if(p<0){
        p++;  
        container.style.transform="translate("+ p * 360 + "px)";
        container.style.transition = "all 1s ease";
     }
    });
});

// PopUp //

// recupérer les boutons par class
// Quand je clique sur le bouton
// tableau -> boucle for
// -> la carte saggrandit -> transform scale ->  

const open = document.querySelector('.card button');
const carte = document.querySelectorAll('#container .card');

console.log(carte);



// for (let index = 0; index<carte.length; index++) {
//     open.addEventListener('click', () => {
//         carte[index].style.transform = "scale(1.5)";
//     });
// }

// for (const key in carte) {
//         open.addEventListener('click', () => {
//         carte.style.transform = "scale(1.5)";

        
//     });}

for (let index = 0; index < carte.length; index++) {
    open.addEventListener('click', () => {
        // carte[index].style.transform = "translate("+ 100 + "px)";
    });
    
}
