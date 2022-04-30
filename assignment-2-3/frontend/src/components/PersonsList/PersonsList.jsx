import styles from './PersonsList.module.css'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { List } from '@mui/material';
import Person from '../Person/Person';

function PersonsList({ persons, handleEdit, handleDelete }) {
    return (
        <div className={styles.PersonsList}>
            {persons ?
                persons.map((person) => {
                    return <Person {...person}
                        key={person.id}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                         />
                }) : null}
        </div>
    )
}

export default PersonsList