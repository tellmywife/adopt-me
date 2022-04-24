import { useState, useEffect, useContext } from 'react'
import ThemeContext from './ThemeContext.jsx'
import useBreedList from './useBreed.jsx'
import Results from './Results.jsx'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const Search = () => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)
  const [theme, setTheme] = useContext(ThemeContext)

  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    const json = await res.json()

    setPets(json.pets)
  }

  const onChangeLocation = ({ target: { value } }) => setLocation(value)

  const onChangeAnimal = ({ target: { value } }) => {
    setAnimal(value)
    setBreed('')
  }

  const onChangeBreed = ({ target: { value } }) => setBreed(value)

  const onSubmit = (e) => {
    e.preventDefault()
    requestPets()
  }

  const Option = (v) => (
    <option key={v} value={v}>
      {v}
    </option>
  )

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <label>
          Location
          <input placeholder="location" value={location} onChange={onChangeLocation} />
        </label>
        <label>
          Animal
          <select value={animal} onChange={onChangeAnimal} onBlur={onChangeAnimal}>
            <option />
            {ANIMALS.map(Option)}
          </select>
        </label>
        <label>
          Breed
          <select disabled={!breeds.length} value={breed} onChange={onChangeBreed} onBlur={onChangeBreed}>
            <option />
            {breeds.map(Option)}
          </select>
        </label>
        <label>
          Theme
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="green">green</option>
            <option value="pink">pink</option>
            <option value="gray">gray</option>
            <option value="purple">purple</option>
          </select>
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: theme,
          }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default Search
