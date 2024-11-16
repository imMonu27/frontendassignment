import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './components/navbar';
import ProfileCard from './components/ProfileCard';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPannel';
import profilesData from './data/profiles';

function App() {
    const [profiles, setProfiles] = useState(profilesData); // All profiles
    const [filteredProfiles, setFilteredProfiles] = useState(profilesData); // Filtered profiles
    const [selectedProfile, setSelectedProfile] = useState(null); // Selected profile for details view

    // Handle search functionality
    const handleSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = profiles.filter((profile) =>
            profile.name.toLowerCase().includes(lowerCaseQuery) ||
            profile.title.toLowerCase().includes(lowerCaseQuery) ||
            profile.bio.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProfiles(filtered);
    };

    // Handle admin login
    const handleAdminLogin = () => {
        alert('Redirecting to admin login...');
        window.location.href = '/admin'; // Redirect to admin panel
    };

    // Handle profile selection for details
    const handleShowSummary = (profile) => {
        setSelectedProfile(profile);
    };

    const handleCloseDetails = () => {
        setSelectedProfile(null);
    };

    return (
        <Router>
            <div className="App">
                {/* Navbar */}
                <Navbar onSearch={handleSearch} onAdminLogin={handleAdminLogin} />

                {/* Routes */}
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>Profiles</h1>
                                <Grid container spacing={3} justifyContent="center">
                                    {filteredProfiles.map((profile) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={profile.id}>
                                            <ProfileCard
                                                profile={profile}
                                                onShowSummary={handleShowSummary}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                                {selectedProfile && (
                                    <ProfileDetails
                                        profile={selectedProfile}
                                        onClose={handleCloseDetails}
                                    />
                                )}
                            </div>
                        }
                    />

                    {/* Admin Panel */}
                    <Route
                        path="/admin"
                        element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
