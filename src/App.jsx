import { HomePage } from './Pages/home'
import { HistoryPage } from './Pages/history'
import { Layout } from './template'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
