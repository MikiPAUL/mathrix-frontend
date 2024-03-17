import './App.css';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import EventScreen from './Screens/EventScreen';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ErrorScreen from './Screens/ErrorScreen';
import Registration from './components/Registration/Registration';
import Schedule from './components/Schedule/Schedule';
import Workshops from './components/Workshops/Workshops';
import AddWorkshop from './components/Workshops/Add_Workshop';
import UpdateWorkshop from './components/Workshops/Update_Workshop';
import Login from './components/Login/Login';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" errorElement={<ErrorScreen />} element={<HomeScreen />} />
				<Route path="/about" errorElement={<ErrorScreen />} element={<AboutScreen />} />
				<Route path="/events" errorElement={<ErrorScreen />} element={<EventScreen />} />
				<Route path="/login" errorElement={<ErrorScreen />} element={<Login />} />
				<Route path="/registration" errorElement={<ErrorScreen />} element={<Registration />} />
				<Route path="/schedule" errorElement={<ErrorScreen />} element={<Schedule />} />
				<Route path="/workshop" errorElement={<ErrorScreen />} element={<Workshops />} />
				<Route path="AddWorkshop" errorElement={<ErrorScreen />} element={<AddWorkshop />} />
				<Route path="UpdateWorkshop" errorElement={<ErrorScreen />} element={<UpdateWorkshop />} />
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
