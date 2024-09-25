import { ReactNode, FC, HTMLAttributes } from 'react'

import s from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div className={s.container} {...props}>
      {children}
    </div>
  )
}

export default Container
