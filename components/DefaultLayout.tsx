import {Button, Icon, makeStyles} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, {useContext} from "react";
import {AccountCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        display: 'flex'
    },
    input: {},
    appBar: {
        // Top menu styles
        backgroundColor: "transparent",
        boxShadow: "none",
        color: theme.palette.primary.dark,

        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: theme.mixins.toolbar,
    content: {
        // Page content styles
        padding: theme.spacing(3),
        width: "100%"
    },
    sectionDesktop: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function DefaultLayout(props) {
    const classes = useStyles({});
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    function handleProfileMenuOpen(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem component={Link} href={"/projects"}>
                Projects
            </MenuItem>

            <MenuItem component={Link} href={"/profile"}>
                My account
            </MenuItem>

            <Divider/>

            <MenuItem onClick={handleMenuClose}>
                Logout
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <HideOnScroll {...props}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Link href="/">
                            <img src="/static/logo/h-logo.svg" height="40px"/>
                        </Link>
                        <div className={classes.grow}/>
                        <div className={classes.sectionDesktop}>
                            <MenuItem onClick={handleProfileMenuOpen}
                                      title={"Account: CURRENT_USER"}>
                                <AccountCircle/> &nbsp; Username
                            </MenuItem>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMenu}
            <main className={classes.content}>
                <div className={classes.toolbar}/>

                {props.children}
            </main>
        </div>
    )
}
