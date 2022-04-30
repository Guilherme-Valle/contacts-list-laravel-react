import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import React, { useState } from "react"

function PersonDialog(props) {
    const [personName, setPersonName] = useState(props.name ? props.name : '');

    const handleInputChange = (e) => {
        const newValue = e.currentTarget.value;
        setPersonName(newValue);
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>{props.isEdit ? 'Editar' : 'Criar'} pessoa</DialogTitle>

            <DialogContent>

                <TextField id="personName" label={'Digite o nome da pessoa'} name="itemName" fullWidth
                    value={personName}
                    onChange={handleInputChange} />

            </DialogContent>

            <DialogActions>
                <Button onClick={props.handleClose}> Cancelar </Button>
                {props.isEdit ?
                    <Button onClick={() => { props.handleSubmit(props.id, personName); props.handleClose(); }}>Salvar</Button> :
                    <Button onClick={() => props.handleSubmit(personName)}>Salvar</Button>}
            </DialogActions>
        </Dialog>
    )
}

export default PersonDialog
