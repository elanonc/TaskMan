import { Grid, Card, Typography, CardContent, TextField, Button } from "@mui/material";
import "./Taskform.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Taskform() {

    const [task, setTask] = useState({
        title: " ",
        description: " "
    });

    const [update, setUpdate] = useState();

    const params = useParams();
    const toNavigate = useNavigate();

    const getTasks = async (id) => {
        const response = await fetch(`http://localhost:5432/task/` + id);
        const jsonData = await response.json();
        setTask({title: jsonData.title, description: jsonData.description});
        setUpdate(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (update) {
            await fetch(`http://localhost:5432/task/${params.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            });
        } else {    
            await fetch("http://localhost:5432/task", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            });
        }

        toNavigate("/");
    };

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if(params.id) {
            getTasks(params.id);            
        }
    }, [params.id]); 

    return (
        <Grid container alignItems="center" justifyContent="center" directions="column"> 
            <Grid item xs={3}>
                <Card id="task-card" variant="outlined">
                    
                    <Typography variant="5" textAlign="center" >
                        Criando tarefa
                    </Typography>
                    
                    <CardContent id="task-card-content">
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                label="Título" variant="outlined" name="title" onChange={handleChange} value={task.title}
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0",
                                }}
                                InputProps={{ 
                                    style: {color: "#000000"}
                                }}
                                InputLabelProps={{ 
                                    style: {color: "#000000"}
                                }} 
                            /> 
                            <TextField 
                                label="Descrição" variant="outlined" multiline rows={4} name="description" onChange={handleChange} value={task.description}
                                sx={{
                                    display: "block",
                                    margin: "1rem 0",
                                }}
                                InputProps={{ 
                                    style: {color: "#000000"}
                                }}
                                InputLabelProps={{ 
                                    style: {color: "#000000"}
                                }}  
                            />

                            <Button variant="contained" type="submit" onClick={ () => toNavigate("/task/new") } > 
                                    Salvar </Button>
                        </form>
                        
                    </CardContent>

                    
                </Card>
            </Grid>
        </Grid>
    )
}

export default Taskform;