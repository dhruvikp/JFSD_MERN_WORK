import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import ProductPage from './Pages/Product';
import RootLayout from './Pages/Root'
import ErrorPage from './Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
    ],
    errorElement: <ErrorPage />
  }
]);


function App() {
  return <RouterProvider router={router} />

}

export default App