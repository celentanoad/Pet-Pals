import React from 'react';
import { Box, Footer, Text} from 'grommet';

const PageFooter = () => {
    return ( 
        <>
        <Footer background='background-contrast' border={[ { side: 'top'}, {side: 'vertical'}]} justify='center' pad='small'>
            <Text textAlign='center' size='xxsmall' margin="medium">
            © Alanna Celentano, 2020
            </Text>
            <Text textAlign='center' size='xxsmall' margin="medium">
                View the Source Code
            </Text>
        </Footer>
        </>
     );
}
 
export default PageFooter;