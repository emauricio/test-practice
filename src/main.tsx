import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'

import './main.css'

const container = document.getElementById('app')
const root = createRoot(container as HTMLDListElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
