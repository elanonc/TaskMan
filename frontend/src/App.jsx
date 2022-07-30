import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material"
import Navbar from "./components/Navbar";
import Taskform from "./components/Taskform";
import Tasklist from "./components/Tasklist";

function App() {
  	return (
    	<BrowserRouter>
			<Navbar/>
				<Container>
					<Routes>
						<Route index path="/" element={<Tasklist />} />
						<Route path="/task/new" element={<Taskform/>} />
					</Routes>
				</Container>
    	</BrowserRouter>
  	)
}

export default App;
