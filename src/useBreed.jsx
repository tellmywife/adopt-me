import { useState, useEffect } from 'react'

const cache = {}

export default function useBreedList(animal) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    if (!animal) {
      setItems([])
    } else if (cache[animal]) {
      setItems(cache[animal])
    } else {
      requestBreedList()
    }

    async function requestBreedList() {
      setItems([])
      setStatus('loading')
      const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
      const json = await res.json()
      cache[animal] = json.breeds || []
      setItems(cache[animal])
      setStatus('loaded')
    }
  }, [animal])

  return [items, status]
}
