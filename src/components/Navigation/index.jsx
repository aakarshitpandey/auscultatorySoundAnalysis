import React from 'react'
import { AppBar } from '../utils/utils';
import { Box, Button } from 'grommet';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <AppBar pad={{ left: 'medium', right: 'small', vertical: 'medium' }}>
                <Box className="logo-nav" direction="row" background="brand" style={{ cursor: "hand" }}>
                    <><span onClick={() => { this.props.history.push('/') }}>We</span><span onClick={() => { this.props.history.push('/') }}>-श्वास</span></>
                </Box>
                <Button default label="Register a Patient" onClick={() => { this.props.history.push('/registration') }} />
            </AppBar>
        )
    }
}

export default withRouter(NavBar)
