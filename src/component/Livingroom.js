import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Dialog, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  { image1: 'https://super.homelane.com/other%20interiors/1681378737474300570b584af-HLKT00000841_batch-3-800x600_10-main.jpg', image2: 'https://super.homelane.com/other%20interiors/1681205099282a6bef0e9918c-HLKT00000827_batch-3-800x600_13-main.jpg' },
  { image1: 'https://super.homelane.com/other%20interiors/1681378219801428ec9712412-HLKT00000840_batch-3-800x600_6-main.jpg', image2: 'https://super.homelane.com/other%20interiors/1681203945869d466eb8b982a-HLKT00000826_batch-3-800x600_26-main.jpg' },
  { image1: 'https://super.homelane.com/other%20interiors/16812052495653daf8001fcf6-HLKT00000828_batch-3-800x600_35-main.jpg', image2: 'https://super.homelane.com/other%20interiors/1680685507861b64a861f844a-HLKT00000800_living-room-800x600_1-main.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2024/05/01-scaled.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2023/08/2-1.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2023/08/3-1.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2023/08/2-1.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2024/05/03-scaled.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2023/08/5-1.jpg' },
];

const additionalKitchens = [
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2024/05/04-scaled.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2023/02/04-1.jpg' },
  { image1: 'https://dlifeinteriors.com/wp-content/uploads/2023/02/06.jpg', image2: 'https://dlifeinteriors.com/wp-content/uploads/2024/05/10-scaled.jpg' },
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const kitchens = [...initialKitchens, ...(showMore ? additionalKitchens : [])];
  const images = kitchens.flatMap(item => [item.image1, item.image2]);

  const handleClickOpen = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImageIndex(0);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLearnMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Living Room</HeroText>
      </HeroSection>

      <CardGrid maxWidth="lg">
        <Typography variant="h2" textAlign="center"><b>INTERIOR GALLERY</b></Typography><br></br>
        <Grid container spacing={4}>
          {kitchens.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Box display="flex" flexDirection="column" height="100%">
                  <ZoomCardMedia
                    component="img"
                    height="200"
                    image={item.image1}
                    alt={`Top image ${index}`}
                    onClick={() => handleClickOpen(index * 2)}
                  />
                  <CardContent>
                    <Box flexGrow={1}></Box>
                  </CardContent>
                  <ZoomCardMedia
                    component="img"
                    height="200"
                    image={item.image2}
                    alt={`Bottom image ${index}`}
                    onClick={() => handleClickOpen(index * 2 + 1)}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardGrid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box display="flex" alignItems="center">
          <IconButton onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </IconButton>
          <img src={images[currentImageIndex]} alt="Enlarged" style={{ width: '100%', height: 'auto' }} />
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
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
