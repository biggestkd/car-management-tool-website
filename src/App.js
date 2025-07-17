import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/logo.png';

export default function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    // { label: 'About', path: '/about' },
    { label: 'Privacy Policy', path: '/privacy' }
  ];

  return (
      <Router basename={process.env.PUBLIC_URL}>
        <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6f8' }}>
          <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
              {isMobile && (
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                      sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
              )}
              <Stack direction="row" spacing={1} alignItems="center" sx={{ flexGrow: 1 }}>
                <img src={logo} alt="Garag Logo" width={45} height={45} />
                <Typography variant="h4" component={Link} to="/" sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold' }}>
                  Garag
                </Typography>
              </Stack>
              {!isMobile && navItems.map((item) => (
                  <Button
                      key={item.path}
                      sx={{ color: 'primary.main' }}
                      component={Link}
                      to={item.path}
                  >
                    {item.label}
                  </Button>
              ))}
            </Toolbar>
          </AppBar>

          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
              <List>
                {navItems.map((item) => (
                    <ListItem button key={item.path} component={Link} to={item.path}>
                      <ListItemText primary={item.label} />
                    </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

          <Box sx={{}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Box>
        </Box>
      </Router>
  );
}
