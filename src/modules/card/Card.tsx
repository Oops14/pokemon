import { FC } from 'react'
import { useNavigate } from 'react-router'

import Typography from '@/ui/typography/Typography'

import s from './Card.module.scss'

interface CardProps {
  id: number
  img: string
  title: string
}

const Card: FC<CardProps> = ({ id, img, title }) => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate(`/details-page?id=${id}`)
  }

  return (
    <div className={`${s.card} ${s.animated} `} onClick={handleRedirect}>
      <div className={s.card_image_inner}>
        <img src={img} alt="#" />
      </div>
      <Typography className={s.card_title}>{title}</Typography>
    </div>
  )
}

export default Card
