import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, CardMedia, Modal, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { ref, set } from "firebase/database";
import { database } from '../firebase'; // Adjust the path as needed

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://ansainteriors.com/wp-content/uploads/2022/02/luxury-interiors-ansa3.webp)',
  padding: theme.spacing(0, 0, 0),
  height: '80vh',
}));

const HeroOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.3)',
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const ImageTextOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px',
  overflow: 'hidden',
  '&:hover img': {
    filter: 'blur(5px)',
  },
  '&:hover div': {
    transform: 'scale(1.2)',
  },
}));

const TextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
}));

const FormModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const contactRef = ref(database, 'contact/' + Date.now());

    set(contactRef, formData)
      .then(() => {
        console.log('Data saved successfully!');
        handleClose();
      })
      .catch((error) => {
        console.error('Error saving data: ', error);
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}>
        <Typography variant="h6" component="h2">
          Learn More Form
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

const Hotels = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <Root>
      <AppBar position="static" sx={{ background: "#006064" }}>
         
      </AppBar>
      <main>
        <HeroContent>
          <HeroOverlay />
          <Container maxWidth="l" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" align="center" gutterBottom>
            Welcome to Aesthetic Haven
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Happiness looks good on you, especially in our home.
            </Typography>
          </Container>
        </HeroContent>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom>
                  Why Customized Home Interiors?
                </Typography>
                <br></br>
                <Typography variant="h6" paragraph textAlign="left">
                  <ul>
                    <li>Creating rather than accepting what is available ensures complete satisfaction of users.</li><br></br>
                    <li>Clients have the opportunity to choose materials for making furniture and decor.</li><br></br>
                    <li>Customizations are as per requirements of each client and a design theme.</li><br></br>
                    <li>Customize furniture as per design, measuring actual space at site.</li><br></br>
                    <li>Interaction between designer and client at each phase till finalization ensures scope for improvement to meet the objectives of customized home interiors.</li><br></br>
                    <li>Clients get to select accessories and fittings and create cabinets accordingly.</li><br></br>
                    <li>Enhance storage capabilities and make the most of difficult spaces.</li><br></br>
                    <li>Enables you to have furniture with a suitable color that blends with your color scheme.</li><br></br>
                    <li>Plan and modify interior works as per budget. Clients get to study the estimate and drawings and alter plans during the design stage as per budget.</li>
                  </ul>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '700px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://dlifeinteriors.com/wp-content/uploads/2023/06/homeinterior1.jpg"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
          </Grid>
        </CardGrid>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom>
                  Give a Personalized Touch to Your Dream Home
                </Typography>
                <br />
                <Typography variant="body1" paddingLeft={'10px'} paragraph>
                  We bring customization to your fingertips, from the initial consultation through the end process; 
                  our team of interior designers will provide you with all the support and advice so you get a personalized 
                  touch in your dream home. Over the years, we have worked with 10000+ clients and we provide interior
                  design and furnishing services, which are more than just about styles and finishes. D’LIFE provides you a fully bespoke service on 
                  home interior design to your brief. All our products are custom made from the finest materials. 
                  With respect for the past and an eye on the future, our high level of machinery and quality checks help you
                  realize your dream home interiors with fully customized products and quality.
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleModalOpen}>
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '400px',
                    width: '150%',
                    objectFit: 'cover',
                  }}
                  image="https://dlifeinteriors.com/wp-content/uploads/2023/06/homeinterior2.jpg"
                  alt="Modular Interiors"
                />
              </Box>
            </Grid>
          </Grid>
        </CardGrid>

      </main>

      <FormModal open={openModal} handleClose={handleModalClose} />
    </Root>
  );
};

export default Hotels;
