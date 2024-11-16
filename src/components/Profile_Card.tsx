import React from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Avatar, 
  Chip,
  Box,
  IconButton,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Profile {
  name: string;
  title: string;
  avatar: string;
  background: string;
  bio: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  location: { lat: number; lng: number };
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 350,
  margin: 'auto',
  transition: 'all 0.3s',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  '&:hover': {
    boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    transform: 'translateY(-3px)',
  }
}));

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  borderTopLeftRadius: 'inherit',
  borderTopRightRadius: 'inherit',
  overflow: 'hidden',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  border: `4px solid ${theme.palette.background.paper}`,
  position: 'absolute',
  bottom: theme.spacing(-7.5),
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const ProfileCard: React.FC<{ profile: Profile; onShowSummary: (profile: Profile) => void }> = ({ profile, onShowSummary }) => {
  const navigate = useNavigate();

  const handleSummaryClick = () => {
    onShowSummary(profile); // Pass the selected profile to parent
    navigate('/details');   // Navigate to the MoreDetails page
  };

  return (
    <StyledCard>
      <CardMediaStyle>
        <img
          src={profile.background}
          alt="Profile background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
          }}
        />
      </CardMediaStyle>
      <AvatarStyle alt={profile.name} src={profile.avatar} />
      <CardContent sx={{ textAlign: 'center', mt: 7, pt: 2 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {profile.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontStyle: 'italic' }}>
          {profile.title}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary" paragraph sx={{ px: 2 }}>
          {profile.bio}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {profile.skills.map((skill, index) => (
            <SkillChip key={index} label={skill} size="small" />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          {profile.social.linkedin && (
            <IconButton color="primary" aria-label="LinkedIn" component="a" href={profile.social.linkedin} target="_blank">
              <LinkedIn />
            </IconButton>
          )}
          {profile.social.twitter && (
            <IconButton color="primary" aria-label="Twitter" component="a" href={profile.social.twitter} target="_blank">
              <Twitter />
            </IconButton>
          )}
          {profile.social.github && (
            <IconButton color="primary" aria-label="GitHub" component="a" href={profile.social.github} target="_blank">
              <GitHub />
            </IconButton>
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSummaryClick}
          sx={{ 
            borderRadius: '20px', 
            px: 4,
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
            },
          }}
        >
          View Summary
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProfileCard;
