import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, TextField, CardMedia, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder'; 
import { MedicationLiquidRounded } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const HeroContent = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(https://images.adsttc.com/media/images/64e7/a47a/fbc6/5836/b89e/cd23/slideshow/elegancia-sustentavel-o-uso-do-bambu-em-projetos-de-interiores_3.jpg?1692902541)',
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

const Card = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const CardContent = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ContactSection = styled('div')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(6, 0),
}));
const IconSection = styled('div')(({ theme }) => ({
    padding: theme.spacing(6, 0),
    backgroundColor: '#f5f5f5',
  }));
  const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: '#006064',
    color: '#fff',
    padding: theme.spacing(6),
    textAlign: 'center',
    position: 'relative',
  }));
  
  const SocialMediaIcons = styled('div')(({ theme }) => ({
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: 'flex',
    gap: theme.spacing(2),
  }));
  const ReviewSection = styled('div')(({ theme }) => ({
    backgroundColor: '#e0f2f1',
    padding: theme.spacing(6, 0),
  }));
  
  const ReviewCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    height: '100%',
  }));
  
  const StarRating = ({ rating }) => {
    return (
      <Box display="flex" justifyContent="center" mb={1}>
        {[...Array(5)].map((_, index) => (
          index < rating ? <Star key={index} color="primary" /> : <StarBorder key={index} />
        ))}
      </Box>
    );
  }; 
  const element = document.createElement('div');
  element.innerHTML = <p>This is HTML in a JavaScript script.</p>;
  document.body.appendChild(element);
