import styles from './AddPersonButton.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';

function AddPersonButton() {
    const { handleModalOpen } = useContext(ContactListContext);

    return (
        <div className={styles.AddPersonButton}>
            <Button variant="outlined" startIcon={<AddIcon />} sx={{ width: '50%' }}
                onClick={handleModalOpen}>
                Adicionar pessoa
            </Button>
        </div>
    )
}

export default AddPersonButton
