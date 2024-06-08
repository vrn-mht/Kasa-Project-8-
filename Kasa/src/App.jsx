import Banner from './components/Banner'
import Navbar from './components/Navbar'
import ApartmentGrid from './ApartmentGrid'
import Content from './Content'
import Footer from './Footer.jsx'
import"./App.css"

function App() {
  return (
    <div>
   <Navbar />
   <Content>    
   <Banner />
   <ApartmentGrid />
   </Content>
   <Footer />
    </div>
  )
}

export default App
