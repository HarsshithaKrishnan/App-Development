import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const products = [
  {
    title: 'Eco-Friendly Sofa',
    description: 'A sustainable sofa made from recycled materials.',
    image: 'https://images.adsttc.com/media/images/64e7/a479/fbc6/5836/b89e/cd22/slideshow/elegancia-sustentavel-o-uso-do-bambu-em-projetos-de-interiores_10.jpg?1692902535',
  },
  {
    title: 'Bamboo Table',
    description: 'A stylish table made from 100% bamboo.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRhYmxlfGVufDB8fHx8MTYyNTMzNzE2OA&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    title: 'Natural Fiber Rug',
    description: 'A cozy rug made from natural fibers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxGcUHqeDaZ8rnwJ0DDcBSRMzsoovOnneyA&s',
  },
];

const HomePage = () => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">Nature-Inspired Interior Design</Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: 'url(https://images.adsttc.com/media/images/64e7/a47a/fbc6/5836/b89e/cd24/newsletter/elegancia-sustentavel-o-uso-do-bambu-em-projetos-de-interiores_5.jpg?1692902533)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',  // Ensure text is readable on background
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="80vh"
          textAlign="center"
          py={5}
        >
          <Typography variant="h2" gutterBottom color={'black'}>
            Embrace Nature in Your Home
          </Typography>
          <Typography variant="h5" paragraph color={'black'}>
            Discover our collection of nature-inspired furniture and decor. Designed to bring the beauty and tranquility of nature into your home.
          </Typography>
          <Button variant="contained" color="secondary" size="large" endIcon={<ArrowForward />} component={RouterLink} to="/home1">
            Learn More
          </Button>
        </Box>
        <Box mt={5}>
          <Typography variant="h4" gutterBottom align="center" color={'black'}>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="140"
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Box component="footer" py={3} textAlign="center" mt={4} bgcolor="primary.main" color="primary.contrastText">
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Nature-Inspired Interior Design. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
