import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
//pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import SingleNews from "./pages/SingleNews";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:'create',
          element:<Create/>
        },
        {
          path:'/singlenews/:id',
          element:<SingleNews/>
        }
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
