import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@mui/material"
import Navbar from "./components/Navbar";
import Taskform from "./components/Taskform";

function App() {
  	return (
    	<BrowserRouter>
			<Navbar/>
				<Container>
					<Routes>
						<Route path="/task/new" element={<Taskform/>} />
					</Routes>
				</Container>
    	</BrowserRouter>
  	)
}

export default App;
