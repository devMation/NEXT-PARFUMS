// importer mon fichier  HomePage qui contient toute mais donnée à afficher

import HomePageComponent from "../components/home/Homepage.js";

// crée une fonction d'exporte
// Et déclarer mon HomePageComponent pour afficher tous mais articles
export default function home() {
  return (
    <>
      <HomePageComponent />
    </>
  );
}
