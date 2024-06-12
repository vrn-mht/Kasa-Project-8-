import { DescriptionPanel } from "../components/DescriptionPanel"
import SndBanner from "../layout/SndBanner"
import "./About.scss"


function About() {
  return (
    <>
     <SndBanner />
    <div className="about__container">
     <DescriptionPanel />
     <DescriptionPanel/>
     <DescriptionPanel />
     </div>
    </>
  )
}

export default About
