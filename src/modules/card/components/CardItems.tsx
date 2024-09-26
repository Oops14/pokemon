import Card from '../Card'

import { useCards } from '../services/queries'

const CardItems = () => {
  const { data, isLoading, error } = useCards()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading cards!</div>
  }

  if (!data || !data.results) {
    return <div>No cards found!</div>
  }

  return (
    <>
      {data.results.map((i) => {
        const pokemonIndex = i.url.split('/')[i.url.split('/').length - 2]
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        return <Card key={i.url} img={imageUrl} title={i.name} id={parseInt(pokemonIndex)} />
      })}
    </>
  )
}

export default CardItems
