import 'antd/dist/reset.css';
import './App.css';
import { AppLAyout } from './Components/Layout/layout';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import { AboutUs } from './Components/aboutUS/aboutUs';
import { Home } from './Components/home/home';
import { JoinUsForm } from './Components/membership/membership';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element : <AppLAyout/>,
      children : [
        {
           path: "/",
           element: <Home/>
        },
        {
          path: "/about",
          element : <AboutUs/>
        },
        {
          path: "/joinUs",
          element : <JoinUsForm/>
        }
      ]
    },
  ])
  return <RouterProvider router={router}/>
};

export default App;
