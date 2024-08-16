import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const ReferAndEarn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleGenerateLink = () => {
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }
    // Implement link generation logic here
    setError('');
    alert('Link generated successfully!');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Refer and Earn
      </Typography>
      <Typography variant="body1" paragraph>
        Refer and earn ₹10,000 every time your friends try our services.
      </Typography>
      <Box component="form" noValidate autoComplete="off" mb={4}>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button variant="contained" color="primary" onClick={handleGenerateLink}>
          Generate Link
        </Button>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={10} md={5}>
            <Card>
              <CardMedia
                component="img"
                alt="Flat 10 Year Warranty"
                height="200"
                image="https://img.freepik.com/premium-vector/10-year-warranty-stamp-badge-isolated-white-background-warranty-label_545399-2351.jpg" // Replace with an actual image URL
              />
              <CardContent>
                <Typography variant="h6">Flat 10 Year Warranty</Typography>
                <Typography variant="body2">
                  Choose interiors designed with superior quality material, leaving no room for defects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={5}>
            <Card>
              <CardMedia
                component="img"
                alt="45-Day Delivery"
                height="200"
                
                image="https://wudzo.com/wp-content/uploads/2021/05/45day-installation.png"
                
              />
              <CardContent>
                <Typography variant="h6">45-Day Delivery</Typography>
                <Typography variant="body2">
                  Get beautiful interiors for your new home in just 45 days. That’s our delivery guarantee.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={5}>
            <Card>
              <CardMedia
                component="img"
                alt="600+ Design Experts"
                height="200"
              
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyo-PdM2cg2Zlmuuam_iFhUKmWK9pFkFKBA&s" // Replace with an actual image URL
              />
              <CardContent>
                <Typography variant="h6">600+ Design Experts</Typography>
                <Typography variant="body2">
                  Explore design ideas and co-create your dream home with our experienced designers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={10} md={5}>
            <Card>
              <CardMedia
                component="img"
                alt="Post-Installation Service"
                height="200"
                image="https://img.freepik.com/premium-vector/best-service-badge_7505-91.jpg" // Replace with an actual image URL
              />
              <CardContent>
                <Typography variant="h6">Post-Installation Service</Typography>
                <Typography variant="body2">
                  Complete your design journey and get unwavering support from our dedicated care team.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body2" paragraph>
          A successful referral is defined as a referred customer who does a meeting or places an order with HomeLane and pays 5% of the total order value.
        </Typography>
        <Typography variant="body2" paragraph>
          You will be eligible for a ₹10,000 referral bonus per successful referral. ₹2,500 for a successful meeting and ₹7,500 for a successful order.
        </Typography>
        <Typography variant="body2" paragraph>
          Your payment of ₹2,500 will be processed after a successful meeting. ₹7,500 payment will be processed after any referred person makes a payment of 5% of the total order value.
        </Typography>
        <Typography variant="body2" paragraph>
          Your payment will be processed directly to the account linked with your profile.
        </Typography>
        <Typography variant="body2" paragraph>
          The minimum value of the referred order should be ₹4 Lacs woodwork.
        </Typography>
        <Typography variant="body2" paragraph>
          Customers already existing in the HomeLane system will not be considered for the referral scheme.
        </Typography>
        <Typography variant="body2" paragraph>
          Referral bonus cannot be combined or adjusted against any existing payment.
        </Typography>
        <Typography variant="body2" paragraph>
          HomeLane reserves the right to end any or all the offers at its sole discretion without any prior notice.
        </Typography>
        <Typography variant="body2" paragraph>
          HomeLane reserves the right to deny any suspected illegitimate case.
        </Typography>
      </Box>
    </Container>
  );
};

export default ReferAndEarn;
