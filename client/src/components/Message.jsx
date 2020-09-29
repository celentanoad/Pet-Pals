import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';

 
const Message = ({ messages }) => 
    messages !== null && 
    messages.length > 0 && 
    messages.map(message => (
        <div key={message.id}>
            <Grow in={messages} 
            {...(messages ? { timeout: 1500 } : {})} >
            <Alert severity={message.messageType}>
                { message.text}
            </Alert>
            </Grow>
        </div>
    ));

Message.PropTypes = {
    messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    messages: state.message
});
 
export default connect(mapStateToProps)(Message);