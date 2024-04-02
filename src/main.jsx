import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root';
import Home from './component/Home/Home'
import ListedBooks from './component/ListedBooks/ListedBooks';
import PagesRead from './component/PagesRead/PagesRead';
import Book from './component/Book/Book';
import Page404 from './component/404/Page404';
import BookNav from './component/Book/BookNav';
import WishPages from './component/WishPages/WishPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Page404></Page404>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/book',
        element: <BookNav></BookNav>
        
      },
      {
        path: '/book/:id',
        element: <Book></Book>,
        loader: () => fetch('/books.json')

      },
      {
        path: '/pagesRead',
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/wishPages',
        element: <WishPages></WishPages>,
        loader: () => fetch('/books.json')
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
