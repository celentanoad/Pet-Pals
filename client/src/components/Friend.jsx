import React, { useState, useEffect } from 'react';
import { Image, Text, Card, CardHeader, CardBody, CardFooter, Button, Box} from 'grommet';
import * as profileAPI from '../services/profile-api';

const ProfileCard = ({friendId}) => {

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const result = await profileAPI.getProfile(friendId);
            console.log(result)
            return result;
        }
        fetchData()
          .then(
            (result) => {
                if (result) setProfile(result);
            },
            (error) => {
              console.error(error)
            }
          )
      }, []);

    return ( 
        
        <Box pad="small">
            {profile ?
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
        </Card>
        :
        <></>
        }
        </Box>
        
     );
}
 
export default ProfileCard;