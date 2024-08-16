import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://png.pngtree.com/background/20230522/original/pngtree-modern-bedroom-with-wood-walls-and-lighting-picture-image_2690813.jpg)',
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

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const CardContainer = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const kitchens = [
  { title: 'Spectacularly Beige Master Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/1680589794460ef99450f2c91-HLKT00000776_Resized-800x600_9-main.jpg' },
  { title: 'Boisterously Beige Master Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/1680590213604c43a3caa272b-HLKT00000779_Resized-800x600_20-main.jpg' },
  { title: 'A Tryst With Browns Master Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/16805893383479fc7b609f1cd-HLKT00000773_Resized-800x600_4-main.jpg' },
  { title: 'Color-me-fun Unisex Kids’ Room', image: 'https://super.homelane.com/Bedroom%20Wardrobes/1680597754063dc6f0ad95dc3-HLKT00000787_Resized-800x600_10-main.jpg' },
  { title: 'Candy Clouds Girls’ Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/16805978873595647e0baeb1d-HLKT00000789_Resized-800x600_12-main.jpg' },
  { title: 'Officially Fabulous Master Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/1680589580503770e1a0c229f-HLKT00000774_Resized-800x600_7-main.jpg' },
  { title: 'Grey-t Expectations Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/1680587912476dc608e0c110e-HLKT00000770_Resized-800x600_1%20(1)-main.jpg' },
  { title: 'Boys Will Be Boys Teenage Bedroom', image: 'https://super.homelane.com/Bedroom%20Wardrobes/1680588813042ddda865c41f9-HLKT00000771_Resized-800x600_2-main.jpg' },
];

const   Bedroom = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Bedroom Design</HeroText>
      </HeroSection>

      <CardGrid maxWidth="lg">
        <Grid container spacing={4}>
          {kitchens.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardContainer>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </CardGrid>
    </div>
  );
};

export default Bedroom;
