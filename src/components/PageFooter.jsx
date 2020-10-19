import React from 'react';
import { Box, Anchor, Footer, Text} from 'grommet';

const PageFooter = () => {
    return ( 
        <>
        <Footer background='background-contrast' border={[ { side: 'top'}, {side: 'vertical'}]} justify='center' pad='small'>
            <Text textAlign='center' size='xxsmall' margin="medium">
            © Alanna Celentano, 2020
            </Text>
            <Text textAlign='center' size='xxsmall' margin="medium">
                <Anchor href="https://github.com/celentanoad/Pet-Pals">View the Source Code</Anchor>
            </Text>
        </Footer>
        </>
     );
}
 
export default PageFooter;