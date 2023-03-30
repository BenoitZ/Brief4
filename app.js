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

const open = document.querySelectorAll('.card button');
let carte = document.querySelectorAll('div .card');

    open.forEach((element, index) => {
            element.addEventListener('click', () => {
                carte[index].classList.toggle('active');
        });
    });