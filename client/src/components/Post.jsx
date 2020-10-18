import React from 'react';
import {Card, CardBody, CardFooter, Image, CardHeader} from 'grommet';


const Post = ({post}) => {
    return ( 
        <Card height="small" width="medium">
            <CardHeader>
                {post.name}
            </CardHeader>
            <Image fit="contain" src={post.avatar} />
            <CardBody>
                {post.text}
            </CardBody>
            <CardFooter>
                {/* Add in comments features and get likes working */}
                {post.likes.length}
            </CardFooter>
        </Card>
     );
}
 
export default Post;