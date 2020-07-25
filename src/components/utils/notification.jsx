import React from 'react';

import { FormClose, StatusGood } from 'grommet-icons';

import { Box, Button, Grommet, Layer, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const Notification = (props) => {
    const [open, setOpen] = React.useState(true);

    // const onOpen = () => setOpen(true);

    const onClose = () => { setOpen(undefined); props.setNotification(false) };

    return (
        <>
            {open && (
                <Layer
                    position="top"
                    modal={true}
                    margin={{ vertical: 'medium', horizontal: 'small' }}
                    onEsc={onClose}
                    responsive={false}
                    plain
                >
                    <Box
                        align="center"
                        direction="row"
                        gap="small"
                        justify="between"
                        round="medium"
                        elevation="medium"
                        pad={{ vertical: 'xsmall', horizontal: 'small' }}
                        background="status-ok"
                    >
                        <Box align="center" direction="row" gap="xsmall">
                            <StatusGood />
                            <Text>{props.message}</Text>
                        </Box>
                        <Button icon={<FormClose />} onClick={onClose} plain />
                    </Box>
                </Layer>
            )}
        </>
    );
};

export default Notification