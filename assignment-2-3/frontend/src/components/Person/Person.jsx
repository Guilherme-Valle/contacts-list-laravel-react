import styles from './Person.module.css'
import { Collapse } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import PersonContact from '../PersonContact/PersonContact';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PersonDialog from '../PersonDialog/PersonDialog';
import AddContactButton from '../AddContactButton/AddContactButton';
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';
import PersonContactDialog from '../PersonContactDialog/PersonContactDialog';

function Person({ id, name, contacts }) {
    const [expandChildren, setExpandChildren] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    const { deletePerson } = useContext(ContactListContext);

    const handleModalOpen = () => {
        setModalOpened(true);
    }

    const handleModalClose = () => {
        setModalOpened(false);
    }

    const styleIcon = {
        cursor: 'pointer'
    }

    return (
        <>
            <div className={styles.Person}>
                <div>{name}</div>

                <div className={styles.person__icons}>
                    <EditIcon sx={{ marginRight: '5px' }} style={styleIcon}
                        onClick={handleModalOpen} />
                    <DeleteIcon style={styleIcon} onClick={() => deletePerson(id)} />
                    {expandChildren ?
                        <ExpandLessIcon style={styleIcon}
                            onClick={() => setExpandChildren(!expandChildren)}
                        /> :
                        <ExpandMoreIcon style={styleIcon}
                            onClick={() => setExpandChildren(!expandChildren)}
                        />}

                </div>
            </div>

            <Collapse in={expandChildren} timeout="auto" unmountOnExit
                sx={{
                    width: '45%', '@media (max-width: 900px)': {
                        width: '85%'
                    }
                }}>
                <div className={styles.collapsed}>
                    {contacts ? contacts.map((contact) => {
                        return <PersonContact key={contact.id} {...contact} />
                    }) : null}
                    <AddContactButton personId={id} />
                </div>
            </Collapse>

            <PersonDialog open={modalOpened}
                handleClose={handleModalClose}
                isEdit={true}
                id={id}
                name={name} />

        </>

    )
}

export default Person