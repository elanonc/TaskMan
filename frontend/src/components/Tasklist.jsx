import { Card, Typography, CardContent, Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./Tasklist.css";

function Tasklist(){

    const [taskList, setTaskList] = useState([]);

    const loadTasks = async () => {
        const response = await fetch("http://localhost:5432/task");
        const data = await response.json();
        setTaskList(data);
    }

    useEffect(()=> {
        loadTasks();
    }, [])

    return (
        <>
            <h1>something in the way...</h1>
            {
                taskList.map((taskItem) => (
                    <Card id="tasklist-card">
                        <CardContent id="tasklist-cardcontent">
                            <div className="tasklist-task">
                                <Typography>{taskItem.title}</Typography>
                                <Typography>{taskItem.description}</Typography>
                            </div>

                            <div className="tasklist-buttons">
                                <Button id="button-edit" variant="contained" color="success">
                                    Editar
                                </Button>

                                <Button id="button-delete" variant="contained" color="error">
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