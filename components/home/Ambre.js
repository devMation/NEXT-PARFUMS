// VDOM -> index.js renvoi vert un dom virtuel qui va permettre  à plusieur composant de les afficher
// spread opérateur sa permet de récuperer la data d'un tableau 
// Ceux fichier va me permettre d'afficher mais produit Ambre sur le DOM(Document, Object, Model)

// Je crée une fonction fléchée elle prend en paramètre ma props 
// mon fichier qui contient le tableau d'objet contenu dans ambreData
const Ambre = ( props ) => { 
    console.log("ici", typeof props, props);
    // object.values

    console.log(Object.values(props))
  return (// retourner une valeur
  // je englobe dans une div tous le processus de bouclage qui permet d'afficher mais articles
 
  <div id="ambre"> 

        <h1>Ambre</h1>
    
        {Object.values(props).map((item, index)=> 
        // Avec le .map() je vais boucler dans le tableau ambre contenu dans AmbreData.
        //item sa va chercher la valeur de mon tableau d'objet via un (.) pour aller la recuperer avec le parametre.
           
        // Index fournir une clé unique à chaque élément dans la liste rendue, ce qui aide React à identifier chaque élément de manière unique lors de la mise à jour du DOM
        // L'index est pour chaque iteration du tableau d'objet ex: 0, 1, 2 etc .
            <div key={index}> /
                <img src={item.src}/>
                <h3>titre: {item.title} </h3>
                <p>Description:{item.description} </p>
                <p>price: {item.price}</p>
            </div>
        )}
    </div>
  );
};


export default Ambre; // je vais exporter ma fonction qui se nomme (Ambre).



