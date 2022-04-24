import Pet from './Pet.jsx'

const Results = ({ pets }) => {
  if (!pets.length) return <h1>No Pets Found</h1>

  return (
    <div className="search">
      {pets.map(({ animal, id, name, breed, images, city, state }) => (
        <Pet
          animal={animal}
          key={id}
          name={name}
          breed={breed}
          images={images}
          location={`${city}, ${state}`}
          id={id}
        />
      ))}
    </div>
  )
}

export default Results
