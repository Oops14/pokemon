import Card from '@/modules/card/Card.tsx'

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
            <Card />
            <Card />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
