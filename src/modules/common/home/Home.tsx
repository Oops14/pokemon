import CardItems from '@/modules/card/components/CardItems'

import Header from '@/shared/header/Header.tsx'
import Container from '@/shared/container/Container.tsx'

import s from './Home.module.scss'

const Home = () => {
  return (
    <>
      <Header />

      <div className={s.home}>
        <Container>
          <div className={s.grid}>
            <CardItems />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
