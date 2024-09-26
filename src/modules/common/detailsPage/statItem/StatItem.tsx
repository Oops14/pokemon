import { FC } from 'react'

import s from '@/modules/common/detailsPage/DetailsPage.module.scss'

interface StatItemType {
  name: string
  base_stat: number
  effort: number
}

const StatItem: FC<StatItemType> = ({ name, base_stat, effort }) => {
  return (
    <div>
      <div className={s.stat_name}>{name}</div>
      <div>Base stat: {base_stat}</div>
      <div>Effort: {effort}</div>
    </div>
  )
}

export default StatItem
