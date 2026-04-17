import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root';
import Timeline from './pages/Timeline/Timeline';
import Stats from './pages/Stats/Stats';
import Home from './components/Home/Home';
import FriendDetail from './components/FriendDetail/FriendDetail';
import TimelineProvider from './context/TimelineContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound/NotFound';


const router = createBrowserRouter([
  {

    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: () => fetch("/friends.json"),
        Component: Home
      },
      {
        path: "/:id",
        loader: async ({ params }) => {
          const res = await fetch('/friends.json');
          const data = await res.json();
          const friend = data.find(f => f.id == params.id);

          if (!friend) {
            throw new Response("Not Found", { status: 404 }); // 🔥 important
          }

          return friend;
        },
        Component: FriendDetail
      },
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
      { path: "*", Component: NotFound }
    ],
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </TimelineProvider>

  </StrictMode>,
)
