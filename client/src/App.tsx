import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Ticket from "./pages/Ticket"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Register from "./pages/Register"
import Register2 from "./pages/Register2"
import Register3 from "./pages/Register3"
import Summary from "./pages/Summary"
import DiscountedSummary from "./pages/DiscountedSummary"
import SuccessPage from "./pages/Success"

function App() {
 

  return (
    <>
    <Router>

       <div className="flex flex-col min-h-screen">
        <Navbar/>
              <main className="flex-grow">
                <Routes>
                <Route path="/" element={<Ticket/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/register2" element={<Register2/>}/>
                <Route path="/register3" element={<Register3/>}/>
                <Route path="/promocode" element={<Summary/>}/>
                <Route path="/discount" element={<DiscountedSummary/>}/>
                <Route path="/success" element={<SuccessPage/>}/>

                </Routes>
              </main>
        <Footer />

       </div>
    </Router>
      
    </>
  )
}

export default App
