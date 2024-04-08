//------J'importe mais base de donnée articles------
//------------------------------------------//
import OudData from "../../data/OudData"; //--//
import MuscData from "../../data/MuscData"; //--//
import AmbreData from "../../data/AmbreData"; //--//
import SantalData from "../../data/SantalData"; //--//
//---------------------------------------------//--//

// j'importe mais com qui vonst permettre d'afficher mais articles
// entre import et form je peut appelée mon composant comme je veux !!!
//--------------------------------------------//
import AmbreComponent from "./Ambre"; //--//
import MuscComponent from "./Musc"; //--//
import OudComponent from "./Oud"; //--//
import SantalComponent from "./Santal"; //--//
//--------------------------------------------//--//

// je crée une fonction que je vais exporter
export default function HomePages() {
  // Je vais retourner la valeur
  // je vais chercher mon fichier ambre.js(AmbreComponent et je vais lui passer en props Mon tableau d'objet AmbreData)
  return (
    <>
    {/* ... spread operator */}
      <AmbreComponent {...AmbreData}  />
      <MuscComponent MuscData={MuscData} />
      <OudComponent OudData={OudData} />
      <SantalComponent SantalData={SantalData} test />
    </>
  );
}

// props sa permet de transférer des données un composant du parent à l'enfant.
