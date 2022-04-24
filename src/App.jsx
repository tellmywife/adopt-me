import { StrictMode, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ThemeContext from './ThemeContext.jsx'
import Details from './Details.jsx'
import Search from './Search.jsx'

const App = () => {
  const theme = useState('green')
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
