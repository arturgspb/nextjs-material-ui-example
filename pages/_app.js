import App, {Container} from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import cfg from '../env_config';
import TagManager from 'react-gtm-module'
import * as Sentry from '@sentry/browser';
import Moment from 'react-moment';
import {SnackbarProvider} from 'notistack';
import theme from "../theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import LinearProgress from "@material-ui/core/LinearProgress";

// import 'moment/locale/en';
Moment.globalLocale = 'en';

class MyApp extends App {

    state = {
        changeRoute: false
    };

    constructor(props) {
        super(props);


        const startRouteChange = () => {
            this.setState({"changeRoute": true});
        };

        const stopRouteChange = () => {
            this.setState({"changeRoute": false});
        };

        Router.events.on('routeChangeStart', url => startRouteChange);
        Router.events.on('routeChangeComplete', () => stopRouteChange);
        Router.events.on('routeChangeError', () => stopRouteChange);
    }

    componentDidMount() {
        if (cfg.gtmId) {
            const tagManagerArgs = {
                gtmId: cfg.gtmId
            };
            TagManager.initialize(tagManagerArgs);
            console.log('tagManagerArgs', tagManagerArgs);
        } else {
            console.log('No GTM');
        }

        if (cfg.sentryDsn) {
            Sentry.init({dsn: cfg.sentryDsn});
        } else {
            console.log('No sentry');
        }

        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <SnackbarProvider maxSnack={3}>
                        <Head>
                            <title>Example NextJS App</title>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                        </Head>
                        <CssBaseline/>

                        {this.state.changeRoute ? <LinearProgress color="primary"/> : ''}
                        <Component {...pageProps} />

                    </SnackbarProvider>
                </Container>
            </ThemeProvider>
        )
    }
}

export default MyApp
