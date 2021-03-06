import React, { useState } from 'react';
import { Heading, TextInput, Button, Form, FormField, CardHeader } from 'grommet';
import { useEffect } from 'react';
import * as postAPI from '../../services/post-api';
import Post from '../Post';
import Message from '../Message';

const Dashboard = (props) => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        text: ''
    });
    const [message, setMessage] = useState({
        text: '',
        type: ''
    })

    // useEffect to get all posts from user and friends
    useEffect(() => {
        async function fetchData() {
            const result = await postAPI.getAll();
            return result;
        }
        fetchData()
          .then(
            (result) => {
                if (result) setPosts(result);
            },
            (error) => {
              console.error(error)
            }
          )
      }, [])

    const handleAddPost = async () => {
        if (!newPost) return setMessage({ text: 'Cannot post a blank update!', type: 'error' })
        let post = await postAPI.addNew(newPost);
        setPosts(...posts, post);
        props.history.push('/');
    }

    const onChange = e => setNewPost({[e.target.name]: e.target.value});

    return ( 
        <div>
            <Heading> Dashboard </Heading>
            <Form onSubmit={handleAddPost}>
                <FormField
                    name="text"
                    label="Create New Post"
                    value={newPost}
                    onChange={e => onChange(e)}
                    Required
                >
                    <TextInput name="text"></TextInput>
                </FormField>
                <Button type="submit" label="Add New Post"></Button>
            </Form>
            <Message message={message} />
            {posts.length ?
            posts.map(post => {
                return <Post 
                    id={post.id}
                    post={post}
                />
            })
            :
        <></> }
        </div>
     );
}
 
export default Dashboard;