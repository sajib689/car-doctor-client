
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
   <AuthProvider>
   <RouterProvider router={router}>
    <Toaster/>
   </RouterProvider>
   </AuthProvider>
  </div>,
)
