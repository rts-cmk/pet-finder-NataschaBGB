import { createBrowserRouter, RouterProvider } from "react-router"
import Home from './pages/Home'
import Details from './pages/Details'
import loadUserAndPets from "./loaders/loadUserAndPets";
import loadDetails from "./loaders/loadDetails";
import Splashscreen from "./pages/Splashscreen";
import Chat from './pages/Chat'
import Favourites from "./pages/Favourites";
import Error from './pages/Error'
import Admin from "./pages/Admin";
import AdminEdit from "./pages/Admin/AdminEdit";


export default function App() {

  const browserRouter = createBrowserRouter(
    [
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
        path: '/chat',
        element: <Chat />,
        loader: loadUserAndPets,
        hydrateFallbackElement: <p>Loading Chat...</p>
      },
      {
        path: '/admin',
        element: <Admin />,
        loader: loadUserAndPets,
        hydrateFallbackElement: <p>Loading User...</p>,
      },
      {
        path: '*',
        element: <Error />,
        loader: loadUserAndPets,
        hydrateFallbackElement: <p>Loading Error Page...</p>
      }
    ],
    {
      basename: "/pet-finder-NataschaBGB/"
    }
  );

  return (
    <RouterProvider router={browserRouter} />
  )
}