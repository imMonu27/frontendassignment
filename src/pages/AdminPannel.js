import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography, Paper, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import profilesData from '../data/profiles';

function AdminPanel() {
    const [profiles, setProfiles] = useState(profilesData);
    const [form, setForm] = useState({ id: null, name: '', description: '', photoUrl: '', location: { lat: '', lng: '' } });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'lat' || name === 'lng') {
            setForm((prevForm) => ({
                ...prevForm,
                location: { ...prevForm.location, [name]: parseFloat(value) },
            }));
        } else {
            setForm((prevForm) => ({ ...prevForm, [name]: value }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (form.id === null) {
            // Add new profile
            setProfiles([...profiles, { ...form, id: Date.now() }]);
        } else {
            // Edit existing profile
            setProfiles(
                profiles.map((profile) =>
                    profile.id === form.id ? form : profile
                )
            );
        }
        resetForm();
    };

    const handleEdit = (profile) => {
        setForm(profile);
    };

    const handleDelete = (id) => {
        setProfiles(profiles.filter((profile) => profile.id !== id));
    };

    const resetForm = () => {
        setForm({ id: null, name: '', description: '', photoUrl: '', location: { lat: '', lng: '' } });
    };

    return (
        <Box sx={{ padding: 4, maxWidth: '800px', margin: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                Admin Panel
            </Typography>

            {/* Form for adding/editing profiles */}
            <Paper sx={{ padding: 3, mb: 4 }} elevation={3}>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                value={form.description}
                                onChange={handleInputChange}
                                multiline
                                rows={3}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Photo URL"
                                name="photoUrl"
                                value={form.photoUrl}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Latitude"
                                name="lat"
                                type="number"
                                step="0.0001"
                                value={form.location.lat || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Longitude"
                                name="lng"
                                type="number"
                                step="0.0001"
                                value={form.location.lng || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ textTransform: 'none' }}
                        >
                            {form.id === null ? 'Add Profile' : 'Update Profile'}
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            type="button"
                            onClick={resetForm}
                            sx={{ textTransform: 'none' }}
                        >
                            Reset
                        </Button>
                    </Box>
                </form>
            </Paper>

            {/* List of profiles with edit and delete options */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Profiles
            </Typography>
            <Grid container spacing={2}>
                {profiles.map((profile) => (
                    <Grid item xs={12} key={profile.id}>
                        <Paper
                            elevation={2}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 2,
                            }}
                        >
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {profile.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {profile.description}
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton
                                    color="primary"
                                    onClick={() => handleEdit(profile)}
                                    aria-label="Edit"
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    color="error"
                                    onClick={() => handleDelete(profile.id)}
                                    aria-label="Delete"
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default AdminPanel;
