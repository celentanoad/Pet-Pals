import React, { useState, useEffect, useContext } from 'react';
import ProfileCard from '../ProfileCard';
import { Box, Text, ResponsiveContext, Grid } from 'grommet'
import * as profileAPI from '../../services/profile-api';

const ProfileListPage = ({user, profiles}) => {
    const size = useContext(ResponsiveContext);
    return ( 
        <div align="center">
            <Box background="brand">
                <Text margin="medium"> Check out the other Pets that are using this site! </Text>
            </Box>
            <Box align="center">
                <Grid
                    columns={size !== 'small' ? ["30%", "30%", "30%"] : '100%' } 
                    gap="small"
                >
    {/* If user is logged in, 
        only show profiles that are not in friends list
    */}
                    {profiles.map(profile => {
                        return <ProfileCard profile={profile} user={user} />
                    })}
                </Grid>
            </Box>
            <p>Card components w/ Name, Avatar, and Type of Animal</p>
            <p>If user is logged in, then show a "request friendship" button</p>
        </div>
     );
}
 
export default ProfileListPage;