import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


const drawerWidth = 240;
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: '#2196f3 !important'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 0,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        // marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing.unit * 3,
        width: 'auto',
        },
    },
    menuButtonSubmit: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        right: 50,
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 1,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 20,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            mobileMoreAnchorEl: null,
            term: '',
            open: false
        }
    }

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleChange =  event => {
        console.log(event.target.value);
        this.setState({
            term: event.target.value
        })
    }
    handleSubmit = (event) => {
        this.props.onSearchTermChange(this.state.term)
        event.preventDefault();
    }
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { anchorEl, mobileMoreAnchorEl, term, open } = this.state;
        // console.log(term);
        const { classes, theme } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                            </Badge>
                    </IconButton>
                    <p>Messages</p>
                    </MenuItem>
                    <MenuItem onClick={this.handleMobileMenuClose}>
                        <IconButton color="inherit">
                            <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <p>Notifications</p>
                    </MenuItem>
                    <MenuItem onClick={this.handleProfileMenuOpen}>
                        <IconButton color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
                <div className={classes.root}>
                    <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="on">
                    <AppBar
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                            <Toolbar>
                                <IconButton 
                                    type="submit" 
                                    onClick={this.handleDrawerOpen}
                                    className={classNames(classes.menuButton, open && classes.hide)}
                                    color="inherit" 
                                    aria-label="Open drawer"

                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                    Youtube
                                </Typography>
                                <div className={classes.search} onSubmit={this.handleSubmit}>
                                    <InputBase
                                        // className={classes.search}
                                        placeholder="Search…"
                                        onChange={this.handleChange}
                                        classes={
                                            {
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }
                                        }
                                    />
                                </div>
                                <IconButton type="submit" className={classes.menuButton} color="inherit" aria-label="Open drawer">
                                    <SearchIcon />
                                </IconButton>
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={4} color="secondary">
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={17} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                <div className={classes.sectionMobile}>
                                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                        <MoreIcon />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={open}
                            classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                        <div className={classes.drawerHeader}>
                            <Grid container justify="center" alignItems="center">
                                <Avatar src="/image/avatar/chin123.JPG" className={classes.avatar} /> 
                            </Grid>
                            <Grid container justify="center" alignItems="center">
                                CHINH QN
                            </Grid>
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            ))}
                        </List>
                        </Drawer>
                        {renderMenu}
                        {renderMobileMenu}
                    </form>
                </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Header);