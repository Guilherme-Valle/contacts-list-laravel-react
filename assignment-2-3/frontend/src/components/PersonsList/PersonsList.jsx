import styles from './PersonsList.module.css'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { List } from '@mui/material';
import Person from '../Person/Person';
import { ContactListContext } from '../ContactListProvider/ContactListProvider';
import { useContext } from 'react';

function PersonsList() {
    const { persons } = useContext(ContactListContext);
    return (
        <div className={styles.PersonsList}>
            {persons ?
                persons.map((person) => {
                    return <Person {...person}
                        key={person.id}
                         />
                }) : null}
        </div>
    )
}

export default PersonsList