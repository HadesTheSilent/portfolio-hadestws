import { inject } from '@vercel/analytics'
import Home from './pages/Home'

// Initialize analytics
inject()

export default function App() {
  return <Home />
}
