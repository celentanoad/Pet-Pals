import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';

 
const Message = ({ message }) => 
    <div key={message.text}>
        <Grow in={message} 
            timeout={1500}>
            <Alert severity={message.type}>
                {message.text}
            </Alert>
        </Grow>
    </div>
 
export default Message;