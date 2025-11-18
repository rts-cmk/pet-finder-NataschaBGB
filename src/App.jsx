import { createBrowserRouter, RouterProvider } from "react-router"
import Dogs from './pages/Dogs'
import Details from './pages/Details'
import loadPets from "./loaders/loadPets";
// import loadUser from "./loaders/loadUser";


export default function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Dogs />,
      loader: loadPets,
      hydrateFallbackElement: <p>Loading...</p>
    },
    {
      path: '/details/:petId',
      element: <Details />
    }
  ]);

  return (
    <RouterProvider router={browserRouter} />
  )
}