import { DescriptionPanel } from "../components/DescriptionPanel"
import SndBanner from "../layout/SndBanner"
import "./About.scss"


function About() {
  return (
    <>
     <SndBanner />
    <div className="about__container">
     <DescriptionPanel title= "Fiabilité"  content="Les annonces postées sur Kasa garantissent une fiabilitée totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement verifiées par nos equipes."/>
     <DescriptionPanel title= "Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
     <DescriptionPanel title= "Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"/>
     <DescriptionPanel title= "Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos équipes que nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
     </div>
    </>
  )
}

export default About
