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


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
     children: [
      { index: true,
        loader: () => fetch("/friends.json"),
        Component: Home },
      {
  path: "/:id",
  loader: async ({ params }) => {
    const res = await fetch('/friends.json');
    const data = await res.json();
   return data.find(f => f.id == params.id);
  },
  Component: FriendDetail
},
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
