import { Link } from 'react-router-dom'

import s from '@/shared/header/Header.module.scss'

const HeaderMenu = () => {
  return (
    <ul className={s.site_menu}>
      <li className={s.site_menu_item}>
        <Link to={'/'}>Home</Link>
      </li>
      <li className={s.site_menu_item}>
        <Link to={'/archive'}>All Pokemon's</Link>
      </li>
    </ul>
  )
}

export default HeaderMenu
