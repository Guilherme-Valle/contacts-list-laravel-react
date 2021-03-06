import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContactListContext = createContext();

export const ContactListProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [contactModalOpened, setContactModelOpened] = useState(false);
    const [newContactModalPersonId, setNewContactModalPersonId] = useState(null);
    const [persons, setPersons] = useState([]);

    const apiHost = 'http://104.248.61.216:8090/'


    const getPersons = () => {
        axios.get(apiHost + 'api/v1/person').then(({ data }) => {
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

    const handleContactModalOpen = (personId) => {
        setContactModelOpened(true);
        setNewContactModalPersonId(personId);
    }

    const handleContactModalClose = () => {
        setContactModelOpened(false);
    }

    const createPerson = (name) => {
        axios.post(apiHost + 'api/v1/person', {
            name
        }).then(() => {
            getPersons();
            setModalOpened(false);
        })
    }

    const editPerson = (id, name) => {
        axios.put(`${apiHost}api/v1/person/${id}`, {
            name
        }).then(() => {
            getPersons();
        })
    }

    const deletePerson = (id) => {
        axios.delete(`${apiHost}api/v1/person/${id}`)
            .then(() => {
                getPersons();
            })
    }

    const createPersonContact = (personId, contactTypeId, value) => {
        axios.post(apiHost + 'api/v1/person_contact', {
            person_id: personId, contact_type_id: contactTypeId, value
        }).then(() => {
            getPersons();
            setContactModelOpened(false);
        });
    }

    const editPersonContact = (id, contactTypeId, value) => {
        axios.put(`${apiHost}api/v1/person_contact/${id}`, {
            contact_type_id: contactTypeId, value
        }).then(() => {
            getPersons();
        })
    }

    const deletePersonContact = (id) => {
        axios.delete(`${apiHost}api/v1/person_contact/${id}`)
            .then(() => {
                getPersons();
            })
    }

    return (
        <ContactListContext.Provider value={{
            persons, createPerson, editPerson, deletePerson, createPersonContact, handleModalOpen, handleModalClose, modalOpened,
            contactModalOpened, handleContactModalOpen, handleContactModalClose, newContactModalPersonId, editPersonContact, deletePersonContact
        }}>
            {children}
        </ContactListContext.Provider>
    )

}