import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Home as HomeIcon, AccountCircle, Search as SearchIcon } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '30ch',
            },
        },
    },
}));

const Navbar = ({ onSearch, onAdminLogin }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
                <Toolbar>
                    {/* Home Button */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        sx={{ mr: 2 }}
                        onClick={() => window.location.href = '/'}
                    >
                        <HomeIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Profile Viewer
                    </Typography>

                    {/* Search Bar */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search profiles..."
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => onSearch(e.target.value)} // Pass the search query to the parent
                        />
                    </Search>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Admin Login Button */}
                    <Button
                        color="inherit"
                        startIcon={<AccountCircle />}
                        onClick={onAdminLogin} // Call the admin login handler
                    >
                        Admin Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
