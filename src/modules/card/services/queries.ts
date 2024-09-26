import { useQuery } from '@tanstack/react-query'

import { specificCard } from '@/modules/card/types/SpecificCardInfoType.ts'
import { CardsResponse } from '@/modules/card/types/CardsType.ts'

import { getCards, getSpecificCardInfo } from './api'

export const useCards = () => {
  return useQuery<CardsResponse>({
    queryKey: ['cards'],
    queryFn: getCards,
  })
}

export const useSpecificCardInfo = (id: number) => {
  return useQuery<specificCard>({
    queryKey: ['card_info', id],
    queryFn: () => getSpecificCardInfo(id),
  })
}
