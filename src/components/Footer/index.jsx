import React from 'react';

import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter,
} from 'grommet-icons';

import { Anchor, Box, Footer, grommet, Grommet, Main, Text } from 'grommet';

const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
        <Anchor
            a11yTitle="Share feedback on Github"
            href="https://www.instagram.com/"
            icon={<Instagram color="white" />}
        />
        <Anchor
            a11yTitle="Chat with us on Slack"
            href="https://www.facebook.com/"
            icon={<FacebookOption color="white" />}
        />
        <Anchor
            a11yTitle="Follow us on Twitter"
            href="https://twitter.com/"
            icon={<Twitter color="white" />}
        />
    </Box>
);

const Social = () => (
    <Grommet theme={grommet}>
        <Footer background="brand" pad="small">
            <Box direction="row" gap="small">
                <Anchor textAlign="center" href="https://docs.google.com/presentation/d/1hcvVueuLn2wVje5yD4WDm5b7TBJSpLE5D8bz9ckqLrY/edit?usp=sharing" size="xsmall">
                    About Us
                </Anchor>
                <Text textAlign="center" size="xsmall">
                    ©Copyright
                </Text>
            </Box>
            <Media />
            <Box align="center" direction="row" gap="xsmall">
                <Text alignSelf="center" color="white" size="xx-large" style={{ fontFamily: "Kalam" }}>
                    <><span>We</span><span>-श्वास</span></>
                </Text>
            </Box>
        </Footer>
    </Grommet>
);

export default Social