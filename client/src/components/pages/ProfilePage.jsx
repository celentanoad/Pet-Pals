import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Form, FormField, TextInput, TextArea } from 'grommet';
import * as profileAPI from '../../services/profile-api';


const ProfilePage = ({user}) => {

    const [editProfile, setEditProfile] = useState(false);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        profileAPI.getUserProfile(user._id)
          .then(
            (result) => {
                if (result) setProfile(result);
                else setProfile('not available')
              console.log(profile)
            },
            (error) => {
              console.error(error)
            }
          )
      }, [])
    // check if profile page belongs to the current user:
        // add Edit button, when clicked then set editProfile to true and overlay Edit Profile component
    return ( 
        <div>

        {editProfile ?
        
        <Box alignSelf="center" margin="small">
        <Heading level="3" textAlign="center" size="medium"> Edit Profile </Heading>
        <Form >
            <FormField
                name="avatar"
                label="Avatar"
            >
                <TextInput name="avatar" />
            </FormField>
            <p style={{"font-size": "10px"}}>Avatar image must be a web image file ending in .img, .png, or .jpg</p>
            <FormField
                label="Bio"
                name="bio"
                component={TextArea}
            />
            <FormField
                name="animal"
            >
                <TextInput name="animal" />
            </FormField>
            <FormField
                name="breed"
            >
                <TextInput name="breed" />
            </FormField>
        </Form>
        <Button>Save and View Profile</Button>
    </Box>
    :
    <Box alignSelf="center" margin="small">
        <Heading level="3" textAlign="center" size="medium"> Profile </Heading>
        <Form >
            <FormField
                name="avatar"
                label="Avatar"
            >
                <TextInput name="avatar" />
            </FormField>
            <p style={{"font-size": "10px"}}>Avatar image must be a web image file ending in .img, .png, or .jpg</p>
            <FormField
                label="Bio"
                name="bio"
                component={TextArea}
            />
            <FormField
                name="animal"
            >
                <TextInput name="animal" />
            </FormField>
            <FormField
                name="breed"
            >
                <TextInput name="breed" />
            </FormField>
        </Form>
        <Button>Edit Your Profile</Button>
    </Box>
    }
         </div>
     );

}
 
export default ProfilePage;