import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary.jsx'
import Carousel from './Carousel.jsx'

const Details = () => {
  const params = useParams()
  const [isLoading, setLoading] = useState(true)
  const [pet, setPet] = useState({})

  useEffect(() => {
    req()
  }, [])

  async function req() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${params.id}`)
    const json = await res.json()
    setLoading(false)
    setPet(json.pets[0])
  }

  if (isLoading) {
    return <h2>loading … </h2>
  }

  const { animal, breed, city, state, description, name, images } = pet

  return (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  )
}

const WrappedDetails = () => {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  )
}

export default WrappedDetails
