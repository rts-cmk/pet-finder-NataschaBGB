import { createBrowserRouter, RouterProvider } from "react-router"
import Home from './pages/Home'
import Details from './pages/Details'
import loadUserAndPets from "./loaders/loadUserAndPets";
import loadDetails from "./loaders/loadDetails";
import Splashscreen from "./pages/Splashscreen";
import Favourites from "./pages/Favourites";
import Error from './pages/Error'


export default function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      loader: loadUserAndPets,
      hydrateFallbackElement: <p>Loading Pets...</p>
    },
    {
      path: '/splashscreen',
      element: <Splashscreen />
    },
    {
      path: '/details/:petId',
      element: <Details />,
      loader: loadDetails,
      hydrateFallbackElement: <p>Loading Details...</p>
    },
    {
      path: '/favourites',
      element: <Favourites />,
      loader: loadUserAndPets,
      hydrateFallbackElement: <p>Loading Favourites...</p>
    },
    {
      path: '*',
      element: <Error />,
      loader: loadUserAndPets,
      hydrateFallbackElement: <p>Loading Error Page...</p>
    }
  ]);

  return (
    <RouterProvider router={browserRouter} />
  )
}