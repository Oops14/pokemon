export const getCards = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()

  return data
}

export const getSpecificCardInfo = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()

  return data
}
