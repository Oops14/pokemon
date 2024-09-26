import { useLocation } from 'react-router'

import Statistics from '@/modules/common/detailsPage/statistics/Statistics.tsx'
import { useSpecificCardInfo } from '@/modules/card/services/queries.ts'

import Header from '@/shared/header/Header.tsx'
import Container from '@/shared/container/Container.tsx'

import Typography from '@/ui/typography/Typography.tsx'

import s from './DetailsPage.module.scss'

const DetailsPage = () => {
  const location = useLocation()

  // Get query parameters
  const params = new URLSearchParams(location.search)
  const id = params.get('id')

  const { data, isLoading, error } = useSpecificCardInfo(parseInt(id || '0')) // Ensure id is a valid number

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading cards!</div>
  }

  if (!data) {
    return <div>Information not found!</div>
  }

  return (
    <>
      <Header />

      <div className={s.details_page_main}>
        <Container>
          <div className={s.inner_info}>
            <div className={s.card_img}>
              <img src={data.sprites.front_shiny} alt="#" />
            </div>
            <div className={s.card_description}>
              <Typography tag={'h2'} className={s.card_title}>
                {data.name}
              </Typography>
              <div className={s.stats}>
                <Statistics data={data} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default DetailsPage
