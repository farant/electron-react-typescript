import * as React from 'react';

import CounterContainer from '../containers/CounterContainer';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Helmet } from 'react-helmet';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const Card = styled(Paper)`
    margin: 1em;
    padding: 1em;
`;

const Application = () => (
    <>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
            />
        </Helmet>
        <CssBaseline />
        <div>
            <Card>
                <Typography variant="display3" gutterBottom>
                    Hello World from Electron!
                </Typography>
                <CounterContainer />
            </Card>
        </div>
    </>
);

export default Application;
