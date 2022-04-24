import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Details from './Details.jsx'
import Search from './Search.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
