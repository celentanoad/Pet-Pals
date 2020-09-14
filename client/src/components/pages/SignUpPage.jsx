import React from 'react';
import { Box, Heading, Form, FormField, TextInput, Button, TextArea } from 'grommet';

const SignUpPage = () => {
    return ( 
        <Box style={{"width": "100%"}}>
        <Box alignSelf="center" margin="large" round="small" background="background-contrast" width={{ max: 'medium' }}>
            <Heading level="3" textAlign="center" size="medium"> Sign Up </Heading>
            <Form>
                <FormField
                    name="name"
                    label="Name"
                    margin="small"
                >
                    <TextInput name="name" />
                </FormField>
                <FormField
                    name="email"
                    label="Email"
                    margin="small"
                >
                    <TextInput name="email" />
                </FormField>
                <FormField
                    name="password"
                    label="Password"
                    margin="small"
                >
                    <TextInput name="password" />
                </FormField>
                <Box>
                    <Button 
                        margin={{"horizontal": "large", "bottom": "small"}} 
                        size="small" 
                        align="center" 
                        label="Submit" 
                        primary 
                        color="brand">        
                    </Button>
                </Box>
            </Form>
        </Box>
        </Box>
     );
}
 
export default SignUpPage;