import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar'
import Article from '../components/article'
import SearchBox from '../components/search-box'
import Footer from '../components/Footer'
import Analysis from '../components/Analysis';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <div className="column left-column">
          <Article />
        </div>
        <div className="column right-column">
        <Router>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
          {/* You can add more content below the search box here if needed */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
