import { CSSProperties } from 'react'

import s from './Card.module.scss'

const Card = () => {
  const img = 'https://assets.codepen.io/13471/charizard-gx.webp'

  const gridStyle: CSSProperties = {
    backgroundImage: `url(${img})`, // Use a template literal for the correct CSS syntax
  }

  return (
    <div style={gridStyle} className={`${s.card} ${s.animated} `}>
      <div>Card content</div>
    </div>
  )
}

export default Card
