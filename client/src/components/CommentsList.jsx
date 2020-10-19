import React, { useState } from 'react';
import { Text, Form, Box, Button, FormField, TextInput, Collapsible } from 'grommet';
import Comment from './Comment';
import { Add, Subtract } from 'grommet-icons';

const CommentsList = ({comments, id, handleAddComment}) => {

    const [commentText, setCommentText] = useState({
        text: ''
    });
    const [showForm, setShowForm] = useState(false)

    const onChange = e => setCommentText({[e.target.name]: e.target.value});

    const handleSubmit = () => {
        handleAddComment(commentText, id);
        setCommentText('');
        setShowForm(false);
    }
    return ( 
        <Box background='background-contrast'>
            {comments.length ?
                comments.map(comment => {
                    return <Comment comment={comment} />
                })
            :
                <Text>No Comments Yet!</Text>
            }
            {!showForm ?
            <Button onClick={() => setShowForm(true)}>
                <Add />
            </Button>
            :
            <Button onClick={() => setShowForm(false)}>
                <Subtract />
            </Button>
            }
            <Collapsible open={showForm}>
            <Form onSubmit={handleSubmit} background="white">
                <FormField
                    name="text"
                    value={commentText}
                    onChange={e => onChange(e)}
                    Required
                >
                    <TextInput name="text"></TextInput>
                </FormField>
                <Button type="submit" label="Add Comment"></Button>

            </Form>
            </Collapsible>
        </Box>
        
     );
}
 
export default CommentsList;