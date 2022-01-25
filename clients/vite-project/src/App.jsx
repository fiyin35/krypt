import { Footer, Navbar, Welcome, Transactions, Services } from './components'
import './App.css'

const App = () => {
 

  return (
    <div className="min-h-screnn">
      <div className="gradient-bg-welcome"> 
        <Navbar />
        <Welcome />
      </div>

      <Services />
      <Transactions /> 
      <Footer /> 
     
    </div>
  )
}

export default App
