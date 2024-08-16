import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://www.magickhome.com/india/assets/img/wardrobe/walk-in-closet.webp)',
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
  { title: 'Stately in Greige Walk-in Wardrobe', image: 'https://super.homelane.com/wardrobes/1680592144790b7c006ce218e-HLKT00000784_Resized-800x600_17-main.jpg' },
  { title: 'Master Bedroom Wardrobe', image: 'https://super.homelane.com/wardrobes/1612864445435bb8e35da40df-HLKT00000730_112-main.jpg' },
  { title: 'Demure Wood Grain Sliding Door Wardrobe', image: 'https://super.homelane.com/wardrobes/16127823917273d56af0f3f9d-HLKT00000700_80-main.jpg' },
  { title: 'Tiffany Blue Lacquered Glass Floor-to-Ceiling Wardrobe', image: 'https://super.homelane.com/wardrobes/1612775454883e0f49ad756f5-HLKT00000690_70-main.jpg' },
  { title: 'Classic Blue Wooden Grain Wardrobe', image: 'https://super.homelane.com/wardrobes/1612776485069cd7a0aebcf6d-HLKT00000692_72-main.jpg' },
  { title: 'Beige and Aqua Blue Straight Wardrobe', image: 'https://super.homelane.com/wardrobes/16127508431544821f7e20347-HLKT00000678_59%20(2)-main.jpg' },
  { title: 'Creamy Latte Hinged Door Wardrobe', image: 'https://super.homelane.com/wardrobes/1612849429529e99346b272d2-HLKT00000711_92-main.jpg' },
  { title: 'Mango and Cream Floor-to-Ceiling Wardrobe', image: 'https://super.homelane.com/wardrobes/1612528948893379c7cc9f2bb-HLKT00000679_58%20(1)-main.jpg' },
];

const Wardrobe= () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Wardrobe Interior Design</HeroText>
      </HeroSection>

      <CardGrid maxWidth="lg">
        <Grid container spacing={4}>
          {kitchens.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              
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
              
            </Grid>
          ))}
        </Grid>
      </CardGrid>
    </div>
  );
};

export default Wardrobe;
