window.addEventListener('DOMContentLoaded', function(){
    
    let elGallery = document.querySelector('[data-js-gallery]'),
    elsImg = elGallery.querySelectorAll('img'),
    countImg = elsImg.length,
    premierClick = '',
    deuxiemeClick = '',
    premierAlt = '',
    deuxiemeAlt = '',
    countWin = 0,
    estVrai = true;
    
    elGallery.addEventListener('click',trouverCartes);
    
    
    /**
    * fonction pour trouver les cartes correspondantes
    * @param {*} event 
    * @returns 
    */
    function trouverCartes(event){
        if(event.target.classList.contains('gallery__image')){
            if(estVrai){
                premierClick = event.target;
                premierAlt = premierClick.alt;
                premierClick.classList.remove("hidden");
                estVrai = false;
            } else {
                if (event.target === premierClick) {
                    premierClick.classList.add("hidden");
                    estVrai = true;
                    return
                }
                deuxiemeClick = event.target;
                deuxiemeAlt = deuxiemeClick.alt
                deuxiemeClick.classList.remove("hidden");
            }
            if(premierAlt && deuxiemeAlt){
                if (premierAlt === deuxiemeAlt){
                    deuxiemeClick.parentNode.classList.add("no-event");
                    premierClick.parentNode.classList.add("no-event");
                    countWin++;
                    initialiser()
                } else {
                    premierClick.classList.add("hidden");
                    deuxiemeClick.classList.add("hidden");
                    initialiser();
                }
            }
            if(countWin == (countImg/2)){
                event.currentTarget.classList.add("win");
            }  
        }
    }
    /**
    * fontion pour initialiser les valeurs des clicks
    */
    function initialiser() {
        premierClick = '';
        deuxiemeClick = '';
        premierAlt = '';
        deuxiemeAlt = '';
        countClick = 0;
        estVrai = true;
    }
    
    
    
    
});