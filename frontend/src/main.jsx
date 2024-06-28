import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,Route,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import { Dashboard } from './components/Dashboard/Dashboard.jsx'
import MyStories from './components/Dashboard/MyStories.jsx'
import CreateStory from './components/Dashboard/CreateStory.jsx'
import { StoriesProvider } from './context/StoriesContext.jsx'
import Story from './components/Story/Story.jsx'
import AllStories from './components/Dashboard/AllStories.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import PublicRoutes from './components/Routes/PublicRoutes'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<PublicRoutes> <Home /> </PublicRoutes>} />
      <Route path='dashboard' element={<ProtectedRoutes> <Dashboard /> </ProtectedRoutes>}>
        <Route path='' element={<CreateStory />}/>
        <Route path='all-stories' element={<AllStories />}/>
        <Route path='story/:id' element={<Story />}/>
        <Route path='my-stories' element={<MyStories />}/>
      </Route>
      <Route path='/login' element = {<PublicRoutes> <Login /> </PublicRoutes>} />
      <Route path='/signup' element = {<PublicRoutes> <SignUp /> </PublicRoutes>} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
  <StoriesProvider >
    <React.StrictMode>  
      <RouterProvider router={router} />
    </React.StrictMode>
  </StoriesProvider>
</AuthProvider>
)
