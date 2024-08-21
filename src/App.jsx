import { HomePage } from './Pages/home'
import { HistoryPage } from './Pages/history'
import { Layout } from './template'

function App() {
  return (
    <div>
      <Layout>
        {/* <HomePage /> */}
        <HistoryPage/>
      </Layout>
    </div>
  )
}

export default App
