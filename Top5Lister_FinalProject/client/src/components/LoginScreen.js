import { useContext } from 'react';
import AuthContext from '../auth'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { GlobalStoreContext } from '../store'
import RegisterModal from './RegisterModal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright'

const theme = createTheme();

export default function RegisterScreen() {
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext)

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      auth.loginUser({
          email: formData.get('email'),
          password: formData.get('password'),
      }, store);
  };

    //console.log("IN REGISTER SCREEN COMPONENT, AUTH IS:", auth.registerErrorCode)
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <RegisterModal />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
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
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/register/" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box pt={10}/>
                <Copyright/>
            </Container>
            </ThemeProvider>
    );
}