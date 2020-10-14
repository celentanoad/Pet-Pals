import React from 'react';
import { Header, Nav, Clock, Box, ResponsiveContext, Menu, Anchor, Button, Text } from 'grommet';
import { Menu as MenuIcon, Home } from 'grommet-icons';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({user, toggleDarkMode, darkMode}) => {
    return ( 
        <>
        <Header pad="small" background="background-contrast" border="true">
            {user ?
            <>
            <Box justify="start">
                <Clock 
                    type="digital"  
                    hourLimit={12}
                    size="small"
                />
            <p>Hello {user.name}!</p>
            
            </Box>
            <ResponsiveContext.Consumer>
                {size =>
                    size === 'small' ? (
                        <Box justify="end">
                            <Button focusIndicator="false" onClick={toggleDarkMode}>{darkMode==="dark" ? <Brightness3Icon /> : <WbSunnyIcon />}</Button>
                            <Menu
                                a11yTitle="Navigation Menu"
                                dropProps={{ align: { top: 'bottom', right: 'right'}}}
                                icon={<MenuIcon color="brand" />}
                                items={[
                                    {
                                        label: <Link to="/" style={{ textDecoration: 'none' }}><Box pad='small'><Text color="text">Dashboard</Text></Box></Link>
                                    },
                                    {
                                        label: <Link to="/myprofile" style={{ textDecoration: 'none' }}><Box pad='small'><Text color="text">My Profile</Text></Box></Link>
                                    },
                                    {
                                        label: <Link to="/friends" style={{ textDecoration: 'none' }}><Box pad='small'><Text color="text">Friends</Text></Box></Link>
                                    },
                                    {
                                        label: <Link to="/profiles" style={{ textDecoration: 'none' }}><Box pad='small'><Text color="text">Meet New Pets</Text></Box></Link>
                                    },
                                ]}
                            />
                        </Box>
                    ) : (
                        <>
                        <Box justify="end" direction="column">  
                        <Button alignSelf="end" margin="medium" size="xsmall" onClick={toggleDarkMode}>{darkMode==="dark" ? <Brightness3Icon /> : <WbSunnyIcon />}</Button>
                            <Box justify="end" direction="row" gap="medium">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Anchor label="Dashboard" />
                                </Link>
                                <Link to="/myprofile" style={{ textDecoration: 'none' }}>
                                    <Anchor label="My Profile" />
                                </Link>
                                <Link to="/friends" style={{ textDecoration: 'none' }}>
                                    <Anchor label="Friends" />
                                </Link>
                                <Link to="/profiles" style={{ textDecoration: 'none' }}>
                                    <Anchor label="Meet New Pets" />
                                </Link>
                            </Box>
                        </Box>
                        </>
                    )
                }
            </ResponsiveContext.Consumer>
            </>
            :
            <>
            <Box>
                <Box direction="row" responsive="true">
                    <Button alignSelf="end" margin="xsmall" focusIndicator="false" size="xsmall" onClick={toggleDarkMode}>{darkMode==="dark" ? <Brightness3Icon /> : <WbSunnyIcon />}</Button>
                    <Clock 
                        type="digital"  
                        hourLimit={12}
                        size="small"
                    />
                </Box>
                <Nav direction="row" responsive="true">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button className="home" margin="xsmall"><Home/></Button>
                    </Link>
                    <Link to="/profiles" style={{ textDecoration: 'none' }}>
                        <Button alignSelf="end" margin="xsmall" size="xsmall" label="View Profiles"></Button>
                    </Link>
                </Nav>
            </Box>
            </>
        }
        </Header>
        </>
     );
}
 
export default NavBar;