import React from 'react';
import { Text, Box, Button } from 'grommet';
import Comment from './Comment';
import { Add } from 'grommet-icons';

const CommentsList = ({comments}) => {
    return ( 
        <Box background='background-contrast'>
            {comments.length ?
                comments.map(comment => {
                    return <Comment comment={comment} />
                })
            :
                <Text>No Comments Yet!</Text>
            }
            <Button>
                <Add />
            </Button>
        </Box>
        
     );
}
 
export default CommentsList;