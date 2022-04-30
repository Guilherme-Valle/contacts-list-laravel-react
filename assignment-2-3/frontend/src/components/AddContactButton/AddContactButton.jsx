import styles from './AddContactButton.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

function AddContactButton({ handleOpen }) {
    return (
        <div className={styles.AddContactButton}>
            <Button variant="outlined" startIcon={<AddIcon />} sx={{ width: '50%' }}
                onClick={handleOpen}>
                Adicionar contato
            </Button>
        </div>
    )
}

export default AddContactButton
