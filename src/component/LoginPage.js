// src/component/Login.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, CssBaseline, Avatar, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Login({ onLogin }) {
    const [details, setDetails] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = details;

        try {
            const res = await fetch("https://interior-ca16f-default-rtdb.firebaseio.com/register.json");
            const data = await res.json();
            console.log(data); // Log the data to check its structure

            const user = Object.values(data).find(user => user.email === email && user.password === password);

            if (user) {
                setError('');
                localStorage.setItem('userEmail', email); // Store email in local storage
                onLogin(); // Update the isLoggedIn state in App component
                navigate('/home'); // Redirect to home page
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.log(error); // Log the error to see what it contains
            setError('An error occurred');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth={false}
                disableGutters
                sx={{
                    backgroundImage: `url('https://media.istockphoto.com/id/1147086081/photo/modern-concept-interior-design-of-black-and-grey-living-room-3d-render.webp?b=1&s=170667a&w=0&k=20&c=pM3NxWkA3KLZLMgZdl0aws-5n0cZHS8l480QF-OAQAQ=')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // slightly transparent white background for the form
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: 400,
                        margin: 2,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                        />
                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;
