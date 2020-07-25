import React from 'react';

import {
    Anchor,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Collapsible,
    Heading,
    Grommet,
    Image,
    Paragraph,
} from 'grommet';

import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';
import Cards from './cards';

const theme = {
    global: {
        font: {
            family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
        },
    },
    card: {
        elevation: 'none',
        background: 'light-2',
        footer: {
            pad: 'medium',
        },
    },
};

const Landing = () => {
    return (
        <Box fill style={{ width: "100%", textAlign: "left", color: "white" }} margin="medium">
            <Heading level="1">Current Patients</Heading>
            <Cards />
        </Box>
    )
};

export default Landing
