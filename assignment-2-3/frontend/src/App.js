import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import AddPersonButton from './components/AddPersonButton/AddPersonButton';
import { ContactListProvider } from './components/ContactListProvider/ContactListProvider';
import PersonContactDialog from './components/PersonContactDialog/PersonContactDialog';
import PersonDialog from './components/PersonDialog/PersonDialog';
import PersonsList from './components/PersonsList/PersonsList';
import Presentation from './components/Presentation/Presentation';

function App() {

    return (
        <div className={styles.App}>
            <ContactListProvider>
                <Presentation />
                <AddPersonButton />
                <PersonsList />
                <PersonDialog />
                <PersonContactDialog />
            </ContactListProvider>

        </div>
    );
}

export default App;
