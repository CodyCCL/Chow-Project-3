//Imports Node
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//Import Css 
//import ''
//Import all created routes from pages
import App from './App.jsx'
import Home from './pages/Home'
import SearchMenu from './pages/SearchMenu.jsx'
import Saved from './pages/Saved.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    //The element that presents the components
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    //Add children takes you to all the created pages
    children: [
      {
        index: true,
        //The element brings you the main page
        element: <Home />
      }, {
        path: '/Saved',
        //The element that brings you to saved page
        element: <Saved />
      }, {
        path: '/SearchMenu',
        element: <SearchMenu />
      }
      
    ]
  }
])
//creates route to deploy to webpage
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
