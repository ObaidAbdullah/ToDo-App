
import React from 'react'
import './Todo.css'
import db   from './firebase'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Modal, Typography } from '@mui/material';





function Todo(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        db.collection('todos').doc(props.todoObj.id).set({
            todo : input
        }, {merge : true});
        setOpen(false);
    }

    return (
        <div className="container_todo">
            <div className='todo_buttons'>
                <EditIcon onClick={handleOpen}></EditIcon>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='modal_style'>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Update ToDo
                        </Typography>
                        <div className="update_todo">
                            <input value={input} onChange={e => setInput(e.target.value)} />
                            <Button onClick={updateTodo} >Update</Button>
                        </div>
                        

                    </Box>
                </Modal>
            </div>
            <div className="todo_input">
                {props.todoObj.todo}   
            </div> 
            <div className='todo_buttons'>
                
                <DeleteIcon onClick={e=> db.collection('todos').doc(props.todoObj.id).delete() }/>
            </div>
        </div>
    )
}

export default Todo