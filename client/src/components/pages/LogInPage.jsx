import React, { useState } from 'react';
import { Anchor, Text, Box, Heading, Form, FormField, TextInput, Button, TextArea } from 'grommet';
import { Link } from 'react-router-dom';

const LogInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Successfully logged in');
    }


    return ( 
        <Box style={{"width": "100%"}}>
        <Box alignSelf="center" margin="large" round="small" background="background-contrast" width={{ max: 'medium' }} height={{ min: '645.43px'}}>
            <Heading level="3" textAlign="center" size="medium"> Log In </Heading>
            <Form onSubmit={handleSubmit}>
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
                <Box>
                    <Button 
                        margin={{"horizontal": "large", "vertical": "small"}} 
                        size="small" 
                        align="center" 
                        label="Submit" 
                        type="submit"
                        primary 
                        color="brand">        
                    </Button>
                    <Text size="xsmall" textAlign="center" margin={{"horizontal": "small", "top": "small"}} >No Account?</Text> 
                    <Text size="xsmall" textAlign="center" margin={{"horizontal": "small", "bottom": "small"}}>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <Anchor label="Sign up here!"></Anchor>
                        </Link>
                    </Text>
                </Box>
            </Form>
        </Box>
        </Box>
     );
}
 
export default LogInPage;