import React from 'react';

import {
    Anchor,
    Box,
    Button,
    Collapsible,
    Heading,
    Grommet,
    Image,
    Paragraph,
    Text,
} from 'grommet';

import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';

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

const Cards = () => (
    <Box direction="row" flex="true">
        {[{
            name: "Mat Henry",
            email: "mat@gmail.com",
            sex: "Male",
            smokingHistory: "0",
            auscultations: 20
        }, {
            name: "John Doe",
            email: "jdoe@gmail.com",
            sex: "Male",
            auscultations: 3,
            smokingHistory: "10"
        }, {
            name: "Jane Doe",
            email: "janedoe@gmail.com",
            sex: "Female",
            auscultations: 5,
            smokingHistory: "2"
        }].map(prop => {
            return <CardExample vals={prop} />
        })}
    </Box>
)

const CardExample = (props) => {
    const [open, setOpen] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    const { vals } = props

    const ExpandButton = ({ ...rest }) => {
        const Icon = open ? FormUp : FormDown;
        return (
            <Button
                hoverIndicator="dark-2"
                icon={<Icon color="brand" />}
                {...rest}
            />
        );
    };
    return (
        <Grommet theme={theme}>
            <Box pad="medium" align="start">
                <Box elevation="large" width="medium">
                    <Box pad={{ horizontal: 'medium' }} responsive={false}>
                        <Heading level="3" margin={{ vertical: 'medium' }}>
                            {vals.name}
                        </Heading>
                        <Paragraph margin={{ top: 'none' }}>
                            <em>Latest Result</em>: COVID Positive with 60% confidence<br /><br />
                            <em>Recorded Auscultations</em>: {vals.auscultations}<br />
                        </Paragraph>
                    </Box>
                    <Box>
                        <Box direction="row" align="center" gap="small">
                            <Button
                                icon={<Favorite color={favorite ? 'red' : undefined} />}
                                hoverIndicator
                                onClick={() => {
                                    setFavorite(!favorite);
                                }}
                            />
                            <Button icon={<ShareOption color="plain" />} hoverIndicator />
                            <Paragraph>Learn More</Paragraph>
                            <ExpandButton onClick={() => setOpen(!open)} />
                        </Box>
                    </Box>
                    <Collapsible open={open}>
                        <Box>
                            <Text margin="medium" color="dark-3">
                                Email: {vals.email}<br />
                                Sex: {vals.sex}<br />
                                Smoking History: {vals.smokingHistory} pack-years<br />
                                <Anchor label="Get Medical History" href="#" />
                            </Text>
                        </Box>
                    </Collapsible>
                </Box>
            </Box>
        </Grommet>
    );
};

export default Cards