import CardItems from '@/modules/card/components/CardItems.tsx'

import Header from '@/shared/header/Header.tsx'
import Container from '@/shared/container/Container.tsx'

import s from './Archive.module.scss'

const Archive = () => {
  return (
    <>
      <Header />

      <div className={s.main_archive}>
        <Container>
          <div className={s.grid}>
            <CardItems />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Archive
