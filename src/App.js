
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import SingleFood from './components/singleFoods/SingleFood';
import SingUp from './components/SingUp/SingUp';
import Login from './components/Login/Login';
import { Toaster } from 'react-hot-toast';
import Review from './components/Review/Review';
import ReviewEdit from './components/ReviewEdit/ReviewEdit';
import AddService from './components/AddService/AddService';
import PrivetRoute from './components/PrivateRoute/PrivetRoute';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/',element:<Home></Home>},
      {path:'/foods',element:<Foods></Foods>},
      {path:'/blog',element:<Blog></Blog>},
      {path:'/foods/:id',
      loader: ({params}) => fetch(`https://food-server-five.vercel.app/foods/${params.id}`),
      element:<PrivetRoute><SingleFood></SingleFood></PrivetRoute>},
      {path:'/singup',element:<SingUp></SingUp>},
      {path:'/login',element:<Login></Login>},
      {path:'/review',element:<Review></Review>},
      {path:'/reviewedit/:id',
      loader: ({params}) => fetch(`https://food-server-five.vercel.app/review/${params.id}`),
      element:<ReviewEdit></ReviewEdit>},
      {path:'/addservice',element:<PrivetRoute><AddService></AddService></PrivetRoute>}
    ]}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
