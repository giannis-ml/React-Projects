import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StudentPage from './View/StudentPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentPage />
  </StrictMode>,
)
