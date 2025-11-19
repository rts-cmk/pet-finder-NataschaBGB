import { createBrowserRouter, RouterProvider } from "react-router"
import Dogs from './pages/Dogs'
import Details from './pages/Details'
import loadPets from "./loaders/loadPets";
import loadDetails from "./loaders/loadDetails";
import Splashscreen from "./pages/Splashscreen";
import Error from './pages/Error'


export default function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Dogs />,
      loader: loadPets,
      hydrateFallbackElement: <p>Loading...</p>
    },
    {
      path: '/splashscreen',
      element: <Splashscreen />
    },
    {
      path: '/details/:petId',
      element: <Details />,
      loader: loadDetails,
      hydrateFallbackElement: <p>Loading...</p>
    },
    {
      path: '*',
      element: <Error />
    }
  ]);

  return (
    <RouterProvider router={browserRouter} />
  )
}