const HomePage = () => {
  return (
    <Root>
      <AppBar position="static" sx={{ background: "#006064" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "20px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white" }}>
            
          </Typography>
          <Link to="/refer"><Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "0px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Refer and Earn
          </Typography></Link>
         <Link to="/kitchen" > <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Cities
          </Typography></Link>
        <Link to="/custom"> <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "850px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Customer support
          </Typography></Link>
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Visit us
          </Typography>
          <Button color="error" sx={{ paddingLeft:"40px",backgroundColor: '#006064', color: 'red', '&:hover': { backgroundColor: '#C70039' } }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>LOGOUT</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar position="static" sx={{ background: "#006064" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "10px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white" }}>
            Aesthetic Haven
          </Typography>
         <Link to="/design"> <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "250px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Design Gallery
          </Typography></Link>
         <Link to="/kitchen" > <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Modular Kitchen
          </Typography></Link>
          <Link to="/ward" > <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Wardrobe
          </Typography></Link>
         <Link to="/bed1"> <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Bedroom
          </Typography></Link>
          <Link to="/living"><Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            Living Room
          </Typography>
          </Link>
          <Typography variant="h6" sx={{ flexGrow: 0, paddingLeft: "50px", textAlign: 'left', fontFamily: "Helvetica Neue" ,color:"white"}}>
            SpaceSaving Furniture
          </Typography>
          <Typography>
            <IconButton sx={{color:"white",paddingLeft:"50px"}}>
              <MenuIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <HeroContent>
          <HeroOverlay />
          <Container maxWidth="l" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to Aesthetic Haven
            </Typography>
            
          </Container>
        </HeroContent>

        {/* Features Section */}
        <CardGrid maxWidth="l">
        <Typography paddingLeft={"20px"} fontWeight={"bold"}>Design Gallery</Typography><br></br>
        <Typography paddingLeft={"20px"}>If you’re on the lookout for simple home interior designs, look no further than HomeLane for end-to-end interior design services.</Typography><br></br>
          <Grid container spacing={4}>
            {[
              { title: 'Modular Kitchen', image: 'https://super.homelane.com/designGallery/kitchen-165709021533316c963ff2ea7_stage.png' },
              { title: 'Bedroom', image: 'https://super.homelane.com/designGallery/bedroom-1657090215333fee0d8ac4e74_stage.png' },
              { title: 'Living Room', image: 'https://super.homelane.com/designGallery/livingroom-1657090215333b65475fdadb0_stage.png' },
            ].map((item, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Card>
                    <Link to="/kitchen">
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt={item.title}
                  />
                  </Link>
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

        {/* Menu Section */}
        <Section>
          <Container maxWidth="l">
            <Grid container spacing={4}>
              {[
                { title: 'Bathroom', image: 'https://super.homelane.com/designGallery/bathroom-1657090215333c6ae2efbaf40_stage.png' },
                { title: 'Space Saving Furniture', image: 'https://super.homelane.com/designGallery/space_saving-1657090215333a1e77e734bdf_stage.png' },
                { title: 'Home Office', image: 'https://super.homelane.com/designGallery/livingroom2-1657090215333f5f842dfde81_stage.png' },
              ].map((item, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
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
          </Container>
        </Section>

        {/* Contact Designer Section */}
        <ContactSection>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              Contact Designer
            </Typography>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <img
                  src="https://super.homelane.com/designGallery/text-1657398520167c31075b86af0_stage.svg"
                  alt="Contact Designer"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                  Have any questions? Contact our designer for personalized advice!
                </Typography>
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Container>
        </ContactSection>

        <Section>
        <Typography paddingLeft={"20px"} fontWeight={"bold"}>Modular Kitchen Designs</Typography><br></br>
        <Typography paddingLeft={"20px"}>Stylish kitchens for the modern home interior design that’s just right for you.</Typography><br></br>
          <Container maxWidth="l">
            <Grid container spacing={4}>
              {[
                { title: 'Coastal Chi Modern Kitchen Design', image: 'https://super.homelane.com/Kitchens%20and%20Wardrobes/16806900006992caaefc62ddf-HLKT00000818_kitchen-800x600_1-main.jpg' },
                { title: 'Stately in Greige Walk-Wardrobe', image: 'https://super.homelane.com/Kitchens%20and%20Wardrobes/1680689796581259849019ce1-HLKT00000816_kitchen-800x600_11-main.jpg' },
                { title: 'The Grand Millennial Style', image: 'https://super.homelane.com/Kitchens%20and%20Wardrobes/16812820309300455836f9f1a-HLKT00000834_batch-2-800x600_22-main.jpg' },
              ].map((item, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
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
          </Container>
        </Section>

        
        <Section>
        <Typography paddingLeft={"20px"} fontWeight={"bold"}>Wardrobe Designs</Typography><br></br>
        <Typography paddingLeft={"20px"}>The simple home interior designs for ergonomic and stylish wardrobes.</Typography><br></br>
          <Container maxWidth="l">
            <Grid container spacing={4}>
              {[
                { title: 'Contempory', image: 'https://super.homelane.com/wardrobes/16812826479900de199faa8ef-HLKT00000836_batch-2-800x600_23-main.jpg' },
                { title: 'Mojave Desert Modular Island Kitchen', image: 'https://super.homelane.com/wardrobes/1680592144790b7c006ce218e-HLKT00000784_Resized-800x600_17-main.jpg' },
                { title: 'Vivid White U-Shaped Modular Kitcher', image: 'https://super.homelane.com/wardrobes/1639470045753ba785881f934-HLKT00000756_resize-800x600_10-main.jpg' },
              ].map((item, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
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
          </Container>
        </Section>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            Why Aesthetic Haven?
          </Typography>
        <IconSection>
          <Container maxWidth="md">
            <Grid container spacing={4} justifyContent="center">
            
              {[
                { title: 'Installation Days', image: 'https://super.homelane.com/RTB/installation_days.svg' },
                { title: 'Homes Completed', image: 'https://super.homelane.com/RTB/homes_completed.svg' },
                { title: 'Design Experts', image: 'https://super.homelane.com/RTB/design_experts.svg' },
                { title: 'Material Warranty', image: 'https://super.homelane.com/RTB/material_warranty.svg' },
              ].map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px' }} />
                    <Typography variant="h6" align="center" color="textPrimary">
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </IconSection>

        <Section>
        <Typography paddingLeft={"20px"} fontWeight={"bold"}>Home Design Products</Typography><br></br>
        <Typography paddingLeft={"20px"}>The best home interior design with trendy wooden units for your essientials</Typography><br></br>
          <Container maxWidth="l">
            <Grid container spacing={4}>
              {[
                { title: 'Chic Contrast Open-Plan Living Room Design', image: 'https://super.homelane.com/other%20interiors/1681378715189588de527c069-HLKT00000841_batch-3-800x600_8-main.jpg' },
                { title: 'Modern Oasis Living Room Design', image: 'https://super.homelane.com/other%20interiors/168120391788650f80c5a73bc-HLKT00000826_batch-3-800x600_24-main.jpg' },
                { title: 'Bohemian Jungle Living Room Design', image: 'https://super.homelane.com/other%20interiors/1681280027230f84caeb5e8d6-HLKT00000830_batch-2-800x600_26-main.jpg' },
              ].map((item, index) => (
                <Grid item xs={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
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
          </Container>
        </Section>
        <br>
        </br>
        <Section>
       <Typography paddingLeft={"20px"} fontWeight={"bold"}>Space Saving Furniture</Typography><br></br>
       <Typography paddingLeft={"20px"}>Spacious Home interior Furniture that are Sleek and ergonomic</Typography>
          <Container maxWidth="l">
            <Grid container spacing={4}>
              {[
                
                { title: 'Queen-Size-Wall', image: 'https://super.homelane.com/prodsnew/HLKT0000068.jpg' },
                { title: 'Wall-Mounted I Table', image: 'https://super.homelane.com/ssf-31c-o.jpg' },
                { title: 'Floor-Standing Table', image: 'https://super.homelane.com/HLKT0000070-1.jpg' },
              ].map((item, index) => (
                <Grid item xs={6} md={4} key={index}>
    
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
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
          </Container>
        </Section>
        <IconSection>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            Complete Home interior in 6 easy steps
          </Typography>
          <Container maxWidth="md">
            <Grid container spacing={30} justifyContent="center">
              {[
                { title: '', image: 'https://super.homelane.com/design/1-16581676962473b51188294a6.png' },
                { title: '', image: 'https://super.homelane.com/design/2-165816769624729f5154fbba5.png' },
                { title: '', image: 'https://super.homelane.com/design/3-1658167383566d28c8af447bb.png' },
                { title: '', image: 'https://super.homelane.com/design/4-165816738356647ad2bca071f.png' },
              ].map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box display="flex" flexDirection="column" alignItems="center" >
                    <img src={item.image} alt={item.title} style={{ width: '260px', height: '200px' }} />
                    <Typography variant="h6" align="center" color="textPrimary">
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <br></br><br></br>
            <Grid container spacing={30} justifyContent="center">
              {[
                
                { title: '', image: 'https://super.homelane.com/design/5-16581673835660971c422323e.png' },
                { title: '', image: 'https://super.homelane.com/design/6-16581673835667b378e6687e5.png' },
            
              ].map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box display="flex" flexDirection="column" alignItems="center" >
                    <img src={item.image} alt={item.title} style={{ width: '260px', height: '200px' }} />
                    <Typography variant="h6" align="center" color="textPrimary">
                      {item.title} 
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </IconSection>
        

        <ReviewSection>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
              What Our Customers Say
            </Typography>
            <Grid container spacing={4}>
              {[
                { name: 'Alice Johnson', review: 'Fantastic experience! The design perfectly matches my taste and the quality is top-notch.', rating: 5 },
                { name: 'John Smith', review: 'Great service and beautiful designs. Highly recommend for anyone looking to renovate their home.', rating: 4 },
                { name: 'Emily Davis', review: 'Professional and attentive to details. I love the final look of my new living space!', rating: 5 },
              ].map((review, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ReviewCard>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {review.name}
                    </Typography>
                    <StarRating rating={review.rating} />
                    <Typography variant="body1">
                      {review.review}
                    </Typography>
                  </ReviewCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ReviewSection>

        


        {/* Footer Section */}
        <Footer>
        <Typography variant="body1">
          © {new Date().getFullYear()} Aesthetic Haven. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Address: 123 Haven Street, Comfort City, CA 90001
        </Typography>
        <Typography variant="body2">
          Email: contact@Aesthetichaven.com | Phone: (123) 456-7890
        </Typography>
        <SocialMediaIcons>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon style={{ color: 'white', fontSize: '2rem' }} />
          </a>
        </SocialMediaIcons>
      </Footer>
      </main>
    </Root>
  );
};
export default HomePage; 