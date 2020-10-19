import React from 'react';
import {Text, Box} from 'grommet';


const Comment = ({comment}) => {
    return ( 
        <>
        <Box direction="row" margin={{horizontal: 'medium', bottom: 'small'}} border={{ color: 'text'}}>
            <Text background='background-contrast' margin={{right: 'medium'}}>
                {comment.name}: 
            </Text>
            <Text background="brand">
                {comment.text}
            </Text>
        </Box>
        </>
     );
}
 
export default Comment;