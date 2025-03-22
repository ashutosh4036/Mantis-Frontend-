// Material-UI
import { Typography, Link, Box } from '@mui/material';
import MainCard from 'components/MainCard';

const AboutPage = () => {
  return (
    <MainCard title="About Mantis">
      <Box sx={{ textAlign: 'center', my: 2 }}>
        <Typography variant="h5" gutterBottom>
          📸 Welcome to <strong>Mantis</strong> 📸
        </Typography>
        <Typography variant="body1" paragraph>
          A platform where you can create, view, and download your own photo albums effortlessly.
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="h6">🚀 Getting Started</Typography>
        <Typography variant="body2" paragraph>
          1️⃣ Register a new user via our{' '}
          <Link href="https://your-swagger-api.com" target="_blank" rel="noopener noreferrer">
            Swagger API
          </Link>
          .<br />
          2️⃣ Generate an authentication token.
          <br />
          3️⃣ Authorize the token and log in to manage your albums.
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="h6">🌟 Features</Typography>
        <Typography variant="body2" paragraph>
          ✅ Simple and intuitive photo album creation.
          <br />
          ✅ Secure authentication with Swagger API.
          <br />✅ High-quality photo downloads and secure storage.
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="h6">📂 Project Repository</Typography>
        <Typography variant="body2">
          Explore the source code on{' '}
          <Link href="https://github.com/ashutosh4036" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          .
        </Typography>
      </Box>

      <Box sx={{ my: 2 }}>
        <Typography variant="h6">👨‍💻 About the Developer</Typography>
        <Typography variant="body2">
          Mantis is developed by <strong>Ashutosh Tripathi</strong>. Check out his portfolio at{' '}
          <Link href="https://ashutosh-portfolio14.netlify.app/" target="_blank" rel="noopener noreferrer">
            ashutosh-portfolio14.netlify.app
          </Link>
          .
        </Typography>
      </Box>
    </MainCard>
  );
};

export default AboutPage;
