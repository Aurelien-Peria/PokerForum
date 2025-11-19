export default function  cliqueAuteur  (valueAuteurSujet,inputsearchSujetAuteur,setvalueAuteurSujet,setbtnSujetAuteur)  {
    setbtnSujetAuteur(false);
    inputsearchSujetAuteur.current.placeholder = "Recherche auteur";
    setvalueAuteurSujet("auteur");
  };