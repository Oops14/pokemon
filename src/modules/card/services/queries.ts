import { useQuery } from '@tanstack/react-query'

import { getCards } from './api'

interface Pokemon {
  name: string
  url: string
}

interface PokemonResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

export const useCards = () => {
  return useQuery<PokemonResponse>({
    queryKey: ['cards'],
    queryFn: getCards,
  })
}
