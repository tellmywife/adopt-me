import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Malu',
      animal: 'Dog',
      breed: 'pudle',
    }),
  ])
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(React.StrictMode, {}, React.createElement(App)))
