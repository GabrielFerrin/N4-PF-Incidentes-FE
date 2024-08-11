import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DataProvider } from './context/DataContext'
import App from './App'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <App />
      </DataProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
