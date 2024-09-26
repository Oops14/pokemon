import { FC } from 'react'

import StatItem from '@/modules/common/detailsPage/statItem/StatItem.tsx'
import { specificCard } from '@/modules/card/types/SpecificCardInfoType.ts'

interface StatisticsType {
  data: specificCard
}

const Statistics: FC<StatisticsType> = ({ data }) => {
  return (
    <>
      {data.stats.map((i, index) => (
        <StatItem key={index} name={i.stat.name} base_stat={i.base_stat} effort={i.effort} />
      ))}
    </>
  )
}

export default Statistics
