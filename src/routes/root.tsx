import { createBrowserRouter } from 'react-router-dom'

import Home from '@/modules/common/home/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export default router
