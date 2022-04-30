import styles from './PersonContact.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function PersonContact({ contact_type_id, value }) {
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
        <div className={styles.PersonContact}>
            <div className={styles.contact__label}> {contactIcons[contact_type_id]} {value}</div>
            <div>
                <EditIcon sx={{marginRight: '5px'}} style={styleIcon} />
                <DeleteIcon style={styleIcon} />
            </div>
        </div>
    )
}

export default PersonContact