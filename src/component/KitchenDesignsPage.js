import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { styled } from '@mui/system';

const HeroSection = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: 'url(https://www.hubspot.com/hs-fs/hubfs/interior-design-website-tyler-karu.jpg?width=975&height=516&name=interior-design-website-tyler-karu.jpg)',
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
  { title: 'Dremlin U Shaped Horizon Oak Modular Kitchen', image: 'https://super.homelane.com/HLKT0000013_main-image.jpg' },
  { title: 'Lupin Straight Arizona Walnut Modular Kitchen', image: 'https://super.homelane.com/HLKT0000014_main-image.jpg' },
  { title: 'Ticino Straight Modular Kitchen', image: 'https://super.homelane.com/HLKT000006_main-image.jpg' },
  { title: 'Kelly L Shaped Canterbury with Oak Hardrock Maple', image: 'https://super.homelane.com/HLKT000007_main-image.jpg' },
  { title: 'Rivoli L Shaped Orange and Mysore Ivory Modular Kitchen', image: 'https://super.homelane.com/HLKT000009_main-image.jpg' },
  { title: 'Abilio L Shaped White and Silver Auburn Oak Modular Kichen', image: 'https://super.homelane.com/MZUFT26144_main-1486619859_1_title.jpg' },
  { title: 'Munnar L Shaped Baltimore Walnut Modular Kitchen', image: 'https://super.homelane.com/MQALCAI307_main-1426065656_paradiso-straight-modular-kitchen.jpg' },
  { title: 'Ixia L Shaped Horizon Oak Modular Kitchen', image: 'https://super.homelane.com/MXQZKX6096_main-1444131913_ticino-straight-modular-kitchen.jpg' },
  { title: 'Rivoli L Shaped Orange and Mysore Ivory Modular Kitchen', image: 'https://super.homelane.com/HLKT000009_main-image.jpg' },
  { title: 'Abilio L Shaped White and Silver Auburn Oak Modular Kichen', image: 'https://super.homelane.com/MZUFT26144_main-1486619859_1_title.jpg' },
  { title: 'Munnar L Shaped Baltimore Walnut Modular Kitchen', image: 'https://super.homelane.com/MQALCAI307_main-1426065656_paradiso-straight-modular-kitchen.jpg' },
  { title: 'Ixia L Shaped Horizon Oak Modular Kitchen', image: 'https://super.homelane.com/MXQZKX6096_main-1444131913_ticino-straight-modular-kitchen.jpg' },
];

const KitchenDesignsPage = () => {
  return (
    <div>
      <HeroSection>
        <HeroOverlay />
        <HeroText variant="h2">Modular Kichen Design</HeroText>
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

export default KitchenDesignsPage;
