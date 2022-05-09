import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';
import IpAddress from '../../Pages/IpAddress';

const Form = ({ submitSearch }) => {
    
    const [location, setLocation] = useState('');
    const res = window.localStorage.getItem('res');
    submitSearch(res);
    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <>
        <IpAddress/>
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
        </>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;
