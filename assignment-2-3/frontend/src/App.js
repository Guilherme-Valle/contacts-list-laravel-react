import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import AddPersonButton from './components/AddPersonButton/AddPersonButton';
import PersonDialog from './components/PersonDialog/PersonDialog';
import PersonsList from './components/PersonsList/PersonsList';
import Presentation from './components/Presentation/Presentation';

function App() {
    const [modalOpened, setModalOpened] = useState(false);
    const [persons, setPersons] = useState([]);


    const getPersons = () => {
        axios.get('http://localhost:8090/api/v1/person').then(({ data }) => {
            setPersons(data);
        });
    }

    useEffect(() => {
        getPersons();
    }, []);

    const handleModalOpen = () => {
        setModalOpened(true);
    }

    const handleModalClose = () => {
        setModalOpened(false);
    }

    const createPerson = (name) => {
        axios.post('http://localhost:8090/api/v1/person', {
            name
        }).then(() => {
            getPersons();
            setModalOpened(false);
        })
    }

    const editPerson = (id, name) => {
        axios.put(`http://localhost:8090/api/v1/person/${id}`, {
            name
        }).then(() => {
            getPersons();
        })
    }

    const deletePerson = (id) => {
        axios.delete(`http://localhost:8090/api/v1/person/${id}`)
            .then(() => {
                getPersons();
            })
    }

    return (
        <div className={styles.App}>
            <Presentation />
            <AddPersonButton handleOpen={handleModalOpen} />
            <PersonsList persons={persons}
                handleEdit={editPerson}
                handleDelete={deletePerson} />
            <PersonDialog open={modalOpened} handleClose={handleModalClose}
                handleSubmit={createPerson} />
        </div>
    );
}

export default App;
