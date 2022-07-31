import { Card, Typography, CardContent, Button, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tasklist.css";

function Tasklist(){

    const [taskList, setTaskList] = useState([]);

    const getTasks = async () => {
        const response = await fetch("http://localhost:5432/task");
        const jsonData = await response.json();
        setTaskList(jsonData);
    }

    const handleDelete = async (id) => {
        try {
            const deleteTask = await fetch(`http://localhost:5432/task/${id}`, {
            method: "DELETE",
            })

            setTaskList(taskList.filter(taskItem => taskItem.id != id));
        } catch(error) {
            console.log(error.message);
        }
    };

    const toNavigate = useNavigate()

    useEffect(()=> {
        getTasks();
    }, []);

    return (
        <>
            { taskList.length != 0 ? (<h1>Gerenciador de Tarefas</h1>) : ( <h1></h1>)}
            {
                
                taskList.map((taskItem) => (
                    <Card id="tasklist-card" key={taskItem.id}>
                        <CardContent id="tasklist-cardcontent">
                            <div className="tasklist-task">
                                <Typography>{taskItem.title}</Typography>
                                <Typography>{taskItem.description}</Typography>
                            </div>

                            <div className="tasklist-buttons">
                                <Button id="button-edit" variant="contained" color="success"
                                        onClick={() => toNavigate(`/task/${taskItem.id}/edit`)}>
                                    Editar
                                </Button>

                                <Button id="button-delete" variant="contained" color="error"
                                        onClick={() => handleDelete(taskItem.id)}>
                                    Deletar
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                ))
            }

        </>
    )
}

export default Tasklist;