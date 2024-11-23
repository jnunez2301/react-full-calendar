import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalendarProvider } from './context/CalendarProvider'
import Calendar from './components/Calendar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalendarProvider>
      <Calendar />
    </CalendarProvider>
  </StrictMode>,
)
