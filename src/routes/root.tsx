import { createBrowserRouter } from 'react-router-dom'

import Home from '@/modules/common/home/Home.tsx'
import Archive from '@/modules/common/archive/Archive.tsx'
import DetailsPage from '@/modules/common/detailsPage/DetailsPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/archive',
    element: <Archive />,
  },
  {
    path: '/details-page',
    element: <DetailsPage />,
  },
])

export default router
