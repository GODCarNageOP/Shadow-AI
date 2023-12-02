import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shadow from "./Shadow";
import Tasks from "./pages/Tasks";
import GoogleCalendar from "./pages/GoogleCalendar";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Shadow/>
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tasks",
          element: <Tasks />,
        },
        {
          path: "/calendar",
          element: <GoogleCalendar />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
