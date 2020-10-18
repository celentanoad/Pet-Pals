import React, { useState, useEffect } from 'react';
import { Box, Card, CardHeader, Image, Button, Heading, Form, FormField, TextInput, TextArea, CardBody } from 'grommet';
import * as profileAPI from '../../services/profile-api';
import Message from '../Message';

const ProfilePage = ({user, handleGetProfile}) => {

    const [editProfile, setEditProfile] = useState(false);
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({
        avatar: '',
        bio: '',
        animal: '',
        breed: ''
    });

    useEffect(() => {
        handleGetProfile(user._id)
          .then(
            (result) => {
                if (result) setProfile(result);
            },
            (error) => {
              console.error(error)
            }
          )
      }, [])

      const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

      const handleSubmit = async (e) => {
          console.log(formData)
        e.preventDefault();
            try {
                const newProfile = await profileAPI.createOrEditProfile(formData);
                setEditProfile(false);
                setProfile(newProfile);
            } catch (err) {
                console.error(err)
            }
        }
    // check if profile page belongs to the current user:
        // add Edit button, when clicked then set editProfile to true and overlay Edit Profile component
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
            size="medium" 
            textAlign="center"
            padding="small"
            align="center" 
            // label="Submit and View Profile" 
            type="submit"
            primary 
            color="brand"
        > 
            Submit and View Profile 
        </Button>
        </Form>
    </Box>
    :
    <Box alignSelf="center" margin="small">
        <Heading level="3" textAlign="center" size="medium"> Profile </Heading>
        <Card>
            <CardHeader>
                {/* {profile.user.name ?
                    profile.user.name : <></>
                } */}
            </CardHeader>
            <CardBody>
                <Image src={profile.avatar}></Image>
            </CardBody>
            <CardHeader>Bio: </CardHeader>
            <CardBody>
                {profile.bio ? 
                profile.bio : <></>}
            </CardBody>
            <CardHeader>Animal: </CardHeader>
            <CardBody>
                {profile.animal ? 
                profile.animal : <></>}
            </CardBody>
            <CardHeader>Breed: </CardHeader>
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