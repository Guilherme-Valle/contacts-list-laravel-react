import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, TextField } from "@mui/material"
import React, { useState } from "react"
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';

function PersonDialog(props) {
    const [personName, setPersonName] = useState(props.name ? props.name : '');
    const { modalOpened, handleModalClose, createPerson, editPerson } = useContext(ContactListContext);

    const handleClose = props.isEdit ? props.handleClose : handleModalClose;

    const handleInputChange = (e) => {
        const newValue = e.currentTarget.value;
        setPersonName(newValue);
    }

    return (
        <Dialog open={modalOpened || (props.isEdit && props.open)} onClose={handleClose}>
            <DialogTitle>{props.isEdit ? 'Editar' : 'Criar'} pessoa</DialogTitle>

            <DialogContent>

                <FormControl fullWidth sx={{mt: 2}}>
                    <TextField id="personName" label={'Digite o nome da pessoa'} name="itemName" fullWidth
                        value={personName}
                        onChange={handleInputChange} />
                </FormControl>

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}> Cancelar </Button>
                {props.isEdit ?
                    <Button onClick={() => { editPerson(props.id, personName); handleClose(); }} disabled={!personName}>Salvar</Button> :
                    <Button onClick={() => createPerson(personName)} disabled={!personName}>Salvar</Button>}
            </DialogActions>
        </Dialog>
    )
}

export default PersonDialog
