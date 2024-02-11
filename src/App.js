import './App.css';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from "./Screens/AboutScreen"
import EventScreen from "./Screens/EventScreen"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorScreen from './Screens/ErrorScreen';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" errorElement={<ErrorScreen />} element={<HomeScreen />} />
        <Route path="/about" errorElement={<ErrorScreen />} element={<AboutScreen />} />
        <Route path="/events" errorElement={<ErrorScreen />} element={<EventScreen />} />
        <Route path="*" errorElement={<ErrorScreen />} element={<ErrorScreen />} />
      </>
    )
  );
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
