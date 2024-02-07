import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Detail from "./components/pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/:detail/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
