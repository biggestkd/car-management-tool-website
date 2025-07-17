import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent
} from '@mui/material';
import bgImage from '../assets/man-in-front-of-car.png';

export default function Home() {

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    width: '100%',
                    height: '750px',
                    m: 0,
                    p: 0,
                    py: { xs: 10, md: 16 },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // black overlay with 50% opacity
                        zIndex: 1,
                    },
                }}
            >
                <Box sx={{ position: 'relative', zIndex: 2, maxWidth: '100%' }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Garag
                    </Typography>
                    <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto' }}>
                        Manage your car’s maintenance, services, and history with ease — all in one modern, mobile-first app.
                    </Typography>
                </Box>
            </Box>

            {/* Feature Cards Section */}
            <Box sx={{ backgroundColor: '#f4f6f8', width: '100%', m: 0, p: 0, px: 2, py: 8 }}>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        {
                            title: 'Vehicle Management',
                            subtitle: 'Track Everything',
                            description:
                                'Log services, set reminders, and view your vehicle’s history in one clean interface.',
                        },
                        {
                            title: 'Secure & Private',
                            subtitle: 'Data You Own',
                            description:
                                'Your data stays encrypted and private. We never sell your information.',
                        },
                        {
                            title: 'Easy to Use',
                            subtitle: 'Built for You',
                            description:
                                'Designed with simplicity in mind. No clutter. Just what you need, when you need it.',
                        },
                    ].map((feature, i) => (
                        <Grid item xs={12} md={4} key={i} sx={{ display: 'flex' }}>
                            <Card
                                elevation={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        {feature.subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

