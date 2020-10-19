import React, { useState } from 'react';
import { Image, Text, Card, CardHeader, CardBody, CardFooter, Button, Box} from 'grommet';
import { Favorite } from 'grommet-icons';
import * as profileAPI from '../services/profile-api';


const ProfileCard = ({profile, user}) => {

    const [friend, setFriend] = useState(false)

    const addFriend = async (id) => {
        await profileAPI.addFriend(id);
        setFriend(true)
    }

    return ( 
        <Box pad="small">
        <Card height="small" width="medium" background="background-front" >
            <CardHeader pad="small" align="center" direction="row">
                <Text size="large" weight="bold">{profile.user.name}</Text>
                <Text size="xsmall"> {profile.animal} </Text>
            </CardHeader>
            <CardBody pad="small" align="center">
                <Box height="small" width="small">
                    <Image src={profile.avatar} fit="contain" />
                </Box>
            </CardBody>
            <CardFooter background="background-contrast" pad="small">
                {user ?
                    !friend ?
                    <Button onClick={() => addFriend(profile.user._id)} hoverIndicator> <Favorite color="red" />Request Friendship</Button>
                    :
                    <Box><Favorite color="red" primary /> Friend Added!</Box>
                :
                <></>
                }
            </CardFooter>
        </Card>
        </Box>
     );
}
 
export default ProfileCard;