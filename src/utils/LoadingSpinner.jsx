import React from 'react';
import { ClipLoader } from 'react-spinners';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner">
            <ClipLoader color="#87ceeb" loading={true} size={100} />
            <div className='loading-spinner-text'>Retrieving your current location...</div>
        </div>
    );
}

export default LoadingSpinner;