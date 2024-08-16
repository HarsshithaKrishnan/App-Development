import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper, Dialog, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://cdn-dliin.nitrocdn.com/iFaxlHcVqyWZWghwsjNiQOatlfNsVALG/assets/images/source/rev-755bd6d/dlifeinteriors.com/wp-content/uploads/2023/06/gallery-banner.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const HeroOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const HeroText = styled(Typography)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  fontWeight: 'bold',
  fontSize: '2.5rem',
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  display: 'block',
  margin: '0 auto',
  marginTop: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const initialKitchens = [
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2022/03/Wainscoting-e1646648263888.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/King-size-bed-design-idea-in-Calicut.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Bed-design-ideas-in-Yelahanka.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Bed-design-ideas-in-Edappally.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Home-interior-designers-in-Trivandrum.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Bed-design-ideas-in-Kerala.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Home-interior-designers-in-Ernakulam.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Interior-design-company-in-Kottayam.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Interior-design-company-in-Kottayam.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Interior-design-company-in-Vyttila.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2024/05/03-scaled.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/King-size-bed-design-idea-in-Kerala.jpg' },
];

const additionalKitchens = [
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Floored-bed-design-idea-chennai.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Bed-design-ideas-in-Trivandrum.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/Floored-bed-design-idea-in-Bangalore.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2020/09/best-interior-descorator-in-Kochi.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2023/02/03-1.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2023/02/02-1.jpg' },
];

const ZoomCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const Wardrobe = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showMore, setShowMore] = useState(false);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  const handleLearnMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Design Gallery</HeroText>
      </HeroSection>

      <CardGrid maxWidth="lg">
        <Typography variant="h4" textAlign="center"><b>BED</b></Typography><br></br>
        <Typography>Relax with custom-made ideas of cots from Aesthetic Haven. Bedroom beauty depends mainly on how the 
            cot is built and arranged, supported by lighting, and side tables. Choose from the wide range of 
            styles and colour options available in your desired design. A neat storage, peace of mind style and
             comfort can be expected when it designed as required. Cot, grey, umber, milky, crop, graffiti, 
             scratch etc. are some of the cot samples to select the model that we can follow either in King or 
             Queen Sizes.</Typography><br></br>
        <Grid container spacing={4}>
          {initialKitchens.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Box display="flex" flexDirection="column" height="100%">
                  <ZoomCardMedia
                    component="img"
                    height="200"
                    image={item.image1}
                    alt={`Top image ${index}`}
                    onClick={() => handleClickOpen(item.image1)}
                  />
                  <CardContent>
                    <Box flexGrow={1}></Box>
                  </CardContent>
                  <ZoomCardMedia
                    component="img"
                    height="200"
                    image={item.image2}
                    alt={`Bottom image ${index}`}
                    onClick={() => handleClickOpen(item.image2)}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
          {showMore && additionalKitchens.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index + initialKitchens.length}>
              <Card>
                <Box display="flex" flexDirection="column" height="100%">
                  <ZoomCardMedia
                    component="img"
                    height="200"
                    image={item.image1}
                    alt={`Top image ${index}`}
                    onClick={() => handleClickOpen(item.image1)}
                  />
                  <CardContent>
                    <Box flexGrow={1}></Box>
                  </CardContent>
                  <ZoomCardMedia
                    component="img"
                    height="200"
                    image={item.image2}
                    alt={`Bottom image ${index}`}
                    onClick={() => handleClickOpen(item.image2)}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardGrid>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <img src={selectedImage} alt="Enlarged" style={{ width: '100%', height: 'auto' }} />
      </Dialog>
      
      {!showMore && (
        <LearnMoreButton variant="contained" onClick={handleLearnMore}>
          Learn More
        </LearnMoreButton>
      )}
    </div>
  );
};

export default Wardrobe;
