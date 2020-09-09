import React from 'react';
import { Header, Clock, Box, ResponsiveContext, Menu, Anchor, Button } from 'grommet';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';

const NavBar = ({user, toggleDarkMode}) => {
    return ( 
        <>
        <Header pad="small" background="background-1">
            {user ?
            <>
            <Box justify="start">
                <Button focusIndicator="false" size="xsmall" label="Toggle Dark Mode" onClick={toggleDarkMode}></Button>
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
                            <Menu
                                a11yTitle="Navigation Menu"
                                dropProps={{ align: { top: 'bottom', right: 'right'}}}
                                icon={<MenuIcon color="brand" />}
                                items={[
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
                        <Box justify="end" direction="row" gap="medium">
                            <Anchor href="#" label="My Profile" />
                            <Anchor href="#" label="Friends" />
                            <Anchor href="#" label="Meet New Pets" />
                        </Box>
                    )
                }
            </ResponsiveContext.Consumer>
            </>
            :
            <>
            <Clock 
            type="digital"  
            hourLimit={12}
            size="small"
            />
            <Button label="Toggle Dark Mode" onClick={toggleDarkMode}></Button>
            </>
        }
        </Header>
        </>
     );
}
 
export default NavBar;