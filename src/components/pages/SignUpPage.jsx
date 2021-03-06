import React, { useState } from 'react';
import { Anchor, Text, Box, Heading, Form, FormField, TextInput, Button, TextArea } from 'grommet';
import { Link } from 'react-router-dom';
import Message from '../Message';
import * as userAPI from '../../services/user-api';

const SignUpPage = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const [message, setMessage] = useState({
        text: '',
        type: ''
    });

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.passwordConfirm) {
            setMessage({text: 'Passwords must match!', type: 'error'})
        } else {
            try {
                await userAPI.signup(formData);
                props.handleSignUpOrLogin();
                props.history.push('/myprofile');
            } catch (err) {
                console.error(err)
            }
        }
    }


    return ( 
        <Box style={{"width": "100%"}}>
        <Box alignSelf="center" margin="large" round="small" background="background-contrast" width={{ max: 'medium' }}>
            <Heading level="3" textAlign="center" size="medium"> Sign Up </Heading>
            <Form onSubmit={handleSubmit}>
                <FormField
                    name="name"
                    label="Name"
                    margin={{"horizontal": "xlarge", "vertical": "small"}} 
                    value={formData.name}
                    onChange={e => onChange(e)}
                    required
                >
                    <TextInput name="name" />
                </FormField>
                <FormField
                    name="email"
                    label="Email"
                    margin={{"horizontal": "xlarge", "vertical": "small"}} 
                    value={formData.email}
                    onChange={e => onChange(e)}
                    required
                >
                    <TextInput name="email" />
                </FormField>
                <FormField
                    name="password"
                    label="Password"
                    margin={{"horizontal": "xlarge", "vertical": "small"}} 
                    value={formData.password}
                    onChange={e => onChange(e)}
                    required
                >
                    <TextInput name="password" type="password" />
                </FormField>
                <FormField
                    name="passwordConfirm"
                    label="Confirm Password"
                    margin={{"horizontal": "xlarge", "vertical": "small"}} 
                    value={formData.passwordConfirm}
                    onChange={e => onChange(e)}
                    required
                >
                    <TextInput name="passwordConfirm" type="password" />
                </FormField>
                <Box>
                    <Message message={message} />
                    <Button 
                        margin={{"horizontal": "large", "vertical": "small"}} 
                        size="small" 
                        align="center" 
                        label="Submit" 
                        type="submit"
                        primary 
                        color="brand">        
                    </Button>
                    <Text size="xsmall" textAlign="center" margin={{"horizontal": "small", "top": "small"}} >Already have an account?</Text> 
                    <Text size="xsmall" textAlign="center" margin={{"horizontal": "small", "bottom": "small"}}>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Anchor label="Log in here!"></Anchor>
                        </Link>
                    </Text>
                </Box>
            </Form>
        </Box>
        </Box>
     );
};


 
export default SignUpPage;