import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Body/Home';
import Register from './components/Body/Register';
import Signin from './components/Body/Signin';
import UserProfile from './components/Body/signinComponents/UserProfile';
import MentalHealth from './components/Mhealth/MentalHealth'
import Analysis from './components/Body/signinComponents/Analysis/Analysis';
import Chat from './components/Body/signinComponents/Chat/Chat';

function App() {

  let router = createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'signin',
          element:<Signin/>
        },
        {
          path:'user-profile',
          element:<UserProfile/>
        },
        {
              path:'mental-health',
              element:<MentalHealth/>
        },
        {
          path:'analysis',
          element:<Analysis/>
        },
        {
          path:'chat-box',
          element:<Chat/>
        }
        
      ]
    }
  ])

  return (
   <div className="">
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
