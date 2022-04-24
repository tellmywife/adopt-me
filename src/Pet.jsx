const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ])
}

export default Pet
