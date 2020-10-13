import React, { useState } from 'react';
import { Box, Heading, Form, FormField, TextInput, TextArea } from 'grommet';

const ProfilePage = () => {

    const [editProfile, setEditProfile] = useState(false);
    // check if profile page belongs to the current user:
        // add Edit button, when clicked then set editProfile to true and overlay Edit Profile component
    return ( 
        <Box alignSelf="center" margin="small">
        <Heading level="3" textAlign="center" size="medium"> Sign Up </Heading>
        <Form>
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
    </Box>
     );
}
 
export default ProfilePage;