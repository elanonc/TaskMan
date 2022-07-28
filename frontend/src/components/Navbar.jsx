import { Box, AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>

                        <Typography sx={{ flexGrow: 1 }} variant="h6">
                            <Link to="/" style={{  textDecoration: "none", color: "#fff" }}>
                                TaskManager
                            </Link>
                        </Typography>

                        <Button style={{ backgroundColor: "#00757C" }}
                                onClick={ () => useNavigate("/task/new") } variant="contained">
                            Nova tarefa
                        </Button>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar;

