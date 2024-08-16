import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, CardMedia, Modal, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

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

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ZoomBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    transition: 'transform 0.5s ease',
    transform: 'scale(1)',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
}));

const FormModal = ({ open, handleClose }) => (
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
      <TextField fullWidth margin="normal" label="Name" variant="outlined" />
      <TextField fullWidth margin="normal" label="Email" variant="outlined" />
      <TextField fullWidth margin="normal" label="Message" variant="outlined" multiline rows={4} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleClose}>
        Submit
      </Button>
    </Box>
  </Modal>
);

const Bedroom1 = () => {
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
        <Toolbar>
          <Typography variant="h6">Aesthetic Haven</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <HeroContent>
          <HeroOverlay />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to Aesthetic Haven
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Happiness looks good on you, especially in our home.
            </Typography>
          </Container>
        </HeroContent><br></br><br></br>
        <Typography varient="h1" gutter bootom textAlign={"center"}><b>CUSTOM-MADE BEDROOM</b></Typography><br></br><br></br>
              <Typography>A large portion of anyone’s life is spent in a bedroom, as the best place to relieve 
                anxieties, worries, and hurries. Family feels secure and free in this room and thus it needs the best ambiance, 
                facilities, and provisions. Bedroom furniture like cot, side tables, wardrobes and dressing table mostly 
                occupies almost all the space in a normal bedroom. In order to maintain bedroom excellence, it is important
                 to choose bedroom furniture in matches the style with your bedroom interior design. This is where you can 
                 use the expertise of top interior designers. They can make and provide the bedroom furniture in perfect 
                 size to fit the space. Come to Aesthetic Haven and explore the options for custom-made bedroom furniture to create 
                 the most comfortable bedroom. Below are just a few samples of our bedroom interior designing and furnishing works in Navi
                  Mumbai, Pune, Hyderabad, Bangalore, Mysore, Kerala, Chennai, Nagercoil, Coimbatore, Madurai & Mangalore..</Typography>
        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom>
                  BED
                </Typography>
                <Typography variant="body1" paddingLeft={'10px'} paragraph>
                  We bring customization to your fingertips, from the initial consultation through the end process; 
                  our team of interior designers will provide you with all the support and advice so you get a personalized 
                  touch in your dream home. Over the years, we have worked with 10000+ clients and we provide interior
                  design and furnishing services, which are more than just about styles and finishes. Aesthetic Haven provides you a fully bespoke service on 
                  home interior design to your brief. All our products are custom made from the finest materials. 
                  With respect for the past and an eye on the future, our high level of machinery and quality checks help you
                  realize your dream home interiors with fully customized products and quality.
                </Typography>
                <Box textAlign="center">
                <Link to="/bed2">  <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleModalOpen}>
                    Learn More
                  </Button></Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <ZoomBox>
                <CardMedia
                  component="img"
                  sx={{
                    height: '300px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://dlifeinteriors.com/wp-content/uploads/2020/09/Interior-designers-in-Kochi.jpg"
                  alt="Modular Interiors"
                />
               
              </ZoomBox>
            </Grid>
          </Grid>
        </CardGrid>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom>
                Dressing Unit
                </Typography>
                <Typography variant="body1" paddingLeft={'10px'} paragraph>
                  Dressing units are an essential part of the bedroom interior, it often comes integrated into 
                  the wardrobes. Aesthetic Haven offers you the choice to build as per your requirements in custom style 
                  and measurements. Customers can get the dressing table as per your requirements anywhere in South India as 
                  part of your bedroom interior.
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleModalOpen}>
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <ZoomBox>
                <CardMedia
                  component="img"
                  sx={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://dlifeinteriors.com/wp-content/uploads/2020/09/Dressing-room-interior-in-Kochi.jpg"
                  alt="Dressing Unit"
                />
              </ZoomBox>
            </Grid>
          </Grid>
        </CardGrid>

        <CardGrid maxWidth="lg">
          <Grid container spacing={7} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: '16px' }}>
                <Typography variant="h4" gutterBottom>
                Wardrobe
                </Typography>
                <Typography variant="body1" paddingLeft={'10px'} paragraph>
                  Classy and trendy wardrobes transform a bedroom in addition to give ample storage facilities. 
                  Where it fits better and what should be the size is often a matter to be discussed with a designer 
                  and decide. Next is the choice of color and finish to match with the theme of the bedroom. 
                  Below are some of the samples of wardrobes we have done. Bronze, Nottingham, Recon, Balsam, Taupe,
                  Chamois are some of the themes usually selected by our clients. Any change is welcomed, alterations 
                  are as required.
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleModalOpen}>
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <ZoomBox>
                <CardMedia
                  component="img"
                  sx={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  image="https://dlifeinteriors.com/wp-content/uploads/2020/09/bronze.jpg"
                  alt="Wardrobe"
                />
              </ZoomBox>
            </Grid>
          </Grid>
        </CardGrid>

      </main>

      <FormModal open={openModal} handleClose={handleModalClose} />
    </Root>
  );
};

export default Bedroom1;
