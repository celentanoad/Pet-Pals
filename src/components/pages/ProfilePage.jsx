import React, { useState, useEffect } from 'react';
import { Box, Card, CardHeader, Image, Button, Heading, Form, FormField, TextInput, TextArea, CardBody } from 'grommet';
import { Divider } from '@material-ui/core';

const ProfilePage = ({user, profile, addOrUpdateProfile, handleGetProfile}) => {

    const [editProfile, setEditProfile] = useState(false);
    const [formData, setFormData] = useState({
        avatar: '',
        bio: '',
        animal: '',
        breed: ''
    });

      const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

      const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
        addOrUpdateProfile(formData);
        setEditProfile(false);
    }
    return ( 
        <div>

        {editProfile || !profile ?
        
        <Box alignSelf="center" margin="small">
        <Heading level="3" textAlign="center" size="medium"> Edit Profile </Heading>
        <Form onSubmit={handleSubmit}>
            <FormField
                name="avatar"
                label="Avatar"
                value={formData.avatar}
                onChange={e => onChange(e)}
            >
                <TextInput name="avatar" />
            </FormField>
            <p style={{"font-size": "10px"}}>Avatar image must be a web image file ending in .img, .png, or .jpg</p>
            <FormField
                label="Bio"
                name="bio"
                value={formData.bio}
                onChange={e => onChange(e)}
            />
            <FormField
                name="animal"
                label="Animal"
                value={formData.animal}
                onChange={e => onChange(e)}
            >
                <TextInput name="animal" />
            </FormField>
            <FormField
                name="breed"
                label="Breed"
                value={formData.breed}
                onChange={e => onChange(e)}
            >
                <TextInput name="breed" />
            </FormField>
       
        <Button 
            size="large" 
            textAlign="center"
            padding="small"
            align="center" 
            type="submit"
            primary 
            color="brand"
        > 
            Submit and View Profile 
        </Button>
        </Form>
    </Box>
    :
    <Box alignSelf="center" margin="small" align="center">
        <Heading level="3" textAlign="center" size="medium"> My Profile </Heading>
        <Card width="medium" align="center" pad="small">
            <CardHeader>
            </CardHeader>
            <CardBody height="small" pad="small">
                <Image src={profile.avatar} fit="contain" />
            </CardBody>
            <CardHeader align="center" pad="small">Bio: </CardHeader>
            <CardBody>
                {profile.bio ? 
                profile.bio : <></>}
            </CardBody>
            <Divider/>
            <CardHeader align="center" pad="small">Animal: </CardHeader>
            <CardBody>
                {profile.animal ? 
                profile.animal : <></>}
            </CardBody>
            <Divider />
            <CardHeader pad="small">Breed: </CardHeader>
            <CardBody>
                {profile.breed ?
                profile.breed : <></>}
            </CardBody>
        </Card>
        <Button onClick={() => setEditProfile(true)}>Edit Your Profile</Button>
    </Box>
    }
    </div>
     );

}
 
export default ProfilePage;