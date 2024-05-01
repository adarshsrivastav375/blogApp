import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { Protected } from './components/index.js';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Allpost from './pages/Allpost.jsx';
import AddPost from './pages/AddPost.jsx';
import Post from './pages/Post.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false} >
            <Signup />
          </Protected>
        )
      },
      {
        path: '/all-posts',
        element: (
          <Protected authentication={true} >
            <Allpost />
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication={true} >
            <AddPost />
          </Protected>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication={true} >
            <AddPost />
          </Protected>
        )
      },
      {
        path: 'post/:slug',
        element: (
          <Protected authentication={true} >
            <Post />
          </Protected>
        )
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    c   <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
