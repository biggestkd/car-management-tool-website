import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
    Divider
} from '@mui/material';

export default function PrivacyPolicy() {
    return (
        <Box sx={{ bgcolor: '#ffffff', py: 6 }}>
            <Container maxWidth="md">
                <Stack spacing={4}>
                    <Typography variant="h4" fontWeight="bold" color="black">
                        Privacy Policy
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        Effective Date: January 1, 2023
                    </Typography>

                    <Section title="1. Introduction">
                        Welcome to Garag. We are committed to protecting your privacy and
                        ensuring the security of your personal information. This Privacy
                        Policy outlines how we collect, use, disclose, and safeguard your
                        information when you use our website and services.
                    </Section>

                    <Section title="2. Information We Collect">
                        <ul>
                            <li><strong>Name:</strong> Collected to personalize your experience.</li>
                            <li><strong>Email:</strong> Used for communication, updates, and support.</li>
                            <li><strong>Vehicle & Service Data:</strong> Information you input related to your vehicles.</li>
                        </ul>
                    </Section>

                    <Section title="3. How We Use Your Information">
                        <ul>
                            <li>To provide and manage services.</li>
                            <li>To analyze and improve functionality and user experience.</li>
                        </ul>
                    </Section>

                    <Section title="4. Data Sharing">
                        We do not sell your data. Limited sharing may occur for:
                        <ul>
                            <li>Payment processing (e.g. Apple or Google if used).</li>
                            <li>Legal obligations, if required by law.</li>
                        </ul>
                    </Section>

                    <Section title="5. Security & Storage">
                        Your data is securely stored using industry-standard encryption and access controls.
                    </Section>

                    <Section title="6. Your Rights">
                        You can:
                        <ul>
                            <li>Access your data</li>
                            <li>Modify your personal information</li>
                            <li>Request deletion</li>
                        </ul>
                        Contact us at: <Typography component="span" color="primary">privacy@garag.app</Typography>
                    </Section>

                    <Section title="7. Children's Privacy">
                        Garag does not knowingly collect data from children under 13.
                    </Section>

                    <Section title="8. Compliance">
                        We comply with GDPR, CCPA, and other applicable data privacy laws.
                    </Section>

                    <Section title="9. Data Retention">
                        We retain your data only as long as necessary to provide services or meet legal requirements.
                    </Section>

                    <Section title="10. Updates to This Policy">
                        We may update this Privacy Policy. Significant changes will be notified via email or app.
                    </Section>

                    <Section title="11. Contact Us">
                        For questions or concerns: <Typography component="span" color="primary">privacy@garag.app</Typography>
                    </Section>

                </Stack>
            </Container>
        </Box>
    );
}

function Section({ title, children }) {
    return (
        <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {children}
            </Typography>
            <Divider sx={{ my: 3 }} />
        </Box>
    );
}
