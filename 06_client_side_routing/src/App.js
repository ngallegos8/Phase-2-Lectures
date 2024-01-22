import logo from './logo.svg';
import './App.css';
import NavLayout from './components/NavLayout';
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import{ userProfile } from "./pages/Profile"

const userLoader = async () => {
  const response = await fetch("http://localhost:4000/users")
  return response.json()
}

const router = createBrowserRouter(                       //DELIVERABLE #2 - ROUTES TO THE APP
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} loader={userLoader}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="/profile/:id" element={<Profile />} loader={userProfile} />
      <Route path="*" element={<NotFound />}></Route>

    </Route>
  )
)




function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
