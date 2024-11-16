import React from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent';

function MoreDetails({ profile }) {
    const navigate = useNavigate();

    // If no profile is selected, navigate back to the home page
    if (!profile) {
        navigate('/');
        return null;
    }

    return (
        <div className="more-details">
            <button onClick={() => navigate('/')}>Back</button>
            <h2>{profile.name}</h2>
            <p><strong>Description:</strong> {profile.description}</p>
            <p><strong>Skills:</strong> {profile.skills || 'N/A'}</p>
            <p><strong>Projects:</strong> {profile.projects || 'N/A'}</p>

            {/* Map Section */}
            <h3>Location</h3>
            <MapComponent center={profile.location} />
        </div>
    );
}

export default MoreDetails;
