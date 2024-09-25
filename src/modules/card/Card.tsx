import { FC } from 'react'

import Typography from '@/ui/typography/Typography'

import s from './Card.module.scss'

interface CardProps {
  img: string
  title: string
}

const Card: FC<CardProps> = ({ img, title }) => {
  return (
    <div className={`${s.card} ${s.animated} `}>
      <div className={s.card_image_inner}>
        <img src={img} alt="#" />
      </div>
      <Typography className={s.card_title}>{title}</Typography>
    </div>
  )
}

export default Card
