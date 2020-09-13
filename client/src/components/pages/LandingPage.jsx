import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, ResponsiveContext } from 'grommet';
import './LandingPage.css'

const LandingPage = () => {
    return ( 
        <div align="center" className="landing">
            <ResponsiveContext.Consumer>
                {size =>
                    size === 'small' ? (
                    <Card background="brand" pad="medium" elevation="large">
                         <CardHeader pad="medium" alignSelf="center">
                            <Heading>Pet Pals</Heading>
                        </CardHeader>
                        <CardBody pad="medium">Pet Pals is a social media site to help pets connect around the world! Log in or sign up below, or click on "Profiles" to see the other pets that are using this site!</CardBody>
                        <CardFooter>
                            <Button hoverIndicator="text" href="#" label="Log In"></Button>
                            <Button hoverIndicator="text" href="#" label="Sign Up"></Button>
                        </CardFooter>
                    </Card>
                  ) : (
                    <Card height="medium" width="medium" background="brand" pad="medium" elevation="large">
                        <CardHeader pad="medium" alignSelf="center">
                            <Heading>Pet Pals</Heading>
                        </CardHeader>
                        <CardBody pad="medium">Pet Pals is a social media site to help pets connect around the world! Log in or sign up below, or click on "Profiles" to see the other pets that are using this site!</CardBody>
                        <CardFooter>
                            <Button hoverIndicator="text" href="#" label="Log In"></Button>
                            <Button hoverIndicator="text" href="#" label="Sign Up"></Button>
                        </CardFooter>
                    </Card>
                )}
            </ResponsiveContext.Consumer>
        </div>
     );
}
 
export default LandingPage;