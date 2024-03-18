var creercarre = document.getElementById('creercarre')
var centre = document.getElementById('centre')
var inputcouleur = document.querySelector('#couleurcarre')
var mouvement = document.querySelector('#mouvement');

const colors = ['yellow', 'blue', 'black', 'brown', 'purple', 'pink', 'grey', 'red', 'brown'];

creercarre.addEventListener('click', function(){
    // créer un nouveau carré en appuyer sur le bouton
    var nouveaucarre = document.createElement('div')
    nouveaucarre.className = 'newcarre'
    centre.appendChild(nouveaucarre)

    var choix = inputcouleur.value

    // lié à const colors pour choisir une couleur aléatoire parmis celles que j'ai données
    var random = colors[Math.floor(Math.random() * colors.length)];

    // Je mets une couleur pour générer un carré de cette couleur (true) et si rien est écrit c'est une couleur aléatoire (false)
    nouveaucarre.style.backgroundColor = choix || random

    // cliquer sur un carré pour le supprime
    nouveaucarre.addEventListener('click', function(){
        centre.removeChild(nouveaucarre)
    });

    // pour choisir le type de mouvement grâce à la balise select
    var animationType = mouvement.value;

    if (animationType == "gauche") {
        nouveaucarre.style.animation = 'rotationGauche 4s linear infinite';
    } else if (animationType == "droite") {
        nouveaucarre.style.animation = 'rotationDroite 4s linear infinite';
    } else if (animationType == "hautenbas") {
        nouveaucarre.style.animation = 'hautenbas 2s linear infinite';
    } else if (animationType == "basenhaut") {
        nouveaucarre.style.animation = 'basenhaut 2s linear infinite';
    }
});