
import"./ErrorPageNorFound.scss"
import Navbar from '../components/Navbar'
import Footer from '../layout/Footer'
import Content from '../Content'
import { Link } from 'react-router-dom'

function ErrorPageNotFound() {
  return (
    <>
    <Navbar />
  <Content>  
    <div className="error-page">
    <h1>404</h1>
    <h2>Oups ! La page que vous demandez n'existe pas.</h2>
    <Link to="/">Retourner sur la page d'acceuil</Link>
    </div>
    </Content>
    <Footer />
    </>
  )
}

export default ErrorPageNotFound
