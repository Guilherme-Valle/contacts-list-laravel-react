import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react"
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function PersonContactDialog(props) {
    const [value, setValue] = useState(props.value ? props.value : '');
    const [contactTypeId, setContactTypeId] = useState(props.contactTypeId ? props.contactTypeId : 1);
    const { contactModalOpened, handleContactModalClose, createPersonContact, editPersonContact, newContactModalPersonId } = useContext(ContactListContext);
    

    const handleClose = props.isEdit ? props.handleClose : handleContactModalClose;

    const personId = props.isEdit ? props.personId : newContactModalPersonId;

    const handleInputChange = (e) => {
        const newValue = e.currentTarget.value;
        setValue(newValue);
    }

    const handleSelectChange = (event) => {
        setContactTypeId(event.target.value);
    }

    const valueLabels = {
        '1': 'Digite o e-mail',
        '2': 'Digite o telefone',
        '3': 'Digite o número de WhatsApp'
    }

    const styleIcon = {
        marginRight: '5px'
    }

    return (
        <Dialog open={contactModalOpened || (props.isEdit && props.open)} onClose={handleClose}
            fullWidth={true}>
            <DialogTitle>{props.isEdit ? 'Editar' : 'Criar'} contato</DialogTitle>

            <DialogContent>

                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="contact-type-id">Tipo de contato</InputLabel>
                    <Select
                        labelId="contact-type-label-id"
                        id="select-contact-type"
                        value={contactTypeId}
                        label="Tipo"
                        onChange={handleSelectChange}>
                        <MenuItem value={1}><EmailIcon style={styleIcon} /> Email</MenuItem>
                        <MenuItem value={2}><PhoneIcon style={styleIcon} /> Telefone</MenuItem>
                        <MenuItem value={3}><WhatsAppIcon style={styleIcon} /> WhatsApp</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                    <TextField id="value" label={valueLabels[contactTypeId]} name="itemName" fullWidth
                        value={value}
                        onChange={handleInputChange} />
                </FormControl>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}> Cancelar </Button>
                {props.isEdit ?
                    <Button onClick={() => { editPersonContact(props.id, contactTypeId, value); handleClose(); }} disabled={!value}>Salvar</Button> :
                    <Button onClick={() => createPersonContact(personId, contactTypeId, value)} disabled={!value}>Salvar</Button>}
            </DialogActions>
        </Dialog>
    )
}

export default PersonContactDialog
