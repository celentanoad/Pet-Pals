import React from 'react';
import { Header, Nav, Clock, Box, ResponsiveContext, Menu, Anchor, Button } from 'grommet';
import { Menu as MenuIcon, Home } from 'grommet-icons';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import './NavBar.css';

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
            <p>Hello {user}!</p>
            
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
                                        label: <Box pad='small'>Dashboard</Box>,
                                        href: "#"
                                    },
                                    {
                                        label: <Box pad='small'>My Profile</Box>,
                                        href: "#"
                                    },
                                    {
                                        label: <Box pad='small'>Friends</Box>,
                                        href: "#"
                                    },
                                    {
                                        label: <Box pad='small'>Meet New Pets</Box>,
                                        href: "#"
                                    },
                                ]}
                            />
                        </Box>
                    ) : (
                        <>
                        <Box justify="end" direction="column">  
                        <Button alignSelf="end" margin="medium" size="xsmall" onClick={toggleDarkMode}>{darkMode==="dark" ? <Brightness3Icon /> : <WbSunnyIcon />}</Button>
                            <Box justify="end" direction="row" gap="medium">
                                <Anchor href="#" label="Dashboard" />
                                <Anchor href="#" label="My Profile" />
                                <Anchor href="#" label="Friends" />
                                <Anchor href="#" label="Meet New Pets" />
                            </Box>
                        </Box>
                        </>
                    )
                }
            </ResponsiveContext.Consumer>
            </>
            :
            <>
            <Box direction="column">
                <Box direction="row" responsive="true">
                    <Button alignSelf="end" margin="xsmall" focusIndicator="false" size="xsmall" onClick={toggleDarkMode}>{darkMode==="dark" ? <Brightness3Icon /> : <WbSunnyIcon />}</Button>
                    <Clock 
                        type="digital"  
                        hourLimit={12}
                        size="small"
                    />
                </Box>
                <Nav direction="row">
                    <Button href="#" margin="xsmall" label="Home"></Button>
                    <Button alignSelf="end" margin="xsmall" size="xsmall" href="#" label="View Profiles"></Button>
                </Nav>
            </Box>
            </>
        }
        </Header>
        </>
     );
}
 
export default NavBar;