import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, CssBaseline, Avatar, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Register() {
    const [details, setDetails] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const PostData = async (e) => {
        e.preventDefault();

        const { fName, lName, email, password, confirmPassword } = details;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const res = await fetch("https://interior-ca16f-default-rtdb.firebaseio.com/register.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fName,
                    lName,
                    email,
                    password,
                })
            });

            if (res.ok) {
                setError('');
                navigate('/login'); // Redirect to login page upon successful registration
            } else {
                setError('Registration failed');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth={false} sx={{
                    backgroundImage: `url('https://media.istockphoto.com/id/1147086081/photo/modern-concept-interior-design-of-black-and-grey-living-room-3d-render.webp?b=1&s=170667a&w=0&k=20&c=pM3NxWkA3KLZLMgZdl0aws-5n0cZHS8l480QF-OAQAQ=')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
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
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={PostData} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={details.fName}
                                    onChange={(e) => setDetails({ ...details, fName: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={details.lName}
                                    onChange={(e) => setDetails({ ...details, lName: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={details.email}
                                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={details.password}
                                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                    value={details.confirmPassword}
                                    onChange={(e) => setDetails({ ...details, confirmPassword: e.target.value })}
                                />
                            </Grid>
                            {error && (
                                <Grid item xs={12}>
                                    <Typography color="error">{error}</Typography>
                                </Grid>
                            )}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Register;
