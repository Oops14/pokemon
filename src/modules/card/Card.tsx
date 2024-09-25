import { CSSProperties, FC } from 'react'

import card_img from '@/assets/images/bg_4.png'

import s from './Card.module.scss'
import Typography from '@/ui/typography/Typography'

interface CardProps {
  img: string
  title: string
}

const Card: FC<CardProps> = ({ img, title }) => {
  const gridStyle: CSSProperties = {
    backgroundImage: `url(${card_img})`,
  }

  return (
    <div style={gridStyle} className={`${s.card} ${s.animated} `}>
      <div className={s.card_image_inner}>
        <img src={img} alt="#" />
      </div>
      <Typography className={s.card_title}>{title}</Typography>
    </div>
  )
}

export default Card
