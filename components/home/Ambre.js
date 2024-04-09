// VDOM -> index.js renvoi vert un dom virtuel qui va permettre  à plusieur composant de les afficher
// spread opérateur sa permet de récuperer la data d'un tableau
// Ceux fichier va me permettre d'afficher mais produit Ambre sur le DOM(Document, Object, Model)

// Je crée une fonction fléchée elle prend en paramètre ma props
// mon fichier qui contient le tableau d'objet contenu dans ambreData

import "tailwindcss/tailwind.css";

const Ambre = (props) => {
  console.log("ici", typeof props, props);
  // object.values

  console.log(Object.values(props));

  const ImageHoverChange = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    // Fonction pour gérer le survol de l'image
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    // Fonction pour gérer la fin du survol de l'image
    const handleMouseLeave = () => {
      setIsHovered(false);
    }
  }

  return (
    // retourner une valeur
    // je englobe dans une div tous le processus de bouclage qui permet d'afficher mais articles
    <div>
      <h1 className="text-center mt-4 uppercase text-2xl font-semibold tracking-normal">
        Ambre كهرمان
      </h1>
      <div id="ambre" className="grid grid-cols-2 place-items-center">
        {Object.values(props).map((item, index) => (
          // Avec le .map() je vais boucler dans le tableau ambre contenu dans AmbreData.
          //item sa va chercher la valeur de mon tableau d'objet via un (.) pour aller la recuperer avec le parametre.

          // Index fournir une clé unique à chaque élément dans la liste rendue, ce qui aide React à identifier chaque élément de manière unique lors de la mise à jour du DOM
          // L'index est pour chaque iteration du tableau d'objet ex: 0, 1, 2 etc .

          <div
            key={index}
            className="border-2 border-black-600 w-80 m-2 h-80  font-medium border-2   "
          >
            <img className="w-96 h-40 m-auto  " src={item.src} />
            <h3 className=" text-base uppercase text-center  font-normal">
              {item.title}
              {""}
            </h3>
            <p className=" text-base font-normal">
              Detail : <br />
              {item.description}
            </p>
            <p className=" fz-2 p-1 text-lg font-bold text-amber-300 traking-normal">
              {item.price}
            </p>
            <div className=" w-full mt-4 text-center h-10 p-2 bg-amber-400">
              <button  >
                Ajoute au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ambre; // je vais exporter ma fonction qui se nomme (Ambre).
