import { StrictMode } from 'react'
import Pet from './Pet.jsx'

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Maluz" animal="dog" breed="pudle" />
    </div>
  )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
