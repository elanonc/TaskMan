import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";
import "./Taskform.css";
import { useState, useEffect } from "react";

function Taskform() {

    const [task, setTask] = useState({
        title: " ",
        description: " "
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(task);
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