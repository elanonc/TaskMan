import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Container } from "@mui/material"
import Navbar from "./components/Navbar";

function App() {
  	return (
    	<BrowserRouter>
			<Navbar>
				<Container>
					<Routes>
					</Routes>
				</Container>
			</Navbar>
    	</BrowserRouter>
  	)
}

export default App;
