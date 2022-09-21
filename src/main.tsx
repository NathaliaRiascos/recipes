import React from 'react'
import ReactDOM from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faAlignRight } from '@fortawesome/free-solid-svg-icons'

import { router } from './routes'
import './index.css'

import {
  RouterProvider
} from 'react-router-dom'

library.add(fas)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
