import Card from '@/modules/card/Card.tsx'
import { useCards } from '@/modules/card/services/queries'

import Header from '@/shared/header/Header.tsx'
import Container from '@/shared/container/Container.tsx'

import s from './Home.module.scss'

const Home = () => {
  const { data, isLoading, error } = useCards()

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>
  }

  // Handle error state
  if (error) {
    return <div>Error loading cards!</div>
  }

  if (!data || !data.results) {
    return <div>No cards found!</div>
  }

  console.log(data.results)

  return (
    <>
      <Header />

      <div className={s.home}>
        <Container>
          <div className={s.grid}>
            {data.results.map((i) => {
              const pokemonIndex = i.url.split('/')[i.url.split('/').length - 2]
              const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

              return <Card key={i.url} img={imageUrl} title={i.name} />
            })}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
