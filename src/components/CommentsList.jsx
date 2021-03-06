import React, { useState } from 'react';
import { Text, Form, Box, Button, FormField, TextInput, Collapsible } from 'grommet';
import Comment from './Comment';
import { Add, Subtract } from 'grommet-icons';
import Message from './Message';

const CommentsList = ({comments, id, handleAddComment}) => {

    const [commentText, setCommentText] = useState({
        text: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [message, setMessage] = useState({
        text: '',
        type: ''
    });

    const onChange = e => setCommentText({[e.target.name]: e.target.value});

    const handleSubmit = () => {
        if (!commentText) return setMessage({text: 'You must enter a comment!', type: 'error'});
        handleAddComment(commentText, id);
        setCommentText('');
        setShowForm(false);
    }
    return ( 
        <Box background='text'>
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
                <Box margin={{top: 'small'}}>
                    <Form onSubmit={handleSubmit}>
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
                    <Message message={message} />
                </Box>
            </Collapsible>
        </Box>
        
     );
}
 
export default CommentsList;