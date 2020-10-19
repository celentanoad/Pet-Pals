import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, ResponsiveContext } from 'grommet';
import './LandingPage.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return ( 
        <div align="center" className="landing">
            <ResponsiveContext.Consumer>
                {size =>
                    size === 'small' ? (
                    <Card background="brand" pad="medium" elevation="large">
                         <CardHeader alignSelf="center">
                            <Heading>Pet Pals</Heading>
                        </CardHeader>
                        <CardBody pad="medium">Pet Pals is a social media site to help pets connect around the world! Log in or sign up below, or click on "View Profiles" to see the other pets that are using this site!</CardBody>
                        <CardFooter>
                            <Link to="/login">
                                <Button hoverIndicator="text" label="Log In"></Button>
                            </Link> 
                            <Link to="/signup">

                                <Button hoverIndicator="text" label="Sign Up"></Button>
                            </Link>
                        </CardFooter>
                    </Card>
                  ) : (
                    <Card height="medium" width="medium" background="brand" pad="medium" elevation="large">
                        <CardHeader alignSelf="center">
                            <Heading>Pet Pals</Heading>
                        </CardHeader>
                        <CardBody pad="medium">Pet Pals is a social media site to help pets connect around the world! Log in or sign up below, or click on "View Profiles" to see the other pets that are using this site!</CardBody>
                        <CardFooter>
                            <Link to="/login">
                                <Button hoverIndicator="text" label="Log In"></Button>
                            </Link> 
                            <Link to="/signup">
                                <Button hoverIndicator="text" label="Sign Up"></Button>
                            </Link>
                        </CardFooter>
                    </Card>
                )}
            </ResponsiveContext.Consumer>
        </div>
     );
}
 
export default LandingPage;