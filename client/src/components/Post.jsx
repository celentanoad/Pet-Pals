import React, { useState } from 'react';
import {Card, Button, Box, Heading, Grid, Text, CardBody, CardFooter, Avatar, CardHeader, Collapsible} from 'grommet';
import { Like } from 'grommet-icons';
import * as postAPI from '../services/post-api';
import CommentsList from './CommentsList';

const Post = ({post}) => {

    const [likes, setLikes] = useState(post.likes.length)
    const [commentVisibility, setCommentVisibility] = useState(false);


    const handleLikePost = async (id) => {
        const updatedPost = await postAPI.likePost(id);
        console.log(updatedPost.comments)
        setLikes(updatedPost.likes.length)
    }

    const handleCommentVisbility = () => {
        if (commentVisibility) setCommentVisibility(false);
        else setCommentVisibility(true)
    }

    return ( 
        <div align="center">
        <Card margin={{vertical: 'medium'}} width="medium" background="brand">
            <CardHeader alignContent="left">
                <Avatar fit="contain" src={post.avatar} align="left" margin={{left: 'medium'}} />
                <Heading level="6" align="left" margin={{right: 'xlarge'}}>
                    {post.name}
                </Heading>
            </CardHeader>
            <CardBody>
                {post.text}
            </CardBody>
            <CardBody margin={{horizontal: 'medium', top: 'small'}} background='background-contrast'>
                <Box align="center" direction="row" gap="small">
                {likes} 
                <Button onClick={() => handleLikePost(post._id)}>
                    <Like />
                </Button>
                </Box>
            </CardBody>
            
                {commentVisibility ? 
                  <Button size="xsmall" margin={{vertical: 'small'}} label="Hide Comments" onClick={() => handleCommentVisbility()}></Button>
                  :
                  <Button size="xsmall" margin={{vertical: 'small'}} label="Show Comments" onClick={() => handleCommentVisbility()}></Button>
                }
           
            <Collapsible open={commentVisibility} background="background-contrast">
                <CommentsList comments={post.comments} />
            </Collapsible>
        </Card>
        </div>
     );
}
 
export default Post;