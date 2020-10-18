import React from 'react';
import { Image, Text, Card, CardHeader, CardBody, CardFooter, Button, Box} from 'grommet';
import { Favorite } from 'grommet-icons';
import * as profileAPI from '../services/profile-api';


const ProfileCard = ({profile, user}) => {

    const addFriend = async (id) => {
        console.log(profile.user)
        let friend = await profileAPI.addFriend(id);
        console.log(friend)
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
                <Button onClick={() => addFriend(profile.user._id)} hoverIndicator> <Favorite color="red" />Request Friendship</Button>
                :
                <></>
                }
            </CardFooter>
        </Card>
        </Box>
     );
}
 
export default ProfileCard;