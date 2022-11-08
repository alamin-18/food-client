
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import SingleFood from './components/singleFoods/SingleFood';
import SingUp from './components/SingUp/SingUp';
import Login from './components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/',element:<Home></Home>},
      {path:'/foods',element:<Foods></Foods>},
      {path:'/foods/:id',
      loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
      element:<SingleFood></SingleFood>},
      {path:'/singup',element:<SingUp></SingUp>},
      {path:'/login',element:<Login></Login>}
    ]}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
