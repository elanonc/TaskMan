import { Box, AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    const toNavigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>

                        <Typography id="typography-navbar" variant="h6">
                            <Link to="/" style={{  textDecoration: "none", color: "#fff" }}>
                                TaskManager
                            </Link>
                        </Typography>

                        <Button color="primary"
                                onClick={ () => toNavigate("/task/new") } variant="contained">
                            Nova tarefa
                        </Button>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar;

