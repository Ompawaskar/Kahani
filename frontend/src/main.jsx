import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Route,createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import { Dashboard } from './components/Dashboard/Dashboard.jsx'
import MyStories from './components/Dashboard/MyStories.jsx'
import CreateStory from './components/Dashboard/CreateStory.jsx'
import { StoriesProvider } from './context/StoriesContext.jsx'
import Story from './components/Story/Story.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route path='' element={<CreateStory />}/>
        <Route path='all-stories' element={<MyStories />}/>
        <Route path='story/:id' element={<Story />}/>
      </Route>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<StoriesProvider >
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>
</StoriesProvider>
)
