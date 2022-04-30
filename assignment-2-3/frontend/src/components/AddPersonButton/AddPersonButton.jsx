import styles from './AddPersonButton.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

function AddPersonButton({ handleOpen }) {
    return (
        <div className={styles.AddPersonButton}>
            <Button variant="outlined" startIcon={<AddIcon />} sx={{ width: '50%' }}
                onClick={handleOpen}>
                Adicionar pessoa
            </Button>
        </div>
    )
}

export default AddPersonButton
