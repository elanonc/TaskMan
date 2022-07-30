import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";
import "./Taskform.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Taskform() {

    const [task, setTask] = useState({
        title: " ",
        description: " "
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5432/task", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        });

        await response.json();

        navigate("/");
    };

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    return (
        <Grid container alignItems="center" justifyContent="center" directions="column"> 
            <Grid item xs={3}>
                <Card id="task-card" variant="outlined">
                    
                    <Typography variant="5" textAlign="center" >
                        Cria tarefa
                    </Typography>
                    
                    <CardContent id="task-card-content">
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                label="Título" variant="filled" id="title-field" name="title" onChange={handleChange}
                                InputProps={{ 
                                    style: {color: "#000000"}
                                }}
                                InputLabelProps={{ 
                                    style: {color: "#ff0000"}
                                }} 
                            /> 
                            <TextField 
                                label="Descrição" variant="filled" multiline rows={4} name="description" onChange={handleChange}
                                InputProps={{ 
                                    style: {color: "#000000"}
                                }}
                                InputLabelProps={{ 
                                    style: {color: "#ff0000"}
                                }}  
                            />

                            <Button variant="contained" type="submit"> Salvar </Button>
                        </form>
                        
                    </CardContent>

                    
                </Card>
            </Grid>
        </Grid>
    )
}

export default Taskform;