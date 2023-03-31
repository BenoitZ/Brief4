// PopUp //

const open    = document.querySelectorAll('.card button');
const img     = document.querySelectorAll('.card img');
const h2      = document.querySelectorAll('.card h2');
const p       = document.querySelectorAll('.card .cardContent');
let boutonPop = document.createElement('button');
    boutonPop.innerText ='Close';
let carte = "";

for (let index = 0; index < open.length; index++) {
    open[index].addEventListener('click', () => {
        carte = document.createElement('div');
        carte.setAttribute('class', 'popUp');
        let imagePop = document.createElement('img');
        imagePop.src =img[index].src;
        let h2Pop = document.createElement('h2')
        h2Pop.innerHTML = h2[index].textContent;
        let pPop = document.createElement('p');
        pPop.innerHTML = p[index].textContent;
            carte.append(imagePop);
            carte.append(h2Pop);
            carte.append(pPop);
            carte.append(boutonPop);
        document.body.append(carte);   
});
}

    boutonPop.addEventListener('click', () => {  
        carte.style.display ='none';       
});


// Carrousel //

document.addEventListener('DOMContentLoaded', () => {
    const nbr = 4;
    var p=0;
    var container = document.getElementById('container');
    var g = document.getElementById('g');
    var d = document.getElementById('d');
        container.style.width = (351*nbr) + "px";

g.addEventListener('click', () => {
    if(p>-nbr+1){
        p--;  
        container.style.transform="translate("+ p * 351 + "px)";
        container.style.transition = "all 1s ease";
     }
    });
d.addEventListener('click', () => {
    if(p<0){
        p++;  
        container.style.transform="translate("+ p * 351 + "px)";
        container.style.transition = "all 1s ease";
     }
    });
});

