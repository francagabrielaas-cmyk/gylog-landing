import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router basename="/gylog-landing">
      <Home />
    </Router>
  )
}

export default App
