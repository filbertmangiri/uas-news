import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import Navbar from './Components/Partials/Navbar/Navbar';
import News from './Components/Pages/News/News';
import Blogs from './Components/Pages/Blogs/Blogs';
import Developers from './Components/Pages/Developers/Developers';
import Error from './Components/Pages/Error/Error';

export default function App() {
	return (
		<Router>
			<Navbar />
			
			<div className='container py-5'>
				<Routes>
					<Route path="/" element={<News />} />
					<Route path="/news" element={<News />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/developers" element={<Developers />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
}