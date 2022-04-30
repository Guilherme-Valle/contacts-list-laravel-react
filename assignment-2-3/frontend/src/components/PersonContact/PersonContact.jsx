import styles from './PersonContact.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonContactDialog from '../PersonContactDialog/PersonContactDialog';
import { useState } from 'react';
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';

function PersonContact({ contact_type_id, value, id, person_id }) {
    const [modalOpened, setModalOpened] = useState(false);
    const { deletePersonContact } = useContext(ContactListContext);

    const handleModalOpen = () => {
        setModalOpened(true);
    }

    const handleModalClose = () => {
        setModalOpened(false);
    }

    const styleIcon = {
        cursor: 'pointer'
    }

    const styleContactIcon = {
        marginRight: '5px'
    }

    const contactIcons = {
        1: <EmailIcon style={styleContactIcon} />,
        2: <PhoneIcon style={styleContactIcon} />,
        3: <WhatsAppIcon style={styleContactIcon} />
    }

    return (
        <>
            <div className={styles.PersonContact}>
                <div className={styles.contact__label}> {contactIcons[contact_type_id]} {value}</div>
                <div>
                    <EditIcon sx={{ marginRight: '5px' }} style={styleIcon} onClick={handleModalOpen} />
                    <DeleteIcon style={styleIcon} onClick={() => deletePersonContact(id)}/>
                </div>
            </div>

            <PersonContactDialog isEdit={true}
                handleClose={handleModalClose}
                value={value}
                contactTypeId={contact_type_id}
                personId={person_id}
                open={modalOpened}
                id={id}
            />
        </>
    )
}

export default PersonContact