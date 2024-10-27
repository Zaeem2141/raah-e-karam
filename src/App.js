import 'antd/dist/reset.css';
import './App.css';
import { AppLAyout } from './Components/Layout/layout';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import { AboutUs } from './Components/aboutUS/aboutUs';
import { Home } from './Components/home/home';
import { JoinUsForm } from './Components/membership/membership';
import ContactUs from './Components/contactUs/contactUs';
import { Refer } from './Components/refer/refer';

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
        },
        {
          path: "/contactUs",
          element: <ContactUs/>
        },
        {
          path: "/referAFamily",
          element : <Refer/>
        }
      ]
    },
  ])
  return <RouterProvider router={router}/>
};

export default App;
