// Ceux fichier me sert afficher les produit de la filière Musc

// Je crée une fonction fléchée elle prend en paramètre
// mon fichier qui contient le tableau d'objet contenu dans OudData

const Santal = ({ SantalData }) => {
  return (
    // retourner un valeur
    // je englobe dans une div tous le processus de bouclage qui permet d'afficher mais articles
 

    <div id="santal">
      Santal
      {SantalData.map((item, index) => (
        // Avec le .map() je vais boucler dans le tableau ambre contenu dans AmbreData.
        //item sa va chercher la valeur de mon tableau d'objet via un (.) pour aller la recuperer avec le parametre.
           
            // Index fournir une clé unique à chaque élément dans la liste rendue, ce qui aide React à identifier chaque élément de manière unique lors de la mise à jour du DOM
            
        // En premier param il est obligatoire de mettre index
        <div key={index}>
          <img src={item.src} />
          <h3 className="text-center">titre: {item.title} </h3>
          <p>Description:{item.description} </p>
          <p>price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Santal; 
