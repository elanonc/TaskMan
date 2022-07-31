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
						<Route path="/" element={<Tasklist />} />
						<Route path="/task/new" element={<Taskform />} />
						<Route path="/task/:id/edit" element={<Taskform />} />
					</Routes>
				</Container>
    	</BrowserRouter>
  	)
}

export default App;
