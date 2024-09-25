import site_logo from '@/assets/images/pokeapi_256.3fa72200.png'

import HeaderMenu from '@/shared/header/headerMenu/HeaderMenu.tsx'
import Container from '@/shared/container/Container.tsx'

import s from './Header.module.scss'

const Header = () => {
  return (
    <div className={s.header_main}>
      <Container>
        <div className={s.logo}>
          <img className={s.logo_item} src={site_logo} alt="#" />
        </div>
        <div className={s.site_menu_block}>
          <HeaderMenu />
        </div>
      </Container>
    </div>
  )
}

export default Header
