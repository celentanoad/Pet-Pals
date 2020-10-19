import React from 'react';
import Friend from '../Friend'

const FriendsListPage = ({profile}) => {
    return ( 
        <div>
            {profile.friends.length ?
            profile.friends.map(friend => {
                return <Friend friendId={friend}/>
            })
            :
            <p>You don't have any friends </p> 
            }
        </div>
     );
}
 
export default FriendsListPage;