
// Layouts
import BlankLayout from "./layouts/Blank";
import DashboardLayout from "./layouts/MainPage";
// Auth

import MainPage from "./pages/MainPage";
import Page404 from "./pages/error/Page404";
import Page500 from "./pages/error/Page500";
// Pages
import ListVideos from './pages/ListVideos'

const routes = [
  {
    path: "/",
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        path: "",
        element: <ListVideos />,
      }
    ],
  },
  {
    path: "*",
    children: [
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
