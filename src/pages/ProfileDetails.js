import React from 'react';
import { Card, CardContent, Typography, Avatar, Chip, Box, IconButton } from '@mui/material';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import MapComponent from '../components/MapComponent'; // Import the MapComponent

const ProfileDetails = ({ profile, onClose }) => {
    if (!profile) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxWidth: 600,
                height: '80vh', // Limit the height to 80% of the viewport
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                overflow: 'hidden',
            }}
        >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Scrollable Content */}
                <Box
                    sx={{
                        overflowY: 'auto', // Make the content scrollable
                        padding: 2,
                        flex: 1, // Fill the available height
                    }}
                >
                    <CardContent>
                        {/* Profile Picture */}
                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                            <Avatar
                                src={profile.avatar}
                                alt={profile.name}
                                sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
                            />
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                {profile.name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {profile.title}
                            </Typography>
                        </Box>

                        {/* Bio */}
                        <Typography variant="body1" paragraph>
                            {profile.bio}
                        </Typography>

                        {/* Skills */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Skills:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {profile.skills.map((skill, index) => (
                                    <Chip key={index} label={skill} />
                                ))}
                            </Box>
                        </Box>

                        {/* Social Links */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Social Links:
                            </Typography>
                            <Box>
                                {profile.social.linkedin && (
                                    <IconButton
                                        color="primary"
                                        component="a"
                                        href={profile.social.linkedin}
                                        target="_blank"
                                    >
                                        <LinkedIn />
                                    </IconButton>
                                )}
                                {profile.social.twitter && (
                                    <IconButton
                                        color="primary"
                                        component="a"
                                        href={profile.social.twitter}
                                        target="_blank"
                                    >
                                        <Twitter />
                                    </IconButton>
                                )}
                                {profile.social.github && (
                                    <IconButton
                                        color="primary"
                                        component="a"
                                        href={profile.social.github}
                                        target="_blank"
                                    >
                                        <GitHub />
                                    </IconButton>
                                )}
                            </Box>
                        </Box>

                        {/* Map */}
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Location:
                        </Typography>
                        <MapComponent center={profile.location} />
                    </CardContent>
                </Box>

                {/* Close Button */}
                <Box sx={{ textAlign: 'center', p: 2 }}>
                    <button
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            backgroundColor: '#3f51b5',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={onClose}
                    >
                        Close
                    </button>
                </Box>
            </Card>
        </Box>
    );
};

export default ProfileDetails;
