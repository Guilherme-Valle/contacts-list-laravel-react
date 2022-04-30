import styles from './AddContactButton.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';

function AddContactButton({personId}) {
    const { handleContactModalOpen } = useContext(ContactListContext);

    return (
        <div className={styles.AddContactButton}>
            <Button variant="outlined" startIcon={<AddIcon />} sx={{ width: '50%' }}
                onClick={() => handleContactModalOpen(personId)}>
                Adicionar contato
            </Button>
        </div>
    )
}

export default AddContactButton
