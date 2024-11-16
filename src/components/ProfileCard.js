import React from 'react';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';

const ProfileCard = ({ profile, onShowSummary }) => {
    return (
        <Card style={{ maxWidth: 300, margin: '20px auto', padding: '10px' }}>
            <Avatar
                src={profile.avatar}
                alt={profile.name}
                style={{ width: 100, height: 100, margin: '10px auto' }}
            />
            <CardContent>
                <Typography variant="h5">{profile.name}</Typography>
                <Typography variant="subtitle1">{profile.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {profile.bio}
                </Typography>
            </CardContent>
            <Button
                variant="contained"
                color="primary"
                onClick={() => onShowSummary(profile)}
                style={{ margin: '10px auto', display: 'block' }}
            >
                Summary
            </Button>
        </Card>
    );
};

export default ProfileCard;
